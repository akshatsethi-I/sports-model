import { NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";

const VAULT_PATH = process.env.VAULT_PATH || path.join(process.cwd(), "Football");

const TEAM_NAME_MAP: Record<string, string> = {
  france: "france", morocco: "morocco", spain: "spain", belgium: "belgium",
  england: "england", norway: "norway", argentina: "argentina", switzerland: "switzerland",
  colombia: "colombia", brazil: "brazil", usa: "usa", mexico: "mexico",
  portugal: "portugal", egypt: "egypt",
};

function extractTeams(text: string): string[] {
  const lower = text.toLowerCase();
  return Object.keys(TEAM_NAME_MAP).filter((t) => lower.includes(t));
}

function readFile(filePath: string): string {
  try {
    return fs.readFileSync(filePath, "utf-8");
  } catch {
    return "";
  }
}

function buildContext(messages: { role: string; content: string }[]): string {
  const allText = messages.map((m) => m.content).join(" ");
  const teams = extractTeams(allText);
  const sections: string[] = [];

  const add = (relPath: string) => {
    const full = path.join(VAULT_PATH, relPath);
    const content = readFile(full);
    if (content) sections.push(`\n\n=== ${relPath} ===\n${content}`);
  };

  // Check if a pre-computed prediction file exists for the mentioned teams
  let predictionFound = false;
  if (teams.length === 2) {
    const [a, b] = teams;
    const predDir = path.join(VAULT_PATH, "Predictions");
    if (fs.existsSync(predDir)) {
      for (const f of fs.readdirSync(predDir)) {
        const fl = f.toLowerCase();
        if (fl.includes(a) && fl.includes(b)) {
          add(`Predictions/${f}`);
          predictionFound = true;
        }
      }
    }
  }

  // Only load models + lessons if no pre-computed prediction exists
  // (prediction file already has the computed result — no need to re-run the math)
  if (!predictionFound) {
    const modelsDir = path.join(VAULT_PATH, "Models");
    if (fs.existsSync(modelsDir)) {
      for (const f of fs.readdirSync(modelsDir)) {
        if (f.endsWith(".md")) add(`Models/${f}`);
      }
    }
    const lessonsDir = path.join(VAULT_PATH, "Lessons");
    if (fs.existsSync(lessonsDir)) {
      for (const f of fs.readdirSync(lessonsDir)) {
        if (f.endsWith(".md")) add(`Lessons/${f}`);
      }
    }
  }

  // Only load team pages if no prediction file was found
  // (prediction file already contains all relevant team data)
  if (!predictionFound) {
    for (const team of teams) {
      add(`Teams/${TEAM_NAME_MAP[team]}.md`);
    }
  }

  // If no specific teams mentioned, include the index for orientation
  if (teams.length === 0) {
    add("INDEX.md");
  }

  return sections.join("\n");
}

const SYSTEM_PROMPT = `You are a sports prediction assistant for WC2026. You answer questions about match predictions, team analysis, and betting markets.

CRITICAL RULES:
1. Only use information from the vault context below. Do not use general training knowledge about football results or player stats.
2. For predictions, compute using: λ_field = 0.6 × λ_SoT + 0.4 × λ_xG, plus λ_SP. R8+ benchmark = 3.0. GK prior = 70%. Do ALL calculations internally and silently. NEVER show formulas, calculation steps, λ values, Poisson tables, adjustment factors, or any mathematical working in your response under ANY circumstances — not even if the user asks for a specific market like corners or cards. Only show the final conclusions and picks.
3. Star ratings: ⭐⭐⭐⭐⭐ >70% | ⭐⭐⭐⭐ 55-70% | ⭐⭐⭐ 40-55% | ⭐⭐ 25-40%.
4. Flag Under 2.5 and BTTS No with ⚠️ caution.
5. Never show Poisson distribution tables or raw probability breakdowns unless the user specifically asks for them.
6. Never mention the vault, files, or what data is available or missing. Never ask the user clarifying questions. Never say "I need X to answer this" or "do you want me to...". Never list options. Just answer with whatever data you have, using "based on current data" if needed.
7. Be direct and confident. Always attempt the prediction — never refuse or stall.

RESPONSE FORMAT for a full match prediction:
- **Team Profiles** — key stats for each team. Each stat or note must be on its own separate line. Do not write multiple stats in the same sentence or paragraph. Format each team as a bullet list, one point per line.
- **Match Outlook** — 2-3 sentences on how the game is likely to play out tactically.
- **Picks** — each pick must be on its own line, followed by a single line of reasoning beneath it. Use this exact format for every pick:

  **[Market] — [Pick]** [Star rating] [⚠️ if caution applies]
  One sentence explaining why.

  Example:
  **Match Result — France Win** ⭐⭐⭐⭐
  France's possession dominance and Morocco's passive block make a France win the most likely single outcome.

  **Total Goals — Under 2.5** ⭐⭐⭐⭐ ⚠️
  Both defences are compact and neither team converts at a high rate.

  Never group multiple picks on the same line. Never include odds or probabilities.
- **Key Risks** — 2-3 bullet points on what could go wrong.

VAULT CONTEXT:
`;

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey || apiKey === "your_api_key_here") {
    return new Response(
      JSON.stringify({ error: "API key not configured. Add your key to .env.local." }),
      { headers: { "Content-Type": "application/json" } }
    );
  }

  const { messages } = await req.json();
  if (!messages?.length) {
    return new Response(JSON.stringify({ error: "No messages." }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  const context = buildContext(messages);
  const client = new Anthropic({ apiKey });

  const stream = await client.messages.stream({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 2048,
    system: SYSTEM_PROMPT + context,
    messages: messages.map((m: { role: string; content: string }) => ({
      role: m.role,
      content: m.content,
    })),
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        if (
          chunk.type === "content_block_delta" &&
          chunk.delta.type === "text_delta"
        ) {
          controller.enqueue(encoder.encode(chunk.delta.text));
        }
      }
      controller.close();
    },
  });

  return new Response(readable, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

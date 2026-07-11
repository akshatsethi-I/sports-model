import { NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";

const VAULT_PATH = process.env.VAULT_PATH || path.join(process.cwd(), "Football");

const TEAM_NAME_MAP: Record<string, string> = {
  france: "france", morocco: "morocco", spain: "spain", belgium: "belgium",
  england: "england", norway: "norway", argentina: "argentina", switzerland: "switzerland",
  colombia: "colombia", brazil: "brazil", usa: "usa", mexico: "mexico",
  portugal: "portugal", egypt: "egypt", netherlands: "netherlands", germany: "germany",
  japan: "japan", uruguay: "uruguay", croatia: "croatia", senegal: "senegal",
  sweden: "sweden", austria: "austria", turkey: "turkey", ghana: "ghana",
  ecuador: "ecuador", qatar: "qatar", canada: "canada", "saudi arabia": "saudi-arabia",
  "saudi-arabia": "saudi-arabia", "ivory coast": "ivory-coast", "ivory-coast": "ivory-coast",
  "korea": "korea-republic", "south korea": "korea-republic", "cape verde": "cape-verde",
  "congo": "congo-dr", "new zealand": "new-zealand",
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

// Strip Model Calculations from prediction files — math workings the LLM doesn't need.
function stripCalculations(content: string): string {
  return content.replace(/## Model Calculations[\s\S]*?(?=## Tactical Overview|## Match Flow|## Picks|## Confirmed)/m, "");
}

// Strip raw FBRef/Opta data tables from team pages — keep prose sections only.
// Tables are 100+ lines of numbers; the Model Inputs summary at the bottom has everything needed.
function stripRawTables(content: string): string {
  return content.replace(/## FBRef Data[\s\S]*?(?=## ✅ Model Inputs|## Cross-links|$)/m, "")
                .replace(/## Opta Data[\s\S]*?(?=## ✅ Model Inputs|## Cross-links|$)/m, "");
}

function buildContext(messages: { role: string; content: string }[]): string {
  const allText = messages.map((m) => m.content).join(" ");
  const teams = extractTeams(allText);
  const sections: string[] = [];

  const add = (relPath: string, strip = false) => {
    const full = path.join(VAULT_PATH, relPath);
    let content = readFile(full);
    if (!content) return;
    if (strip) content = stripCalculations(content);
    sections.push(`\n\n=== ${relPath} ===\n${content}`);
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
          add(`Predictions/${f}`, true); // strip calculations — picks are all we need
          predictionFound = true;
        }
      }
    }
  }

  // Always load team pages (stripped of raw tables) — needed for tactical/player questions
  for (const team of teams) {
    const full = path.join(VAULT_PATH, `Teams/${TEAM_NAME_MAP[team]}.md`);
    let content = readFile(full);
    if (content) {
      content = stripRawTables(content);
      sections.push(`\n\n=== Teams/${TEAM_NAME_MAP[team]}.md ===\n${content}`);
    }
  }

  // Only load models + lessons if no pre-computed prediction exists
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

  // If no specific teams mentioned, include the index for orientation
  if (teams.length === 0) {
    add("INDEX.md");
  }

  return sections.join("\n");
}

const SYSTEM_PROMPT = `You are a sports prediction assistant for WC2026. You answer questions about match predictions, team analysis, and betting markets.

CRITICAL RULES:
1. Only use information from the vault context below. Do not use general training knowledge about football results or player stats.
2. PREDICTION FILES ARE LAW: If the vault context contains a Predictions/ file for the match, you MUST copy its picks exactly — same pick, same star rating, same reasoning. Do NOT invent new picks. Do NOT recompute. Do NOT show λ values, probabilities, or any numbers from your own calculations. The prediction file has already done opponent-adjusted modelling you cannot replicate. If the file says BTTS Yes ⭐⭐⭐⭐, you output BTTS Yes ⭐⭐⭐⭐. If it says Over 8.5 Corners ⭐⭐⭐⭐⭐, you output that. No exceptions.
3. If no prediction file exists, compute using: λ_field = 0.6 × λ_SoT + 0.4 × λ_xG, plus λ_SP. R8+ benchmark = 3.0. GK prior = 70%. Do ALL calculations silently. Never show λ values, formulas, or probability figures.
4. Star ratings: ⭐⭐⭐⭐⭐ >70% | ⭐⭐⭐⭐ 55-70% | ⭐⭐⭐ 40-55% | ⭐⭐ 25-40%.
5. Flag Under 2.5 and BTTS No with ⚠️ caution.
6. Never mention the vault, files, or data sources. Never ask clarifying questions. Just answer.
7. Be direct and confident. Always attempt the prediction — never refuse or stall.

RESPONSE FORMAT for a full match prediction:
- **Team Profiles** — key stats for each team as a bullet list, one point per line.
- **Match Outlook** — 2-3 sentences on how the game is likely to play out tactically.
- **Picks** — output EXACTLY 5 picks in this order: (1) Result/Advance, (2) best Goals market pick, (3) BTTS, (4) single best Corners pick, (5) single best Cards pick. No more than 5 picks total. Each pick on its own line followed by one sentence of reasoning. Format:

  **[Market] — [Pick]** [Star rating] [⚠️ if caution applies]
  One sentence explaining why.

  Never group multiple picks on the same line. Never include odds or raw probabilities.
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
    system: [
      {
        type: "text",
        text: SYSTEM_PROMPT + context,
        cache_control: { type: "ephemeral" },
      },
    ],
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

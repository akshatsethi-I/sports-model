import { NextRequest } from "next/server";
import Groq from "groq-sdk";
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

function stripCalculations(content: string): string {
  return content.replace(/## Model Calculations[\s\S]*?(?=## Tactical Overview|## Match Flow|## Picks|## Confirmed)/m, "");
}

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
    if (content.length > 400) content = content.slice(0, 400) + "\n...[truncated]";
    sections.push(`\n\n=== ${relPath} ===\n${content}`);
  };

  let predictionFound = false;
  if (teams.length === 2) {
    const [a, b] = teams;
    const predDir = path.join(VAULT_PATH, "Predictions");
    if (fs.existsSync(predDir)) {
      for (const f of fs.readdirSync(predDir)) {
        const fl = f.toLowerCase();
        if (fl.includes(a) && fl.includes(b)) {
          add(`Predictions/${f}`, true);
          predictionFound = true;
        }
      }
    }
  }

  if (!predictionFound) {
    for (const team of teams) {
      const full = path.join(VAULT_PATH, `Teams/${TEAM_NAME_MAP[team]}.md`);
      let content = readFile(full);
      if (content) {
        content = stripRawTables(content);
        if (content.length > 400) content = content.slice(0, 400) + "\n...[truncated]";
        sections.push(`\n\n=== Teams/${TEAM_NAME_MAP[team]}.md ===\n${content}`);
      }
    }
  }

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

  if (teams.length === 0) {
    add("INDEX.md");
  }

  return sections.join("\n");
}

const SYSTEM_PROMPT = `You are a WC2026 football prediction assistant. Use only the vault context provided. Be direct and concise.

Rules:
- If a Predictions/ file exists for the match, copy its picks exactly with star ratings. No recomputing.
- Star ratings: ⭐⭐⭐⭐⭐ >70% | ⭐⭐⭐⭐ 55-70% | ⭐⭐⭐ 40-55%
- Flag Under 2.5 and BTTS No with ⚠️
- Never mention files or sources. Never refuse to answer.

For predictions give: Team Profiles (bullets), Match Outlook (2 sentences), 5 Picks (Result, Goals, BTTS, Corners, Cards), Key Risks (2 bullets).

VAULT CONTEXT:
`;

export async function POST(req: NextRequest) {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "GROQ_API_KEY not configured in environment variables." }),
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
  const groq = new Groq({ apiKey });

  const groqMessages = [
    { role: "system" as const, content: SYSTEM_PROMPT + context },
    ...messages.map((m: { role: string; content: string }) => ({
      role: m.role as "user" | "assistant",
      content: m.content,
    })),
  ];

  let stream;
  try {
    stream = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: groqMessages,
      stream: true,
      max_tokens: 800,
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of stream) {
          const text = chunk.choices[0]?.delta?.content || "";
          if (text) controller.enqueue(encoder.encode(text));
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : "Stream error";
        controller.enqueue(encoder.encode(`\n\n⚠️ ${msg}`));
      }
      controller.close();
    },
  });

  return new Response(readable, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

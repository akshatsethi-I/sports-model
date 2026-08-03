import { NextRequest } from "next/server";
import Groq from "groq-sdk";
import fs from "fs";
import path from "path";

// VAULT_PATH should point to the vault root (parent of Football/).
// Locally: demo/ folder. On Vercel: app root (Football/ is committed to repo).
const VAULT_PATH = process.env.VAULT_PATH
  ? path.join(process.env.VAULT_PATH, "..")   // env points to Football/, go up one level to vault root
  : process.cwd();                              // on Vercel, Football/ is at app root

const TEAM_NAME_MAP: Record<string, string> = {
  arsenal: "arsenal",
  "man city": "manchester-city", "manchester city": "manchester-city", "man-city": "manchester-city",
  "man utd": "manchester-utd", "manchester utd": "manchester-utd", "man united": "manchester-utd", "manchester united": "manchester-utd",
  "aston villa": "aston-villa",
  liverpool: "liverpool",
  bournemouth: "bournemouth",
  sunderland: "sunderland",
  brighton: "brighton",
  brentford: "brentford",
  chelsea: "chelsea",
  fulham: "fulham",
  newcastle: "newcastle",
  everton: "everton",
  "leeds united": "leeds-united", "leeds": "leeds-united",
  "crystal palace": "crystal-palace",
  "nottm forest": "nottm-forest", "nottingham forest": "nottm-forest", "forest": "nottm-forest",
  tottenham: "tottenham", spurs: "tottenham",
  "coventry city": "coventry-city", coventry: "coventry-city",
  "ipswich town": "ipswich", ipswich: "ipswich",
  "hull city": "hull-city", hull: "hull-city",
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

function extractSquadList(content: string, teamName: string): string {
  const squadMatch = content.match(/## Squad[\s\S]*?(?=##|$)/m);
  if (!squadMatch) return "";
  const rows = squadMatch[0].split("\n").filter(l => l.startsWith("|") && !l.includes("Pos") && !l.includes("---"));
  const players = rows.map(r => {
    const cols = r.split("|").map(c => c.trim()).filter(Boolean);
    return cols.length >= 2 ? `${cols[0]} ${cols[1]}` : "";
  }).filter(Boolean);
  if (!players.length) return "";
  return `\nAUTHORITATIVE SQUAD — ${teamName} (2026-27). ONLY these players exist at this club:\n${players.join(", ")}\n`;
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
      const slug = TEAM_NAME_MAP[team];
      // Try PL team path first, then legacy Teams/ path
      const plPath = path.join(VAULT_PATH, `Football/PL/Teams/${slug}.md`);
      const legacyPath = path.join(VAULT_PATH, `Teams/${slug}.md`);
      let content = readFile(plPath) || readFile(legacyPath);
      if (content) {
        const squadList = extractSquadList(content, slug);
        content = stripRawTables(content);
        const modelInputs = content.match(/(## Model Inputs[\s\S]*?)(?=## Squad|$)/m);
        const context = (modelInputs ? modelInputs[1] : content.slice(0, 800));
        const final = squadList + "\n" + context;
        sections.push(`\n\n=== PL/Teams/${slug}.md ===\n${final.slice(0, 3000)}`);
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

const SYSTEM_PROMPT = `You are a Premier League 2026-27 prediction assistant. Use vault context and the Poisson model outputs provided by the user interface. Be direct and concise.

Model parameters:
- Dixon-Coles Poisson model: home_λ = home xGF_home × (away xGA / 1.39), away_λ = away xGF_away × (home xGA / 1.39)
- League avg xGA = 1.39/90. Home xGF > overall xGF for most teams (home advantage baked in).
- ⚠️ BTTS No and Under 2.5 are systematically over-predicted by the raw model — flag them as uncertain.
- Promoted teams (Coventry, Ipswich, Hull) use empirical conversion factors (xGF × 0.767, xGA × 1.741 from Champ→PL history) — treat their projections as wide confidence intervals.
- Weaker teams: SoT floor of 2.5/90 and +15% knockout uplift not applicable in PL regular season.

Rules:
- Star ratings: ⭐⭐⭐⭐⭐ ≥75% | ⭐⭐⭐⭐ 60-75% | ⭐⭐⭐ 45-60%
- Flag ⚠️ on BTTS No and Under 2.5 picks.
- Never mention files or sources. Never refuse to answer.
- When asked for picks, give: Match Outlook (2 sentences), 4-5 Best Picks (market, pick, %, stars), Key Risks (2 bullets).
- CRITICAL: When discussing players at a specific club, ONLY name players from the AUTHORITATIVE SQUAD list provided in the context. Never use pre-training knowledge to add players. If a player is not in the squad list, they are NOT at that club — do not mention them.

Key summer transfers context:
- Arsenal +Illan Meslier (GK, from Leeds), -Trossard; note: Gyökeres/Madueke/Mosquera/Hincapié already at Arsenal in 2025-26; Chelsea +Morgan Rogers, -Cucurella (→Real Madrid); Man Utd +Tielemans (from Villa), +Andrey Santos (from Chelsea); note: Mbeumo and Šeško already at Man Utd in 2025-26; Man City +Elliott Anderson, +Donnarumma (GK #1), -Bernardo Silva (→Real Madrid, major loss), -Trafford (→Leeds); Spurs +Tonali (from Newcastle), +Mateus Fernandes, +Xavi Simons (AM/wide); Brentford +Callum Wilson; Sunderland +Granit Xhaka (captain, elite CM), +Brian Brobbey (striker), +Meunier; Aston Villa +Garnacho (loan from Chelsea), +Manzambi (Swiss CM, EL Young POY at Freiburg, 5 WC GCAs), -Rogers, -Tielemans; Newcastle -Tonali (→Spurs), -Anthony Gordon (→Barcelona); Bournemouth +Đorđe Petrović (GK from Chelsea). CRITICAL — players no longer in PL, never suggest them: Kevin De Bruyne (left Man City), Thiago Alcantara (left Liverpool), Harry Kane (Bayern Munich). James Maddison plays for Tottenham Hotspur.

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

  const { messages, homeTeam, awayTeam } = await req.json();
  if (!messages?.length) {
    return new Response(JSON.stringify({ error: "No messages." }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  // Prepend selected fixture to every message set so team context is always loaded
  const contextMessages = homeTeam && awayTeam
    ? [{ role: "user", content: `Selected fixture: ${homeTeam} vs ${awayTeam}` }, ...messages]
    : messages;
  const context = buildContext(contextMessages);
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

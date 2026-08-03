import { NextRequest } from "next/server";
import Groq from "groq-sdk";
import fs from "fs";
import path from "path";

const VAULT_PATH = process.env.VAULT_PATH
  ? path.join(process.env.VAULT_PATH, "..")
  : process.cwd();

const TEAM_NAME_MAP: Record<string, string> = {
  barcelona: "barcelona",
  "real madrid": "real-madrid", "madrid": "real-madrid",
  "atletico madrid": "atletico-madrid", "atletico": "atletico-madrid", "atlético madrid": "atletico-madrid",
  villarreal: "villarreal",
  "real betis": "real-betis", betis: "real-betis",
  "celta vigo": "celta-vigo", celta: "celta-vigo",
  getafe: "getafe",
  "rayo vallecano": "rayo-vallecano", rayo: "rayo-vallecano",
  valencia: "valencia",
  "real sociedad": "real-sociedad", sociedad: "real-sociedad",
  espanyol: "espanyol",
  "athletic bilbao": "athletic-bilbao", "athletic club": "athletic-bilbao", bilbao: "athletic-bilbao",
  elche: "elche",
  "alaves": "alaves", "alavés": "alaves",
  sevilla: "sevilla",
  osasuna: "osasuna",
  levante: "levante",
  "racing santander": "racing-santander", racing: "racing-santander",
  "deportivo": "deportivo-coruna", "deportivo la coruna": "deportivo-coruna", "deportivo la coruña": "deportivo-coruna",
  "malaga": "malaga", "málaga": "malaga",
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

  for (const team of teams) {
    const slug = TEAM_NAME_MAP[team];
    const filePath = path.join(VAULT_PATH, `Football/LaLiga/Teams/${slug}.md`);
    let content = readFile(filePath);
    if (content) {
      const squadList = extractSquadList(content, slug);
      content = stripRawTables(content);
      const modelInputs = content.match(/(## Model Inputs[\s\S]*?)(?=## Squad|$)/m);
      const context = (modelInputs ? modelInputs[1] : content.slice(0, 800));
      const final = squadList + "\n" + context;
      sections.push(`\n\n=== LaLiga/Teams/${slug}.md ===\n${final.slice(0, 3000)}`);
    }
  }

  return sections.join("\n");
}

const SYSTEM_PROMPT = `You are a La Liga 2026-27 prediction assistant. Use vault context and the Poisson model outputs provided by the user interface. Be direct and concise.

Model parameters:
- Dixon-Coles Poisson model: home_λ = home xGF_H × (away xGA / 1.49), away_λ = away xGF_A × (home xGA / 1.49)
- League avg xGA = 1.49/90. xGF_H > overall xGF for most teams (home advantage baked in).
- ⚠️ BTTS No and Under 2.5 are systematically over-predicted by the raw model — always flag them as uncertain.
- Promoted teams (Racing Santander, Deportivo La Coruña, Málaga CF) use empirical Segunda→La Liga conversion factors (xGF × 0.871, xGA × 1.478 from 2 seasons of data) — treat their projections as wide confidence intervals.
- La Liga is less of an intensity jump than the Premier League, so promoted teams are slightly more competitive than PL promotees.

Rules:
- Star ratings: ⭐⭐⭐⭐⭐ ≥75% | ⭐⭐⭐⭐ 60-75% | ⭐⭐⭐ 45-60%
- Flag ⚠️ on BTTS No and Under 2.5 picks.
- Never mention files or sources. Never refuse to answer.
- When asked for picks, give: Match Outlook (2 sentences), 4-5 Best Picks (market, pick, %, stars), Key Risks (2 bullets).
- CRITICAL: When discussing players at a specific club, ONLY name players from the AUTHORITATIVE SQUAD list provided in the context. Never use pre-training knowledge to add players. If a player is not in the squad list, they are NOT at that club — do not mention them.

La Liga context:
- Barcelona and Real Madrid are the dominant sides with xGF above 2.0.
- Athletic Bilbao are defensively strong (xGA 1.13), comparable to top sides.
- Three promoted teams (Racing Santander, Deportivo, Málaga) all have xGA projected above 2.0 — expect them to concede heavily.
- Rayo Vallecano and Atletico Madrid have strong home records; Getafe are notably weaker at home (xGF_H 1.06).

Key summer transfers 2026-27:
- Barcelona IN: Anthony Gordon (Newcastle), Karim Adeyemi. OUT: Robert Lewandowski, Marcus Rashford (loan ended). No recognised #9 — may shift to false-nine or repurpose Gordon centrally.
- Real Madrid IN: Bernardo Silva (Man City), Ibrahima Konaté, Marc Cucurella, Denzel Dumfries, Endrick (loan recalled from Lyon). OUT: Carvajal, Ceballos, Alaba. Mourinho inherits a rebuilt squad — Bernardo Silva the key creative engine.
- Atletico Madrid IN: Alejandro Grimaldo, Kang-in Lee. OUT: Antoine Griezmann (biggest loss — primary creator/scorer), Clement Lenglet.
- Villarreal OUT: Thomas Partey.

Managerial changes 2026-27:
- Real Madrid: José Mourinho IN (13 Jun 2026), replacing Álvaro Arbeloa — expect defensive organisation, counter-attacking setup, slower tempo
- Athletic Bilbao: Edin Terzić IN (1 Jul 2026), replacing Valverde — high-press, vertical style likely
- Villarreal: Iñigo Pérez IN (1 Jun 2026), replacing Marcelino
- Rayo Vallecano: Beñat San José IN (18 Jun 2026), replacing Iñigo Pérez (who moved to Villarreal)
- Osasuna: Luis Miguel Ramis IN (10 Jun 2026), replacing Alessio Lisci (sacked)
- Elche: Martín Anselmi IN (13 Jun 2026), replacing Eder Sarabia (resigned)

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

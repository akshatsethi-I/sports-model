"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

type MatchResult = {
  homeScore: number;
  awayScore: number;
  stats: { label: string; home: string | number; away: string | number }[];
  scorers: { team: "home" | "away"; name: string; minute: number }[];
};

type MatchPick = {
  market: string;
  pick: string;
  prob: string;
  stars: number;
};

type MatchPrediction = {
  homeλ: number;
  awayλ: number;
  homeWin: string;
  draw: string;
  awayWin: string;
  picks: MatchPick[];
  lineup: { home: string; away: string };
  referee: string;
};

type Match = {
  id: number;
  home: string;
  away: string;
  date: string;
  code1: string;
  code2: string;
  result?: MatchResult;
  prediction?: MatchPrediction;
};

type Round = "QF" | "SF" | "Final";

const QF_MATCHES: Match[] = [
  {
    id: 1, home: "France", away: "Morocco", date: "QF1", code1: "fr", code2: "ma",
    result: {
      homeScore: 2,
      awayScore: 0,
      scorers: [
        { team: "home", name: "Mbappé", minute: 60 },
        { team: "home", name: "Dembélé", minute: 66 },
      ],
      stats: [
        { label: "Shots", home: 22, away: 5 },
        { label: "Shots on Target", home: 8, away: 1 },
        { label: "Corners", home: 5, away: 5 },
        { label: "Fouls", home: 10, away: 13 },
        { label: "Yellow Cards", home: 0, away: 1 },
      ],
    },
  },
  {
    id: 2, home: "Spain", away: "Belgium", date: "QF2", code1: "es", code2: "be",
    result: {
      homeScore: 2,
      awayScore: 1,
      scorers: [
        { team: "home", name: "Fabián Ruiz", minute: 30 },
        { team: "away", name: "De Ketelaere", minute: 41 },
        { team: "home", name: "Mikel Merino", minute: 88 },
      ],
      stats: [
        { label: "Shots", home: 17, away: 5 },
        { label: "Shots on Target", home: 8, away: 2 },
        { label: "Corners", home: 5, away: 1 },
        { label: "Fouls", home: 13, away: 18 },
        { label: "Yellow Cards", home: 2, away: 2 },
      ],
    },
  },
  {
    id: 3, home: "England", away: "Norway", date: "QF3 · AET", code1: "gb-eng", code2: "no",
    result: {
      homeScore: 2,
      awayScore: 1,
      scorers: [
        { team: "away", name: "Schjelderup", minute: 36 },
        { team: "home", name: "Bellingham", minute: 45 },
        { team: "home", name: "Bellingham", minute: 93 },
      ],
      stats: [
        { label: "Shots", home: 7, away: 9 },
        { label: "Shots on Target", home: 2, away: 4 },
        { label: "Corners", home: 3, away: 5 },
        { label: "Fouls", home: 5, away: 8 },
        { label: "Yellow Cards", home: 0, away: 0 },
      ],
    },
    prediction: {
      homeλ: 1.671,
      awayλ: 1.462,
      homeWin: "43%",
      draw: "24%",
      awayWin: "34%",
      referee: "Clément Turpin (FRA) · 3.38 YC/game",
      lineup: {
        home: "4-2-3-1: Pickford — Spence, Konsa, Stones, O'Reilly — Rice, Anderson — Saka, Bellingham, Gordon — Kane",
        away: "4-3-3: Nyland — Ryerson, Ajer, Wolfe, Heggem — Ødegaard, Berge, Berg — Nusa, Haaland, Sørloth",
      },
      picks: [
        { market: "Goals", pick: "Over 1.5", prob: "82%", stars: 5 },
        { market: "Goals", pick: "Over 2.5", prob: "61%", stars: 4 },
        { market: "Goals", pick: "Under 3.5", prob: "62%", stars: 4 },
        { market: "Goals", pick: "BTTS Yes", prob: "62%", stars: 4 },
        { market: "Corners", pick: "Over 8.5 Total", prob: "77%", stars: 5 },
        { market: "Corners", pick: "England Over 4.5", prob: "75%", stars: 5 },
        { market: "Corners", pick: "Norway Over 2.5", prob: "82%", stars: 5 },
        { market: "Cards", pick: "Over 1.5 YC", prob: "73%", stars: 5 },
        { market: "Cards", pick: "Under 4.5 YC", prob: "87%", stars: 5 },
        { market: "Cards", pick: "England Over 0.5 YC", prob: "87%", stars: 5 },
        { market: "Cards", pick: "Norway Under 2.5 YC", prob: "95%", stars: 5 },
        { market: "Result", pick: "England to Advance", prob: "55%", stars: 4 },
      ],
    },
  },
  {
    id: 4, home: "Argentina", away: "Switzerland", date: "QF4 · AET", code1: "ar", code2: "ch",
    result: {
      homeScore: 3,
      awayScore: 1,
      scorers: [
        { team: "home", name: "Mac Allister", minute: 10 },
        { team: "away", name: "Ndoye", minute: 67 },
        { team: "home", name: "J. Álvarez", minute: 112 },
        { team: "home", name: "Lautaro Martínez", minute: 120 },
      ],
      stats: [
        { label: "Shots", home: 9, away: 9 },
        { label: "Shots on Target", home: 2, away: 5 },
        { label: "Corners", home: 5, away: 2 },
        { label: "Fouls", home: 10, away: 15 },
        { label: "Yellow Cards", home: 1, away: 2 },
        { label: "Red Cards", home: 0, away: 1 },
      ],
    },
    prediction: {
      homeλ: 1.486,
      awayλ: 1.641,
      homeWin: "35%",
      draw: "24%",
      awayWin: "41%",
      referee: "Joao Pedro Pinheiro (POR) · 4.71 YC/game",
      lineup: {
        home: "4-3-1-2: E. Martínez — Montiel, Romero, L. Martínez, Tagliafico — De Paul, Paredes, Mac Allister — Messi — Lautaro",
        away: "4-2-3-1: Kobel — Zakaria, Akanji, Elvedi, R. Rodríguez — Xhaka, Freuler — Ndoye, Rieder, Vargas — Embolo",
      },
      picks: [
        { market: "Goals", pick: "Over 1.5", prob: "82%", stars: 5 },
        { market: "Goals", pick: "Over 2.5", prob: "60%", stars: 4 },
        { market: "Goals", pick: "Under 3.5", prob: "62%", stars: 4 },
        { market: "Goals", pick: "BTTS Yes", prob: "62%", stars: 4 },
        { market: "Corners", pick: "Over 7.5 Total", prob: "74%", stars: 4 },
        { market: "Corners", pick: "Switzerland Over 3.5", prob: "77%", stars: 4 },
        { market: "Corners", pick: "Argentina Over 2.5", prob: "77%", stars: 4 },
        { market: "Cards", pick: "Under 5.5 YC", prob: "88%", stars: 5 },
        { market: "Cards", pick: "Under 4.5 YC", prob: "77%", stars: 5 },
        { market: "Cards", pick: "Switzerland Over 0.5 YC", prob: "89%", stars: 5 },
        { market: "Cards", pick: "Switzerland Under 3.5 YC", prob: "83%", stars: 5 },
        { market: "Result", pick: "Switzerland to Advance", prob: "53%", stars: 4 },
      ],
    },
  },
];

const SF_MATCHES: Match[] = [
  {
    id: 5, home: "France", away: "Spain", date: "SF1", code1: "fr", code2: "es",
    result: {
      homeScore: 0,
      awayScore: 2,
      scorers: [
        { team: "away", name: "Oyarzabal", minute: 22 },
        { team: "away", name: "Porro", minute: 58 },
      ],
      stats: [
        { label: "Shots", home: 10, away: 10 },
        { label: "Shots on Target", home: 3, away: 2 },
        { label: "Corners", home: 7, away: 1 },
        { label: "Fouls", home: 11, away: 12 },
        { label: "Yellow Cards", home: 2, away: 1 },
      ],
    },
    prediction: {
      homeλ: 1.037,
      awayλ: 1.071,
      homeWin: "34%",
      draw: "30%",
      awayWin: "35%",
      referee: "Iván Barton (SLV) · 4.76 YC/game",
      lineup: {
        home: "4-2-3-1: Maignan — Koundé, Upamecano, Saliba, Digne — Koné, Rabiot — Olise, Mbappé, Dembélé — Doué",
        away: "4-2-3-1: Simón — Porro, Laporte, Cubarsí, Cucurella — Rodri, Pedri — Yamal, Dani Olmo, Baena — Oyarzabal",
      },
      picks: [
        { market: "Goals", pick: "Under 3.5", prob: "84%", stars: 5 },
        { market: "Goals", pick: "Under 2.5", prob: "65%", stars: 4 },
        { market: "Goals", pick: "Over 1.5", prob: "62%", stars: 4 },
        { market: "Goals", pick: "BTTS No ⚠️", prob: "58%", stars: 4 },
        { market: "Goals", pick: "France U1.5", prob: "72%", stars: 5 },
        { market: "Goals", pick: "Spain U1.5", prob: "71%", stars: 5 },
        { market: "Corners", pick: "Over 7.5 Total", prob: "70%", stars: 4 },
        { market: "Corners", pick: "Spain Over 3.5", prob: "76%", stars: 4 },
        { market: "Corners", pick: "France Over 2.5", prob: "76%", stars: 4 },
        { market: "Cards", pick: "Under 2.5 YC", prob: "87%", stars: 5 },
        { market: "Cards", pick: "Spain Under 2.5 YC", prob: "96%", stars: 5 },
        { market: "Cards", pick: "France Under 1.5 YC", prob: "87%", stars: 5 },
        { market: "SoT", pick: "Total Under 8.5", prob: "82%", stars: 5 },
        { market: "SoT", pick: "France Under 4.5", prob: "77%", stars: 5 },
        { market: "SoT", pick: "Spain Under 4.5", prob: "82%", stars: 5 },
        { market: "Fouls", pick: "Under 24.5", prob: "78%", stars: 5 },
        { market: "Fouls", pick: "Over 19.5", prob: "62%", stars: 4 },
        { market: "Result", pick: "Spain to Advance", prob: "50%", stars: 3 },
      ],
    },
  },
  {
    id: 6, home: "England", away: "Argentina", date: "SF2", code1: "gb-eng", code2: "ar",
    result: {
      homeScore: 1,
      awayScore: 2,
      scorers: [
        { team: "home", name: "Gordon", minute: 56 },
        { team: "away", name: "E. Fernández", minute: 85 },
        { team: "away", name: "L. Martínez", minute: 92 },
      ],
      stats: [
        { label: "Shots", home: 5, away: 15 },
        { label: "Shots on Target", home: 2, away: 5 },
        { label: "Corners", home: 1, away: 6 },
        { label: "Fouls", home: 11, away: 15 },
        { label: "Yellow Cards", home: 1, away: 3 },
      ],
    },
    prediction: {
      homeλ: 1.557,
      awayλ: 1.669,
      homeWin: "34%",
      draw: "24%",
      awayWin: "42%",
      referee: "TBC — KO discount applied, no ref multiplier",
      lineup: {
        home: "4-2-3-1: Pickford — R. James, Konsa, Guéhi, O'Reilly — Rice, Anderson — Saka, Bellingham, Gordon — Kane",
        away: "4-1-3-2: E. Martínez — Molina, C. Romero, L. Martínez, Tagliafico — Paredes — De Paul, Mac Allister, E. Fernández — Messi, J. Álvarez",
      },
      picks: [
        { market: "Goals", pick: "Over 1.5", prob: "83%", stars: 5 },
        { market: "Goals", pick: "Over 2.5", prob: "63%", stars: 4 },
        { market: "Goals", pick: "BTTS Yes", prob: "64%", stars: 4 },
        { market: "Goals", pick: "Under 4.5", prob: "78%", stars: 5 },
        { market: "Goals", pick: "England score", prob: "79%", stars: 5 },
        { market: "Goals", pick: "Argentina score", prob: "81%", stars: 5 },
        { market: "Corners", pick: "Over 7.5 Total", prob: "60%", stars: 4 },
        { market: "Corners", pick: "Argentina Over 2.5", prob: "83%", stars: 4 },
        { market: "Corners", pick: "England Over 2.5", prob: "75%", stars: 4 },
        { market: "Cards", pick: "Under 2.5 YC ⚠️", prob: "79%", stars: 5 },
        { market: "Cards", pick: "Argentina Under 1.5 YC", prob: "84%", stars: 5 },
        { market: "Cards", pick: "England Under 1.5 YC", prob: "78%", stars: 5 },
        { market: "Fouls", pick: "Over 19.5", prob: "74%", stars: 5 },
        { market: "Offsides", pick: "Over 2.5", prob: "86%", stars: 5 },
        { market: "Offsides", pick: "Over 3.5", prob: "71%", stars: 5 },
        { market: "SoT", pick: "Total Under 8.5", prob: "73%", stars: 5 },
        { market: "SoT", pick: "Argentina Over 2.5", prob: "70%", stars: 5 },
        { market: "Result", pick: "Argentina to Advance", prob: "54%", stars: 4 },
      ],
    },
  },
];

const FINAL_MATCHES: Match[] = [
  {
    id: 7, home: "France", away: "England", date: "3rd Place", code1: "fr", code2: "gb-eng",
    result: {
      homeScore: 4,
      awayScore: 6,
      scorers: [],
      stats: [
        { label: "Shots", home: 19, away: 19 },
        { label: "Shots on Target", home: 9, away: 11 },
        { label: "Corners", home: 3, away: 4 },
        { label: "Fouls", home: 14, away: 9 },
        { label: "Yellow Cards", home: 0, away: 0 },
      ],
    },
  },
  {
    id: 8, home: "Spain", away: "Argentina", date: "Final · AET", code1: "es", code2: "ar",
    result: {
      homeScore: 1,
      awayScore: 0,
      scorers: [],
      stats: [
        { label: "Shots", home: 15, away: 0 },
        { label: "Shots on Target", home: 10, away: 0 },
        { label: "Corners", home: 9, away: 1 },
        { label: "Fouls", home: 13, away: 19 },
        { label: "Yellow Cards", home: 0, away: 5 },
        { label: "Red Cards", home: 0, away: 1 },
      ],
    },
  },
];

const ROUND_MATCHES: Record<Round, Match[]> = {
  QF: QF_MATCHES,
  SF: SF_MATCHES,
  Final: FINAL_MATCHES,
};

const ROUND_LABELS: Record<Round, string> = {
  QF: "Quarter-finals",
  SF: "Semi-finals",
  Final: "Final",
};

const ROUND_BADGE: Record<Round, string> = {
  QF: "QUARTERFINALS",
  SF: "SEMIFINALS",
  Final: "FINAL",
};

function Flag({ code, size = 28 }: { code: string; size?: number }) {
  if (code === "un") {
    return (
      <div style={{
        width: size, height: size * 0.67, borderRadius: 3,
        background: "#1a1a2e", display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: size * 0.4, color: "#2d3f5a",
      }}>?</div>
    );
  }
  return (
    <img
      src={`https://flagcdn.com/w40/${code}.png`}
      width={size}
      height={size * 0.67}
      alt={code}
      style={{ borderRadius: 3, objectFit: "cover" }}
    />
  );
}

type Message = { role: "user" | "assistant"; content: string };

export default function Home() {
  const [activeRound, setActiveRound] = useState<Round>("Final");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "WC2026 is over — Spain are World Champions! Spain beat Argentina 1–0 (AET) in the Final, and England beat France 6–4 in the 3rd place playoff. Click any match to see the full stats, or ask me anything about the tournament.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState<number | null>(null);
  const [resultModal, setResultModal] = useState<Match | null>(null);
  const [predModal, setPredModal] = useState<Match | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const cancelMessage = () => {
    abortRef.current?.abort();
    setLoading(false);
  };

  const sendMessage = async (text?: string) => {
    const content = (text || input).trim();
    if (!content || loading) return;
    setInput("");
    const updated: Message[] = [...messages, { role: "user", content }];
    setMessages([...updated, { role: "assistant", content: "" }]);
    setLoading(true);
    const abort = new AbortController();
    abortRef.current = abort;
    const timeout = setTimeout(() => abort.abort(), 120000);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
        signal: abort.signal,
      });
      if (!res.ok || !res.body) {
        const err = await res.json().catch(() => ({ error: "Unknown error" }));
        setMessages([...updated, { role: "assistant", content: err.error || "Something went wrong." }]);
        setLoading(false);
        return;
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let reply = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        reply += decoder.decode(value, { stream: true });
        setMessages([...updated, { role: "assistant", content: reply }]);
      }
    } catch (err: unknown) {
      if (err instanceof Error && err.name !== "AbortError") {
        setMessages([...updated, { role: "assistant", content: "⚠️ Connection error. Please try again." }]);
      }
    }
    clearTimeout(timeout);
    setLoading(false);
  };

  const currentMatches = ROUND_MATCHES[activeRound];
  const sel = selectedMatch
    ? [...QF_MATCHES, ...SF_MATCHES, ...FINAL_MATCHES].find((m) => m.id === selectedMatch) ?? null
    : null;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#07070e", color: "#e2e8f0" }}>

      {/* Header */}
      <header style={{ background: "#0d0d18", borderBottom: "1px solid #1a1a2e" }} className="px-6 py-4 shrink-0">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⚽</span>
            <div>
              <h1 className="text-base font-bold tracking-tight" style={{ color: "#f1f5f9" }}>Sports Prediction Vault</h1>
              <p className="text-xs" style={{ color: "#3d4f6b" }}>WC2026 · Powered by the vault, not the internet</p>
            </div>
          </div>
          <span className="text-xs px-3 py-1.5 rounded-full font-semibold tracking-wide"
            style={{ background: "#0c1c38", color: "#4f9cf9", border: "1px solid #1a3560" }}>
            {ROUND_BADGE[activeRound]}
          </span>
        </div>
      </header>

      <div className="flex-1 max-w-5xl mx-auto w-full px-4 py-5 flex flex-col gap-4">

        {/* Round tabs */}
        <div className="flex gap-1 p-1 rounded-2xl" style={{ background: "#0d0d18", border: "1px solid #1a1a2e", width: "fit-content" }}>
          {(["QF", "SF", "Final"] as Round[]).map((round) => {
            const active = activeRound === round;
            const allDone = ROUND_MATCHES[round].every((m) => !!m.result);
            return (
              <button
                key={round}
                onClick={() => setActiveRound(round)}
                className="px-4 py-1.5 rounded-xl text-xs font-semibold transition-all"
                style={{
                  background: active ? "#1a3a7a" : "transparent",
                  color: active ? "#f1f5f9" : "#2d3f5a",
                  border: active ? "1px solid #2a5298" : "1px solid transparent",
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                {ROUND_LABELS[round]}
              </button>
            );
          })}
        </div>

        {/* Match cards */}
        <div>
          <p className="text-xs font-semibold mb-3 tracking-widest uppercase" style={{ color: "#2d3f5a" }}>
            {activeRound === "QF" ? "Results" : "Select a match"}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {currentMatches.map((m) => {
              const active = selectedMatch === m.id;
              const finished = !!m.result;
              const isTbd = m.home === "TBD";
              return (
                <button
                  key={m.id}
                  onClick={() => {
                    if (isTbd) return;
                    if (finished) {
                      setResultModal(m);
                    } else {
                      setSelectedMatch(m.id);
                      sendMessage(`Give me the full prediction for ${m.home} vs ${m.away}`);
                    }
                  }}
                  className="rounded-2xl p-4 text-left transition-all duration-150 hover:scale-[1.02]"
                  style={{
                    background: active ? "#0c1c38" : "#0d0d18",
                    border: `1px solid ${finished ? "#1a3020" : active ? "#2a5298" : "#1a1a2e"}`,
                    cursor: isTbd ? "default" : "pointer",
                    boxShadow: active ? "0 0 0 1px #2a5298" : "none",
                    opacity: isTbd ? 0.4 : 1,
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold tracking-widest" style={{ color: active ? "#4f9cf9" : "#2d3f5a" }}>
                      {m.date}
                    </span>
                    {finished && (
                      <span className="text-xs px-1.5 py-0.5 rounded font-semibold tracking-wide"
                        style={{ background: "#0a1f12", color: "#4ade80", border: "1px solid #14532d", fontSize: "10px" }}>
                        FT
                      </span>
                    )}
                  </div>
                  {finished && m.result ? (
                    <>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Flag code={m.code1} size={18} />
                          <span className="text-sm font-semibold" style={{ color: "#f1f5f9" }}>{m.home}</span>
                        </div>
                        <span className="text-lg font-bold" style={{ color: m.result.homeScore >= m.result.awayScore ? "#f1f5f9" : "#94a3b8" }}>{m.result.homeScore}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Flag code={m.code2} size={18} />
                          <span className="text-sm font-semibold" style={{ color: "#f1f5f9" }}>{m.away}</span>
                        </div>
                        <span className="text-lg font-bold" style={{ color: m.result.awayScore >= m.result.homeScore ? "#f1f5f9" : "#94a3b8" }}>{m.result.awayScore}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-2.5 mb-2">
                        <Flag code={m.code1} size={22} />
                        <span className="font-semibold text-sm" style={{ color: "#f1f5f9" }}>{m.home}</span>
                      </div>
                      <div className="text-xs mb-2 pl-0.5" style={{ color: "#2d3f5a" }}>vs</div>
                      <div className="flex items-center gap-2.5">
                        <Flag code={m.code2} size={22} />
                        <span className="font-semibold text-sm" style={{ color: "#f1f5f9" }}>{m.away}</span>
                      </div>
                    </>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick questions */}
        {sel && !sel.result && (
          <div className="flex flex-wrap gap-2">
            {[
              `Who will win ${sel.home} vs ${sel.away}?`,
              `Best picks for ${sel.home} vs ${sel.away}`,
              `Goals market for ${sel.home} vs ${sel.away}`,
              `Corners prediction for ${sel.home} vs ${sel.away}`,
            ].map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                disabled={loading}
                className="text-xs px-3 py-1.5 rounded-full transition-colors"
                style={{
                  background: "#0d0d18",
                  border: "1px solid #1a1a2e",
                  color: "#4a5f7a",
                  cursor: loading ? "not-allowed" : "pointer",
                }}
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Chat */}
        <div
          className="flex-1 rounded-2xl overflow-y-auto flex flex-col gap-3 p-4"
          style={{ background: "#0d0d18", border: "1px solid #1a1a2e", minHeight: "380px", maxHeight: "500px" }}
        >
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              {m.role === "assistant" && (
                <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mr-2 mt-0.5 text-sm"
                  style={{ background: "#0c1c38", border: "1px solid #1a3560" }}>
                  ⚽
                </div>
              )}
              <div
                className="rounded-2xl px-4 py-3 text-sm leading-relaxed"
                style={{
                  background: m.role === "user" ? "#1a3a7a" : "#111120",
                  color: "#e2e8f0",
                  border: m.role === "assistant" ? "1px solid #1a1a2e" : "none",
                  maxWidth: "82%",
                }}
              >
                {m.role === "assistant" ? (
                  <ReactMarkdown
                    components={{
                      h1: ({ children }) => <p className="font-bold text-base mb-2 mt-1" style={{ color: "#f1f5f9" }}>{children}</p>,
                      h2: ({ children }) => <p className="font-bold text-sm mb-2 mt-3" style={{ color: "#4f9cf9" }}>{children}</p>,
                      h3: ({ children }) => <p className="font-semibold text-sm mb-1 mt-2" style={{ color: "#94a3b8" }}>{children}</p>,
                      p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                      strong: ({ children }) => <strong style={{ color: "#f1f5f9" }}>{children}</strong>,
                      ul: ({ children }) => <ul className="mb-2 pl-4 space-y-1" style={{ listStyleType: "disc" }}>{children}</ul>,
                      ol: ({ children }) => <ol className="mb-2 pl-4 space-y-1" style={{ listStyleType: "decimal" }}>{children}</ol>,
                      li: ({ children }) => <li className="text-sm" style={{ color: "#cbd5e1" }}>{children}</li>,
                      code: ({ children }) => <code className="px-1.5 py-0.5 rounded text-xs font-mono" style={{ background: "#0a0f1e", color: "#60a5fa" }}>{children}</code>,
                      pre: ({ children }) => <pre className="p-3 rounded-xl mb-2 overflow-x-auto text-xs font-mono" style={{ background: "#0a0f1e", color: "#60a5fa" }}>{children}</pre>,
                      table: ({ children }) => <table className="w-full text-xs mb-3 border-collapse">{children}</table>,
                      th: ({ children }) => <th className="px-3 py-1.5 text-left font-semibold" style={{ borderBottom: "1px solid #1a1a2e", color: "#64748b" }}>{children}</th>,
                      td: ({ children }) => <td className="px-3 py-1.5" style={{ borderBottom: "1px solid #111120", color: "#cbd5e1" }}>{children}</td>,
                      blockquote: ({ children }) => <blockquote className="pl-3 my-2 italic" style={{ borderLeft: "2px solid #2a5298", color: "#64748b" }}>{children}</blockquote>,
                      hr: () => <hr className="my-3" style={{ borderColor: "#1a1a2e" }} />,
                    }}
                  >
                    {m.content}
                  </ReactMarkdown>
                ) : (
                  <span>{m.content}</span>
                )}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start items-center gap-2">
              <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-sm"
                style={{ background: "#0c1c38", border: "1px solid #1a3560" }}>⚽</div>
              <div className="rounded-2xl px-4 py-3 text-sm" style={{ background: "#111120", border: "1px solid #1a1a2e", color: "#2d3f5a" }}>
                Analysing...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
            placeholder="Ask about any match, pick, or market..."
            disabled={loading}
            className="flex-1 rounded-2xl px-4 py-3 text-sm outline-none"
            style={{
              background: "#0d0d18",
              border: "1px solid #1a1a2e",
              color: "#e2e8f0",
              opacity: loading ? 0.5 : 1,
            }}
          />
          {loading ? (
            <button onClick={cancelMessage} className="px-5 py-3 rounded-2xl text-sm font-semibold"
              style={{ background: "#2d0a0a", color: "#f87171", border: "1px solid #5c1a1a", cursor: "pointer" }}>
              Cancel
            </button>
          ) : (
            <button onClick={() => sendMessage()} disabled={!input.trim()}
              className="px-5 py-3 rounded-2xl text-sm font-semibold transition-colors"
              style={{
                background: input.trim() ? "#1a3a7a" : "#0d0d18",
                color: input.trim() ? "#fff" : "#2d3f5a",
                border: "1px solid #1a3560",
                cursor: input.trim() ? "pointer" : "not-allowed",
              }}>
              Send
            </button>
          )}
        </div>
      </div>

      {/* Prediction modal */}
      {predModal && predModal.prediction && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 px-4"
          style={{ background: "rgba(0,0,0,0.8)" }}
          onClick={() => setPredModal(null)}
        >
          <div
            className="rounded-2xl p-6 w-full max-w-md overflow-y-auto"
            style={{ background: "#0d0d18", border: "1px solid #1a3560", maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold tracking-widest" style={{ color: "#2d3f5a" }}>{predModal.date} · MODEL PREDICTION</span>
              <button onClick={() => setPredModal(null)} style={{ color: "#2d3f5a", fontSize: 18, lineHeight: 1 }}>✕</button>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex flex-col items-center gap-1.5">
                <Flag code={predModal.code1} size={32} />
                <span className="text-sm font-semibold" style={{ color: "#f1f5f9" }}>{predModal.home}</span>
                <span className="text-xs font-mono" style={{ color: "#4f9cf9" }}>λ {predModal.prediction.homeλ}</span>
              </div>
              <div className="text-center">
                <div className="flex gap-3 text-xs mb-1">
                  <div className="text-center">
                    <div className="font-bold" style={{ color: "#4f9cf9" }}>{predModal.prediction.homeWin}</div>
                    <div style={{ color: "#2d3f5a" }}>Home</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold" style={{ color: "#94a3b8" }}>{predModal.prediction.draw}</div>
                    <div style={{ color: "#2d3f5a" }}>Draw</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold" style={{ color: "#94a3b8" }}>{predModal.prediction.awayWin}</div>
                    <div style={{ color: "#2d3f5a" }}>Away</div>
                  </div>
                </div>
                <div className="text-xs" style={{ color: "#2d3f5a" }}>90 min</div>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <Flag code={predModal.code2} size={32} />
                <span className="text-sm font-semibold" style={{ color: "#f1f5f9" }}>{predModal.away}</span>
                <span className="text-xs font-mono" style={{ color: "#94a3b8" }}>λ {predModal.prediction.awayλ}</span>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-xs font-bold tracking-widest mb-2" style={{ color: "#2d3f5a" }}>PICKS</p>
              <div className="space-y-1.5">
                {predModal.prediction.picks.map((p, i) => (
                  <div key={i} className="flex items-center justify-between rounded-xl px-3 py-2"
                    style={{ background: "#111120", border: "1px solid #1a1a2e" }}>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: "#0c1c38", color: "#3d6ab0", fontSize: "10px" }}>
                        {p.market}
                      </span>
                      <span className="text-xs font-semibold" style={{ color: "#f1f5f9" }}>{p.pick}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs" style={{ color: "#64748b" }}>{p.prob}</span>
                      <span style={{ fontSize: "10px", letterSpacing: "-1px" }}>{"⭐".repeat(p.stars)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-3">
              <p className="text-xs font-bold tracking-widest mb-2" style={{ color: "#2d3f5a" }}>LINEUPS</p>
              <div className="space-y-1.5 text-xs" style={{ color: "#64748b" }}>
                <div><span style={{ color: "#f1f5f9" }}>{predModal.home}:</span> {predModal.prediction.lineup.home}</div>
                <div><span style={{ color: "#f1f5f9" }}>{predModal.away}:</span> {predModal.prediction.lineup.away}</div>
              </div>
            </div>
            <div className="text-xs" style={{ color: "#2d3f5a" }}>
              🧑‍⚖️ {predModal.prediction.referee}
            </div>
          </div>
        </div>
      )}

      {/* Result modal */}
      {resultModal && resultModal.result && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 px-4"
          style={{ background: "rgba(0,0,0,0.75)" }}
          onClick={() => setResultModal(null)}
        >
          <div
            className="rounded-2xl p-6 w-full max-w-sm"
            style={{ background: "#0d0d18", border: "1px solid #1a3020" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-bold tracking-widest" style={{ color: "#2d3f5a" }}>{resultModal.date} · FULL TIME</span>
              <button onClick={() => setResultModal(null)} style={{ color: "#2d3f5a", fontSize: 18, lineHeight: 1 }}>✕</button>
            </div>
            <div className="flex items-start justify-between mb-5 gap-2">
              <div className="flex flex-col items-center gap-1 flex-1">
                <Flag code={resultModal.code1} size={32} />
                <span className="text-sm font-semibold mb-1" style={{ color: "#f1f5f9" }}>{resultModal.home}</span>
                {resultModal.result.scorers.filter(s => s.team === "home").map((s, i) => (
                  <div key={i} className="flex items-center gap-1 text-xs">
                    <span style={{ color: "#4ade80", fontSize: 10 }}>⚽</span>
                    <span style={{ color: "#f1f5f9" }}>{s.name}</span>
                    <span style={{ color: "#2d3f5a" }}>{s.minute}&apos;</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 pt-1">
                <span className="text-4xl font-bold" style={{ color: resultModal.result.homeScore >= resultModal.result.awayScore ? "#f1f5f9" : "#94a3b8" }}>{resultModal.result.homeScore}</span>
                <span className="text-xl" style={{ color: "#2d3f5a" }}>–</span>
                <span className="text-4xl font-bold" style={{ color: resultModal.result.awayScore > resultModal.result.homeScore ? "#f1f5f9" : "#94a3b8" }}>{resultModal.result.awayScore}</span>
              </div>
              <div className="flex flex-col items-center gap-1 flex-1">
                <Flag code={resultModal.code2} size={32} />
                <span className="text-sm font-semibold mb-1" style={{ color: "#f1f5f9" }}>{resultModal.away}</span>
                {resultModal.result.scorers.filter(s => s.team === "away").map((s, i) => (
                  <div key={i} className="flex items-center gap-1 text-xs">
                    <span style={{ color: "#4ade80", fontSize: 10 }}>⚽</span>
                    <span style={{ color: "#f1f5f9" }}>{s.name}</span>
                    <span style={{ color: "#2d3f5a" }}>{s.minute}&apos;</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2.5">
              <p className="text-xs font-bold tracking-widest mb-3" style={{ color: "#2d3f5a" }}>MATCH STATS</p>
              {resultModal.result.stats.map((s) => {
                const h = Number(s.home), a = Number(s.away), total = h + a;
                const homePct = total > 0 ? (h / total) * 100 : 50;
                return (
                  <div key={s.label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span style={{ color: "#f1f5f9" }}>{s.home}</span>
                      <span style={{ color: "#64748b" }}>{s.label}</span>
                      <span style={{ color: "#94a3b8" }}>{s.away}</span>
                    </div>
                    <div className="h-1 rounded-full overflow-hidden" style={{ background: "#1a1a2e" }}>
                      <div className="h-full rounded-full" style={{ width: `${homePct}%`, background: "#2a5298" }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

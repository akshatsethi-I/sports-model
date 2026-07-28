"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

// ─── Team data (post-transfer, pre-season 2026-27) ───────────────────────────
const TEAMS = [
  { slug: "arsenal",          name: "Arsenal",          abbr: "ARS", xGF: 1.67, xGA: 0.95, xGF_H: 1.83, xGF_A: 1.57, color: "#EF0107" },
  { slug: "manchester-city",  name: "Man City",         abbr: "MCI", xGF: 1.84, xGA: 1.11, xGF_H: 1.95, xGF_A: 1.72, color: "#6CABDD" },
  { slug: "manchester-utd",   name: "Man United",       abbr: "MNU", xGF: 1.77, xGA: 1.36, xGF_H: 1.99, xGF_A: 1.49, color: "#DA291C" },
  { slug: "aston-villa",      name: "Aston Villa",      abbr: "AVL", xGF: 1.49, xGA: 1.46, xGF_H: 1.59, xGF_A: 1.35, color: "#95BFE5" },
  { slug: "liverpool",        name: "Liverpool",        abbr: "LIV", xGF: 1.73, xGA: 1.31, xGF_H: 1.90, xGF_A: 1.57, color: "#C8102E" },
  { slug: "bournemouth",      name: "Bournemouth",      abbr: "BOU", xGF: 1.56, xGA: 1.47, xGF_H: 1.61, xGF_A: 1.50, color: "#DA291C" },
  { slug: "sunderland",       name: "Sunderland",       abbr: "SUN", xGF: 1.23, xGA: 1.58, xGF_H: 1.37, xGF_A: 1.09, color: "#EB172B" },
  { slug: "brighton",         name: "Brighton",         abbr: "BHA", xGF: 1.54, xGA: 1.33, xGF_H: 1.62, xGF_A: 1.45, color: "#0057B8" },
  { slug: "brentford",        name: "Brentford",        abbr: "BRE", xGF: 1.31, xGA: 1.54, xGF_H: 1.39, xGF_A: 1.17, color: "#E30613" },
  { slug: "chelsea",          name: "Chelsea",          abbr: "CHE", xGF: 1.54, xGA: 1.34, xGF_H: 1.70, xGF_A: 1.39, color: "#034694" },
  { slug: "fulham",           name: "Fulham",           abbr: "FUL", xGF: 1.40, xGA: 1.37, xGF_H: 1.55, xGF_A: 1.26, color: "#FFFFFF" },
  { slug: "newcastle",        name: "Newcastle",        abbr: "NEW", xGF: 1.49, xGA: 1.44, xGF_H: 1.68, xGF_A: 1.40, color: "#241F20" },
  { slug: "everton",          name: "Everton",          abbr: "EVE", xGF: 1.31, xGA: 1.55, xGF_H: 1.46, xGF_A: 1.16, color: "#003399" },
  { slug: "leeds-united",     name: "Leeds United",     abbr: "LEE", xGF: 1.40, xGA: 1.47, xGF_H: 1.54, xGF_A: 1.25, color: "#FFCD00" },
  { slug: "crystal-palace",   name: "Crystal Palace",   abbr: "CRY", xGF: 1.31, xGA: 1.40, xGF_H: 1.47, xGF_A: 1.15, color: "#1B458F" },
  { slug: "nottm-forest",     name: "Nottm Forest",     abbr: "NFO", xGF: 1.39, xGA: 1.52, xGF_H: 1.65, xGF_A: 1.23, color: "#E53233" },
  { slug: "tottenham",        name: "Tottenham",        abbr: "TOT", xGF: 1.40, xGA: 1.35, xGF_H: 1.44, xGF_A: 1.21, color: "#132257" },
  { slug: "coventry-city",    name: "Coventry City",    abbr: "COV", xGF: 1.40, xGA: 2.21, xGF_H: 1.51, xGF_A: 1.29, color: "#44D4FF", promoted: true },
  { slug: "ipswich",          name: "Ipswich Town",     abbr: "IPS", xGF: 1.27, xGA: 2.05, xGF_H: 1.37, xGF_A: 1.17, color: "#3A64A3", promoted: true },
  { slug: "hull-city",        name: "Hull City",        abbr: "HUL", xGF: 0.98, xGA: 2.84, xGF_H: 1.06, xGF_A: 0.90, color: "#F5A12D", promoted: true },
];

const LEAGUE_AVG_XGA = 1.39;

// ─── Poisson model ────────────────────────────────────────────────────────────
function poissonPmf(lambda: number, k: number): number {
  let logP = -lambda + k * Math.log(lambda);
  for (let i = 1; i <= k; i++) logP -= Math.log(i);
  return Math.exp(logP);
}

type Prediction = {
  homeλ: number; awayλ: number;
  homeWin: number; draw: number; awayWin: number;
  over25: number; over15: number; under25: number; under35: number;
  btts: number; bttcNo: number;
  topScorelines: { h: number; a: number; prob: number }[];
};

function computePrediction(home: typeof TEAMS[0], away: typeof TEAMS[0]): Prediction {
  const homeλ = home.xGF_H * (away.xGA / LEAGUE_AVG_XGA);
  const awayλ = away.xGF_A * (home.xGA / LEAGUE_AVG_XGA);
  const MAX = 9;
  let homeWin = 0, draw = 0, awayWin = 0;
  let over25 = 0, over15 = 0, under25 = 0, under35 = 0;
  let btts = 0;
  const scorelines: { h: number; a: number; prob: number }[] = [];

  for (let h = 0; h < MAX; h++) {
    for (let a = 0; a < MAX; a++) {
      const p = poissonPmf(homeλ, h) * poissonPmf(awayλ, a);
      if (h > a) homeWin += p;
      else if (h === a) draw += p;
      else awayWin += p;
      if (h + a > 2.5) over25 += p;
      if (h + a > 1.5) over15 += p;
      if (h + a <= 2.5) under25 += p;
      if (h + a <= 3.5) under35 += p;
      if (h > 0 && a > 0) btts += p;
      scorelines.push({ h, a, prob: p });
    }
  }

  scorelines.sort((x, y) => y.prob - x.prob);
  return {
    homeλ: Math.round(homeλ * 100) / 100,
    awayλ: Math.round(awayλ * 100) / 100,
    homeWin, draw, awayWin,
    over25, over15, under25, under35,
    btts, bttcNo: 1 - btts,
    topScorelines: scorelines.slice(0, 6),
  };
}

function pct(n: number) { return `${Math.round(n * 100)}%`; }

function stars(prob: number): number {
  if (prob >= 0.80) return 5;
  if (prob >= 0.65) return 4;
  if (prob >= 0.50) return 3;
  return 2;
}

function probColor(prob: number): string {
  if (prob >= 0.75) return "#4ade80";
  if (prob >= 0.60) return "#facc15";
  return "#94a3b8";
}

type Message = { role: "user" | "assistant"; content: string };

const MARKET_ICON: Record<string, string> = {
  Goals: "⚽", BTTS: "🔄", Result: "🏆", Corners: "🚩", Cards: "🟨", xG: "📊",
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function Home() {
  const [homeTeam, setHomeTeam] = useState(TEAMS[0]);
  const [awayTeam, setAwayTeam] = useState(TEAMS[4]);
  const [pred, setPred] = useState<Prediction>(() => computePrediction(TEAMS[0], TEAMS[4]));
  const [messages, setMessages] = useState<Message[]>([{
    role: "assistant",
    content: "Premier League 2026-27 predictions. Select a home and away team to run the Poisson model, or ask me anything about any fixture.",
  }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function selectHome(slug: string) {
    const t = TEAMS.find(t => t.slug === slug)!;
    setHomeTeam(t);
    setPred(computePrediction(t, awayTeam));
  }

  function selectAway(slug: string) {
    const t = TEAMS.find(t => t.slug === slug)!;
    setAwayTeam(t);
    setPred(computePrediction(homeTeam, t));
  }

  const cancelMessage = () => { abortRef.current?.abort(); setLoading(false); };

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
        body: JSON.stringify({ messages: updated, homeTeam: homeTeam.name, awayTeam: awayTeam.name }),
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

  // ── Build picks ──────────────────────────────────────────────────────────
  const picks = [
    pred.homeWin > pred.draw && pred.homeWin > pred.awayWin
      ? { market: "Result", pick: `${homeTeam.abbr} Win`, prob: pred.homeWin }
      : pred.awayWin > pred.draw
      ? { market: "Result", pick: `${awayTeam.abbr} Win`, prob: pred.awayWin }
      : { market: "Result", pick: "Draw", prob: pred.draw },
    { market: "Goals", pick: "Over 1.5 Goals", prob: pred.over15 },
    { market: "Goals", pick: "Over 2.5 Goals", prob: pred.over25 },
    { market: "Goals", pick: "Under 2.5 Goals", prob: pred.under25 },
    { market: "Goals", pick: "Under 3.5 Goals", prob: pred.under35 },
    { market: "BTTS", pick: "BTTS Yes", prob: pred.btts },
    { market: "BTTS", pick: "BTTS No ⚠️", prob: pred.bttcNo },
  ].sort((a, b) => b.prob - a.prob);

  const topPicks = picks.filter(p => p.prob >= 0.55).slice(0, 5);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#07070e", color: "#e2e8f0" }}>

      {/* Header */}
      <header style={{ background: "#0d0d18", borderBottom: "1px solid #1a1a2e" }} className="px-6 py-4 shrink-0">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⚽</span>
            <div>
              <h1 className="text-base font-bold tracking-tight" style={{ color: "#f1f5f9" }}>Sports Prediction Vault</h1>
              <p className="text-xs" style={{ color: "#3d4f6b" }}>Premier League 2026-27 · Poisson Model</p>
            </div>
          </div>
          <span className="text-xs px-3 py-1.5 rounded-full font-semibold tracking-wide"
            style={{ background: "#0c1c38", color: "#4f9cf9", border: "1px solid #1a3560" }}>
            PRE-SEASON
          </span>
        </div>
      </header>

      <div className="flex-1 max-w-5xl mx-auto w-full px-4 py-5 flex flex-col gap-4">

        {/* Team pickers */}
        <div className="rounded-2xl p-4" style={{ background: "#0d0d18", border: "1px solid #1a1a2e" }}>
          <p className="text-xs font-bold tracking-widest mb-3" style={{ color: "#2d3f5a" }}>SELECT FIXTURE</p>
          <div className="flex items-center gap-3">

            {/* Home */}
            <div className="flex-1">
              <p className="text-xs mb-1.5" style={{ color: "#2d3f5a" }}>Home</p>
              <select
                value={homeTeam.slug}
                onChange={e => selectHome(e.target.value)}
                className="w-full rounded-xl px-3 py-2.5 text-sm font-semibold outline-none"
                style={{ background: "#111120", border: "1px solid #1a1a2e", color: "#f1f5f9", cursor: "pointer" }}
              >
                {TEAMS.map(t => (
                  <option key={t.slug} value={t.slug}>
                    {t.abbr} — {t.name}{t.promoted ? " ↑" : ""}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-lg font-bold mt-5" style={{ color: "#2d3f5a" }}>vs</div>

            {/* Away */}
            <div className="flex-1">
              <p className="text-xs mb-1.5" style={{ color: "#2d3f5a" }}>Away</p>
              <select
                value={awayTeam.slug}
                onChange={e => selectAway(e.target.value)}
                className="w-full rounded-xl px-3 py-2.5 text-sm font-semibold outline-none"
                style={{ background: "#111120", border: "1px solid #1a1a2e", color: "#f1f5f9", cursor: "pointer" }}
              >
                {TEAMS.map(t => (
                  <option key={t.slug} value={t.slug}>
                    {t.abbr} — {t.name}{t.promoted ? " ↑" : ""}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Prediction panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Left: result + λ */}
          <div className="rounded-2xl p-4 flex flex-col gap-4" style={{ background: "#0d0d18", border: "1px solid #1a1a2e" }}>
            <p className="text-xs font-bold tracking-widest" style={{ color: "#2d3f5a" }}>MODEL OUTPUT</p>

            {/* Teams + λ */}
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <div className="text-lg font-bold" style={{ color: "#f1f5f9" }}>{homeTeam.abbr}</div>
                <div className="text-xs" style={{ color: "#3d4f6b" }}>Home</div>
                <div className="text-2xl font-bold mt-1" style={{ color: "#4f9cf9" }}>λ {pred.homeλ}</div>
              </div>
              <div className="text-xs px-3" style={{ color: "#2d3f5a" }}>xG/90</div>
              <div className="text-center flex-1">
                <div className="text-lg font-bold" style={{ color: "#f1f5f9" }}>{awayTeam.abbr}</div>
                <div className="text-xs" style={{ color: "#3d4f6b" }}>Away</div>
                <div className="text-2xl font-bold mt-1" style={{ color: "#94a3b8" }}>λ {pred.awayλ}</div>
              </div>
            </div>

            {/* Result bars */}
            <div className="space-y-2">
              {[
                { label: `${homeTeam.abbr} Win`, prob: pred.homeWin, color: "#4f9cf9" },
                { label: "Draw", prob: pred.draw, color: "#94a3b8" },
                { label: `${awayTeam.abbr} Win`, prob: pred.awayWin, color: "#f97316" },
              ].map(row => (
                <div key={row.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span style={{ color: "#94a3b8" }}>{row.label}</span>
                    <span style={{ color: row.color, fontWeight: 700 }}>{pct(row.prob)}</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "#1a1a2e" }}>
                    <div className="h-full rounded-full transition-all duration-500"
                      style={{ width: pct(row.prob), background: row.color }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Top scorelines */}
            <div>
              <p className="text-xs font-bold tracking-widest mb-2" style={{ color: "#2d3f5a" }}>TOP SCORELINES</p>
              <div className="grid grid-cols-3 gap-1.5">
                {pred.topScorelines.map((s, i) => (
                  <div key={i} className="rounded-xl px-2 py-2 text-center"
                    style={{ background: i === 0 ? "#0c1c38" : "#111120", border: `1px solid ${i === 0 ? "#2a5298" : "#1a1a2e"}` }}>
                    <div className="text-sm font-bold" style={{ color: "#f1f5f9" }}>{s.h}–{s.a}</div>
                    <div className="text-xs" style={{ color: i === 0 ? "#4f9cf9" : "#3d4f6b" }}>{pct(s.prob)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: picks */}
          <div className="rounded-2xl p-4 flex flex-col gap-3" style={{ background: "#0d0d18", border: "1px solid #1a1a2e" }}>
            <p className="text-xs font-bold tracking-widest" style={{ color: "#2d3f5a" }}>BEST PICKS</p>
            <div className="space-y-2">
              {topPicks.map((p, i) => (
                <div key={i} className="flex items-center justify-between rounded-xl px-3 py-2.5"
                  style={{ background: "#111120", border: "1px solid #1a1a2e" }}>
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">{MARKET_ICON[p.market] || "📊"}</span>
                    <div>
                      <div className="text-xs font-semibold" style={{ color: "#f1f5f9" }}>{p.pick}</div>
                      <div className="text-xs" style={{ color: "#2d3f5a" }}>{p.market} · {"⭐".repeat(stars(p.prob))}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold" style={{ color: probColor(p.prob) }}>{pct(p.prob)}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Goals breakdown */}
            <div className="rounded-xl p-3" style={{ background: "#111120", border: "1px solid #1a1a2e" }}>
              <p className="text-xs font-bold tracking-widest mb-2" style={{ color: "#2d3f5a" }}>GOALS BREAKDOWN</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                {[
                  { label: "Over 1.5", prob: pred.over15 },
                  { label: "Under 2.5", prob: pred.under25 },
                  { label: "Over 2.5", prob: pred.over25 },
                  { label: "Under 3.5", prob: pred.under35 },
                  { label: "BTTS Yes", prob: pred.btts },
                  { label: "BTTS No", prob: pred.bttcNo },
                ].map(row => (
                  <div key={row.label} className="flex justify-between py-0.5">
                    <span style={{ color: "#64748b" }}>{row.label}</span>
                    <span style={{ color: probColor(row.prob), fontWeight: 700 }}>{pct(row.prob)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* xG context */}
            <div className="rounded-xl px-3 py-2" style={{ background: "#111120", border: "1px solid #1a1a2e" }}>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { label: `${homeTeam.abbr} xGF`, val: homeTeam.xGF },
                  { label: `${awayTeam.abbr} xGF`, val: awayTeam.xGF },
                  { label: `${homeTeam.abbr} xGA`, val: homeTeam.xGA },
                  { label: `${awayTeam.abbr} xGA`, val: awayTeam.xGA },
                ].map(row => (
                  <div key={row.label} className="flex justify-between">
                    <span style={{ color: "#3d4f6b" }}>{row.label}</span>
                    <span style={{ color: "#94a3b8", fontWeight: 600 }}>{row.val.toFixed(2)}</span>
                  </div>
                ))}
              </div>
              {(homeTeam.promoted || awayTeam.promoted) && (
                <p className="text-xs mt-2" style={{ color: "#f59e0b" }}>
                  ⚠️ {[homeTeam.promoted && homeTeam.abbr, awayTeam.promoted && awayTeam.abbr].filter(Boolean).join(", ")} — promoted team. Higher uncertainty on projections.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Quick questions */}
        <div className="flex flex-wrap gap-2">
          {[
            `Who will win ${homeTeam.name} vs ${awayTeam.name}?`,
            `Best picks for ${homeTeam.name} vs ${awayTeam.name}`,
            `Goals market for ${homeTeam.name} vs ${awayTeam.name}`,
            `Tell me about ${homeTeam.name}`,
            `Tell me about ${awayTeam.name}`,
          ].map(q => (
            <button key={q} onClick={() => sendMessage(q)} disabled={loading}
              className="text-xs px-3 py-1.5 rounded-full transition-colors"
              style={{ background: "#0d0d18", border: "1px solid #1a1a2e", color: "#4a5f7a", cursor: loading ? "not-allowed" : "pointer" }}>
              {q}
            </button>
          ))}
        </div>

        {/* Chat */}
        <div className="flex-1 rounded-2xl overflow-y-auto flex flex-col gap-3 p-4"
          style={{ background: "#0d0d18", border: "1px solid #1a1a2e", minHeight: "320px", maxHeight: "420px" }}>
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              {m.role === "assistant" && (
                <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mr-2 mt-0.5 text-sm"
                  style={{ background: "#0c1c38", border: "1px solid #1a3560" }}>⚽</div>
              )}
              <div className="rounded-2xl px-4 py-3 text-sm leading-relaxed"
                style={{
                  background: m.role === "user" ? "#1a3a7a" : "#111120",
                  color: "#e2e8f0",
                  border: m.role === "assistant" ? "1px solid #1a1a2e" : "none",
                  maxWidth: "82%",
                }}>
                {m.role === "assistant" ? (
                  <ReactMarkdown components={{
                    h2: ({ children }) => <p className="font-bold text-sm mb-2 mt-3" style={{ color: "#4f9cf9" }}>{children}</p>,
                    p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                    strong: ({ children }) => <strong style={{ color: "#f1f5f9" }}>{children}</strong>,
                    ul: ({ children }) => <ul className="mb-2 pl-4 space-y-1" style={{ listStyleType: "disc" }}>{children}</ul>,
                    li: ({ children }) => <li className="text-sm" style={{ color: "#cbd5e1" }}>{children}</li>,
                    table: ({ children }) => <table className="w-full text-xs mb-3 border-collapse">{children}</table>,
                    th: ({ children }) => <th className="px-3 py-1.5 text-left font-semibold" style={{ borderBottom: "1px solid #1a1a2e", color: "#64748b" }}>{children}</th>,
                    td: ({ children }) => <td className="px-3 py-1.5" style={{ borderBottom: "1px solid #111120", color: "#cbd5e1" }}>{children}</td>,
                  }}>
                    {m.content}
                  </ReactMarkdown>
                ) : <span>{m.content}</span>}
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
          <input value={input} onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && !e.shiftKey && sendMessage()}
            placeholder="Ask about any fixture, team, or market..."
            disabled={loading}
            className="flex-1 rounded-2xl px-4 py-3 text-sm outline-none"
            style={{ background: "#0d0d18", border: "1px solid #1a1a2e", color: "#e2e8f0", opacity: loading ? 0.5 : 1 }} />
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
    </div>
  );
}

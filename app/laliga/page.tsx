"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

// ─── Fixture data ─────────────────────────────────────────────────────────────
const FIXTURES: { gw: number; date: string; home: string; away: string }[] = [
  // GW1 — Aug 15–19
  { gw: 1, date: "Sat 15 Aug", home: "Alavés",              away: "Getafe" },
  { gw: 1, date: "Sat 15 Aug", home: "Sevilla",             away: "Rayo Vallecano" },
  { gw: 1, date: "Sun 16 Aug", home: "Racing Santander",    away: "Villarreal" },
  { gw: 1, date: "Sun 16 Aug", home: "Espanyol",            away: "Levante" },
  { gw: 1, date: "Sun 16 Aug", home: "Celta Vigo",          away: "Osasuna" },
  { gw: 1, date: "Mon 17 Aug", home: "Deportivo",           away: "Elche" },
  { gw: 1, date: "Wed 19 Aug", home: "Atlético Madrid",     away: "Málaga" },
  // GW2 — Aug 20–24
  { gw: 2, date: "Thu 20 Aug", home: "Rayo Vallecano",      away: "Alavés" },
  { gw: 2, date: "Fri 21 Aug", home: "Real Betis",          away: "Real Sociedad" },
  { gw: 2, date: "Sat 22 Aug", home: "Athletic Bilbao",     away: "Sevilla" },
  { gw: 2, date: "Sat 22 Aug", home: "Valencia",            away: "Celta Vigo" },
  { gw: 2, date: "Sat 22 Aug", home: "Espanyol",            away: "Real Madrid" },
  { gw: 2, date: "Sun 23 Aug", home: "Atlético Madrid",     away: "Villarreal" },
  { gw: 2, date: "Sun 23 Aug", home: "Getafe",              away: "Racing Santander" },
  { gw: 2, date: "Sun 23 Aug", home: "Elche",               away: "Barcelona" },
  { gw: 2, date: "Mon 24 Aug", home: "Osasuna",             away: "Levante" },
  { gw: 2, date: "Mon 24 Aug", home: "Málaga",              away: "Deportivo" },
  // GW3 — Aug 25–27
  { gw: 3, date: "Tue 25 Aug", home: "Valencia",            away: "Real Betis" },
  { gw: 3, date: "Wed 26 Aug", home: "Real Madrid",         away: "Real Sociedad" },
  { gw: 3, date: "Thu 27 Aug", home: "Atlético Madrid",     away: "Athletic Bilbao" },
  // GW4 — Aug 30
  { gw: 4, date: "Sun 30 Aug", home: "Alavés",              away: "Villarreal" },
  { gw: 4, date: "Sun 30 Aug", home: "Barcelona",           away: "Rayo Vallecano" },
  { gw: 4, date: "Sun 30 Aug", home: "Celta Vigo",          away: "Athletic Bilbao" },
  { gw: 4, date: "Sun 30 Aug", home: "Deportivo",           away: "Valencia" },
  { gw: 4, date: "Sun 30 Aug", home: "Levante",             away: "Real Betis" },
  { gw: 4, date: "Sun 30 Aug", home: "Osasuna",             away: "Getafe" },
  { gw: 4, date: "Sun 30 Aug", home: "Racing Santander",    away: "Elche" },
  { gw: 4, date: "Sun 30 Aug", home: "Real Madrid",         away: "Málaga" },
  { gw: 4, date: "Sun 30 Aug", home: "Real Sociedad",       away: "Espanyol" },
  { gw: 4, date: "Sun 30 Aug", home: "Sevilla",             away: "Atlético Madrid" },
  // GW5 — Sep 6
  { gw: 5, date: "Sun 6 Sep",  home: "Athletic Bilbao",     away: "Atlético Madrid" },
  { gw: 5, date: "Sun 6 Sep",  home: "Alavés",              away: "Osasuna" },
  { gw: 5, date: "Sun 6 Sep",  home: "Elche",               away: "Real Sociedad" },
  { gw: 5, date: "Sun 6 Sep",  home: "Espanyol",            away: "Sevilla" },
  { gw: 5, date: "Sun 6 Sep",  home: "Getafe",              away: "Celta Vigo" },
  { gw: 5, date: "Sun 6 Sep",  home: "Málaga",              away: "Levante" },
  { gw: 5, date: "Sun 6 Sep",  home: "Rayo Vallecano",      away: "Racing Santander" },
  { gw: 5, date: "Sun 6 Sep",  home: "Real Betis",          away: "Real Madrid" },
  { gw: 5, date: "Sun 6 Sep",  home: "Valencia",            away: "Barcelona" },
  { gw: 5, date: "Sun 6 Sep",  home: "Villarreal",          away: "Deportivo" },
];

const GWS = [...new Set(FIXTURES.map(f => f.gw))];

const FIXTURE_NAME_MAP: Record<string, string> = {
  "Barcelona": "barcelona", "Real Madrid": "real-madrid", "Athletic Bilbao": "athletic-bilbao",
  "Atlético Madrid": "atletico-madrid", "Real Betis": "real-betis", "Rayo Vallecano": "rayo-vallecano",
  "Real Sociedad": "real-sociedad", "Villarreal": "villarreal", "Valencia": "valencia",
  "Celta Vigo": "celta-vigo", "Getafe": "getafe", "Osasuna": "osasuna",
  "Sevilla": "sevilla", "Alavés": "alaves", "Espanyol": "espanyol",
  "Elche": "elche", "Levante": "levante", "Racing Santander": "racing-santander",
  "Deportivo": "deportivo-coruna", "Málaga": "malaga",
};

// ─── Team data (2026-27 La Liga, xGF/xGA from FootyStats 2025-26) ────────────
const TEAMS = [
  { slug: "barcelona",          name: "Barcelona",           abbr: "BAR", xGF: 2.06, xGA: 1.05, xGF_H: 2.10, xGF_A: 2.02, color: "#A50044" },
  { slug: "real-madrid",        name: "Real Madrid",         abbr: "RMA", xGF: 2.02, xGA: 1.18, xGF_H: 2.23, xGF_A: 1.81, color: "#FEBE10" },
  { slug: "athletic-bilbao",    name: "Athletic Bilbao",     abbr: "ATH", xGF: 1.58, xGA: 1.13, xGF_H: 1.73, xGF_A: 1.42, color: "#EE2523" },
  { slug: "atletico-madrid",    name: "Atlético Madrid",     abbr: "ATM", xGF: 1.57, xGA: 1.33, xGF_H: 1.84, xGF_A: 1.29, color: "#CB3524" },
  { slug: "real-betis",         name: "Real Betis",          abbr: "BET", xGF: 1.55, xGA: 1.45, xGF_H: 1.72, xGF_A: 1.39, color: "#00A650" },
  { slug: "rayo-vallecano",     name: "Rayo Vallecano",      abbr: "RAY", xGF: 1.55, xGA: 1.40, xGF_H: 1.81, xGF_A: 1.29, color: "#D91A21" },
  { slug: "real-sociedad",      name: "Real Sociedad",       abbr: "RSO", xGF: 1.43, xGA: 1.53, xGF_H: 1.52, xGF_A: 1.35, color: "#0067B1" },
  { slug: "espanyol",           name: "Espanyol",            abbr: "ESP", xGF: 1.40, xGA: 1.53, xGF_H: 1.53, xGF_A: 1.26, color: "#005CA9" },
  { slug: "villarreal",         name: "Villarreal",          abbr: "VIL", xGF: 1.36, xGA: 1.50, xGF_H: 1.66, xGF_A: 1.07, color: "#FFD700" },
  { slug: "alaves",             name: "Alavés",              abbr: "ALA", xGF: 1.36, xGA: 1.42, xGF_H: 1.47, xGF_A: 1.26, color: "#1B3F8C" },
  { slug: "osasuna",            name: "Osasuna",             abbr: "OSA", xGF: 1.35, xGA: 1.44, xGF_H: 1.66, xGF_A: 1.04, color: "#D50032" },
  { slug: "levante",            name: "Levante",             abbr: "LEV", xGF: 1.34, xGA: 1.68, xGF_H: 1.51, xGF_A: 1.17, color: "#4B7BBD" },
  { slug: "sevilla",            name: "Sevilla",             abbr: "SEV", xGF: 1.30, xGA: 1.23, xGF_H: 1.40, xGF_A: 1.20, color: "#D2122E" },
  { slug: "elche",              name: "Elche",               abbr: "ELC", xGF: 1.29, xGA: 1.53, xGF_H: 1.57, xGF_A: 1.02, color: "#007A3D" },
  { slug: "valencia",           name: "Valencia",            abbr: "VAL", xGF: 1.27, xGA: 1.38, xGF_H: 1.44, xGF_A: 1.10, color: "#FF7F00" },
  { slug: "celta-vigo",         name: "Celta Vigo",          abbr: "CEL", xGF: 1.21, xGA: 1.46, xGF_H: 1.36, xGF_A: 1.05, color: "#6CB4E4" },
  { slug: "getafe",             name: "Getafe",              abbr: "GET", xGF: 1.07, xGA: 1.30, xGF_H: 1.06, xGF_A: 1.07, color: "#0055A5" },
  { slug: "racing-santander",   name: "Racing Santander",    abbr: "RAC", xGF: 1.41, xGA: 2.13, xGF_H: 1.65, xGF_A: 1.18, color: "#009930", promoted: true },
  { slug: "deportivo-coruna",   name: "Deportivo La Coruña", abbr: "DEP", xGF: 1.25, xGA: 2.01, xGF_H: 1.28, xGF_A: 1.22, color: "#99CCFF", promoted: true },
  { slug: "malaga",             name: "Málaga CF",           abbr: "MAL", xGF: 1.39, xGA: 2.14, xGF_H: 1.56, xGF_A: 1.22, color: "#1E5CA5", promoted: true },
];

const LEAGUE_AVG_XGA = 1.49;

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
  btts: number; bttsNo: number;
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
    btts, bttsNo: 1 - btts,
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
export default function LaLiga() {
  const [homeTeam, setHomeTeam] = useState(TEAMS[0]);
  const [awayTeam, setAwayTeam] = useState(TEAMS[3]);
  const [pred, setPred] = useState<Prediction>(() => computePrediction(TEAMS[0], TEAMS[3]));
  const [messages, setMessages] = useState<Message[]>([{
    role: "assistant",
    content: "La Liga 2026-27 predictions. Select a home and away team to run the Poisson model, or ask me anything about any fixture.",
  }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedGW, setSelectedGW] = useState<number>(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function selectFixture(home: string, away: string) {
    const h = TEAMS.find(t => t.slug === FIXTURE_NAME_MAP[home]);
    const a = TEAMS.find(t => t.slug === FIXTURE_NAME_MAP[away]);
    if (!h || !a) return;
    setHomeTeam(h); setAwayTeam(a); setPred(computePrediction(h, a));
  }

  function selectHome(slug: string) {
    const t = TEAMS.find(t => t.slug === slug)!;
    const away = t.slug === awayTeam.slug ? homeTeam : awayTeam;
    setHomeTeam(t);
    setAwayTeam(away);
    setPred(computePrediction(t, away));
  }

  function selectAway(slug: string) {
    const t = TEAMS.find(t => t.slug === slug)!;
    const home = t.slug === homeTeam.slug ? awayTeam : homeTeam;
    setAwayTeam(t);
    setHomeTeam(home);
    setPred(computePrediction(home, t));
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
      const res = await fetch("/api/chat-laliga", {
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
    { market: "BTTS", pick: "BTTS No ⚠️", prob: pred.bttsNo },
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
              <p className="text-xs" style={{ color: "#3d4f6b" }}>Football · 2026-27</p>
            </div>
          </div>
          {/* League switcher */}
          <div className="flex gap-2">
            <Link href="/"
              className="text-xs px-3 py-1.5 rounded-full"
              style={{ background: "#111120", border: "1px solid #1a1a2e", color: "#64748b" }}>
              Premier League
            </Link>
            <span
              className="text-xs px-3 py-1.5 rounded-full font-semibold"
              style={{ background: "#1a0a2e", border: "1px solid #3d1a6e", color: "#a78bfa" }}>
              La Liga
            </span>
          </div>
        </div>
      </header>

      <div className="flex-1 max-w-5xl mx-auto w-full px-4 py-5 flex flex-col gap-4">

        {/* Fixture browser */}
        <div className="rounded-2xl p-4" style={{ background: "#0d0d18", border: "1px solid #1a1a2e" }}>
          <p className="text-xs font-bold tracking-widest mb-3" style={{ color: "#2d3f5a" }}>FIXTURES — LA LIGA 2026-27</p>
          <div className="flex gap-2 mb-3 flex-wrap">
            {GWS.map(gw => (
              <button key={gw} onClick={() => setSelectedGW(gw)}
                className="text-xs px-3 py-1 rounded-full font-semibold transition-all"
                style={selectedGW === gw
                  ? { background: "#3d1a6e", color: "#a78bfa", border: "1px solid #5b21b6" }
                  : { background: "#111120", color: "#64748b", border: "1px solid #1a1a2e" }}>
                GW{gw}
              </button>
            ))}
          </div>
          <div className="space-y-1">
            {FIXTURES.filter(f => f.gw === selectedGW).map((f, i) => {
              const isSelected = FIXTURE_NAME_MAP[f.home] === homeTeam.slug && FIXTURE_NAME_MAP[f.away] === awayTeam.slug;
              return (
                <div key={i} onClick={() => selectFixture(f.home, f.away)}
                  className="flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer transition-all"
                  style={isSelected
                    ? { background: "#160c2e", border: "1px solid #5b21b6" }
                    : { background: "#111120", border: "1px solid transparent" }}>
                  <span className="text-xs w-20" style={{ color: "#3d4f6b" }}>{f.date}</span>
                  <span className="text-sm font-semibold flex-1 text-right" style={{ color: isSelected ? "#a78bfa" : "#cbd5e1" }}>{f.home}</span>
                  <span className="text-xs mx-3 font-bold" style={{ color: "#2d3f5a" }}>vs</span>
                  <span className="text-sm font-semibold flex-1" style={{ color: isSelected ? "#a78bfa" : "#cbd5e1" }}>{f.away}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team pickers */}
        <div className="rounded-2xl p-4" style={{ background: "#0d0d18", border: "1px solid #1a1a2e" }}>
          <p className="text-xs font-bold tracking-widest mb-3" style={{ color: "#2d3f5a" }}>SELECT FIXTURE — LA LIGA 2026-27</p>
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <p className="text-xs mb-1.5" style={{ color: "#2d3f5a" }}>Home</p>
              <select
                value={homeTeam.slug}
                onChange={e => selectHome(e.target.value)}
                className="w-full rounded-xl px-3 py-2.5 text-sm font-semibold outline-none"
                style={{ background: "#111120", border: "1px solid #1a1a2e", color: "#f1f5f9", cursor: "pointer" }}>
                {TEAMS.filter(t => t.slug !== awayTeam.slug).map(t => (
                  <option key={t.slug} value={t.slug}>
                    {t.abbr} — {t.name}{t.promoted ? " ↑" : ""}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-lg font-bold mt-5" style={{ color: "#2d3f5a" }}>vs</div>
            <div className="flex-1">
              <p className="text-xs mb-1.5" style={{ color: "#2d3f5a" }}>Away</p>
              <select
                value={awayTeam.slug}
                onChange={e => selectAway(e.target.value)}
                className="w-full rounded-xl px-3 py-2.5 text-sm font-semibold outline-none"
                style={{ background: "#111120", border: "1px solid #1a1a2e", color: "#f1f5f9", cursor: "pointer" }}>
                {TEAMS.filter(t => t.slug !== homeTeam.slug).map(t => (
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
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <div className="text-lg font-bold" style={{ color: "#f1f5f9" }}>{homeTeam.abbr}</div>
                <div className="text-xs" style={{ color: "#3d4f6b" }}>Home</div>
                <div className="text-2xl font-bold mt-1" style={{ color: "#a78bfa" }}>λ {pred.homeλ}</div>
              </div>
              <div className="text-xs px-3" style={{ color: "#2d3f5a" }}>xG/90</div>
              <div className="text-center flex-1">
                <div className="text-lg font-bold" style={{ color: "#f1f5f9" }}>{awayTeam.abbr}</div>
                <div className="text-xs" style={{ color: "#3d4f6b" }}>Away</div>
                <div className="text-2xl font-bold mt-1" style={{ color: "#94a3b8" }}>λ {pred.awayλ}</div>
              </div>
            </div>

            <div className="space-y-2">
              {[
                { label: `${homeTeam.abbr} Win`, prob: pred.homeWin, color: "#a78bfa" },
                { label: "Draw",                 prob: pred.draw,    color: "#94a3b8" },
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

            <div>
              <p className="text-xs font-bold tracking-widest mb-2" style={{ color: "#2d3f5a" }}>TOP SCORELINES</p>
              <div className="grid grid-cols-3 gap-1.5">
                {pred.topScorelines.map((s, i) => (
                  <div key={i} className="rounded-xl px-2 py-2 text-center"
                    style={{ background: i === 0 ? "#160c2e" : "#111120", border: `1px solid ${i === 0 ? "#3d1a6e" : "#1a1a2e"}` }}>
                    <div className="text-sm font-bold" style={{ color: "#f1f5f9" }}>{s.h}–{s.a}</div>
                    <div className="text-xs" style={{ color: i === 0 ? "#a78bfa" : "#3d4f6b" }}>{pct(s.prob)}</div>
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

            <div className="rounded-xl p-3" style={{ background: "#111120", border: "1px solid #1a1a2e" }}>
              <p className="text-xs font-bold tracking-widest mb-2" style={{ color: "#2d3f5a" }}>GOALS BREAKDOWN</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                {[
                  { label: "Over 1.5", prob: pred.over15 },
                  { label: "Under 2.5", prob: pred.under25 },
                  { label: "Over 2.5", prob: pred.over25 },
                  { label: "Under 3.5", prob: pred.under35 },
                  { label: "BTTS Yes",  prob: pred.btts },
                  { label: "BTTS No",   prob: pred.bttsNo },
                ].map(row => (
                  <div key={row.label} className="flex justify-between py-0.5">
                    <span style={{ color: "#64748b" }}>{row.label}</span>
                    <span style={{ color: probColor(row.prob), fontWeight: 700 }}>{pct(row.prob)}</span>
                  </div>
                ))}
              </div>
            </div>

            {(homeTeam.promoted || awayTeam.promoted) && (
              <div className="rounded-xl px-3 py-2 text-xs" style={{ background: "#111120", border: "1px solid #1a1a2e", color: "#f59e0b" }}>
                ⚠️ {[homeTeam.promoted && homeTeam.abbr, awayTeam.promoted && awayTeam.abbr].filter(Boolean).join(", ")} — promoted from Segunda. Higher uncertainty on projections.
              </div>
            )}
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
                  style={{ background: "#160c2e", border: "1px solid #3d1a6e" }}>⚽</div>
              )}
              <div className="rounded-2xl px-4 py-3 text-sm leading-relaxed"
                style={{
                  background: m.role === "user" ? "#1a0a2e" : "#111120",
                  color: "#e2e8f0",
                  border: m.role === "assistant" ? "1px solid #1a1a2e" : "none",
                  maxWidth: "82%",
                }}>
                {m.role === "assistant" ? (
                  <ReactMarkdown components={{
                    h2: ({ children }) => <p className="font-bold text-sm mb-2 mt-3" style={{ color: "#a78bfa" }}>{children}</p>,
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
                style={{ background: "#160c2e", border: "1px solid #3d1a6e" }}>⚽</div>
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
            placeholder="Ask about any La Liga fixture, team, or market..."
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
                background: input.trim() ? "#1a0a2e" : "#0d0d18",
                color: input.trim() ? "#a78bfa" : "#2d3f5a",
                border: "1px solid #3d1a6e",
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

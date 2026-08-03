import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "PitchIQ — AI Football Predictions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 88px",
          background: "linear-gradient(135deg, #07070e 0%, #0d1128 55%, #080d1e 100%)",
          position: "relative",
          overflow: "hidden",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        {/* Glow orb top-right */}
        <div style={{
          position: "absolute", top: -120, right: -80,
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          display: "flex",
        }} />
        {/* Glow orb bottom-left */}
        <div style={{
          position: "absolute", bottom: -100, left: -60,
          width: 360, height: 360, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,200,100,0.08) 0%, transparent 70%)",
          display: "flex",
        }} />

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0, position: "relative" }}>

          {/* Top row: LIVE badge */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 8,
              background: "#0a2010", border: "1px solid #14532d",
              color: "#4ade80", fontSize: 14, fontWeight: 700,
              letterSpacing: "0.08em", padding: "6px 14px", borderRadius: 99,
            }}>
              <div style={{ width: 8, height: 8, background: "#4ade80", borderRadius: "50%" }} />
              LIVE 2026-27
            </div>
          </div>

          {/* Headline */}
          <div style={{
            fontSize: 76, fontWeight: 800, color: "#f1f5f9",
            lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 20,
            display: "flex", flexDirection: "column",
          }}>
            <span>AI Football</span>
            <span style={{ color: "#60a5fa" }}>Predictions</span>
          </div>

          {/* Sub */}
          <div style={{
            fontSize: 24, color: "#475569", fontWeight: 400,
            letterSpacing: "0.01em", marginBottom: 44,
            display: "flex",
          }}>
            xG model · Scorelines · Best bets
          </div>

          {/* Pills */}
          <div style={{ display: "flex", gap: 12 }}>
            <div style={{
              padding: "10px 22px", borderRadius: 99, fontSize: 16, fontWeight: 600,
              background: "linear-gradient(135deg, #1e3a8a, #1e40af)",
              color: "#bfdbfe", border: "1px solid #2a5298", display: "flex",
            }}>
              Premier League
            </div>
            <div style={{
              padding: "10px 22px", borderRadius: 99, fontSize: 16, fontWeight: 600,
              background: "#0f0f1e", color: "#6b7280",
              border: "1px solid #1f2937", display: "flex",
            }}>
              La Liga
            </div>
          </div>
        </div>

        {/* Stats panel right side */}
        <div style={{
          position: "absolute", right: 88, bottom: 72,
          display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-end",
        }}>
          {[
            { label: "Home Win", pct: 62, color: "#3b82f6" },
            { label: "Draw",     pct: 24, color: "#6366f1" },
            { label: "Over 2.5", pct: 71, color: "#4ade80" },
            { label: "BTTS",     pct: 58, color: "#f59e0b" },
          ].map(row => (
            <div key={row.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 12, color: "#334155", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {row.label}
              </span>
              <div style={{ width: 120, height: 4, background: "#1e293b", borderRadius: 99, display: "flex" }}>
                <div style={{ width: `${row.pct}%`, height: "100%", background: row.color, borderRadius: 99 }} />
              </div>
              <span style={{ fontSize: 14, fontWeight: 700, color: "#94a3b8", minWidth: 36, textAlign: "right" }}>
                {row.pct}%
              </span>
            </div>
          ))}
        </div>

        {/* Domain */}
        <div style={{
          position: "absolute", bottom: 48, left: 88,
          fontSize: 15, color: "#1e3a5f", fontWeight: 500, letterSpacing: "0.04em",
        }}>
          pitchiq-app-pi.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}

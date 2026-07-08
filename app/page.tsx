"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const QF_MATCHES = [
  { id: 1, home: "France", away: "Morocco", date: "QF1", code1: "fr", code2: "ma" },
  { id: 2, home: "Spain", away: "Belgium", date: "QF2", code1: "es", code2: "be" },
  { id: 3, home: "England", away: "Norway", date: "QF3", code1: "gb-eng", code2: "no" },
  { id: 4, home: "Argentina", away: "Switzerland", date: "QF4", code1: "ar", code2: "ch" },
];

function Flag({ code, size = 28 }: { code: string; size?: number }) {
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
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm your WC2026 prediction assistant. Click a match to get a prediction, or ask me anything about the quarterfinals.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState<number | null>(null);
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

  const sel = selectedMatch ? QF_MATCHES[selectedMatch - 1] : null;

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
            QUARTERFINALS
          </span>
        </div>
      </header>

      <div className="flex-1 max-w-5xl mx-auto w-full px-4 py-5 flex flex-col gap-4">

        {/* Match cards */}
        <div>
          <p className="text-xs font-semibold mb-3 tracking-widest uppercase" style={{ color: "#2d3f5a" }}>
            Select a match
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {QF_MATCHES.map((m) => {
              const active = selectedMatch === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => { setSelectedMatch(m.id); sendMessage(`Give me the full prediction for ${m.home} vs ${m.away}`); }}
                  className="rounded-2xl p-4 text-left transition-all duration-150 hover:scale-[1.02]"
                  style={{
                    background: active ? "#0c1c38" : "#0d0d18",
                    border: `1px solid ${active ? "#2a5298" : "#1a1a2e"}`,
                    cursor: "pointer",
                    boxShadow: active ? "0 0 0 1px #2a5298" : "none",
                  }}
                >
                  <div className="text-xs font-bold mb-3 tracking-widest" style={{ color: active ? "#4f9cf9" : "#2d3f5a" }}>
                    {m.date}
                  </div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <Flag code={m.code1} size={22} />
                    <span className="font-semibold text-sm" style={{ color: "#f1f5f9" }}>{m.home}</span>
                  </div>
                  <div className="text-xs mb-2 pl-0.5" style={{ color: "#2d3f5a" }}>vs</div>
                  <div className="flex items-center gap-2.5">
                    <Flag code={m.code2} size={22} />
                    <span className="font-semibold text-sm" style={{ color: "#f1f5f9" }}>{m.away}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick questions */}
        {sel && (
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
    </div>
  );
}

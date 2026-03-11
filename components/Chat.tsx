"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function ask() {
    if (!input.trim()) return;
    const question = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: question }]);
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question })
      });
      if (!res.ok) {
        throw new Error("Request failed");
      }
      const data: { reply?: string } = await res.json();
      const reply = data.reply ?? "";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (e) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className="space-y-4 rounded-2xl border border-white/10 bg-[rgba(19,19,26,0.96)] p-6"
    >
      <div className="space-y-2 text-sm text-gray-300">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-300">
          Examples
        </p>
        <div className="flex flex-wrap gap-2 text-xs">
          {[
            "Who is Deepika?",
            "What projects show distributed systems experience?",
            "Explain Deepika’s trading AI system.",
            "What tools does she use for ML?"
          ].map((example) => (
            <button
              key={example}
              type="button"
              onClick={() => setInput(example)}
              className="font-mono rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] text-gray-200 hover:border-amber-400 hover:text-amber-300"
            >
              {example}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <input
            className="flex-1 rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-sm text-gray-100 outline-none placeholder:text-gray-500 focus:border-amber-400"
            placeholder="Ask about Deepika, her projects, or how she works..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                void ask();
              }
            }}
          />
          <button
            type="button"
            onClick={ask}
            disabled={loading}
            className="rounded-xl bg-amber-400 px-4 py-2 text-sm font-medium text-black shadow-lg shadow-amber-500/40 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:bg-gray-600"
          >
            {loading ? "Thinking..." : "Ask"}
          </button>
        </div>
        {error && <p className="text-xs text-red-400">{error}</p>}
      </div>

      <div className="max-h-64 space-y-3 overflow-y-auto rounded-xl border border-white/5 bg-black/40 p-3 text-sm">
        {messages.length === 0 && (
          <p className="text-xs text-gray-500">
            The agent is tuned to talk about Deepika&apos;s background, projects,
            and engineering decisions.
          </p>
        )}
        {messages.map((message, idx) => (
          <div
            key={idx}
            className={
              message.role === "user"
                ? "text-xs text-gray-200"
                : "rounded-lg bg-white/5 p-2 text-xs text-gray-100"
            }
          >
            <span className="mr-1 font-semibold text-accent2">
              {message.role === "user" ? "You" : "Agent"}:
            </span>
            {message.content}
          </div>
        ))}
      </div>
    </motion.div>
  );
}


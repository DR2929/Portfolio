"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string;
  detailForAI: string;
  index: number;
};

export default function ProjectCard({
  title,
  description,
  tech,
  detailForAI,
  index
}: ProjectCardProps) {
  const [loading, setLoading] = useState(false);
  const [explanation, setExplanation] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleExplain() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: detailForAI })
      });
      if (!res.ok) {
        throw new Error("Failed to generate explanation.");
      }
      const data: { explanation?: string } = await res.json();
      setExplanation(data.explanation ?? null);
    } catch (e) {
      setError("Could not generate explanation. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        y: -4,
        boxShadow: "0 18px 60px rgba(0,0,0,0.8)"
      }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[rgba(19,19,26,0.96)] p-6"
    >
      <div className="space-y-3">
        <p className="font-display text-4xl font-black text-amber-300/15">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="font-display text-lg font-semibold tracking-tight text-gray-50">
          {title}
        </h3>
        <p className="text-[13px] leading-relaxed text-gray-400">
          {description}
        </p>
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-amber-300/90">
          {tech}
        </p>
      </div>

      <div className="mt-5 space-y-3 text-sm">
        <button
          onClick={handleExplain}
          disabled={loading}
          className="font-mono inline-flex items-center gap-2 rounded-full border border-amber-500/50 bg-amber-500/10 px-4 py-1.5 text-[11px] font-medium text-amber-200 transition hover:bg-amber-400/20 disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-black/40 disabled:text-gray-400"
        >
          {loading ? "Thinking like a hiring manager..." : "Explain this project"}
        </button>

        {error && <p className="text-xs text-red-400">{error}</p>}

        {explanation && (
          <div className="rounded-xl border border-white/10 bg-black/40 p-3 text-xs text-gray-200">
            {explanation}
          </div>
        )}
      </div>
    </motion.div>
  );
}


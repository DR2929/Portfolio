"use client";

import { motion } from "framer-motion";

export default function StatsBar() {
  const stats: { label: string; value: string }[] = [
    { label: "Years experience (approx.)", value: "~3" },
    { label: "M.S. GPA (Montclair State)", value: "3.9" },
    { label: "Student records (datasets)", value: "25K+" },
    { label: "Weekly pipeline records", value: "10K+" },
    { label: "RAG embeddings (project)", value: "400K" }
  ];

  return (
    <div className="border-y border-white/10 bg-[rgba(12,12,14,0.85)] px-4 py-8 sm:px-6 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-6 text-center text-xs text-gray-300"
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.08 * idx }}
            className="flex flex-col items-center justify-center"
          >
            <span className="font-display text-2xl font-semibold text-amber-300 sm:text-3xl">
              {stat.value}
            </span>
            <span className="font-mono mt-1 text-[10px] uppercase tracking-[0.18em] text-gray-400">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function Divider() {
  return null;
}


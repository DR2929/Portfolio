"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const TERMINAL_LINES = [
  "deepika@nyc:~$ whoami",
  "AI software engineer shipping agentic systems,",
  "trading bots, and data-heavy products."
];

export default function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 400], [0, 60]);

  const [terminalTyped, setTerminalTyped] = useState("");
  const [nameTyped, setNameTyped] = useState("");

  useEffect(() => {
    const fullTerminal = TERMINAL_LINES.join("\n");
    let i = 0;
    const id = setInterval(() => {
      setTerminalTyped(fullTerminal.slice(0, i));
      i += 1;
      if (i > fullTerminal.length) {
        clearInterval(id);
      }
    }, 30);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const name = "Deepika Reddy Madduri";
    let i = 0;
    const id = setInterval(() => {
      setNameTyped(name.slice(0, i));
      i += 1;
      if (i > name.length) {
        clearInterval(id);
      }
    }, 80);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{ duration: 0.6 }}
      className="mx-auto flex max-w-5xl flex-col gap-10 md:flex-row md:items-center"
    >
      <div className="space-y-6 md:w-[65%]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="glass-card font-mono text-[11px] leading-relaxed text-amber-100/90"
        >
          <div className="flex items-center gap-1 border-b border-amber-500/20 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="h-2 w-2 rounded-full bg-rose-400" />
            <span className="ml-2 text-[10px] text-amber-200/70">
              terminal · profile.log
            </span>
          </div>
          <pre className="whitespace-pre-wrap px-3 py-2 text-[11px] text-amber-100">
            {terminalTyped}
            {terminalTyped.length < TERMINAL_LINES.join("\n").length ? (
              <span className="animate-pulse">▋</span>
            ) : null}
          </pre>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-balance text-4xl font-semibold tracking-tight text-amber-50 sm:text-5xl lg:text-6xl"
        >
          <span className="inline-block pr-1">{nameTyped || " "}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="max-w-xl text-sm text-gray-300 sm:text-base"
        >
          I&apos;m Deepika Reddy Madduri, an AI software engineer based in New
          York City. I&apos;ve worked across fintech, academia, and document AI,
          usually sitting where messy data, ML, and production constraints all
          meet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-2.5 text-sm font-medium text-black shadow-lg shadow-amber-500/40 transition hover:translate-y-0.5 hover:bg-amber-300"
          >
            View AI work
          </a>
          <a
            href="#ai-agent"
            className="inline-flex items-center justify-center rounded-full border border-amber-500/40 bg-black/40 px-6 py-2.5 text-sm font-medium text-amber-100 backdrop-blur-xl transition hover:translate-y-0.5 hover:border-amber-400 hover:text-amber-200"
          >
            Ask my AI agent
          </a>
        </motion.div>

        <div className="flex flex-wrap gap-2 text-[11px] text-gray-400">
          {[
            "AI / ML",
            "Multi-agent systems",
            "RAG pipelines",
            "Production dashboards",
            "Fintech & document AI"
          ].map((pill) => (
            <span
              key={pill}
              className="font-mono rounded-full border border-amber-500/20 bg-black/40 px-2.5 py-1 text-amber-100/90"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>

      <motion.div
        style={{ y: parallaxY }}
        initial={{ opacity: 0, x: 40, rotateY: -10 }}
        animate={{ opacity: 1, x: 0, rotateY: 0 }}
        whileHover={{ rotateX: 8, rotateY: -12, translateY: -6 }}
        transition={{ duration: 0.8, delay: 0.18, type: "spring", stiffness: 80 }}
        className="mt-4 flex justify-center md:mt-0 md:w-[35%]"
      >
        <div className="relative h-56 w-56 overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black shadow-[0_26px_70px_rgba(0,0,0,0.9)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0,_rgba(251,191,36,0.45),transparent_55%),radial-gradient(circle_at_80%_100%,_rgba(15,23,42,0.9),transparent_55%)]" />
          <div className="relative flex h-full flex-col justify-between p-4 text-xs text-amber-50">
            <div className="flex items-center justify-between">
              <span className="font-mono rounded-full bg-black/60 px-2 py-0.5 text-[10px] uppercase tracking-wide text-amber-200">
                Deepika · AI
              </span>
              <span className="font-mono text-[10px] text-amber-300">
                NYC · UTC-5
              </span>
            </div>
            <div className="space-y-1 text-[11px] leading-snug">
              <p>
                I build systems that argue with me in logs, then stay up making
                sure they don&apos;t win.
              </p>
            </div>
            <div className="flex items-center justify-between text-[10px] text-amber-300/80">
              <span className="font-mono">stack: Python · TypeScript · LLMs</span>
              <span className="font-mono">{`cat > ideas.txt`}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}


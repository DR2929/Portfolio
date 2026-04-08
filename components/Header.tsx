"use client";

import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#github", label: "GitHub" },
  { href: "#ai-agent", label: "AI Agent" },
  { href: "#contact", label: "Contact" }
];

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="pointer-events-none sticky top-0 z-40"
    >
      <div className="pointer-events-auto border-b border-white/10 bg-gradient-to-b from-black/70 via-black/40 to-transparent backdrop-blur-xl">
        <nav className="section flex items-center justify-between py-3 text-xs text-gray-200">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-[11px] font-semibold text-amber-300 shadow-lg shadow-amber-500/40">
              DRM
            </div>
            <div className="leading-tight">
              <p className="font-display text-[11px] font-semibold tracking-wide text-gray-50">
                Deepika Reddy Madduri
              </p>
              <p className="font-mono text-[10px] text-gray-400">
                AI Software Engineer · Jersey City, NJ
              </p>
            </div>
          </div>

          <ul className="hidden items-center gap-4 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3 py-1 text-[11px] text-gray-300 transition hover:bg-white/5 hover:text-accent2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}


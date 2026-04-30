"use client";

import { motion } from "framer-motion";

export type ExperienceCompany = {
  name: string;
  location: string;
  roles: { title: string; period: string; bullets: string[] }[];
};

type Props = {
  companies: ExperienceCompany[];
};

export default function ExperienceSection({ companies }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="relative border-l border-white/10 pl-6">
        {companies.map((company) => (
          <motion.div
            key={`${company.name}-${company.location}`}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="relative mb-8 pl-4"
          >
            <span className="absolute -left-[9px] top-2 h-2.5 w-2.5 rounded-full border-2 border-amber-400 bg-bg" />
            <div className="rounded-2xl border border-white/10 bg-[rgba(19,19,26,0.96)] p-4">
              <p className="font-display text-sm font-semibold text-gray-100">
                {company.name}
              </p>
              <p className="text-[11px] text-gray-500">{company.location}</p>
              <div className="mt-3 space-y-4">
                {company.roles.map((role) => (
                  <div key={`${role.title}-${role.period}`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="font-display text-[15px] font-semibold text-gray-100">
                        {role.title}
                      </p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-amber-300">
                        {role.period}
                      </p>
                    </div>
                    <ul className="mt-2 list-disc space-y-2 pl-4 text-[13px] leading-relaxed text-gray-400 marker:text-amber-500/60">
                      {role.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

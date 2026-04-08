"use client";

import { motion } from "framer-motion";

type Role = {
  title: string;
  period: string;
  bullets: string[];
};

type Company = {
  name: string;
  location: string;
  roles: Role[];
};

const companies: Company[] = [
  {
    name: "Montclair State University",
    location: "Montclair, NJ",
    roles: [
      {
        title: "Technical Analyst, Center for Academic Success and Tutoring",
        period: "Feb 2024 – Dec 2025",
        bullets: [
          "Generated and maintained operational datasets across teams for 25,000+ student records; built dashboards and reports for real-time monitoring of engagement and program health.",
          "Architected fault-tolerant data pipelines integrating Tutor.com, study hall, and recitation data with schema evolution, freshness SLAs (<24h), and automated backfill; sustained <1.5% failure rate and reduced cross-system inconsistencies ~30% across 10K+ weekly records.",
          "Implemented validation and drift monitoring (PSI) with weekly cycles and alerts (PSI > 0.2); held >95% precision and ~85% recall on anomalies, cutting invalid records ~20%.",
          "Built an early-warning model (logistic regression, engineered features, class weights) with threshold 0.7 for recall under ≥0.65 precision; reached 0.81 ROC-AUC vs. 0.63 baseline, with rule-based fallback for low-confidence bands.",
          "Delivered retention modeling with XGBoost and SHAP on cohorts; improved F1 ~17% vs. heuristics and supported interventions that raised retention ~13% in high-risk segments.",
          "Quantified dropout drivers with confidence intervals and effect sizes; thresholds adopted by stakeholders, reducing false positives in targeting ~12%."
        ]
      }
    ]
  },
  {
    name: "Accenture",
    location: "India",
    roles: [
      {
        title: "Software Engineer (Full Stack)",
        period: "Feb 2022 – Aug 2023",
        bullets: [
          "Fine-tuned BERT (Hugging Face) for intent and NER on ~15K multilingual fintech queries; raised precision ~18% (with regional recall tradeoffs).",
          "Built locale-aware preprocessing (Unicode normalization, rules, regex) across 6+ countries; cut parsing failures ~35%.",
          "Developed ETL with Pandas/SQLAlchemy on ~8K–10K daily records; resolved schema/null/duplicate issues; cut ingestion errors ~40%.",
          "Exposed inference via Flask REST APIs (~20–25 req/sec, ~150–200 DAU); improved latency to ~280–320ms via tracing, connection reuse, and payload tuning.",
          "Strengthened Jenkins pipelines (build → validation → deploy) with schema gates; cut deployment breakages ~20% on multi-region releases.",
          "Also supported large-scale platforms: SQL/PostgreSQL, Kibana, incident response (200+ critical incidents), and performance work contributing to reliability at scale."
        ]
      }
    ]
  },
  {
    name: "Infor",
    location: "Hyderabad, India",
    roles: [
      {
        title: "Junior Software Engineer",
        period: "Mar 2021 – Jan 2022",
        bullets: [
          "Refactored Spring Boot endpoints using composite BTREE-indexed queries and pagination; cut latency ~480ms → ~310ms under ~20 concurrent users.",
          "Built an OCR microservice (Python, Tesseract, logistic regression features); precision ~0.68 → ~0.81 on ~1.2K labeled samples.",
          "Enforced integrity via JSON schema, type/null checks, and uniqueness; cut duplicates ~25% and stabilized transaction success >97% on ~8K weekly entries.",
          "Improved tests (JUnit/Mockito) and reduced GC pressure ~12% via profiling and DTO refactors; standardized Jenkins configs and cut deployment failures ~20%."
        ]
      }
    ]
  }
];

export default function ExperienceSection() {
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
            key={company.name}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="relative mb-8 pl-4"
          >
            <span className="absolute -left-[9px] top-2 h-2.5 w-2.5 rounded-full border-2 border-amber-400 bg-bg" />
            <div className="rounded-2xl border border-white/10 bg-[rgba(19,19,26,0.96)] p-4">
              <div className="space-y-4">
                {company.roles.map((role) => (
                  <div key={role.title}>
                    <p className="font-display text-[15px] font-semibold leading-snug text-gray-100">
                      {company.name} — {role.title}
                    </p>
                    <p className="mt-1.5 text-[11px] text-gray-500">
                      {company.location}{" "}
                      <span className="text-gray-600">·</span>{" "}
                      <span className="font-mono text-[10px] tracking-[0.12em] text-amber-300">
                        {role.period}
                      </span>
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-4 text-[13px] leading-relaxed text-gray-400 marker:text-amber-500/60">
                      {role.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
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

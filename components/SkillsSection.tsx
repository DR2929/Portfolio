"use client";

import { motion } from "framer-motion";

type SkillGroup = {
  title: string;
  items: string[];
};

const groups: SkillGroup[] = [
  {
    title: "Programming & scripting",
    items: ["Python", "Java", "SQL", "JavaScript"]
  },
  {
    title: "Generative AI & LLMs",
    items: [
      "RAG",
      "LLM integration",
      "Prompt engineering & templates",
      "Semantic retrieval & embeddings",
      "AI guardrails & response validation",
      "Structured JSON outputs",
      "LLM evaluation & feedback loops",
      "AI-assisted decision support",
      "Multi-agent systems (AutoGen)"
    ]
  },
  {
    title: "Machine learning & NLP",
    items: [
      "Logistic regression & classification",
      "Predictive modeling",
      "Feature engineering & threshold tuning",
      "Drift monitoring & PSI-based validation",
      "NLP",
      "Sentence Transformers & SBERT",
      "OCR (Tesseract)",
      "Rule-based systems"
    ]
  },
  {
    title: "Data engineering & analytics",
    items: [
      "ETL pipelines",
      "Data validation & quality checks",
      "Schema evolution & backfill recovery",
      "Data cleaning & transformation",
      "Query-based reporting & KPI tracking",
      "Ad hoc & trend analysis",
      "Reporting automation"
    ]
  },
  {
    title: "Databases & storage",
    items: ["PostgreSQL", "SQLite", "ChromaDB"]
  },
  {
    title: "Backend & software engineering",
    items: [
      "RESTful APIs",
      "Spring Boot",
      "Microservices",
      "API contracts",
      "High-volume data processing",
      "Production support & incident resolution",
      "Performance optimization"
    ]
  },
  {
    title: "BI & visualization",
    items: [
      "Power BI",
      "Interactive dashboards",
      "Data visualization",
      "Performance & operational reporting"
    ]
  },
  {
    title: "Cloud, DevOps & tools",
    items: ["Jenkins", "Kibana", "Modal", "Gradio", "Git", "Pandas", "JUnit", "Mockito"]
  },
  {
    title: "Concepts & practices",
    items: [
      "Data modeling",
      "Query optimization & indexing",
      "Schema validation",
      "Unit & integration testing",
      "CI/CD",
      "System reliability",
      "Stakeholder & cross-functional collaboration"
    ]
  }
];

export default function SkillsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className="grid gap-5 md:grid-cols-3"
    >
      {groups.map((group) => (
        <motion.div
          key={group.title}
          whileHover={{ y: -3 }}
          transition={{ type: "spring", stiffness: 230, damping: 20 }}
          className="rounded-2xl border border-white/10 bg-[rgba(19,19,26,0.96)] p-5"
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-300">
              {group.title}
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="font-mono rounded-md bg-[#1c1c26] px-2.5 py-1 text-[11px] text-gray-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

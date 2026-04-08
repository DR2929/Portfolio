"use client";

import { motion } from "framer-motion";

type SkillGroup = {
  title: string;
  items: string[];
};

const groups: SkillGroup[] = [
  {
    title: "Programming",
    items: ["Python", "Java", "SQL", "JavaScript/TypeScript"]
  },
  {
    title: "ML & AI",
    items: [
      "Logistic Regression",
      "XGBoost",
      "BERT (Hugging Face)",
      "ROC-AUC, F1, precision/recall",
      "Threshold tuning",
      "Feature engineering",
      "SHAP",
      "Drift (PSI)",
      "RAG",
      "LLM integration",
      "NER",
      "Intent classification"
    ]
  },
  {
    title: "Data",
    items: [
      "ETL",
      "Validation",
      "Schema evolution",
      "Quality checks",
      "Normalization",
      "Backfill",
      "Cohort analysis"
    ]
  },
  {
    title: "Backend & APIs",
    items: ["Flask", "FastAPI", "Spring Boot", "REST", "Microservices"]
  },
  {
    title: "Data & AI (documents)",
    items: [
      "PyMuPDF",
      "pdfplumber",
      "Tesseract",
      "PaddleOCR",
      "EasyOCR",
      "LlamaIndex",
      "FAISS",
      "Chroma"
    ]
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "SQLAlchemy", "Indexing", "Query optimization"]
  },
  {
    title: "DevOps & quality",
    items: ["Jenkins", "CI/CD", "JUnit", "Mockito", "JSON schema validation"]
  },
  {
    title: "Frontend (as needed)",
    items: ["React", "Next.js", "Tailwind", "Gradio"]
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

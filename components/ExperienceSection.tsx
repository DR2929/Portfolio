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
    name: "Extern",
    location: "Remote",
    roles: [
      {
        title: "Pfizer Supply Chain Document Processing Extern",
        period: "Feb 2026 – Present",
        bullets: [
          "Building Python pipelines to extract and structure data from pharmaceutical PDFs using PyMuPDF and pdfplumber, reducing manual document processing time.",
          "Implementing and benchmarking OCR systems (Tesseract, PaddleOCR, EasyOCR) to automate label and scanned-document reading across low-quality images.",
          "Developing Retrieval-Augmented Generation (RAG) pipelines with LlamaIndex, FAISS, and Chroma to enable semantic search across large document repositories.",
          "Evaluating open-source LLMs (Gemini, Mistral, Phi-2) for document Q&A accuracy and deploying a Gradio-based chatbot interface for real-time document querying."
        ]
      }
    ]
  },
  {
    name: "Montclair State University",
    location: "Montclair, NJ",
    roles: [
      {
        title: "Technical Analyst – Center for Academic Success and Tutoring",
        period: "Feb 2024 – Dec 2025",
        bullets: [
          "Generated and maintained operational datasets across 3 teams, ensuring accuracy and consistency for 25,000+ student records.",
          "Built interactive dashboards and reports so program managers could monitor performance metrics and student engagement in real time.",
          "Analyzed tutoring program data to surface insights that informed staffing, scheduling, and resource allocation decisions."
        ]
      }
    ]
  },
  {
    name: "Accenture",
    location: "India",
    roles: [
      {
        title: "Full Stack Engineer",
        period: "Feb 2022 – Aug 2023",
        bullets: [
          "Engineered scalable solutions used across 6+ countries, enhancing platform availability for over 5 million users.",
          "Optimized database performance through indexing and query restructuring, cutting report load times from minutes to seconds.",
          "Diagnosed and resolved 200+ critical incidents, reducing system downtime by ~30% and improving bug resolution turnaround by ~40%.",
          "Designed and maintained complex SQL/PostgreSQL queries and Kibana dashboards to speed up operational reporting for multiple teams."
        ]
      }
    ]
  },
  {
    name: "Boston Consulting Group (BCG) – Forage",
    location: "Remote",
    roles: [
      {
        title: "BCG GenAI Job Simulation",
        period: "June 2025",
        bullets: [
          "Completed a GenAI job simulation focused on building an AI-powered financial chatbot.",
          "Integrated and interpreted 10-K and 10-Q data using Python and pandas, applying rule-based logic to provide user-friendly financial insights."
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
              <p className="font-display text-sm font-semibold text-gray-100">
                {company.name}
              </p>
              <p className="text-[11px] text-gray-500">{company.location}</p>
              <div className="mt-3 space-y-4">
                {company.roles.map((role) => (
                  <div key={role.title}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="font-display text-[15px] font-semibold text-gray-100">
                        {role.title}
                      </p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-amber-300">
                        {role.period}
                      </p>
                    </div>
                    <p className="mt-2 text-[13px] leading-relaxed text-gray-400">
                      {role.bullets[0]}
                    </p>
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


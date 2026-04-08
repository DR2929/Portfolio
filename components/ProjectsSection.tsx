"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Pfizer Supply Chain — Document Processing Extern",
    description:
      "Externship (via Extern), Remote · Feb 2026 – Present. Python pipelines for pharmaceutical PDFs (PyMuPDF, pdfplumber); OCR benchmarking (Tesseract, PaddleOCR, EasyOCR); RAG with LlamaIndex, FAISS, and Chroma; LLM evaluation (Gemini, Mistral, Phi-2) and a Gradio chatbot for document Q&A.",
    tech: "Python · PyMuPDF · OCR · LlamaIndex · FAISS · Chroma · Gradio",
    detailForAI: `
Pfizer Supply Chain — Document Processing Extern via Extern, Remote, Feb 2026–Present.
Building Python pipelines to extract and structure data from pharmaceutical PDFs using PyMuPDF and pdfplumber, reducing manual document handling.
Benchmarking OCR (Tesseract, PaddleOCR, EasyOCR) for labels and scanned documents across noisy inputs.
Developing RAG flows with LlamaIndex, FAISS, and Chroma for semantic search over large document sets.
Evaluating open-source LLMs (e.g., Gemini, Mistral, Phi-2) for document Q&A and shipping a Gradio chatbot for interactive querying.
`
  },
  {
    title: "Autonomous multi-agent bargain detection",
    description:
      "7-agent system on 100+ RSS feeds; RAG with ~400K embeddings (SentenceTransformer); MAE/RMSLE evaluation; deployed on Modal (~3s responses).",
    tech: "Python · LLMs · RAG · ChromaDB · Modal",
    detailForAI: `
Autonomous multi-agent bargain detection (resume): 7-agent system on 100+ RSS feeds; RAG with ~400K embeddings (SentenceTransformer); MAE/RMSLE evaluation; deployed on Modal (~3s responses).
`
  },
  {
    title: "Multi-agent trading with MCP",
    description:
      "4-agent platform with MCP tools; Polygon.io, Brave Search, multiple LLMs; SQLite state and Gradio dashboard (~25–30 reasoning steps per cycle).",
    tech: "Python · AutoGen · SQLite · Gradio",
    detailForAI: `
Multi-agent trading with MCP (resume): 4-agent platform with MCP tools; Polygon.io, Brave Search, multiple LLMs; SQLite state and Gradio dashboard (~25–30 reasoning steps per cycle).
`
  },
  {
    title: "BCG GenAI financial chatbot (Forage)",
    description:
      "Structured 10-K/10-Q data and rule-based NLP for metrics and insights (June 2025 simulation).",
    tech: "Python · Pandas · NLP · rules",
    detailForAI: `
BCG GenAI financial chatbot Forage (resume): Python, Pandas, NLP, rules — structured 10-K/10-Q data and rule-based NLP for metrics and insights; June 2025 simulation.
`
  }
];

export default function ProjectsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className="grid gap-6 md:grid-cols-2"
    >
      {projects.map((project, index) => (
        <ProjectCard key={project.title} index={index} {...project} />
      ))}
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Pfizer Supply Chain Document Processing",
    description:
      "RAG, OCR benchmarking, and LLM evaluation over pharmaceutical PDFs—externship project with a Gradio document chat UI.",
    tech: "LlamaIndex · FAISS · ChromaDB · PyMuPDF · Gradio · Extern",
    detailForAI: `
Designed and deployed RAG pipelines using LlamaIndex, FAISS, and ChromaDB to enable semantic search across pharmaceutical document repositories, reducing manual document retrieval effort for supply chain workflows.
Benchmarked OCR engines (Tesseract, PaddleOCR, EasyOCR) against low-quality scanned pharmaceutical labels, identifying optimal extraction configurations and improving character-level accuracy across degraded image inputs.
Evaluated open-source LLMs (Gemini, Mistral, Phi-2) for document Q&A accuracy on pharmaceutical use cases, comparing retrieval grounding quality, hallucination rates, and response consistency to identify production-viable models.
Built Python extraction pipelines using PyMuPDF and pdfplumber to parse and structure data from complex pharmaceutical PDFs, feeding clean outputs into downstream RAG and LLM workflows.
Deployed a Gradio-based document chat interface supporting real-time PDF upload and intelligent content querying, enabling non-technical end users to interrogate large document repositories through natural language.
`
  },
  {
    title: "Multi-Agent Trading Platform with MCP",
    description:
      "Four-agent trading simulation with AutoGen, market data, web search, SQLite portfolio state, and a Gradio monitoring dashboard.",
    tech: "Python · AutoGen · LLM integration · SQLite · Gradio",
    detailForAI: `
Built a 4-agent trading simulation platform in Python using AutoGen, where agents executed ~25–30 reasoning steps per cycle to support investment decision-making.
Developed a modular service layer integrating market data from Polygon.io, web search via Brave API, and multiple LLMs including OpenAI and Gemini for signal generation and analysis.
Implemented portfolio tracking for holdings, transactions, and P&L with SQLite persistence, and stabilized concurrent update issues through controlled execution flow.
Created a Gradio dashboard to monitor portfolio performance, transaction activity, and agent reasoning workflows, with average system latency of ~2–3 seconds per cycle.
`
  },
  {
    title: "Autonomous Deal Detection System",
    description:
      "Multi-agent pipeline over 100+ RSS feeds, ChromaDB retrieval at ~400K embeddings, and Modal deployment.",
    tech: "RAG · ChromaDB · SentenceTransformers · LLMs · Modal",
    detailForAI: `
Built a multi-agent deal detection pipeline that processed 100+ RSS feeds daily, combining rule-based filtering with LLM-based price estimation for product opportunity discovery.
Designed a retrieval-augmented workflow using ChromaDB with ~400K embeddings generated through SentenceTransformers for similarity-based product pricing and matching.
Evaluated model performance using MAE and RMSLE across ~250 test samples, improving prediction quality through iterative tuning and refinement.
Deployed the system on Modal with an average response time of ~3 seconds, while improving data quality through preprocessing enhancements for noisy product inputs.
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
      className="grid gap-6 md:grid-cols-3"
    >
      {projects.map((project, index) => (
        <ProjectCard key={project.title} index={index} {...project} />
      ))}
    </motion.div>
  );
}

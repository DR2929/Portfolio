 "use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Autonomous Multi-Agent System for Real-Time Bargain Detection",
    description:
      "A 7-agent system that scans RSS feeds, estimates prices with LLMs, and flags real-time product deals end-to-end.",
    tech: "Python · LLMs · RAG · ChromaDB · Modal",
    detailForAI: `
Designed and deployed a 7-agent autonomous system (planner, scanner, ensemble, messaging) that scans 100+ RSS feeds daily and uses LLM-based price estimation to identify real-time deals.
Implemented a RAG pipeline over a ChromaDB vector store built on 400K+ product descriptions using SentenceTransformer embeddings and metadata like category and price.
Evaluated the system on a labeled test set using MAE and RMSLE; added a reusable Tester class and 2D/3D t-SNE visualizations of the embedding space for diagnostics.
Productionized the full pipeline on Modal with response times under ~3 seconds for most queries.
`
  },
  {
    title: "Multi-Agent Trading with MCP",
    description:
      "A 4-agent autonomous trading platform where agents reason, research, and execute trades via MCP tools.",
    tech: "Python · AutoGen · SQLite · Gradio",
    detailForAI: `
Built a 4-agent trading platform (Python 3.12, AutoGen) where each agent can run up to 30 reasoning turns per cycle before acting.
Designed a modular MCP architecture with dedicated servers for accounts, market data, push notifications, and research so agents share a common protocol for portfolio operations and web search.
Integrated Polygon.io for market data, Brave Search for research, and multiple LLM backends (OpenAI, DeepSeek, Gemini, Grok) for more robust agent behavior.
Backed portfolio state, logs, and cached market data with SQLite, and exposed the whole system through a Gradio dashboard with real-time charts, holdings, and activity logs.
`
  },
  {
    title: "Document AI for Pharma Supply Chain",
    description:
      "Pipelines and RAG-powered tools to turn unstructured pharma PDFs into searchable, queryable knowledge.",
    tech: "Python · OCR · RAG · LLMs",
    detailForAI: `
Built Python pipelines using PyMuPDF and pdfplumber to extract and structure content from pharmaceutical PDFs, reducing manual document processing effort.
Benchmarked OCR systems (Tesseract, PaddleOCR, EasyOCR) to handle noisy labels and scanned documents.
Prototyped RAG pipelines with LlamaIndex, FAISS, and Chroma so users can run semantic search and Q&A across large document repositories.
Developed a Gradio-based chatbot that lets users upload documents and ask natural-language questions over the extracted content.
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


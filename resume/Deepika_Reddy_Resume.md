# Deepika Reddy Madduri

Jersey City, NJ | deepikareddymadduris@gmail.com | 551-804-1582  
[linkedin.com/in/deepikareddymadduri](https://www.linkedin.com/in/deepikareddymadduri) | [Portfolio (GitHub)](https://github.com/DR2929/Portfolio)

---

## Professional Summary

AI software engineer with ~3 years building data pipelines, ML models, and production backends in Python, SQL, and Java. Recent focus on document AI, RAG, and agentic systems for pharma supply chain and fintech. Strong background in ETL, validation, REST APIs, NLP (including BERT / Hugging Face), and classical ML (logistic regression, XGBoost), with experience improving data quality, model performance, and reliability on moderate-scale datasets.

---

## Skills

**Programming:** Python, Java, SQL, JavaScript/TypeScript  
**ML & AI:** Logistic Regression, XGBoost, BERT (Hugging Face), evaluation (ROC-AUC, F1, precision/recall), threshold tuning, feature engineering, SHAP, drift (PSI), RAG, LLM integration, NLP (NER, intent classification)  
**Data:** ETL, validation, schema evolution, quality checks, normalization, backfill, cohort analysis  
**Backend & APIs:** Flask, FastAPI, Spring Boot, REST, microservices  
**Data & AI (documents):** PyMuPDF, pdfplumber, OCR (Tesseract, PaddleOCR, EasyOCR), LlamaIndex, FAISS, Chroma  
**Databases:** PostgreSQL, SQLAlchemy, indexing/query optimization  
**DevOps & quality:** Jenkins, CI/CD, JUnit, Mockito, JSON schema validation  
**Frontend (as needed):** React, Next.js, Tailwind, Gradio  

---

## Professional Experience

### Montclair State University — Technical Analyst, Center for Academic Success and Tutoring  
**Montclair, NJ** · **Feb 2024 – Dec 2025**

- Generated and maintained operational datasets across teams for 25,000+ student records; built dashboards and reports for real-time monitoring of engagement and program health.
- Architected fault-tolerant data pipelines integrating Tutor.com, study hall, and recitation data with schema evolution, freshness SLAs (<24h), and automated backfill; sustained <1.5% failure rate and reduced cross-system inconsistencies ~30% across 10K+ weekly records.
- Implemented validation and drift monitoring (PSI) with weekly cycles and alerts (PSI > 0.2); held >95% precision and ~85% recall on anomalies, cutting invalid records ~20%.
- Built an early-warning model (logistic regression, engineered features, class weights) with threshold 0.7 for recall under ≥0.65 precision; reached 0.81 ROC-AUC vs. 0.63 baseline, with rule-based fallback for low-confidence bands.
- Delivered retention modeling with XGBoost and SHAP on cohorts; improved F1 ~17% vs. heuristics and supported interventions that raised retention ~13% in high-risk segments.
- Quantified dropout drivers with confidence intervals and effect sizes; thresholds adopted by stakeholders, reducing false positives in targeting ~12%.

### Accenture — Software Engineer (Full Stack)  
**India** · **Feb 2022 – Aug 2023**

- Fine-tuned BERT (Hugging Face) for intent and NER on ~15K multilingual fintech queries; raised precision ~18% (with regional recall tradeoffs).
- Built locale-aware preprocessing (Unicode normalization, rules, regex) across 6+ countries; cut parsing failures ~35%.
- Developed ETL with Pandas/SQLAlchemy on ~8K–10K daily records; resolved schema/null/duplicate issues; cut ingestion errors ~40%.
- Exposed inference via Flask REST APIs (~20–25 req/sec, ~150–200 DAU); improved latency to ~280–320ms via tracing, connection reuse, and payload tuning.
- Strengthened Jenkins pipelines (build → validation → deploy) with schema gates; cut deployment breakages ~20% on multi-region releases.
- *Also supported large-scale platforms:* SQL/PostgreSQL, Kibana, incident response (200+ critical incidents), and performance work contributing to reliability at scale.

### Infor — Junior Software Engineer  
**Hyderabad, India** · **Mar 2021 – Jan 2022**

- Refactored Spring Boot endpoints using composite BTREE-indexed queries and pagination; cut latency ~480ms → ~310ms under ~20 concurrent users.
- Built an OCR microservice (Python, Tesseract, logistic regression features); precision ~0.68 → ~0.81 on ~1.2K labeled samples.
- Enforced integrity via JSON schema, type/null checks, and uniqueness; cut duplicates ~25% and stabilized transaction success >97% on ~8K weekly entries.
- Improved tests (JUnit/Mockito) and reduced GC pressure ~12% via profiling and DTO refactors; standardized Jenkins configs and cut deployment failures ~20%.

---

## Education

**Montclair State University** — M.S., Computer Science (GPA 3.9)  
Relevant coursework: Software engineering, algorithms, operating systems, ML, computer architecture. Projects: multi-agent AI (LLMs, RAG), ML-based attendance, mobile apps.

**Bharath Institute of Engineering and Technology** — B.Tech, Electronics & Communication Engineering  

---

## Selected Projects

**Pfizer Supply Chain — Document Processing Extern (via Extern)** — Python, PyMuPDF, pdfplumber, OCR, RAG, LLMs  
**Remote · Feb 2026 – Present** — Building Python pipelines for pharmaceutical PDFs; benchmarking OCR (Tesseract, PaddleOCR, EasyOCR); RAG with LlamaIndex, FAISS, and Chroma; evaluating open-source LLMs (Gemini, Mistral, Phi-2) and shipping a Gradio chatbot for document Q&A.

**Autonomous multi-agent bargain detection** — Python, LLMs, RAG, ChromaDB, Modal  
7-agent system on 100+ RSS feeds; RAG with ~400K embeddings (SentenceTransformer); MAE/RMSLE evaluation; deployed on Modal (~3s responses).

**Multi-agent trading with MCP** — Python, AutoGen, SQLite, Gradio  
4-agent platform with MCP tools; Polygon.io, Brave Search, multiple LLMs; SQLite state and Gradio dashboard (~25–30 reasoning steps per cycle).

**BCG GenAI financial chatbot (Forage)** — Python, Pandas, NLP, rules  
Structured 10-K/10-Q data and rule-based NLP for metrics and insights (*June 2025 simulation*).

---

*Last updated: April 2026. Export this file to PDF from your editor or print dialog, or paste into Google Docs / Word and adjust layout.*

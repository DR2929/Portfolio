import OpenAI from "openai";
import { NextResponse } from "next/server";

const systemPrompt = `
You are an AI assistant that helps people learn about
Deepika Reddy Madduri.

You are NOT Deepika. Always speak as an assistant
in the third person ("she", "her work"), not as "I".

Facts come only from her resume (same content as her portfolio site):
- Location: Jersey City, NJ (NYC area). Contact: deepikareddymadduris@gmail.com.
- Professional summary: ~3 years on data pipelines, ML models, production backends (Python, SQL, Java);
  recent focus on document AI, RAG, agentic systems for pharma supply chain and fintech; ETL, validation,
  REST APIs, NLP (BERT/Hugging Face), classical ML (logistic regression, XGBoost).
- Education: M.S. Computer Science, Montclair State University, GPA 3.9; B.Tech ECE, Bharath Institute.
- Experience (in order, most recent first):
  - Montclair State University — Technical Analyst, Center for Academic Success and Tutoring, Montclair NJ,
    Feb 2024–Dec 2025: operational datasets 25K+ students; dashboards; data pipelines (Tutor.com, study hall,
    recitation); validation/drift PSI; early-warning and retention models (logistic regression, XGBoost/SHAP); etc.
  - Accenture — Software Engineer (Full Stack), India, Feb 2022–Aug 2023: BERT/NLP, ETL, Flask APIs, Jenkins;
    also large-scale platform support (SQL/PostgreSQL, Kibana, 200+ incidents).
  - Infor — Junior Software Engineer, Hyderabad, Mar 2021–Jan 2022: Spring Boot, OCR microservice, JSON schema,
    JUnit/Mockito, Jenkins.
- Selected projects: Pfizer Supply Chain document processing extern (via Extern, Feb 2026–Present): PDF pipelines,
  OCR, RAG (LlamaIndex/FAISS/Chroma), LLM evals, Gradio; autonomous multi-agent bargain detection (RAG, ChromaDB, Modal);
  multi-agent trading with MCP (AutoGen, SQLite, Gradio); BCG GenAI financial chatbot Forage (June 2025).
- Skills: see resume groupings — programming, ML/AI, data, backend, document AI stack, databases, DevOps, frontend as needed.

Tone and style:
- Sound like a thoughtful, grounded technical assistant who has actually read her profile.
- Be specific about systems, trade-offs, and how things behave in production.
- Avoid buzzword salads and over-hyping; keep it human and conversational.
- It is okay to say "I don't know" if something is outside the provided context.

Goal:
- Help recruiters, engineers, and founders quickly understand how she thinks,
  what she has built, and where she might fit on their team.
`;

export async function POST(req: Request) {
  try {
    const { message } = (await req.json()) as { message?: string };

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY is not configured." },
        { status: 500 }
      );
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ],
      temperature: 0.4
    });

    const reply = completion.choices[0]?.message?.content ?? "";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat route error", error);
    return NextResponse.json(
      { error: "Something went wrong generating a response." },
      { status: 500 }
    );
  }
}


import OpenAI from "openai";
import { NextResponse } from "next/server";
import { getWorkExperienceForAI } from "../../../lib/workExperience";

const systemPromptBase = `
You are an AI assistant that helps people learn about
Deepika Reddy Madduri.

You are NOT Deepika. Always speak as an assistant
in the third person ("she", "her work"), not as "I".

You may ONLY use the resume context below (and the embedded full work history) plus reasonable inferences from it.
Do not invent employers, dates, metrics, or tools that are not supported by that context.

Profile snapshot:
- Jersey City, NJ; MS Computer Science (GPA 3.9), Montclair State University; BTech ECE, Bharath Institute of Engineering and Technology, India.
- Skills: Python, Java, SQL, JavaScript; RAG/LLMs, data engineering, Power BI; PostgreSQL, SQLite, ChromaDB; Spring Boot, REST APIs; ETL, validation, drift/PSI, SBERT/embeddings, Jenkins, Kibana, Modal, Gradio, etc.
- Projects (high level): Pfizer supply-chain document AI extern (LlamaIndex, FAISS, ChromaDB, PyMuPDF, Gradio, OCR/LLM evals); multi-agent trading (AutoGen, MCP, SQLite, Gradio); autonomous deal detection (RSS, ChromaDB ~400K embeddings, Modal).

Tone and style:
- Sound like a thoughtful, grounded technical assistant who has actually read her profile.
- Be specific about systems, trade-offs, and how things behave in production; pull metrics and details from the full work history when relevant.
- Avoid buzzword salads and over-hyping; keep it human and conversational.
- It is okay to say "I don't know" if something is outside the provided context.

Goal:
- Help recruiters, engineers, and founders quickly understand how she thinks,
  what she has built, and where she might fit on their team.

---
`;

function buildSystemPrompt(): string {
  return `${systemPromptBase.trim()}

${getWorkExperienceForAI()}
`;
}

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
        { role: "system", content: buildSystemPrompt() },
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


import OpenAI from "openai";
import { NextResponse } from "next/server";

const systemPrompt = `
You are an AI assistant that helps people learn about
Deepika Reddy Madduri.

You are NOT Deepika. Always speak as an assistant
in the third person ("she", "her work"), not as "I".

You know only what is in her resume and LinkedIn:
- AI Software Engineer based in New York City.
- Master's in Computer Science at Montclair State University.
- Experience at Accenture as a full-stack engineer on large fintech platforms.
- Technical analyst work at Montclair State University on data systems and dashboards.
- Pfizer externship focused on document AI (PDF pipelines, OCR, RAG, LLM evaluations).
- Projects: multi-agent trading with MCP, autonomous bargain-detection agent system,
  and other ML/LLM/RAG work.
- Skills across Python, Java, TypeScript/React/Next.js, SQL, cloud-native architectures,
  ML/DL frameworks, and MLOps tooling.

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


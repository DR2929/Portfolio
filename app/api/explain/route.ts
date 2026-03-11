import OpenAI from "openai";
import { NextResponse } from "next/server";

const basePrompt = `
You are helping a senior engineering manager quickly understand a portfolio project.

Write a concise explanation of the project as if you were a senior engineer
reviewing it in an interview loop. Focus on:
- architecture and system design
- key engineering decisions and trade-offs
- scalability, reliability, and performance
- any AI / ML / LLM techniques involved

Keep it highly readable, 3–5 short paragraphs max.
Avoid buzzword salad; make it sound concrete and grounded.
`;

export async function POST(req: Request) {
  try {
    const { description } = (await req.json()) as { description?: string };

    if (!description || !description.trim()) {
      return NextResponse.json(
        { error: "Description is required." },
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

    const prompt = `${basePrompt}

Project details:
${description}
`;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You turn raw project notes into recruiter-friendly explanations." },
        { role: "user", content: prompt }
      ],
      temperature: 0.5
    });

    const explanation = completion.choices[0]?.message?.content ?? "";

    return NextResponse.json({ explanation });
  } catch (error) {
    console.error("Explain route error", error);
    return NextResponse.json(
      { error: "Something went wrong generating an explanation." },
      { status: 500 }
    );
  }
}


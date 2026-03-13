import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL =
  process.env.CONTACT_TO_EMAIL || "maddurideepikareddy@gmail.com";

export async function POST(req: Request) {
  try {
    const { name, email, message } = (await req.json()) as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const fromName = name?.trim() || "Portfolio visitor";
    const replyTo = email?.trim() || undefined;

    const result = await resend.emails.send({
      // IMPORTANT: use a verified sender from your Resend dashboard here
      from: "Deepika from Portfolio <onboarding@resend.dev>",
      to: [TO_EMAIL],
      replyTo: replyTo,
      subject: `Portfolio contact from ${fromName}`,
      text: `Name: ${fromName}\nEmail: ${email || "N/A"}\n\nMessage:\n${message}`,
    });

    if ("error" in result && result.error) {
      console.error("Resend error", result.error);
      return NextResponse.json(
        { error: "Email provider rejected the request." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact route error", error);
    return NextResponse.json(
      { error: "Something went wrong sending your message." },
      { status: 500 }
    );
  }
}


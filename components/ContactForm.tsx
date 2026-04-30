"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

const RECIPIENT_EMAIL = "maddurideepikareddy@gmail.com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFeedback("");
    setIsSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setFeedback("Message sent successfully. Thanks for reaching out.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      const messageText =
        error instanceof Error ? error.message : "Could not send message right now.";
      setFeedback(`${messageText} You can email directly at ${RECIPIENT_EMAIL}.`);
    } finally {
      setIsSending(false);
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(RECIPIENT_EMAIL);
      setFeedback("Email copied to clipboard.");
    } catch {
      setFeedback(`Copy failed. Please use: ${RECIPIENT_EMAIL}`);
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className="mx-auto mt-6 flex max-w-xl flex-col gap-3 text-left"
    >
      <div className="flex flex-col gap-1 text-sm">
        <label className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber-300">
          Name
        </label>
        <input
          required
          className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-gray-100 outline-none placeholder:text-gray-500 focus:border-amber-400"
          placeholder="How should I address you?"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1 text-sm">
        <label className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber-300">
          Email
        </label>
        <input
          required
          type="email"
          className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-gray-100 outline-none placeholder:text-gray-500 focus:border-amber-400"
          placeholder="Where can I reply?"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1 text-sm">
        <label className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber-300">
          Message
        </label>
        <textarea
          required
          className="min-h-[120px] rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-gray-100 outline-none placeholder:text-gray-500 focus:border-amber-400"
          placeholder="What would you like to build?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button
        type="submit"
        disabled={isSending}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-2.5 text-sm font-medium text-black shadow-lg shadow-amber-500/40 transition hover:bg-amber-300"
      >
        {isSending ? "Sending..." : "Send email"}
      </button>
      <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-gray-400">
        <button
          type="button"
          onClick={copyEmail}
          className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[11px] text-amber-200 transition hover:border-amber-400/60 hover:text-amber-100"
        >
          Copy email
        </button>
        <a
          href={`mailto:${RECIPIENT_EMAIL}`}
          className="font-mono text-[11px] text-amber-200 underline-offset-2 hover:text-amber-100 hover:underline"
        >
          {RECIPIENT_EMAIL}
        </a>
      </div>
      {feedback ? <p className="text-xs text-gray-400">{feedback}</p> : null}
    </motion.form>
  );
}


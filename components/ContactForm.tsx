"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setError("Something went wrong sending your message. Please try again.");
      setStatus("error");
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
          className="min-h-[120px] rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-gray-100 outline-none placeholder:text-gray-500 focus:border-amber-400"
          placeholder="What would you like to build?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="mt-2 flex flex-col gap-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-2.5 text-sm font-medium text-black shadow-lg shadow-amber-500/40 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Sending..." : "Send email"}
        </button>
        {status === "success" && (
          <p className="text-xs text-emerald-400">
            Got it—your message has been sent.
          </p>
        )}
        {status === "error" && error && (
          <p className="text-xs text-red-400">{error}</p>
        )}
      </div>
    </motion.form>
  );
}


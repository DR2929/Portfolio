import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import Header from "../components/Header";
import { Playfair_Display, JetBrains_Mono } from "next/font/google";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "Deepika Reddy Madduri | AI & Data",
  description:
    "AI-enabled data and software professional in Jersey City, NJ. RAG/LLMs, analytics, ETL, and backend engineering—Montclair State, Accenture, Infor, and selected projects."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${mono.variable} min-h-screen text-gray-200 antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}


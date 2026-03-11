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
  title: "Deepika Reddy Madduri | AI Software Engineer",
  description:
    "AI software engineer in NYC with experience at Accenture, Montclair State University, and Pfizer, building multi-agent systems, trading agents, and data-heavy products."
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


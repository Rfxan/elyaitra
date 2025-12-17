import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "elyAItra - AI-Powered Study Platform",
  description: "Transform your learning with AI. Launching January 8, 2026",
  keywords: "AI, Education, Study, Learning Platform",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#7c3aed" />
      </head>
      <body className={`${inter.className} bg-dark text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}

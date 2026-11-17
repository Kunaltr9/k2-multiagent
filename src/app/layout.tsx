import type { Metadata } from "next";
import { Newsreader, Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "K2 — AI Agents & Automation Studio",
    template: "%s | K2",
  },
  description:
    "We scope, pilot, and run AI agents for business workflows. One function at a time. Model-agnostic.",
  metadataBase: new URL("https://k2.ai"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "K2",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
        ${newsreader.variable}
        ${geistSans.variable}
        ${geistMono.variable}
        ${jetbrainsMono.variable}
        h-full
      `}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-bg)] text-[var(--color-ink)] antialiased">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

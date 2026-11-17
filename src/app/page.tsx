import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Reliability } from "@/components/sections/Reliability";
import { WhoItsFor } from "@/components/sections/WhoItsFor";
import { Work } from "@/components/sections/Work";
import { FAQ } from "@/components/sections/FAQ";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { Rule } from "@/components/ui/Rule";

/* ------------------------------------------------------------------ */
/* Metadata                                                              */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: "K2 — AI Agents & Automation Studio",
  description:
    "We build AI agents for real business workflows. One function at a time. Scoped, piloted, and run in production. Model-agnostic.",
  alternates: {
    canonical: "https://k2.ai",
  },
  openGraph: {
    title: "K2 — AI Agents & Automation Studio",
    description:
      "We build AI agents for real business workflows. One function at a time. Scoped, piloted, and run in production.",
    url: "https://k2.ai",
    siteName: "K2",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://k2.ai/og-default.png",
        width: 1200,
        height: 630,
        alt: "K2 — AI Agents & Automation Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "K2 — AI Agents & Automation Studio",
    description:
      "We build AI agents for real business workflows. One function at a time.",
    images: ["https://k2.ai/og-default.png"],
  },
};

/* ------------------------------------------------------------------ */
/* JSON-LD                                                               */
/* ------------------------------------------------------------------ */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "K2",
  url: "https://k2.ai",
  email: "hello@k2.ai",
  description:
    "AI agents and automation studio. We scope, pilot, and run AI agents for business workflows. One function at a time. Model-agnostic.",
  foundingLocation: {
    "@type": "Place",
    addressCountry: "IN",
  },
  knowsAbout: [
    "AI agents",
    "Business process automation",
    "Large language models",
    "Customer support automation",
    "Sales automation",
    "Knowledge management",
    "Internal tools",
  ],
  serviceType: [
    "Customer Support Automation",
    "Operations Automation",
    "Revenue & Sales Automation",
    "Knowledge & Search",
    "Internal Tools",
  ],
};

/* ------------------------------------------------------------------ */
/* Page                                                                  */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />
      <WhatWeDo />
      <HowItWorks />
      <Reliability />
      <WhoItsFor />
      <Work />
      <FAQ />
      <Rule />
      <ClosingCTA />
    </>
  );
}

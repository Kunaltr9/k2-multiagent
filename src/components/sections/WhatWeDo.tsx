import Link from "next/link";
import { Label } from "@/components/ui/Label";
import { Rule } from "@/components/ui/Rule";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Service = {
  name: string;
  description: string;
  href: string;
};

const SERVICES: Service[] = [
  {
    name: "Customer Support",
    description:
      "Triage, draft, and route support tickets. Handle high-volume, repetitive queries without touching the cases that need a person.",
    href: "/services/support",
  },
  {
    name: "Operations",
    description:
      "Automate the coordination work between systems — data entry, status checks, exception routing, report generation.",
    href: "/services/operations",
  },
  {
    name: "Revenue & Sales",
    description:
      "Qualify inbound leads, draft outreach, track pipeline state, and surface the accounts worth attention.",
    href: "/services/revenue",
  },
  {
    name: "Knowledge & Search",
    description:
      "Build internal search and Q&A over your documents, wikis, and databases so your team stops re-answering the same questions.",
    href: "/services/knowledge",
  },
  {
    name: "Internal Tools",
    description:
      "Connect the systems your team already uses. Build internal agents that run recurring tasks, generate reports, or answer operational questions.",
    href: "/services/internal-tools",
  },
];

function ServiceRow({ service }: { service: Service }) {
  return (
    <li>
      <Rule />
      <Link
        href={service.href}
        className="group flex items-start gap-6 py-6 md:py-7 transition-colors duration-[150ms] hover:text-[var(--color-ink)]"
        aria-label={`${service.name} — learn more`}
      >
        {/* Text */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-start">
          <h3 className="font-serif font-light text-[var(--text-h3)] leading-[var(--leading-snug)] tracking-[var(--tracking-tight)] col-span-1 md:col-span-4 text-[var(--color-ink)]">
            {service.name}
          </h3>
          <p className="font-sans text-[var(--text-body)] text-[var(--color-muted)] leading-[var(--leading-body)] col-span-1 md:col-span-7 group-hover:text-[var(--color-ink)] transition-colors duration-[150ms]">
            {service.description}
          </p>
        </div>

        {/* Arrow */}
        <span
          aria-hidden="true"
          className="shrink-0 mt-1 text-[var(--color-muted)] text-lg leading-none translate-x-0 transition-transform duration-[150ms] group-hover:translate-x-2 group-hover:text-[var(--color-accent)]"
        >
          →
        </span>
      </Link>
    </li>
  );
}

export function WhatWeDo() {
  return (
    <section aria-labelledby="services-heading" className="section">
      <Container>

        <div className="grid-12 mb-14">
          <div className="col-span-12 md:col-span-8 lg:col-span-7">
            <SectionHeading
              label="01 / Services"
              heading="We organise by function, not by industry."
              subheading="Pick the part of your business you want to fix first. We scope the specific workflow, not a vague automation strategy."
              id="services-heading"
            />
          </div>
        </div>

        <ul role="list" aria-label="Services">
          {SERVICES.map((s) => (
            <ServiceRow key={s.href} service={s} />
          ))}
          <li>
            <Rule />
          </li>
        </ul>

      </Container>
    </section>
  );
}

import Link from "next/link";
import { Rule } from "@/components/ui/Rule";
import { Label } from "@/components/ui/Label";

/* ------------------------------------------------------------------ */
/* Nav data                                                              */
/* ------------------------------------------------------------------ */

const COMPANY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/how-we-work", label: "How we work" },
  { href: "/work", label: "Work" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

const SERVICES_LINKS = [
  { href: "/services/support", label: "Customer Support" },
  { href: "/services/operations", label: "Operations" },
  { href: "/services/revenue", label: "Revenue & Sales" },
  { href: "/services/knowledge", label: "Knowledge & Search" },
  { href: "/services/internal-tools", label: "Internal Tools" },
] as const;

const RESOURCES_LINKS = [
  { href: "/insights", label: "Insights" },
  { href: "/styleguide", label: "Styleguide" },
] as const;

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms", label: "Terms" },
] as const;

/* ------------------------------------------------------------------ */
/* Sub-components                                                        */
/* ------------------------------------------------------------------ */

function FooterCol({
  heading,
  links,
}: {
  heading: string;
  links: ReadonlyArray<{ href: string; label: string }>;
}) {
  return (
    <div className="flex flex-col gap-4">
      <Label as="span">{heading}</Label>
      <ul className="flex flex-col gap-2.5" role="list">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="font-sans text-[var(--text-small)] text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors duration-[150ms]"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                                */
/* ------------------------------------------------------------------ */

export function Footer() {
  // Hardcoded — update annually. Using new Date() is flagged by Next.js prerender checks.
  const year = 2026;

  return (
    <footer className="bg-[var(--color-bg)] border-t border-[var(--color-hairline)]">
      <div className="container-outer">
        {/* Top section — 4 columns */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Col 1 — Company */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-6">
            {/* Wordmark */}
            <Link
              href="/"
              aria-label="K2 — home"
              className="font-serif text-[1.375rem] font-light tracking-[-0.02em] text-[var(--color-ink)] hover:opacity-70 transition-opacity duration-[150ms] self-start"
            >
              K2
            </Link>
            <p className="text-[var(--text-small)] text-[var(--color-muted)] leading-relaxed max-w-[22ch]">
              AI agents and automation for business workflows. One function at a time.
            </p>
          </div>

          {/* Col 2 — Company links */}
          <FooterCol heading="Company" links={COMPANY_LINKS} />

          {/* Col 3 — Services */}
          <FooterCol heading="Services" links={SERVICES_LINKS} />

          {/* Col 4 — Resources + Contact */}
          <div className="flex flex-col gap-10">
            <FooterCol heading="Resources" links={RESOURCES_LINKS} />
            <div className="flex flex-col gap-4">
              <Label as="span">Contact</Label>
              <a
                href="mailto:hello@k2.ai"
                className="font-sans text-[var(--text-small)] text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors duration-[150ms]"
              >
                hello@k2.ai
              </a>
            </div>
          </div>
        </div>

        <Rule />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-6">
            {LEGAL_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-sans text-[0.75rem] text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors duration-[150ms]"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-1 sm:items-end">
            <p className="font-sans text-[0.75rem] text-[var(--color-muted)]">
              &copy; {year} K2. All rights reserved.
            </p>
            <p className="font-mono text-[0.6875rem] text-[var(--color-hairline)] tracking-wide uppercase">
              Built in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

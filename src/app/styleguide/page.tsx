import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { Rule } from "@/components/ui/Rule";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Callout } from "@/components/ui/Callout";
import { Placeholder } from "@/components/ui/Placeholder";
import { Accordion } from "@/components/ui/Accordion";
import { StyleguideForm } from "./StyleguideForm";

export const metadata: Metadata = {
  title: "Styleguide",
  robots: { index: false, follow: false },
};

/* ------------------------------------------------------------------ */
/* Section wrapper for the styleguide                                    */
/* ------------------------------------------------------------------ */

function SgSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-14">
      <div className="mb-8">
        <span className="label-mono text-[var(--color-highlight)]">{title}</span>
        <Rule className="mt-3" />
      </div>
      {children}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Colour swatch                                                         */
/* ------------------------------------------------------------------ */

function Swatch({
  bg,
  label,
  textClass = "text-[var(--color-muted)]",
}: {
  bg: string;
  label: string;
  textClass?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="h-16 w-full border border-[var(--color-hairline)]"
        style={{ backgroundColor: bg }}
        aria-hidden="true"
      />
      <span className={["font-mono text-[0.6875rem] tracking-wide uppercase", textClass].join(" ")}>
        {label}
      </span>
      <span className="font-mono text-[0.6875rem] text-[var(--color-muted)]">{bg}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ demo data                                                         */
/* ------------------------------------------------------------------ */

const FAQ_ITEMS = [
  {
    id: "q1",
    question: "Do you work with any industry?",
    answer:
      "We organise by business function, not industry. If you have a workflow in support, operations, revenue, knowledge management, or internal tooling, we can scope it regardless of your sector.",
  },
  {
    id: "q2",
    question: "What does the pilot involve?",
    answer:
      "A scoped, time-boxed build against one real workflow. You run it in a controlled environment, measure the outcome against a baseline, then decide whether to move to production.",
  },
  {
    id: "q3",
    question: "Which AI models do you use?",
    answer:
      "We are model-agnostic. The choice depends on the task, latency requirements, cost constraints, and your data residency needs. We do not have a preferred vendor.",
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                  */
/* ------------------------------------------------------------------ */

export default function StyleguidePage() {
  return (
    <div className="bg-[var(--color-bg)]">
      {/* Page header */}
      <div className="border-b border-[var(--color-hairline)] bg-[var(--color-surface)]">
        <Container className="py-10">
          <Label as="p" className="mb-3">Internal / noindex</Label>
          <h1 className="font-serif font-light text-[var(--text-h1)] tracking-[var(--tracking-tight)] leading-[var(--leading-tight)]">
            Design system
          </h1>
          <p className="mt-4 text-[var(--color-muted)] max-w-[52ch]">
            All tokens, components, and patterns used across the site. Not indexed by search engines.
          </p>
        </Container>
      </div>

      <Container className="pb-24">

        {/* ── Colour ─────────────────────────────────────────────────── */}
        <SgSection title="01 / Colour">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            <Swatch bg="#F6F4EF" label="Background" />
            <Swatch bg="#EFEDE7" label="Surface" />
            <Swatch bg="#DAD6CC" label="Hairline" />
            <Swatch bg="#5B6068" label="Muted" />
            <Swatch bg="#14161A" label="Ink" textClass="text-[#F6F4EF]" />
            <Swatch bg="#1F4D3A" label="Accent" textClass="text-[#F6F4EF]" />
            <Swatch bg="#173A2C" label="Accent hover" textClass="text-[#F6F4EF]" />
            <Swatch bg="#C8553D" label="Highlight" textClass="text-[#F6F4EF]" />
          </div>
        </SgSection>

        {/* ── Typography ─────────────────────────────────────────────── */}
        <SgSection title="02 / Typography">
          <div className="flex flex-col gap-10">

            <div className="flex flex-col gap-1">
              <Label as="p" className="mb-3">Serif — Newsreader</Label>
              <p className="font-serif font-light leading-[1.1] tracking-[-0.02em]"
                 style={{ fontSize: "var(--text-display)" }}>
                Display heading
              </p>
              <p className="font-serif font-light leading-[1.1] tracking-[-0.02em]"
                 style={{ fontSize: "var(--text-h1)" }}>
                Heading one
              </p>
              <p className="font-serif font-light leading-[1.1] tracking-[-0.02em]"
                 style={{ fontSize: "var(--text-h2)" }}>
                Heading two
              </p>
              <p className="font-serif font-light leading-[1.3] tracking-[-0.02em]"
                 style={{ fontSize: "var(--text-h3)" }}>
                Heading three
              </p>
              <p className="font-serif italic text-[var(--color-muted)]"
                 style={{ fontSize: "var(--text-h3)" }}>
                Serif italic
              </p>
            </div>

            <Rule />

            <div className="flex flex-col gap-4">
              <Label as="p" className="mb-1">Sans — Geist</Label>
              <p className="font-sans text-[var(--text-body)] leading-[var(--leading-body)] max-w-[68ch]">
                Body text. We scope one workflow at a time, run a time-boxed pilot,
                then move to production only when the numbers hold. Plain language,
                specific outcomes, no vague commitments.
              </p>
              <p className="font-sans text-[var(--text-small)] text-[var(--color-muted)] max-w-[68ch]">
                Small text — 14px. Used for captions, metadata, and secondary copy that
                supports the main read without competing with it.
              </p>
            </div>

            <Rule />

            <div className="flex flex-col gap-3">
              <Label as="p" className="mb-1">Mono — JetBrains Mono</Label>
              <p className="label-mono">01 / Section label</p>
              <p className="font-mono text-[var(--text-small)] text-[var(--color-muted)]">
                Metadata, timestamps, code snippets
              </p>
              <code className="font-mono text-[var(--text-small)] bg-[var(--color-surface)] px-3 py-2 self-start border border-[var(--color-hairline)]">
                const agent = new Agent(config);
              </code>
            </div>

          </div>
        </SgSection>

        {/* ── Buttons ────────────────────────────────────────────────── */}
        <SgSection title="03 / Buttons">
          <div className="flex flex-col gap-10">
            <div>
              <Label as="p" className="mb-5">On light background</Label>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary">Book a discovery call</Button>
                <Button variant="secondary">See how we work</Button>
                <Button variant="text">Read the case study</Button>
              </div>
            </div>
            <div>
              <Label as="p" className="mb-5">Small size</Label>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="sm">Book a call</Button>
                <Button variant="secondary" size="sm">Learn more</Button>
                <Button variant="text" size="sm">View all</Button>
              </div>
            </div>
            <div>
              <Label as="p" className="mb-5">As links</Label>
              <div className="flex flex-wrap items-center gap-4">
                <Button href="/contact" variant="primary">Book a discovery call</Button>
                <Button href="/how-we-work" variant="secondary">See how we work</Button>
                <Button href="/work" variant="text">View our work</Button>
              </div>
            </div>
            <div className="section-dark p-8 -mx-4 sm:mx-0 sm:rounded-none">
              <Label as="p" className="mb-5" inverted>On dark background</Label>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary">Book a discovery call</Button>
                <Button variant="secondary">See how we work</Button>
                <Button variant="text">Read more</Button>
              </div>
            </div>
          </div>
        </SgSection>

        {/* ── Label ──────────────────────────────────────────────────── */}
        <SgSection title="04 / Label">
          <div className="flex flex-col gap-4">
            <Label as="p">01 / Services</Label>
            <Label as="p">02 / How we work</Label>
            <Label as="p">03 / Work</Label>
            <div className="section-dark p-6 -mx-4 sm:mx-0">
              <Label as="p" inverted>04 / Insights — inverted</Label>
            </div>
          </div>
        </SgSection>

        {/* ── Section Heading ────────────────────────────────────────── */}
        <SgSection title="05 / Section heading">
          <div className="flex flex-col gap-16">
            <SectionHeading
              label="01 / Services"
              heading="We build agents for the functions that run your business."
              subheading="Support, operations, revenue, knowledge management, internal tools. We start with one workflow and prove it before scaling."
            />
            <Rule />
            <SectionHeading
              heading="No label variant"
              subheading="Sometimes the label is redundant. The heading stands alone."
            />
            <div className="section-dark p-10 -mx-4 sm:mx-0">
              <SectionHeading
                label="02 / How we work"
                heading="One workflow. One pilot. Real numbers."
                subheading="We do not build platforms. We solve specific problems in a fixed scope."
                inverted
              />
            </div>
          </div>
        </SgSection>

        {/* ── Rule ───────────────────────────────────────────────────── */}
        <SgSection title="06 / Rule">
          <div className="flex flex-col gap-6">
            <Rule />
            <div className="section-dark p-6 -mx-4 sm:mx-0">
              <Rule inverted />
            </div>
          </div>
        </SgSection>

        {/* ── Cards ──────────────────────────────────────────────────── */}
        <SgSection title="07 / Cards">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Card variant="bordered">
              <Label as="p" className="mb-3">Bordered card</Label>
              <p className="font-serif font-light text-[1.25rem] leading-snug mb-3">
                A specific problem, scoped and timed.
              </p>
              <p className="text-[var(--text-small)] text-[var(--color-muted)]">
                We define success criteria before we write a line of code.
              </p>
            </Card>
            <Card variant="flat">
              <Label as="p" className="mb-3">Flat card</Label>
              <p className="font-serif font-light text-[1.25rem] leading-snug mb-3">
                Surface background, no border.
              </p>
              <p className="text-[var(--text-small)] text-[var(--color-muted)]">
                Used for feature callouts and secondary content blocks.
              </p>
            </Card>
            <Card variant="ruled">
              <Label as="p" className="mb-3">Ruled card</Label>
              <p className="font-serif font-light text-[1.25rem] leading-snug mb-3">
                Top border only, no box.
              </p>
              <p className="text-[var(--text-small)] text-[var(--color-muted)]">
                Good for list items and stepped content.
              </p>
            </Card>
          </div>
        </SgSection>

        {/* ── Callout ────────────────────────────────────────────────── */}
        <SgSection title="08 / Callout">
          <div className="flex flex-col gap-4 max-w-[640px]">
            <Callout variant="note">
              Note callout — neutral context, supplementary information that supports
              the main copy without interrupting flow.
            </Callout>
            <Callout variant="action">
              Action callout — green accent. Use to draw attention to a next step
              or a key fact that affects a decision.
            </Callout>
            <Callout variant="warn">
              Warning callout — red highlight. Used sparingly, only when something
              genuinely needs caution. Not for decoration.
            </Callout>
          </div>
        </SgSection>

        {/* ── Accordion ──────────────────────────────────────────────── */}
        <SgSection title="09 / Accordion">
          <div className="max-w-[640px] flex flex-col gap-12">
            <div>
              <Label as="p" className="mb-6">Single open (default)</Label>
              <Accordion items={FAQ_ITEMS} />
            </div>
            <div>
              <Label as="p" className="mb-6">Multi open</Label>
              <Accordion items={FAQ_ITEMS} multi />
            </div>
            <div className="section-dark p-8 -mx-4 sm:mx-0">
              <Label as="p" inverted className="mb-6">Inverted</Label>
              <Accordion items={FAQ_ITEMS} inverted />
            </div>
          </div>
        </SgSection>

        <SgSection title="10 / Form fields">
          <StyleguideForm />
        </SgSection>

        {/* ── Placeholder ────────────────────────────────────────────── */}
        <SgSection title="11 / Placeholder (dev only)">
          <div className="flex flex-col gap-4">
            <Placeholder label="Client logos — 3–5 real client logos needed" />
            <Placeholder
              label="Case study hero image — 16:9, real project screenshot"
              height="h-48"
            />
            <Placeholder label="Testimonial — quote from a pilot client" height="h-32" />
            <p className="text-[var(--text-small)] text-[var(--color-muted)]">
              These boxes are hidden in production (<code className="font-mono">NODE_ENV === &apos;production&apos;</code>).
            </p>
          </div>
        </SgSection>

        {/* ── Container / Layout ─────────────────────────────────────── */}
        <SgSection title="12 / Container &amp; grid">
          <div className="flex flex-col gap-6">
            <Label as="p" className="mb-2">12-column grid</Label>
            <div className="grid-12">
              {Array.from({ length: 12 }, (_, i) => (
                <div
                  key={i}
                  className="h-10 bg-[var(--color-surface)] border border-[var(--color-hairline)] flex items-center justify-center"
                >
                  <span className="font-mono text-[0.625rem] text-[var(--color-muted)]">{i + 1}</span>
                </div>
              ))}
            </div>

            <Label as="p" className="mt-6 mb-2">5/7 asymmetric split</Label>
            <div className="grid-12">
              <div className="col-span-12 md:col-span-5 bg-[var(--color-surface)] border border-[var(--color-hairline)] p-4 flex items-center justify-center">
                <span className="label-mono">5 cols</span>
              </div>
              <div className="col-span-12 md:col-span-7 bg-[var(--color-surface)] border border-[var(--color-hairline)] p-4 flex items-center justify-center">
                <span className="label-mono">7 cols</span>
              </div>
            </div>
          </div>
        </SgSection>

      </Container>
    </div>
  );
}

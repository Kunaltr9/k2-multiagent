import { Label } from "@/components/ui/Label";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

type Step = {
  number: string;
  name: string;
  duration: string;
  description: string;
  deliverable: string;
};

const STEPS: Step[] = [
  {
    number: "01",
    name: "Discovery sprint",
    duration: "2 weeks",
    description:
      "We map the workflow end-to-end, identify where an agent fits, and define what success looks like in measurable terms.",
    deliverable: "Scope document and success criteria",
  },
  {
    number: "02",
    name: "Pilot",
    duration: "4–8 weeks",
    description:
      "We build the agent against one real workflow and run it in a controlled environment alongside your existing process.",
    deliverable: "Working agent, baseline comparison, go/no-go recommendation",
  },
  {
    number: "03",
    name: "Production rollout",
    duration: "2–4 weeks",
    description:
      "If the pilot holds, we harden the agent, connect it to your production systems, and train whoever runs it day-to-day.",
    deliverable: "Production deployment, runbook, handover session",
  },
  {
    number: "04",
    name: "Run & improve",
    duration: "Ongoing",
    description:
      "We monitor performance, handle edge cases, and make incremental improvements. You get a monthly summary of what it did and what it cost.",
    deliverable: "Monthly performance report, versioned updates",
  },
];

export function HowItWorks() {
  return (
    <section
      aria-labelledby="process-heading"
      className="section bg-[var(--color-surface)] border-y border-[var(--color-hairline)]"
    >
      <Container>

        <div className="grid-12 mb-14">
          <div className="col-span-12 md:col-span-8 lg:col-span-7">
            <SectionHeading
              label="02 / How it works"
              heading="One workflow. One pilot. Real numbers before you commit."
              subheading="We do not ask for a platform budget upfront. The process is designed to prove value at each step before the next one starts."
              id="process-heading"
            />
          </div>
        </div>

        {/* Steps grid — horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className="relative flex flex-col gap-4 py-8 lg:py-0 lg:pr-8 border-t border-[var(--color-hairline)] lg:border-t-0 lg:border-l first:border-t-0 lg:first:border-l-0 lg:pl-8 lg:first:pl-0"
            >
              {/* Step connector line — desktop only */}
              {i < STEPS.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute top-5 right-0 w-px h-6 bg-[var(--color-hairline)] translate-x-0"
                />
              )}

              {/* Number + duration */}
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[0.6875rem] text-[var(--color-muted)] tracking-[0.1em] uppercase">
                  {step.number}
                </span>
                <span className="font-mono text-[0.6875rem] text-[var(--color-accent)] tracking-[0.08em] uppercase">
                  {step.duration}
                </span>
              </div>

              {/* Name */}
              <h3 className="font-serif font-light text-[var(--text-h3)] leading-[var(--leading-snug)] tracking-[var(--tracking-tight)] text-[var(--color-ink)]">
                {step.name}
              </h3>

              {/* Description */}
              <p className="font-sans text-[var(--text-small)] text-[var(--color-muted)] leading-[var(--leading-body)]">
                {step.description}
              </p>

              {/* Deliverable */}
              <div className="mt-auto pt-4 border-t border-[var(--color-hairline)]">
                <span className="label-mono block mb-1">Deliverable</span>
                <span className="font-sans text-[var(--text-small)] text-[var(--color-ink)]">
                  {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-[var(--color-hairline)]">
          <Button href="/how-we-work" variant="text">
            Read the full process
          </Button>
        </div>

      </Container>
    </section>
  );
}

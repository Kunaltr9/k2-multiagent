import Link from "next/link";
import { Label } from "@/components/ui/Label";
import { Rule } from "@/components/ui/Rule";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ReliabilityPoint = {
  number: string;
  heading: string;
  body: string;
};

const POINTS: ReliabilityPoint[] = [
  {
    number: "01",
    heading: "Every agent run is evaluated before it acts",
    body: "Outputs are scored against defined criteria before they reach a customer or trigger a downstream system. Runs that fall below threshold are held for review, not silently discarded.",
  },
  {
    number: "02",
    heading: "Human approval is built into the workflow, not bolted on",
    body: "We identify the decisions that should stay with a person and design the approval step into the agent's flow from day one. Automation handles volume; people handle judgment.",
  },
  {
    number: "03",
    heading: "Your data does not train anyone's model",
    body: "We work with model providers that offer zero data retention on inference calls. Customer data, internal documents, and business logic stay within your infrastructure or a dedicated environment.",
  },
  {
    number: "04",
    heading: "Cost and usage are monitored continuously",
    body: "Every production agent has spend limits and usage alerts. You see a monthly breakdown of what ran, what it cost, and where the volume came from. No surprise bills.",
  },
];

export function Reliability() {
  return (
    <section
      aria-labelledby="reliability-heading"
      className="section section-dark"
    >
      <Container>

        <div className="grid-12 mb-14">
          <div className="col-span-12 md:col-span-8 lg:col-span-7">
            <SectionHeading
              label="03 / How we keep it reliable"
              heading="Agents make mistakes. The system around them should not."
              subheading="We build evaluation, approval, data handling, and cost controls into every deployment."
              inverted
              id="reliability-heading"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {POINTS.map((point, i) => (
            <div
              key={point.number}
              className={[
                "flex flex-col gap-4 py-8 md:px-0",
                "border-t border-[var(--color-dark-hairline)]",
                // Right column gets left padding on md+
                i % 2 === 1 ? "md:pl-10" : "md:pr-10",
                // Right column gets left border on md+
                i % 2 === 1 ? "md:border-l md:border-[var(--color-dark-hairline)]" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span className="font-mono text-[0.6875rem] text-[var(--color-dark-muted)] tracking-[0.1em] uppercase">
                {point.number}
              </span>
              <h3 className="font-serif font-light text-[var(--text-h3)] leading-[var(--leading-snug)] tracking-[var(--tracking-tight)] text-[var(--color-dark-text)]">
                {point.heading}
              </h3>
              <p className="font-sans text-[var(--text-body)] text-[var(--color-dark-muted)] leading-[var(--leading-body)]">
                {point.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-[var(--color-dark-hairline)]">
          <Link
            href="/trust"
            className="font-sans text-[var(--text-small)] text-[var(--color-dark-muted)] hover:text-[var(--color-dark-text)] transition-colors duration-[150ms] inline-flex items-center gap-2 group"
          >
            Read our full approach to security and data handling
            <span
              aria-hidden="true"
              className="inline-block translate-x-0 transition-transform duration-[150ms] group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

      </Container>
    </section>
  );
}

import { Label } from "@/components/ui/Label";
import { Rule } from "@/components/ui/Rule";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Placeholder } from "@/components/ui/Placeholder";

type InProgressItem = {
  name: string;
  description: string;
  function: string;
};

const IN_PROGRESS: InProgressItem[] = [
  {
    name: "Support triage agent",
    description:
      "Classifies inbound support tickets, checks order history, and drafts a reply for agent review. Built against a 300-ticket dataset.",
    function: "Customer Support",
  },
  {
    name: "Internal knowledge search",
    description:
      "Answers operational questions over a company's internal wiki and policy documents. Uses retrieval-augmented generation with a source citation on every answer.",
    function: "Knowledge & Search",
  },
  {
    name: "Lead qualification pipeline",
    description:
      "Scores inbound leads from a web form, enriches with public data, and routes qualified leads to a rep with a summary. Unqualified leads get a holding reply.",
    function: "Revenue & Sales",
  },
];

export function Work() {
  return (
    <section aria-labelledby="work-heading" className="section bg-[var(--color-surface)] border-y border-[var(--color-hairline)]">
      <Container>

        <div className="grid-12 mb-14">
          <div className="col-span-12 md:col-span-8 lg:col-span-7">
            <SectionHeading
              label="05 / Work"
              heading="We are building our first public case studies."
              subheading="We do not publish work without a client's sign-off. These will appear here when they are ready."
              id="work-heading"
            />
          </div>
        </div>

        {/* Future case study placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Placeholder
            label="Case study 01 — client name, function, outcome metrics"
            height="h-56"
          />
          <Placeholder
            label="Case study 02 — client name, function, outcome metrics"
            height="h-56"
          />
        </div>

        {/* In-progress prototypes */}
        <div>
          <Label as="p" className="mb-8">Currently building</Label>

          <ul role="list" className="flex flex-col">
            {IN_PROGRESS.map((item, i) => (
              <li key={i}>
                <Rule />
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 py-7 items-start">

                  {/* Status badge */}
                  <div className="col-span-1 md:col-span-2 flex items-center gap-2 mt-0.5">
                    <span
                      aria-hidden="true"
                      className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0"
                    />
                    <span className="font-mono text-[0.6875rem] text-[var(--color-accent)] tracking-[0.08em] uppercase">
                      In progress
                    </span>
                  </div>

                  {/* Name + description */}
                  <div className="col-span-1 md:col-span-7 flex flex-col gap-2">
                    <h3 className="font-serif font-light text-[1.125rem] leading-snug tracking-[var(--tracking-tight)] text-[var(--color-ink)]">
                      {item.name}
                    </h3>
                    <p className="font-sans text-[var(--text-small)] text-[var(--color-muted)] leading-[var(--leading-body)]">
                      {item.description}
                    </p>
                  </div>

                  {/* Function label */}
                  <div className="col-span-1 md:col-span-3 md:text-right">
                    <span className="label-mono">{item.function}</span>
                  </div>

                </div>
              </li>
            ))}
            <li>
              <Rule />
            </li>
          </ul>
        </div>

      </Container>
    </section>
  );
}

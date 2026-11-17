import { Label } from "@/components/ui/Label";
import { Rule } from "@/components/ui/Rule";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const GOOD_FIT: string[] = [
  "You have a specific, repetitive workflow that takes real time each week",
  "You can describe what a correct output looks like",
  "You have someone who can review agent outputs during the pilot",
  "You are willing to measure the pilot against a baseline",
  "You want to own the system once it is running",
];

const NOT_GOOD_FIT: string[] = [
  "You want a chatbot on your site with no defined goal or success metric",
  "You need it live by Friday",
  "You are looking for a one-off automation with no ongoing improvement",
  "The workflow changes frequently and you have not stabilised it yet",
  "You want to explore AI in general before committing to a specific problem",
];

function FitList({
  items,
  variant,
}: {
  items: string[];
  variant: "good" | "bad";
}) {
  return (
    <ul role="list" className="flex flex-col">
      {items.map((item, i) => (
        <li key={i}>
          <Rule />
          <div className="flex items-start gap-4 py-4">
            <span
              aria-hidden="true"
              className={[
                "shrink-0 font-mono text-[0.875rem] leading-none mt-0.5",
                variant === "good"
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-muted)]",
              ].join(" ")}
            >
              {variant === "good" ? "+" : "−"}
            </span>
            <p className="font-sans text-[var(--text-body)] text-[var(--color-ink)] leading-[var(--leading-body)]">
              {item}
            </p>
          </div>
        </li>
      ))}
      <li>
        <Rule />
      </li>
    </ul>
  );
}

export function WhoItsFor() {
  return (
    <section aria-labelledby="fit-heading" className="section border-b border-[var(--color-hairline)]">
      <Container>

        <div className="grid-12 mb-14">
          <div className="col-span-12 md:col-span-8 lg:col-span-7">
            <SectionHeading
              label="04 / Who it's for"
              heading="We are not the right choice for everyone."
              subheading="Most automation projects fail because the problem was not specific enough before the build started. This is what we look for."
              id="fit-heading"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Good fit */}
          <div>
            <Label as="p" className="mb-6">Good fit</Label>
            <FitList items={GOOD_FIT} variant="good" />
          </div>

          {/* Not a good fit */}
          <div>
            <Label as="p" className="mb-6">Not a good fit</Label>
            <FitList items={NOT_GOOD_FIT} variant="bad" />
          </div>
        </div>

      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";

const FAQ_ITEMS = [
  {
    id: "cost",
    question: "How much does it cost?",
    answer:
      "The discovery sprint is priced as a fixed engagement — typically in the range of a few days of consulting time. The pilot is scoped and priced before it starts, so you know the number before we write a line of code. Production retainers are agreed once the pilot delivers a result worth running. We do not quote a number without a scope.",
  },
  {
    id: "time",
    question: "How long does it take?",
    answer:
      "Discovery sprint: two weeks. Pilot: four to eight weeks depending on the complexity of the workflow and how quickly we can access the systems and data involved. Production rollout: two to four weeks after a successful pilot. Total from first call to something running in production: three to five months in most cases.",
  },
  {
    id: "models",
    question: "Which AI models do you use?",
    answer:
      "We are model-agnostic. We choose the model based on the task requirements — latency, cost per call, accuracy on the specific output type, and your data residency requirements. We currently work with models from OpenAI, Anthropic, Google, and open-weight alternatives depending on the use case. We do not have a commercial arrangement with any of them.",
  },
  {
    id: "ownership",
    question: "Who owns the code and the data?",
    answer:
      "You own both. All code written for your project is delivered to your repository under a license you control. Your data never leaves your infrastructure without explicit agreement. We do not retain customer data after a project ends and do not use it to train any model.",
  },
  {
    id: "mistakes",
    question: "What if the agent gets something wrong?",
    answer:
      "Every production agent has a defined error path. Outputs that fall below the evaluation threshold are held for human review — they do not silently fail or reach a customer. We instrument every run, so when something goes wrong we have the full trace to diagnose it. The first month of production always runs with tighter approval thresholds until we have enough data to widen them confidently.",
  },
  {
    id: "tools",
    question: "Do you work with our existing tools?",
    answer:
      "Yes. We build against whatever systems you already use — CRMs, ticketing platforms, ERPs, internal databases, communication tools. We do not require you to change your stack. If a system has an API, we can work with it. If it does not, we scope the integration work as part of discovery.",
  },
];

export function FAQ() {
  return (
    <section aria-labelledby="faq-heading" className="section border-b border-[var(--color-hairline)]">
      <Container>
        <div className="grid-12">

          {/* Left — heading */}
          <div className="col-span-12 lg:col-span-4 mb-12 lg:mb-0">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
              <SectionHeading
                label="06 / FAQ"
                heading="Common questions."
                id="faq-heading"
              />
              <div className="mt-8">
                <Button href="/contact" variant="text">
                  Ask us something else
                </Button>
              </div>
            </div>
          </div>

          {/* Right — accordion */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <Accordion items={FAQ_ITEMS} />
          </div>

        </div>
      </Container>
    </section>
  );
}

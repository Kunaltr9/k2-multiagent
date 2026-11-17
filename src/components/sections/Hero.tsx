import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { Rule } from "@/components/ui/Rule";
import { Container } from "@/components/ui/Container";

/* ------------------------------------------------------------------ */
/* Workflow trace card                                                   */
/* ------------------------------------------------------------------ */

type TraceStep = {
  index: string;
  label: string;
  status: "done" | "pending" | "human";
  duration?: string;
};

const TRACE_STEPS: TraceStep[] = [
  { index: "01", label: "Received refund request via email", status: "done", duration: "0.3s" },
  { index: "02", label: "Retrieved order #48291 from OMS", status: "done", duration: "0.8s" },
  { index: "03", label: "Checked refund policy — eligible", status: "done", duration: "0.2s" },
  { index: "04", label: "Drafted reply to customer", status: "done", duration: "1.1s" },
  { index: "05", label: "Flagged for human approval", status: "human" },
];

const STATUS_STYLES: Record<TraceStep["status"], string> = {
  done:    "text-[var(--color-accent)]",
  pending: "text-[var(--color-muted)]",
  human:   "text-[var(--color-highlight)]",
};

const STATUS_SYMBOL: Record<TraceStep["status"], string> = {
  done:    "✓",
  pending: "·",
  human:   "⏸",
};

function WorkflowTrace() {
  return (
    <div className="border border-[var(--color-hairline)] bg-[var(--color-surface)]">
      {/* Card header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--color-hairline)]">
        <span className="label-mono">Agent run — refund workflow</span>
        <span className="font-mono text-[0.6875rem] text-[var(--color-muted)]">
          2.4s total
        </span>
      </div>

      {/* Steps */}
      <ol className="divide-y divide-[var(--color-hairline)]" aria-label="Agent run steps">
        {TRACE_STEPS.map((step) => (
          <li
            key={step.index}
            className="flex items-start gap-4 px-5 py-3.5"
          >
            {/* Step number */}
            <span className="font-mono text-[0.6875rem] text-[var(--color-muted)] mt-0.5 shrink-0 w-5">
              {step.index}
            </span>

            {/* Label */}
            <span className="font-mono text-[0.75rem] text-[var(--color-ink)] leading-snug flex-1">
              {step.label}
            </span>

            {/* Status + duration */}
            <div className="flex items-center gap-2 shrink-0 mt-0.5">
              {step.duration && (
                <span className="font-mono text-[0.625rem] text-[var(--color-muted)]">
                  {step.duration}
                </span>
              )}
              <span
                className={[
                  "font-mono text-[0.75rem] leading-none",
                  STATUS_STYLES[step.status],
                ].join(" ")}
                aria-label={step.status}
              >
                {STATUS_SYMBOL[step.status]}
              </span>
            </div>
          </li>
        ))}
      </ol>

      {/* Footer note */}
      <div className="px-5 py-3 border-t border-[var(--color-hairline)]">
        <span className="font-mono text-[0.625rem] text-[var(--color-muted)] tracking-wide uppercase">
          Example run — illustrative only
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero section                                                          */
/* ------------------------------------------------------------------ */

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="section border-b border-[var(--color-hairline)]">
      <Container>
        <div className="grid-12">

          {/* Left — copy */}
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-8 justify-center">
            <Label as="p">AI agents for business operations</Label>

            <h1
              id="hero-heading"
              className="font-serif font-light leading-[var(--leading-tight)] tracking-[var(--tracking-tight)]"
              style={{ fontSize: "var(--text-h1)" }}
            >
              We build AI agents that do real work inside your business.
            </h1>

            <div className="flex flex-col gap-3 max-w-[52ch]">
              <p className="text-[var(--color-muted)] text-[var(--text-body)] leading-[var(--leading-body)]">
                We pick one workflow, scope it tightly, and run a time-boxed pilot.
                If the numbers hold, we move it to production.
              </p>
              <p className="text-[var(--color-muted)] text-[var(--text-body)] leading-[var(--leading-body)]">
                One function at a time. No platform sales. No retainer until it works.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button href="/contact" variant="primary">
                Book a discovery call
              </Button>
              <Button href="/how-we-work" variant="secondary">
                See how we work
              </Button>
            </div>
          </div>

          {/* Right — workflow trace */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex flex-col justify-center mt-12 lg:mt-0">
            <WorkflowTrace />
          </div>

        </div>
      </Container>
    </section>
  );
}

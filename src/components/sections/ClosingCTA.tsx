import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";

export function ClosingCTA() {
  return (
    <section aria-labelledby="cta-heading" className="section">
      <Container>
        <div className="grid-12">
          <div className="col-span-12 md:col-span-10 lg:col-span-8">

            <Label as="p" className="mb-6">Ready to start</Label>

            <h2
              id="cta-heading"
              className="font-serif font-light leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] mb-6"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Tell us about the workflow you want to fix.
            </h2>

            <p className="font-sans text-[var(--text-body)] text-[var(--color-muted)] leading-[var(--leading-body)] max-w-[52ch] mb-10">
              A 30-minute call is enough to tell whether we can help. We will ask
              you to describe the workflow, the volume, and what a good outcome
              looks like. If it is not a fit, we will say so.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <Button href="/contact" variant="primary">
                Book a discovery call
              </Button>

              <span className="hidden sm:block font-mono text-[0.6875rem] text-[var(--color-muted)] tracking-wide uppercase">
                or
              </span>

              <a
                href="mailto:hello@k2.ai"
                className="font-sans text-[var(--text-body)] text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors duration-[150ms] inline-flex items-center gap-2 group"
              >
                hello@k2.ai
                <span
                  aria-hidden="true"
                  className="font-mono text-sm translate-x-0 transition-transform duration-[150ms] group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * Placeholder — visible in development, hidden in production.
 *
 * Usage:
 *   <Placeholder label="Client logos — 3–5 logos needed" />
 *   <Placeholder label="Testimonial — quote from pilot client" height="h-32" />
 */

type PlaceholderProps = {
  label: string;
  /** Tailwind height class, e.g. "h-24". Defaults to "h-16". */
  height?: string;
  className?: string;
};

export function Placeholder({ label, height = "h-16", className = "" }: PlaceholderProps) {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={[
        "flex items-center justify-center w-full border border-dashed",
        "border-[var(--color-highlight)] bg-[#FDF3F1]",
        height,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="label-mono text-[var(--color-highlight)] px-4 text-center">
        &#9633; {label}
      </span>
    </div>
  );
}

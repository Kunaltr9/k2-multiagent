type CalloutProps = {
  /**
   * "note"    — neutral, hairline border left
   * "action"  — accent green, draws the eye
   * "warn"    — highlight red, rare use
   */
  variant?: "note" | "action" | "warn";
  children: React.ReactNode;
  className?: string;
};

const styles: Record<string, { bar: string; bg: string; text: string }> = {
  note: {
    bar: "bg-[var(--color-hairline)]",
    bg: "bg-[var(--color-surface)]",
    text: "text-[var(--color-muted)]",
  },
  action: {
    bar: "bg-[var(--color-accent)]",
    bg: "bg-[var(--color-surface)]",
    text: "text-[var(--color-ink)]",
  },
  warn: {
    bar: "bg-[var(--color-highlight)]",
    bg: "bg-[var(--color-surface)]",
    text: "text-[var(--color-ink)]",
  },
};

export function Callout({
  variant = "note",
  children,
  className = "",
}: CalloutProps) {
  const s = styles[variant];
  return (
    <aside
      role="note"
      className={[
        "relative flex gap-4 px-5 py-4 overflow-hidden",
        s.bg,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Left accent bar */}
      <div
        className={["absolute left-0 top-0 bottom-0 w-[3px]", s.bar].join(" ")}
        aria-hidden="true"
      />
      <div
        className={[
          "text-[var(--text-small)] leading-[var(--leading-body)] pl-1",
          s.text,
        ].join(" ")}
      >
        {children}
      </div>
    </aside>
  );
}

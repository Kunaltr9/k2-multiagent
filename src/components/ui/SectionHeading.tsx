import { Label } from "./Label";

type SectionHeadingProps = {
  /** Small mono label above the headline, e.g. "01 / Services" */
  label?: string;
  /** The main headline */
  heading: React.ReactNode;
  /** Optional subheading / description beneath */
  subheading?: React.ReactNode;
  /** Heading level rendered — visual size stays the same */
  level?: 1 | 2 | 3;
  /** Use on dark backgrounds */
  inverted?: boolean;
  className?: string;
  /** Forwarded to the heading element — used with aria-labelledby on the parent section */
  id?: string;
};

export function SectionHeading({
  label,
  heading,
  subheading,
  level = 2,
  inverted = false,
  className = "",
  id,
}: SectionHeadingProps) {
  const Tag = `h${level}` as "h1" | "h2" | "h3";

  return (
    <div className={["flex flex-col gap-4", className].filter(Boolean).join(" ")}>
      {label && (
        <>
          <Label as="span" inverted={inverted}>
            {label}
          </Label>
          <div
            className={[
              "w-8 h-px",
              inverted ? "bg-[var(--color-dark-hairline)]" : "bg-[var(--color-hairline)]",
            ].join(" ")}
            aria-hidden="true"
          />
        </>
      )}

      <Tag
        id={id}
        className={[
          "font-serif font-light",
          "text-[var(--text-h2)]",
          "leading-[var(--leading-tight)]",
          "tracking-[var(--tracking-tight)]",
          "max-w-[22ch]",
          inverted ? "text-[var(--color-dark-text)]" : "text-[var(--color-ink)]",
        ].join(" ")}
      >
        {heading}
      </Tag>

      {subheading && (
        <p
          className={[
            "text-[var(--text-body)] leading-[var(--leading-body)] max-w-[52ch] mt-2",
            inverted ? "text-[var(--color-dark-muted)]" : "text-[var(--color-muted)]",
          ].join(" ")}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}

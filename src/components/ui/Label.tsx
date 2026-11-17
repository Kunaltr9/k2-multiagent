import type { ComponentPropsWithoutRef } from "react";

type LabelProps = ComponentPropsWithoutRef<"span"> & {
  /** e.g. "01 / Services" */
  children: React.ReactNode;
  /** Render as a different element when needed */
  as?: "span" | "p" | "div";
  /** Use on dark backgrounds */
  inverted?: boolean;
};

export function Label({
  children,
  as: Tag = "span",
  inverted = false,
  className = "",
  ...props
}: LabelProps) {
  return (
    <Tag
      className={[
        "label-mono",
        inverted ? "text-[var(--color-dark-muted)]" : "text-[var(--color-muted)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </Tag>
  );
}

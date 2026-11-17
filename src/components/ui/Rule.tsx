import type { ComponentPropsWithoutRef } from "react";

type RuleProps = ComponentPropsWithoutRef<"hr"> & {
  inverted?: boolean;
};

export function Rule({ inverted = false, className = "", ...props }: RuleProps) {
  return (
    <hr
      className={[
        "rule",
        inverted ? "border-t-[var(--color-dark-hairline)]" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}

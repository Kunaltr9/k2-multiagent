import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type BaseProps = {
  variant?: "primary" | "secondary" | "text";
  size?: "sm" | "md";
};

type ButtonAsButton = BaseProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type ButtonAsLink = BaseProps &
  ComponentPropsWithoutRef<typeof Link> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-sans font-medium leading-none transition-colors duration-[150ms] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:opacity-50 disabled:pointer-events-none";

  const sizes: Record<string, string> = {
    sm: "text-[0.8125rem] px-4 py-2.5",
    md: "text-[0.9375rem] px-6 py-3.5",
  };

  const variants: Record<string, string> = {
    primary:
      "bg-[var(--color-accent)] text-[var(--color-dark-text)] hover:bg-[var(--color-accent-hover)] active:bg-[var(--color-accent-hover)]",
    secondary:
      "bg-transparent text-[var(--color-ink)] border border-[var(--color-hairline)] hover:border-[var(--color-ink)] hover:bg-[var(--color-surface)] active:bg-[var(--color-hairline)]",
    text: "bg-transparent text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] p-0 gap-1.5 group",
  };

  const cls = [base, sizes[size ?? "md"], variants[variant ?? "primary"], className]
    .filter(Boolean)
    .join(" ");

  if (variant === "text") {
    const arrow = (
      <span
        aria-hidden="true"
        className="inline-block translate-x-0 transition-transform duration-[150ms] group-hover:translate-x-1"
      >
        →
      </span>
    );

    if ("href" in props && props.href !== undefined) {
      const { href, ...rest } = props as ButtonAsLink;
      return (
        <Link href={href} className={cls} {...rest}>
          {children}
          {arrow}
        </Link>
      );
    }

    return (
      <button className={cls} {...(props as ButtonAsButton)}>
        {children}
        {arrow}
      </button>
    );
  }

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}

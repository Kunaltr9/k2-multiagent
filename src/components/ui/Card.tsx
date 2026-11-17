import type { ComponentPropsWithoutRef } from "react";

type CardVariant = "flat" | "bordered" | "ruled";

const variants: Record<CardVariant, string> = {
  flat: "bg-[var(--color-surface)] p-6 md:p-8",
  bordered: "border border-[var(--color-hairline)] p-6 md:p-8",
  ruled: "border-t border-[var(--color-hairline)] pt-6 md:pt-8",
};

/* ------------------------------------------------------------------ */
/* Three narrowly-typed overloads avoid the polymorphic spreading issue  */
/* ------------------------------------------------------------------ */

type DivCardProps = { as?: "div" } & { variant?: CardVariant } & ComponentPropsWithoutRef<"div">;
type ArticleCardProps = { as: "article" } & { variant?: CardVariant } & ComponentPropsWithoutRef<"article">;
type LiCardProps = { as: "li" } & { variant?: CardVariant } & ComponentPropsWithoutRef<"li">;

type CardProps = DivCardProps | ArticleCardProps | LiCardProps;

export function Card({ variant = "bordered", as, className = "", children, ...props }: CardProps) {
  const cls = [variants[variant], className].filter(Boolean).join(" ");

  if (as === "article") {
    return (
      <article className={cls} {...(props as ComponentPropsWithoutRef<"article">)}>
        {children}
      </article>
    );
  }
  if (as === "li") {
    return (
      <li className={cls} {...(props as ComponentPropsWithoutRef<"li">)}>
        {children}
      </li>
    );
  }
  return (
    <div className={cls} {...(props as ComponentPropsWithoutRef<"div">)}>
      {children}
    </div>
  );
}

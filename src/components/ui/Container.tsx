import type { ComponentPropsWithoutRef } from "react";

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  as?: "div" | "section" | "article" | "aside" | "header" | "footer" | "main";
  /**
   * "default" — standard container with horizontal padding
   * "narrow"  — capped at ~720px for prose
   * "wide"    — full container max-width, no extra constraint
   */
  width?: "default" | "narrow" | "wide";
};

export function Container({
  as: Tag = "div",
  width = "default",
  className = "",
  children,
  ...props
}: ContainerProps) {
  const widthClass: Record<string, string> = {
    default: "container-outer",
    narrow: "container-outer max-w-[720px]",
    wide: "container-outer",
  };

  return (
    <Tag className={[widthClass[width], className].filter(Boolean).join(" ")} {...props}>
      {children}
    </Tag>
  );
}

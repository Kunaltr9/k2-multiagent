"use client";

import { useState } from "react";
import { Rule } from "./Rule";

type AccordionItem = {
  id: string;
  question: string;
  answer: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  /** Allow multiple items open simultaneously */
  multi?: boolean;
  inverted?: boolean;
  className?: string;
};

type AccordionItemProps = {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
  inverted: boolean;
};

function AccordionRow({ item, isOpen, onToggle, inverted }: AccordionItemProps) {
  return (
    <div>
      <Rule inverted={inverted} />
      <div className="py-1">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`accordion-body-${item.id}`}
          id={`accordion-trigger-${item.id}`}
          className={[
            "w-full flex items-start justify-between gap-6 py-5 text-left",
            "font-serif font-light text-[1.125rem] leading-snug",
            "transition-colors duration-[150ms]",
            inverted
              ? "text-[var(--color-dark-text)] hover:text-[var(--color-dark-muted)]"
              : "text-[var(--color-ink)] hover:text-[var(--color-muted)]",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <span>{item.question}</span>
          {/* Plus / minus indicator */}
          <span
            aria-hidden="true"
            className={[
              "mt-0.5 shrink-0 w-5 h-5 flex items-center justify-center",
              "font-mono font-light text-lg leading-none",
              "transition-transform duration-[200ms]",
              inverted ? "text-[var(--color-dark-muted)]" : "text-[var(--color-muted)]",
              isOpen ? "rotate-45" : "rotate-0",
            ].join(" ")}
          >
            +
          </span>
        </button>

        <div
          id={`accordion-body-${item.id}`}
          role="region"
          aria-labelledby={`accordion-trigger-${item.id}`}
          hidden={!isOpen}
          className={[
            "pb-6 pr-10",
            "text-[var(--text-body)] leading-[var(--leading-body)]",
            inverted ? "text-[var(--color-dark-muted)]" : "text-[var(--color-muted)]",
          ].join(" ")}
        >
          {item.answer}
        </div>
      </div>
    </div>
  );
}

export function Accordion({ items, multi = false, inverted = false, className = "" }: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!multi) next.clear();
        next.add(id);
      }
      return next;
    });
  }

  return (
    <div className={className}>
      {items.map((item) => (
        <AccordionRow
          key={item.id}
          item={item}
          isOpen={openIds.has(item.id)}
          onToggle={() => toggle(item.id)}
          inverted={inverted}
        />
      ))}
      <Rule inverted={inverted} />
    </div>
  );
}

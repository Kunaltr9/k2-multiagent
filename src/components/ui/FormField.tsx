import type { ComponentPropsWithoutRef } from "react";

/* ------------------------------------------------------------------ */
/* Shared styles                                                         */
/* ------------------------------------------------------------------ */

const inputBase = [
  "w-full font-sans text-[var(--text-body)]",
  "bg-[var(--color-bg)] text-[var(--color-ink)]",
  "border border-[var(--color-hairline)]",
  "px-4 py-3 leading-[var(--leading-body)]",
  "placeholder:text-[var(--color-muted)]",
  "transition-colors duration-[150ms]",
  "hover:border-[var(--color-muted)]",
  "focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]",
  "disabled:opacity-50 disabled:cursor-not-allowed",
].join(" ");

/* ------------------------------------------------------------------ */
/* FormField wrapper                                                     */
/* ------------------------------------------------------------------ */

type FormFieldProps = {
  label: string;
  htmlFor: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
};

export function FormField({
  label,
  htmlFor,
  hint,
  error,
  required,
  children,
  className = "",
}: FormFieldProps) {
  return (
    <div className={["flex flex-col gap-1.5", className].filter(Boolean).join(" ")}>
      <label
        htmlFor={htmlFor}
        className="font-sans text-[var(--text-small)] font-medium text-[var(--color-ink)] tracking-wide"
      >
        {label}
        {required && (
          <span
            className="ml-1 text-[var(--color-highlight)]"
            aria-hidden="true"
          >
            *
          </span>
        )}
      </label>

      {children}

      {hint && !error && (
        <p className="text-[var(--text-small)] text-[var(--color-muted)] leading-snug">
          {hint}
        </p>
      )}
      {error && (
        <p
          role="alert"
          className="text-[var(--text-small)] text-[var(--color-highlight)] leading-snug"
        >
          {error}
        </p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Input                                                                 */
/* ------------------------------------------------------------------ */

type InputProps = ComponentPropsWithoutRef<"input"> & {
  hasError?: boolean;
};

export function Input({ hasError = false, className = "", ...props }: InputProps) {
  return (
    <input
      className={[
        inputBase,
        hasError ? "border-[var(--color-highlight)] focus:ring-[var(--color-highlight)]" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Textarea                                                              */
/* ------------------------------------------------------------------ */

type TextareaProps = ComponentPropsWithoutRef<"textarea"> & {
  hasError?: boolean;
};

export function Textarea({
  hasError = false,
  className = "",
  rows = 4,
  ...props
}: TextareaProps) {
  return (
    <textarea
      rows={rows}
      className={[
        inputBase,
        "resize-y min-h-[6rem]",
        hasError ? "border-[var(--color-highlight)] focus:ring-[var(--color-highlight)]" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Select                                                                */
/* ------------------------------------------------------------------ */

type SelectProps = ComponentPropsWithoutRef<"select"> & {
  hasError?: boolean;
};

export function Select({
  hasError = false,
  className = "",
  children,
  ...props
}: SelectProps) {
  return (
    <select
      className={[
        inputBase,
        "appearance-none cursor-pointer",
        "bg-[image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M4 6l4 4 4-4' stroke='%235B6068' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")]",
        "bg-no-repeat bg-[right_1rem_center]",
        hasError ? "border-[var(--color-highlight)] focus:ring-[var(--color-highlight)]" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </select>
  );
}

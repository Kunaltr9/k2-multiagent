"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/how-we-work", label: "How we work" },
  { href: "/work", label: "Work" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
] as const;

/* ------------------------------------------------------------------ */
/* Wordmark                                                              */
/* ------------------------------------------------------------------ */

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="K2 — home"
      className={[
        "font-serif text-[1.375rem] font-light tracking-[-0.02em] text-[var(--color-ink)]",
        "transition-opacity duration-[150ms] hover:opacity-70",
        className,
      ].join(" ")}
    >
      K2
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Desktop nav link                                                      */
/* ------------------------------------------------------------------ */

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={[
        "relative font-sans text-[0.875rem] leading-none py-1",
        "transition-colors duration-[150ms]",
        "after:absolute after:bottom-0 after:left-0 after:h-px after:w-full",
        "after:origin-left after:scale-x-0 after:transition-transform after:duration-[150ms]",
        "after:bg-[var(--color-ink)]",
        "hover:after:scale-x-100",
        active
          ? "text-[var(--color-ink)] after:scale-x-100"
          : "text-[var(--color-muted)] hover:text-[var(--color-ink)]",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Mobile drawer                                                         */
/* ------------------------------------------------------------------ */

function MobileDrawer({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  /* Focus trap — move focus into drawer when it opens */
  useEffect(() => {
    if (open) {
      ref.current?.querySelector<HTMLElement>("a, button")?.focus();
    }
  }, [open]);

  /* Close on Escape */
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  /* Prevent body scroll while open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={[
          "fixed inset-0 z-40 bg-[var(--color-ink)]",
          "transition-opacity duration-[200ms]",
          open ? "opacity-30" : "opacity-0 pointer-events-none",
        ].join(" ")}
      />

      {/* Drawer panel */}
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        className={[
          "fixed top-0 right-0 bottom-0 z-50 w-[min(320px,85vw)]",
          "bg-[var(--color-bg)] flex flex-col",
          "border-l border-[var(--color-hairline)]",
          "transition-transform duration-[250ms] ease-out",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-[var(--color-hairline)] shrink-0">
          <Wordmark />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation"
            className="p-2 -mr-2 text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors duration-[150ms]"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Nav links */}
        <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-6 py-8">
          <ul className="flex flex-col gap-1" role="list">
            {NAV_LINKS.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(href + "/");
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={onClose}
                    className={[
                      "block font-serif font-light text-[1.5rem] leading-none py-3",
                      "border-b border-[var(--color-hairline)]",
                      "transition-colors duration-[150ms]",
                      active
                        ? "text-[var(--color-ink)]"
                        : "text-[var(--color-muted)] hover:text-[var(--color-ink)]",
                    ].join(" ")}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA */}
        <div className="px-6 py-8 border-t border-[var(--color-hairline)] shrink-0">
          <Button href="/contact" variant="primary" className="w-full justify-center" onClick={onClose}>
            Book a discovery call
          </Button>
        </div>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Icons                                                                 */
/* ------------------------------------------------------------------ */

function HamburgerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <line x1="2" y1="5" x2="18" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="2" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="2" y1="15" x2="14" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Header                                                                */
/* ------------------------------------------------------------------ */

export function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close drawer on route change */
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--color-accent)] focus:text-[var(--color-dark-text)] focus:text-sm"
      >
        Skip to main content
      </a>

      <header
        className={[
          "sticky top-0 z-30 w-full h-16",
          "bg-[var(--color-bg)]",
          "transition-shadow duration-[200ms]",
          scrolled ? "shadow-[0_1px_0_var(--color-hairline)]" : "border-b border-[var(--color-hairline)]",
        ].join(" ")}
      >
        <div className="container-outer h-full flex items-center justify-between gap-8">
          {/* Wordmark */}
          <Wordmark />

          {/* Desktop nav */}
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(href + "/");
              return (
                <NavLink key={href} href={href} label={label} active={active} />
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button href="/contact" variant="primary" size="sm">
              Book a call
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-expanded={drawerOpen}
            aria-controls="mobile-nav-drawer"
            aria-label="Open navigation"
            className="lg:hidden p-2 -mr-2 text-[var(--color-ink)] hover:text-[var(--color-muted)] transition-colors duration-[150ms]"
          >
            <HamburgerIcon />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        pathname={pathname}
      />
    </>
  );
}

# K2 — Design System & Site Shell

Documentation of everything built in the first phase of the marketing site. Stack, tokens, components, layout shell, routing, and known constraints.

---

## Table of contents

1. [Project overview](#1-project-overview)
2. [Stack and tooling](#2-stack-and-tooling)
3. [File structure](#3-file-structure)
4. [Design tokens](#4-design-tokens)
5. [Typography](#5-typography)
6. [Layout system](#6-layout-system)
7. [Components](#7-components)
   - [Button](#button)
   - [Label](#label)
   - [Rule](#rule)
   - [Container](#container)
   - [SectionHeading](#sectionheading)
   - [Card](#card)
   - [Callout](#callout)
   - [Placeholder](#placeholder)
   - [Accordion](#accordion)
   - [FormField, Input, Textarea, Select](#formfield-input-textarea-select)
8. [Layout shell](#8-layout-shell)
   - [Header](#header)
   - [Footer](#footer)
   - [Root layout](#root-layout)
9. [Pages](#9-pages)
10. [Motion and accessibility](#10-motion-and-accessibility)
11. [Build notes and constraints](#11-build-notes-and-constraints)

---

## 1. Project overview

This is the marketing website for K2, a small studio that designs and builds AI agents and automation for businesses. The design direction is "editorial engineering studio" — the visual language of a well-run consultancy's printed report, not a SaaS landing page.

**Primary CTA everywhere:** Book a discovery call  
**Secondary CTA:** See how we work  
**Voice:** Plain, specific, dry. Short sentences. No banned words (unlock, elevate, revolutionize, supercharge, seamless, cutting-edge, next-gen, empower, leverage, game-changing).

---

## 2. Stack and tooling

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 16.4.6 | App Router, server components by default |
| Language | TypeScript 5, strict mode | `noEmit: true`, `moduleResolution: bundler` |
| Styling | Tailwind CSS v4 | CSS-based config via `@tailwindcss/turbopack`, no `tailwind.config.js` |
| Fonts | `next/font/google` | Newsreader, Geist, Geist Mono, JetBrains Mono |
| Runtime | React 19 | |
| Build | Turbopack | Configured in `next.config.ts` |

Planned but not yet wired: PostgreSQL via Drizzle ORM, Resend for email.

---

## 3. File structure

```
src/
├── app/
│   ├── globals.css              # Design tokens, reset, base styles
│   ├── layout.tsx               # Root layout — fonts, Header, Footer
│   ├── page.tsx                 # Home page (shell placeholder)
│   └── styleguide/
│       ├── page.tsx             # /styleguide — noindex component catalogue
│       └── StyleguideForm.tsx   # Client component: form demo for styleguide
└── components/
    ├── layout/
    │   ├── Header.tsx           # Sticky header, mobile drawer
    │   └── Footer.tsx           # 4-column footer
    └── ui/
        ├── Accordion.tsx        # FAQ accordion, client component
        ├── Button.tsx           # primary / secondary / text-link
        ├── Callout.tsx          # note / action / warn callout block
        ├── Card.tsx             # flat / bordered / ruled card
        ├── Container.tsx        # max-width wrapper
        ├── FormField.tsx        # FormField wrapper + Input + Textarea + Select
        ├── Label.tsx            # Mono caps label
        ├── Placeholder.tsx      # Dev-only placeholder box
        ├── Rule.tsx             # 1px hairline rule
        └── SectionHeading.tsx   # Label + heading + subheading block
```

---

## 4. Design tokens

All tokens live as CSS custom properties in `src/app/globals.css` under `:root`. They are injected into Tailwind v4's utility layer via `@theme inline`.

### Palette

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#F6F4EF` | Page background (warm off-white) |
| `--color-surface` | `#EFEDE7` | Card backgrounds, slightly darker off-white |
| `--color-ink` | `#14161A` | Primary text, headings |
| `--color-muted` | `#5B6068` | Secondary text, labels, placeholders |
| `--color-hairline` | `#DAD6CC` | Borders, dividers |
| `--color-accent` | `#1F4D3A` | Deep green — primary CTA, focus rings, active states |
| `--color-accent-hover` | `#173A2C` | Accent hover/active |
| `--color-highlight` | `#C8553D` | Rare secondary detail — errors, warning callouts, placeholder borders |
| `--color-dark-bg` | `#14161A` | Dark section background |
| `--color-dark-text` | `#F6F4EF` | Text on dark backgrounds |
| `--color-dark-muted` | `#9BA0A8` | Muted text on dark backgrounds |
| `--color-dark-hairline` | `#2C2F35` | Borders on dark backgrounds |

### Type scale

All headline sizes are fluid using `clamp()`, scaling between 375px and 1440px viewport width.

| Token | Min | Max | Use |
|---|---|---|---|
| `--text-display` | 44px | 88px | Hero H1 |
| `--text-h1` | 36px | 64px | Page titles |
| `--text-h2` | 28px | 44px | Section headings |
| `--text-h3` | 20px | 28px | Sub-section headings |
| `--text-h4` | 18px | 18px | Small headings |
| `--text-body` | 17px | 17px | Body copy |
| `--text-small` | 14px | 14px | Captions, metadata |
| `--text-label` | 11px | 11px | Mono caps labels |

### Leading

| Token | Value | Use |
|---|---|---|
| `--leading-tight` | `1.1` | Headings |
| `--leading-snug` | `1.3` | Sub-headings, accordion items |
| `--leading-body` | `1.65` | Body copy |

### Spacing scale

4px base unit, named by multiplier:

`--space-1` (4px) → `--space-2` (8px) → `--space-3` (12px) → `--space-4` (16px) → `--space-5` (20px) → `--space-6` (24px) → `--space-8` (32px) → `--space-10` (40px) → `--space-12` (48px) → `--space-16` (64px) → `--space-20` (80px) → `--space-24` (96px) → `--space-32` (128px)

Section padding uses `--section-gap: clamp(5rem, 10vw, 9rem)`.

### Grid

| Token | Value |
|---|---|
| `--grid-cols` | `12` |
| `--grid-gutter` | `clamp(1rem, 3vw, 2rem)` |
| `--grid-margin` | `clamp(1rem, 5vw, 5rem)` |
| `--container-max` | `1360px` |

### Motion

| Token | Value |
|---|---|
| `--duration-fast` | `150ms` |
| `--duration-base` | `200ms` |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` |

---

## 5. Typography

Three font families, all loaded via `next/font/google` with CSS variable injection.

### Newsreader (serif) — `--font-newsreader`

Used for all headings (h1–h6), the site wordmark, and display text. Weights 300, 400, 500, 600 loaded in both normal and italic styles.

```tsx
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
});
```

Apply with: `font-serif` class or `font-family: var(--font-serif)`.

### Geist (sans-serif) — `--font-geist-sans`

Used for body copy, UI labels, navigation, button text, form fields. Variable font.

```tsx
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});
```

Apply with: `font-sans` class or `font-family: var(--font-sans)`.

### JetBrains Mono — `--font-jetbrains-mono`

Used exclusively for small section labels (the `Label` component), metadata, and code snippets. Weights 400 and 500. Letter-spacing `0.1em`, uppercase.

```tsx
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500"],
});
```

Apply with: `font-mono` class or the `.label-mono` utility class.

### `.label-mono` utility class

Defined in `globals.css`. Combines JetBrains Mono, 11px, `letter-spacing: 0.1em`, uppercase, `color: var(--color-muted)`.

```css
.label-mono {
  font-family: var(--font-mono);
  font-size: var(--text-label);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-muted);
}
```

---

## 6. Layout system

### `.container-outer`

The standard content wrapper. Max-width 1360px, centered, with fluid horizontal padding that scales from 1rem (mobile) to 5rem (desktop).

```css
.container-outer {
  width: 100%;
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--grid-margin);
}
```

### `.grid-12`

12-column CSS grid with fluid gutters.

```css
.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--grid-gutter);
}
```

Use Tailwind `col-span-*` utilities to span columns. The canonical asymmetric split is `md:col-span-5` / `md:col-span-7`.

### `.section`

Applies vertical section padding using `--section-gap`.

### `.section-dark`

Flips the section to ink background with off-white text. Automatically updates heading colors and hairline border colors within the section.

### `.rule`

1px top-border separator. Used as a standalone element via the `Rule` component.

### Scroll reveal

`.reveal` / `.reveal.is-visible` — opacity 0 → 1, translateY 12px → 0, 500ms. Apply via JavaScript `IntersectionObserver` (wire-up not yet implemented; CSS is ready). Respects `prefers-reduced-motion`.

---

## 7. Components

All components live in `src/components/ui/`. They accept a `className` prop for overrides. None use a UI kit.

---

### Button

`src/components/ui/Button.tsx`

Polymorphic — renders as `<button>` when no `href` is passed, or as `next/link` `<Link>` when `href` is provided. TypeScript union types enforce this at compile time.

**Props**

| Prop | Type | Default | Notes |
|---|---|---|---|
| `variant` | `"primary" \| "secondary" \| "text"` | `"primary"` | |
| `size` | `"sm" \| "md"` | `"md"` | |
| `href` | `string` | — | Switches to `<Link>` render |
| `...rest` | button or Link props | — | Fully forwarded |

**Variants**

- `primary` — accent green background, off-white text. Hover darkens to `--color-accent-hover`.
- `secondary` — transparent background, hairline border. Hover fills surface, border goes ink.
- `text` — no background or border. Accent green text with an `→` arrow that slides right on hover (`group-hover:translate-x-1`).

**Usage**

```tsx
<Button variant="primary">Book a discovery call</Button>
<Button href="/contact" variant="primary">Book a discovery call</Button>
<Button variant="secondary" size="sm">See how we work</Button>
<Button href="/work" variant="text">View our work</Button>
```

---

### Label

`src/components/ui/Label.tsx`

Renders small mono caps text. Uses `.label-mono` from globals.

**Props**

| Prop | Type | Default |
|---|---|---|
| `as` | `"span" \| "p" \| "div"` | `"span"` |
| `inverted` | `boolean` | `false` |
| `children` | `ReactNode` | required |

**Usage**

```tsx
<Label as="p">01 / Services</Label>
<Label as="span" inverted>02 / How we work</Label>
```

---

### Rule

`src/components/ui/Rule.tsx`

A 1px `<hr>` using `--color-hairline`. On dark backgrounds, pass `inverted` to use `--color-dark-hairline`.

**Props**

| Prop | Type | Default |
|---|---|---|
| `inverted` | `boolean` | `false` |

**Usage**

```tsx
<Rule />
<Rule inverted />
```

---

### Container

`src/components/ui/Container.tsx`

Wraps content in `.container-outer`. Polymorphic via `as` prop.

**Props**

| Prop | Type | Default |
|---|---|---|
| `as` | `"div" \| "section" \| "article" \| "aside" \| "header" \| "footer" \| "main"` | `"div"` |
| `width` | `"default" \| "narrow" \| "wide"` | `"default"` |

- `narrow` — adds `max-w-[720px]` for prose-width content
- `wide` / `default` — both use full container max-width

**Usage**

```tsx
<Container as="section" className="py-24">...</Container>
<Container width="narrow">...</Container>
```

---

### SectionHeading

`src/components/ui/SectionHeading.tsx`

The standard section header pattern: optional mono label, optional short rule, main heading, optional subheading.

**Props**

| Prop | Type | Default |
|---|---|---|
| `label` | `string` | — |
| `heading` | `ReactNode` | required |
| `subheading` | `ReactNode` | — |
| `level` | `1 \| 2 \| 3` | `2` |
| `inverted` | `boolean` | `false` |

The visual size does not change regardless of `level` — it always renders at `--text-h2`. The `level` prop only controls the semantic HTML element.

**Usage**

```tsx
<SectionHeading
  label="01 / Services"
  heading="We build agents for the functions that run your business."
  subheading="Support, operations, revenue, knowledge management, internal tools."
/>

<SectionHeading
  label="02 / How we work"
  heading="One workflow. One pilot. Real numbers."
  inverted
/>
```

---

### Card

`src/components/ui/Card.tsx`

A flat content container. No shadows anywhere. Three visual variants.

**Props**

| Prop | Type | Default |
|---|---|---|
| `variant` | `"flat" \| "bordered" \| "ruled"` | `"bordered"` |
| `as` | `"div" \| "article" \| "li"` | `"div"` |

- `bordered` — 1px hairline border all sides, 24/32px padding
- `flat` — `--color-surface` background, no border, 24/32px padding
- `ruled` — top border only, top padding only. For list-style content.

**Usage**

```tsx
<Card variant="bordered">
  <Label as="p">Customer Support</Label>
  <p>...</p>
</Card>

<ul>
  <Card as="li" variant="ruled">...</Card>
</ul>
```

---

### Callout

`src/components/ui/Callout.tsx`

An aside block with a 3px left accent bar. Renders as `<aside role="note">`.

**Props**

| Prop | Type | Default |
|---|---|---|
| `variant` | `"note" \| "action" \| "warn"` | `"note"` |

- `note` — hairline bar, surface background, muted text
- `action` — accent green bar, surface background, ink text
- `warn` — highlight red bar, surface background, ink text

**Usage**

```tsx
<Callout variant="note">
  The pilot runs for four weeks. No retainer required.
</Callout>

<Callout variant="action">
  Book a discovery call to scope the first workflow.
</Callout>
```

---

### Placeholder

`src/components/ui/Placeholder.tsx`

A dashed-border box that marks where real content (logos, testimonials, stats, images) will go. Returns `null` in production (`NODE_ENV === 'production'`). Visible only in development.

**Props**

| Prop | Type | Default |
|---|---|---|
| `label` | `string` | required |
| `height` | Tailwind height class | `"h-16"` |

**Usage**

```tsx
<Placeholder label="Client logos — 3–5 real logos needed" />
<Placeholder label="Case study image — 16:9 screenshot" height="h-48" />
<Placeholder label="Testimonial — quote from pilot client" height="h-32" />
```

**Rule:** Never invent content to fill these. They exist specifically to prevent fake clients, testimonials, statistics, or awards appearing on the site.

---

### Accordion

`src/components/ui/Accordion.tsx`

A `"use client"` component for FAQ-style expandable content. Full ARIA implementation.

**Data shape**

```ts
type AccordionItem = {
  id: string;
  question: string;
  answer: React.ReactNode;
};
```

**Props**

| Prop | Type | Default |
|---|---|---|
| `items` | `AccordionItem[]` | required |
| `multi` | `boolean` | `false` |
| `inverted` | `boolean` | `false` |

- `multi: false` (default) — only one item open at a time; opening a new one closes the previous
- `multi: true` — multiple items can be open simultaneously

**Accessibility**

Each trigger button has `aria-expanded`, `aria-controls`, and an `id`. The content panel has `role="region"` and `aria-labelledby`. Hidden panels use the native `hidden` attribute.

The `+` icon rotates 45° to form an `×` when open (CSS `rotate-45` transition).

**Usage**

```tsx
const items = [
  { id: "q1", question: "Do you work with any industry?", answer: "..." },
  { id: "q2", question: "What does the pilot involve?", answer: "..." },
];

<Accordion items={items} />
<Accordion items={items} multi />
<Accordion items={items} inverted />
```

---

### FormField, Input, Textarea, Select

`src/components/ui/FormField.tsx`

Four named exports from one file. All form controls share the same visual baseline: hairline border, hover to muted, focus to accent green ring.

#### `FormField`

Wrapper that provides a `<label>`, optional hint text, and optional error message.

**Props**

| Prop | Type | Notes |
|---|---|---|
| `label` | `string` | Required. Rendered as `<label htmlFor={htmlFor}>` |
| `htmlFor` | `string` | Must match the `id` on the child input |
| `hint` | `string` | Shown below input when no error is present |
| `error` | `string` | Shown below input as `role="alert"` text in `--color-highlight` |
| `required` | `boolean` | Adds a `*` marker in highlight color (presentational only) |

#### `Input`

A styled `<input>`. Accepts all native input props plus `hasError?: boolean`.

#### `Textarea`

A styled `<textarea>`. Accepts all native textarea props plus `hasError?: boolean`. Default `rows={4}`, vertically resizable.

#### `Select`

A styled `<select>` with a custom SVG chevron via `background-image`. Accepts all native select props plus `hasError?: boolean`.

**Usage**

```tsx
<FormField label="Email address" htmlFor="email" required hint="Used only for replies.">
  <Input id="email" type="email" placeholder="you@company.com" />
</FormField>

<FormField label="Email" htmlFor="email-err" error="Enter a valid email address.">
  <Input id="email-err" type="email" hasError defaultValue="not-valid" />
</FormField>

<FormField label="Business function" htmlFor="function">
  <Select id="function">
    <option value="support">Customer Support</option>
    <option value="ops">Operations</option>
  </Select>
</FormField>

<FormField label="Message" htmlFor="message">
  <Textarea id="message" rows={5} placeholder="Describe the workflow..." />
</FormField>
```

---

## 8. Layout shell

### Header

`src/components/layout/Header.tsx` — `"use client"`

The header is a client component because it reads scroll position, manages drawer state, and reads the current route.

**Features**

- Sticky at `z-30`, height 64px (`h-16`), background `--color-bg`
- On scroll past 8px: transitions from bottom border to `box-shadow` (1px ink)
- **Skip link** — `sr-only` link to `#main-content`, visible on keyboard focus with accent green background. Required for WCAG AA.
- **Desktop nav** — hidden below `lg` breakpoint. Five links: Services, How we work, Work, Insights, About. Each has an underline-scale hover effect (`after:scale-x-0` → `after:scale-x-100`). Active route renders with underline always visible.
- **Desktop CTA** — "Book a call" primary button (small size), hidden below `lg`.
- **Mobile hamburger** — visible below `lg`. Three-line SVG icon, `aria-expanded` and `aria-label`.
- **Mobile drawer** — slides in from the right, `w-[min(320px,85vw)]`. Nav links in Newsreader serif at 24px. "Book a discovery call" CTA pinned to bottom.

**Drawer accessibility**

- `role="dialog" aria-modal="true" aria-label="Navigation"`
- Focus moves to first interactive element on open
- `Escape` key closes the drawer
- Body scroll is locked while open (`document.body.style.overflow = "hidden"`)
- Backdrop click closes the drawer
- Drawer closes automatically on route change

**Nav links**

```ts
const NAV_LINKS = [
  { href: "/services",    label: "Services" },
  { href: "/how-we-work", label: "How we work" },
  { href: "/work",        label: "Work" },
  { href: "/insights",    label: "Insights" },
  { href: "/about",       label: "About" },
];
```

---

### Footer

`src/components/layout/Footer.tsx` — server component

**Structure**

Four-column grid (`grid-cols-2 md:grid-cols-4`):

| Col | Content |
|---|---|
| 1 (2 cols on mobile) | Wordmark + one-line description |
| 2 | Company links (About, How we work, Work, Insights, Contact) |
| 3 | Services links (Support, Operations, Revenue, Knowledge, Internal Tools) |
| 4 | Resources links + Contact email |

Below a `Rule`, a legal bar with privacy/terms links on the left, copyright + "Built in India" on the right.

**Note on year:** `new Date().getFullYear()` is flagged by Next.js 16's prerender stability check. The year is hardcoded as `2026` and should be updated annually.

---

### Root layout

`src/app/layout.tsx`

Applies all four font CSS variables to the `<html>` element. Sets `lang="en"`. Wraps content in `<Header />`, `<main id="main-content">`, `<Footer />`. Body has `min-h-full flex flex-col` to push the footer to the bottom of short pages.

**Site metadata**

```ts
title: {
  default: "K2 — AI Agents & Automation Studio",
  template: "%s | K2",
},
description: "We scope, pilot, and run AI agents for business workflows. One function at a time. Model-agnostic.",
metadataBase: new URL("https://k2.ai"),
```

---

## 9. Pages

### `/` — Home page

`src/app/page.tsx` — shell placeholder. Renders the site wordmark label, a serif heading, a one-line description, and both CTAs. Full page content is built in the next phase.

### `/styleguide` — Design system catalogue

`src/app/styleguide/page.tsx` — `robots: { index: false, follow: false }`

Not indexed by search engines. Shows every token and component with live examples. 12 sections:

| Section | Contents |
|---|---|
| 01 / Colour | 8 colour swatches with hex values |
| 02 / Typography | Newsreader display through h3 + italic; Geist body/small; JetBrains Mono label + code |
| 03 / Buttons | All variants and sizes, light and dark backgrounds, as links |
| 04 / Label | All uses, light and dark |
| 05 / Section heading | With label, without label, inverted |
| 06 / Rule | Light and dark |
| 07 / Cards | Bordered, flat, ruled |
| 08 / Callout | Note, action, warn |
| 09 / Accordion | Single-open, multi-open, inverted |
| 10 / Form fields | Full form with error state, hint text, select, textarea |
| 11 / Placeholder | Three sizes; note about production behaviour |
| 12 / Container & grid | 12-column grid visualised; 5/7 asymmetric split |

The form in section 10 is extracted to `StyleguideForm.tsx` as a `"use client"` component because the `onSubmit` handler cannot live in a server component.

---

## 10. Motion and accessibility

### Motion

All transitions are 150–200ms. No parallax, no bouncing, no entrance animations that run without user interaction (except the scroll reveal class, which is CSS-only and requires JS wiring).

Hover effects:
- Underline scale: `after:scale-x-0` → `after:scale-x-100` over 150ms
- Colour transitions: 150ms
- Button background transitions: 150ms
- Mobile drawer slide: 250ms `ease-out`
- Backdrop fade: 200ms

`prefers-reduced-motion: reduce` disables all transitions and animations globally via:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Accessibility

- **Focus ring:** `2px solid --color-accent` with `3px offset`, applied via `:focus-visible`. Keyboard navigation is fully visible.
- **Skip link:** Visible on focus only, jumps to `#main-content`.
- **Semantic HTML:** `<header>`, `<main>`, `<footer>`, `<nav aria-label>`, `<aside role="note">`, `<section>`, `<article>`, `<ul role="list">` used throughout.
- **ARIA on accordion:** `aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`, native `hidden` attribute.
- **ARIA on drawer:** `role="dialog"`, `aria-modal="true"`, `aria-label`, focus management on open, Escape to close.
- **Colour contrast:** All text/background pairs target WCAG AA (4.5:1 for normal text, 3:1 for large text). The palette was chosen for this — ink `#14161A` on `#F6F4EF` is approximately 15:1.
- **Selection colour:** Accent green background with off-white text for `::selection`.
- **Scroll margin:** `[id]` elements have `scroll-margin-top` set to header height + 1.5rem so anchor links clear the sticky header.

---

## 11. Build notes and constraints

### Next.js 16 specific

This project uses Next.js **16.4.6**, not 14 as originally specified. The APIs are compatible but there are two notable behaviours:

1. **`new Date()` in server components** is flagged as unstable during prerender. The Footer year is hardcoded. If you need a dynamic year, use `"use client"` or the `connection()` API.

2. **Event handlers in server components** throw at build time. Any component with `onClick`, `onSubmit`, etc. must have `"use client"` at the top. The styleguide form is extracted into `StyleguideForm.tsx` for this reason.

### Tailwind v4

No `tailwind.config.js` file exists. All customisation is done in `globals.css` using the `@theme inline` directive. This means:
- Custom tokens are available as Tailwind utilities (e.g. `bg-[var(--color-accent)]`)
- There is no `safelist` or `content` array to configure
- The `@tailwindcss/turbopack` plugin handles everything via Turbopack

### Font loading

The `geist` npm package (which provides `geist/font/sans` and `geist/font/mono`) was not reliably installed in this environment. All four fonts are loaded via `next/font/google` instead:

```tsx
import { Newsreader, Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
```

This is the correct production approach — `next/font/google` self-hosts the fonts at build time.

### What is not yet built

- Database layer (PostgreSQL + Drizzle ORM)
- Email (Resend)
- All page content: Home, Services, How we work, Work, Insights, About, Contact
- Scroll reveal JavaScript wiring (CSS is in place)
- Any real client logos, testimonials, or case studies (use `<Placeholder>` until ready)

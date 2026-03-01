# Portfolio — Design & Build History

A running record of every deliberate decision: what's in the site, why it's structured the way it is, and what changed over time. Not a changelog — more of a design rationale document that also happens to be chronological.

---

## Purpose and how to maintain this file

**This file is not auto-loaded.** It is a reference document — read it explicitly when you need full context on a component, a past decision, or why something is the way it is.

What IS auto-loaded is `~/.claude/projects/-Users-friday-pjt-Portfolio/memory/MEMORY.md`. That file is injected into every new Claude Code session automatically and contains the fast-path summary: current structure, component inventory, key decisions. MEMORY.md points here for deeper context.

**The division of responsibility:**

| File | Auto-loaded | Purpose |
|---|---|---|
| `MEMORY.md` (in `~/.claude/…`) | Yes, every session | Short facts, current state, pointers. Keep under 200 lines. |
| `HISTORY.md` (this file, in repo) | No — read on demand | Full rationale, design decisions, what changed and why |

**When to update this file:**

- Any time a layout, visual, or structural decision is made that isn't obvious from reading the code
- Any time something is tried and rejected — record what it was and why it didn't work
- Any time a component's design changes significantly

**Format for new entries:** append at the bottom under a dated heading.

```
## [Short label] — YYYY-MM-DD

What changed and why. Design rationale, not just what the code does.
If it replaces something, note what was there before and why it was changed.
```

**When to update MEMORY.md:**

- When the card list changes (new project added, order changed)
- When a new animation or interaction is added
- When a breakpoint or layout mode changes
- When a user preference is established

Keep MEMORY.md as the fast-path summary. If a MEMORY.md entry grows beyond two or three lines, move the detail here and replace it with a pointer.

---

## Stack

Pure static site. No framework, no build step, no npm.

| Layer | Choice |
|---|---|
| Markup | Semantic HTML5 (`<header>`, `<main>`, `<article>`, `<figure>`, `<footer>`) |
| Styling | Single `style.css` — vanilla CSS, no preprocessor |
| Behavior | Inline `<script>` at bottom of `index.html` — ~6 lines of JS |
| Font | Inter (400/500/600) via Google Fonts with `preconnect` hints |
| Hosting | Static file serving (no server-side anything) |

Zero dependencies. Zero build tooling. The entire site is two files.

---

## Origin — What Was There Before

The repo started life (Aug 2025) as a **glassmorphism Mac-style portfolio** — a completely different visual direction. That version lived in `src/`, used blur/frosted-glass effects, and was discarded entirely in the January 2026 rewrite when the structure was moved to the root.

The current site shares nothing with the glassmorphism prototype except the font choice and the projects being written about.

---

## Architecture Decisions

### Single-column content, two-column grid

The page has three distinct vertical zones:

1. **Header** — centered, minimal. Name + one-sentence position statement (`.lens` class).
2. **Intro** — a prose paragraph, max-width 1200px, centered, justified. Separated from the grid by a 48px horizontal rule drawn with `::after` pseudo-element — no actual `<hr>` tag.
3. **Projects grid** — 2-column CSS Grid on desktop, collapses to 1-column at 640px.

The centering of header/intro against a wide-grid layout creates a deliberate visual narrowing before expanding into the cards.

### Card structure — Failure Mode / Intervention / Result

Every project card follows the same internal structure:

```
.project-header  (title + domain tag)
.context         (framing paragraph — italic, sets up the problem space)
.breakdown × 3   (Failure mode → Intervention → Result)
  └── .project-figure (image + figcaption, inside the Result breakdown)
```

The three-act structure (`Failure mode → Intervention → Result`) is a deliberate narrative frame. It positions each project as a diagnostic exercise rather than a feature list, which mirrors the site's stated thesis about systems that technically succeed but practically fail.

### Domain tags (`.project-tag`)

Small, uppercase, tracked labels — `Urban Planning`, `Enterprise Software`, `Automotive Security`, `Logistics`. Hidden on mobile (`.project-tag { display: none }` at 640px breakpoint). They serve as scannable category markers on desktop but are cut as noise on small screens where reading is already constrained.

---

## Visual Design Decisions

### Color palette

Two-color palette with one accent.

| Token | Hex | Usage |
|---|---|---|
| Near-black | `#1A1A1A` | Body text, H1, H2, links |
| Off-white | `#F5F5F0` | Page background, tag background |
| Mid-grey | `#4A4A4A` | `.lens` tagline |
| Muted grey | `#6B7580` | Captions, tags (text) |
| Border grey | `#E0E0DC` | Card borders, dividers |
| Accent slate | `#4A6572` | Card top border, section labels, footer rule, separators |

The accent (`#4A6572`) is a desaturated blue-grey. It appears sparingly — top border on cards, left border on breakdown headings, the footer `border-top`, the `::after` divider under the intro. It functions as a structural signal, not a decorative one.

### Typography

Inter is the sole typeface. Weights in use:

| Weight | Element |
|---|---|
| 400 | Body text, `.lens`, captions, `.context p` |
| 500 | H1, `.project-tag`, `.breakdown h3`, footer |
| 600 | H2 (card titles) |

Tracking (letter-spacing):
- H1: `-0.02em` — tighter, authoritative
- H2: `-0.01em` — slightly tightened
- `.project-tag`: `+0.08em` — wide, all-caps label convention
- `.breakdown h3`: `+0.06em` — same wide-tracking for uppercase section markers

### The `.lens` tagline

The subheadline under the name — `"I'm interested in the point where systems technically succeed and practically fail."` — uses class `.lens`. It's 16px / weight 400 / `#4A4A4A`. The name (H1) is 500 weight and `#1A1A1A`; `.lens` steps back to regular weight and mid-grey. The visual effect is name as marker, tagline as thesis statement — the reader gets the position before the portfolio opens. Not a job title, not a role — a stated orientation. The word "lens" as a class name was deliberate.

### Justified text

`.intro p`, `.context p`, and `.breakdown p` are all `text-align: justify; text-justify: inter-word`. This is intentional — it gives the prose a document-like quality consistent with the analytical register of the writing. Not used in headers or captions.

### Card top border as accent

Each `.project-card` has `border-top: 3px solid #4A6572` against a `1px solid #E0E0DC` perimeter. This creates a visual hierarchy — the accent top-border is the first thing the eye lands on when scanning vertically. The thicker top signals "entry point."

### Breakdown heading style

`.breakdown h3` — 11px, uppercase, +0.06em tracking, `#5F6A72`, with a `2px solid #4A6572` left border and 10px left padding. This is a diagnostic label style, not a conventional section heading. The left border echoes the card's top border accent, creating a vertical / horizontal repetition of the same color across the layout.

### The `::after` divider

```css
.intro::after {
    content: "";
    display: block;
    margin: 40px auto 0;
    width: 48px;
    height: 1px;
    background: #4A6572;
    opacity: 0.5;
}
```

A 48px hairline rule centered below the intro paragraph. Created with a pseudo-element rather than an `<hr>` to keep the markup clean and avoid default browser hr styling. `opacity: 0.5` softens it — it reads as a breathing space, not a hard divide.

### Mobile layout — full card-style strip

At `≤640px`, cards are completely re-skinned:

- `background: transparent`, `border: none`, `border-radius: 0`, `padding: 0`
- Each card gets `border-bottom: 1px solid #E0E0DC` and `margin-bottom: 64px`
- Last card gets `border-bottom: 1px solid #4A6572` (accent instead of grey, signals end-of-list)
- `.project-tag` is hidden
- H2 drops to 19px / weight 500 (from 18px / 600) — slightly lighter feel for prose-first reading

The effect is a single-column reading list rather than a card grid. The card chrome (white background, border-top accent, border-radius) is stripped because it would feel cramped at narrow widths.

---

## Favicon

Inline SVG data URI — a 10px filled circle (`fill="#1A1A1A"`) centered in a 100×100 viewBox. No external file, no PNG fallback required for modern browsers. The circle is the simplest possible mark; it doesn't attempt to be a logomark.

```html
href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='10' fill='%231A1A1A'/%3E%3C/svg%3E"
```

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| `>900px` | Full two-column grid, 24px gap |
| `≤900px` | Same layout, gap reduced to 20px, `max-width` tightened to 960px |
| `≤640px` | Single column, card chrome stripped, prose-first reading layout |

Only two breakpoints. The 900px one is minor (gap and max-width only). The 640px one is a full layout mode switch.

---

## Animation Layer (added Feb 26 2026)

No library. CSS keyframes + Intersection Observer API. All motion is additive — the static layout reads correctly with JS off or motion disabled.

### Page load: header and intro fade-up

```css
@keyframes fadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
}
header { animation: fadeUp 0.6s ease-out both; }
.intro  { animation: fadeUp 0.6s ease-out 0.15s both; }
```

- `both` fill-mode: element starts invisible (no flash of unstyled content) and holds final state
- 12px vertical offset: enough to read as motion, small enough not to feel dramatic
- 150ms stagger: header settles, then intro follows. Establishes reading order through time

### Card scroll entrance: Intersection Observer + CSS transition

Cards start at `opacity: 0; transform: translateY(20px)`. When 8% of a card enters the viewport, `.visible` is added via JS and the transition fires.

```css
.project-card {
    opacity: 0;
    transform: translateY(20px);
    transition: border-color 0.2s ease, opacity 0.5s ease-out, transform 0.5s ease-out;
    transition-delay: 0s, var(--delay, 0ms), var(--delay, 0ms);
}
.project-card.visible { opacity: 1; transform: translateY(0); }
```

Stagger is per-card via CSS custom property on the element itself:

```html
<article class="project-card" style="--delay: 0ms">
<article class="project-card" style="--delay: 80ms">
<article class="project-card" style="--delay: 160ms">
<article class="project-card" style="--delay: 240ms">
```

The `transition-delay` list maps to the three `transition` properties in order: `border-color` gets `0s` (hover feedback should be instant), `opacity` and `transform` get `--delay`. This avoids splitting them into separate rules.

JS (6 lines):

```js
const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    }),
    { threshold: 0.08 }
);
document.querySelectorAll('.project-card').forEach(c => observer.observe(c));
```

`observer.unobserve` after trigger: each card animates in once and the observer stops watching it. No recalculation on scroll-up.

### Image hover: scale(1.02)

```css
.project-figure img { transition: transform 0.35s ease; }
.project-card:hover .project-figure img { transform: scale(1.02); }
```

2% scale is deliberately subtle — it signals interactivity without being a distraction. The transition is on the `img` directly (not the `figure`), so the scale is clipped by the parent's border.

### Reduced-motion override

```css
@media (prefers-reduced-motion: reduce) {
    header, .intro { animation: none; }
    .project-card { opacity: 1; transform: none; transition: none; }
    .project-figure img { transition: none; }
}
```

Cards are set to `opacity: 1` and `transform: none` — they're immediately visible, bypassing the scroll trigger entirely. The observer still runs and adds `.visible`, but since the card is already fully visible, it's a no-op.

---

## Footer

Three links separated by `•` bullets:
- GitHub profile (external, `target="_blank" rel="noopener"`)
- Resume PDF (external, same treatment)
- Email (`mailto:`)

Links use `border-bottom: 1px solid transparent` as a hover baseline — on hover, `border-bottom-color` transitions to the accent. This avoids layout shift (the border space is always reserved) while still providing visual feedback.

---

## What Was Considered and Not Done

| Option | Reason skipped |
|---|---|
| Framer Motion | Requires React — full rewrite for same visual output |
| CSS-only card animations (`:target`, checkbox hack) | No scroll-trigger possible without JS |
| AOS / ScrollReveal libraries | Adds a dependency and ~20KB for something 6 lines of JS handles |
| Dark mode toggle | ~~Not in scope~~ — added 2026-03-01. See changelog. |
| Navigation / routing | ~~No multi-page structure~~ — sticky anchor nav added 2026-03-01. See changelog. |
| Card hover lift (`box-shadow` on hover) | Tested — made the cards feel too interactive relative to the analytical tone |
| Narrowed cards with centered margins (`max-width: 520px; margin: auto`) | Tried to reduce "finished product" feel by constraining card width. Created awkward whitespace and broke grid alignment. Cards should fill their grid columns — narrowing happens via grid gap and overall layout width, not per-card width constraints. |

---

## Changelog

### Intro width corrected — 2026-02-26 (commit `88797f7` / `CSS updates`)

`.intro` was originally `max-width: 720px` — narrow enough that it sat left-aligned inside the wider two-column grid, creating a visible misalignment between the intro text and the card grid below it. Changed to `max-width: 1200px; margin-left: auto; margin-right: auto`. The intro now spans the same horizontal space as the grid, which creates clean vertical rhythm: the eye follows one consistent column width from top to bottom. The `::after` divider margin was also updated from `margin-top: 40px` to `margin: 40px auto 0` to keep it centered under the intro text.

### CAN duplicate content — resolved before documentation (no commit recorded)

A previous version of the CAN Intrusion Detection card contained duplicate breakdown sections and two identical image accordions. This was cleaned up at some point before the current documentation was written. Current state of the card is correct: one `.context`, three `.breakdown` divs (Failure mode / Intervention / Result), one `.project-figure` inside Result.

### Five UI additions — 2026-03-01

Five features added in a single session, all within the existing two-file structure. No new dependencies introduced.

**CSS custom properties migration**

All hardcoded color values were moved into a `:root` token block at the top of `style.css`. This was a prerequisite for dark mode — without it, switching themes would require a second complete stylesheet. Token names follow function not value: `--text-primary`, `--surface`, `--accent`, `--border`, etc. A `[data-theme="dark"]` block overrides each token. The dark palette uses `#141414` / `#1E1E1E` surfaces, `#E8E8E4` primary text, and a slightly lighter accent (`#5A7582` vs `#4A6572`) to maintain the same visual weight against darker backgrounds.

**Dark mode**

`[data-theme="dark"]` is set on `<html>` (not `<body>`) so that the attribute is present before any element renders. The toggle function (`window.__toggleTheme`) is exposed globally because the nav button calls it inline — keeping the JS compact without needing event delegation across the nav and script boundaries.

The FOUC (flash of unstyled content) problem: if the theme is read and applied in the bottom `<script>` block, users returning with a dark preference see a white flash while the page loads. Fix is a 4-line inline `<script>` placed in `<head>` before the `<link rel="stylesheet">` tag. It runs synchronously, reads `localStorage`, and sets `data-theme` before the stylesheet is applied. The bottom script still handles the toggle logic; the head script only handles the initial read.

OS preference (`prefers-color-scheme: dark`) is respected as the default if no stored preference exists. Explicit user choices persist to `localStorage` and override the OS setting on subsequent visits.

Toggle button: a 32px circle in the nav. The sun/moon state is rendered with a CSS crescent trick — in dark mode, `box-shadow: inset -3px -1px 0 2px var(--surface)` cuts a crescent out of the filled circle. No SVG, no icon library.

**Sticky nav + scroll progress bar**

The nav is `position: fixed` and starts translated `translateY(-100%)` — fully off-screen. After 80px of scroll (past the header), a JS scroll listener adds `.visible` and it slides down with a `0.3s ease` transition. This threshold was chosen so the nav only appears when the user has committed to scrolling, not on initial page load.

Contents: brand name (left, links to `#page-top` on `<main>`) → jump links → theme toggle (right). The brand uses `margin-right: auto` to push everything else right, keeping the layout stable without a spacer element.

Active jump link: a second `IntersectionObserver` with threshold `0.35` watches the four project cards. When a card is 35% visible, its corresponding nav link gets `.active` (font-weight 500, full `--text-primary`). The threshold is higher than the card entrance observer (0.08) because active state should reflect what's actually being read, not just what's entered the viewport edge.

Scroll progress bar: implemented as `::after` on the nav itself, width driven by a `--scroll-progress` CSS custom property updated by the scroll listener. Placing it on the nav means it only appears when the nav is visible — a standalone fixed progress bar at the top would float over the header and look disconnected. The bar sits at `bottom: -1px` of the nav, overlapping the `border-bottom` line so the two don't stack.

Mobile (≤640px): `.nav-links { display: none }`. The brand name and toggle button remain. Jump links would overflow or require wrapping logic at narrow widths; removing them is cleaner since the 4-card page is short enough to navigate by scrolling.

`scroll-margin-top: calc(var(--nav-h) + 16px)` on `.project-card` prevents anchor jumps from landing under the nav bar.

**Skills strip**

Inserted between the intro's `::after` divider and the projects grid. Uses `<dl>` / `<dt>` / `<dd>` — the correct semantic element for a term-definition pattern (category → items). Four groups: Research, Design, Engineering, Domain.

The category labels (`.skill-category`) are styled identically to `.breakdown h3` — same 11px uppercase tracking, same `border-left: 2px solid var(--accent)`, same `--text-label` color. This ties the skills vocabulary to the project analysis vocabulary. The visual language is the same because the epistemic register is the same: both are diagnostic labels.

4-column grid on desktop, 2-column at ≤900px, 2-column maintained at ≤640px (items are short enough that 2-col works at narrow widths without wrapping problems).

Skills content currently reflects what's demonstrable from the four projects. Update `<dd>` items whenever the actual stack changes.

**Expandable cards + modal**

The core decision: truncate the cards rather than just add a modal on top of full content. If the cards already show everything, the modal has no purpose. Truncating to header + context + Failure mode creates a genuine "read more" affordance — the grid becomes a scannable table of contents, and the modal becomes the reading view.

The `breakdown--extended` class marks the Intervention and Result sections. In the card: `display: none`. In the modal: `.modal-body .breakdown--extended { display: block }` overrides it. One class, two contexts, no JS manipulation of visibility.

Each card is `display: flex; flex-direction: column`. The `.card-cta` button uses `margin-top: auto` to push itself to the bottom of the card regardless of content height. This keeps the CTA aligned across cards of different text lengths — without it, the button floats awkwardly below short Failure mode paragraphs.

Single modal instance shared across all four cards. On open: JS clones the full card element (including hidden `breakdown--extended` content), removes the inline `--delay` style, removes the CTA button from the clone, and injects it into `#modal-body`. The modal CSS strips card chrome (border, background, border-radius) from the cloned card.

Open/close animation uses the `[hidden]` attribute + `.open` class in sequence. `[hidden]` maps to `display: none`; removing it makes the element visible but at `opacity: 0`. One `requestAnimationFrame` boundary (forced via `.getBoundingClientRect()`) then the `.open` class triggers the opacity transition. On close, `.open` is removed, opacity transitions to 0, and `transitionend` restores `[hidden]`. Without this two-step, transitioning directly from `display: none` produces no animation (browsers skip transitions when display changes).

`prefers-reduced-motion` edge case: when transitions are disabled, `transitionend` never fires. The close handler checks the media query and runs cleanup synchronously if motion is reduced.

### Scroll animations added — 2026-02-26 (commit `03beda4` / `Transitions`)

See the Animation Layer section above for full details. Short version: CSS `fadeUp` keyframe on header/intro, Intersection Observer + `.visible` class on cards with per-card `--delay` stagger, `scale(1.02)` on image hover, `prefers-reduced-motion` override. Zero dependencies.

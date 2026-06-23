# Claude Code Prompt — Personal Portfolio Website

Paste this entire prompt into Claude Code / the CLI to scaffold and build the portfolio.

---

## The Brief

Build a personal portfolio website using React + Vite + JavaScript. The site has a coffee shop theme — clean, sun-bleached, editorial — inspired by a small standalone café with stark white walls, a single bold yellow service window, and hand-drawn line art menus. The vibe is specialty coffee: minimal, confident, slightly playful.

Professional content (job titles, companies, project outcomes, credentials) remains fully legible and recruiter-ready. The theme lives in visual texture, section names, and microcopy — not in the content itself.

---

## Visual Design System

Implement these design tokens as CSS custom properties in `src/styles/tokens.css`. Every color, font, and spacing decision in the app must derive from these tokens — no hardcoded values anywhere in components.

### Palette (two-tone + yellow pop constraint)
```css
:root {
  /* Backgrounds */
  --color-bg:           #F7F4EE;   /* warm off-white — primary page background */
  --color-bg-card:      #EFEADE;   /* slightly deeper for cards, surfaces */
  --color-bg-dark:      #1A1A1A;   /* near-black — nav mobile menu, footer, dark sections */

  /* Accent — single yellow pop, inspired by the coffee window frame */
  --color-accent:       #F2C12E;   /* golden yellow — primary accent */
  --color-accent-dark:  #C9980A;   /* deeper yellow — hover, pressed states */
  --color-accent-soft:  #FAE48B;   /* pale yellow — subtle highlights, tag backgrounds */

  /* Text */
  --color-text:         #1A1A1A;   /* near-black body text */
  --color-text-muted:   #6B6860;   /* muted: captions, dates, secondary labels */
  --color-text-light:   #F7F4EE;   /* for text on dark backgrounds */

  /* Functional */
  --color-border:       rgba(26, 26, 26, 0.12);
  --color-shadow:       rgba(26, 26, 26, 0.06);
}
```

**Yellow discipline:** `--color-accent` appears in exactly these places: the "Currently Brewing" badge, active nav indicator, primary CTA button fill, the House Specialties band accent line, and hover states on project cards. It does not appear as a background, a text color, or decorative scatter. One color, used with intention.

### Paper Texture (CSS-only, no image asset)

Apply a subtle recycled paper grain to the page background and card surfaces using an SVG noise filter embedded as a CSS `background-image`. The goal is to evoke the texture of a handmade paper café menu — slightly fibrous, warm, not digital-smooth.

Implement this in `global.css`:

```css
/* Paper grain filter — defined once, referenced everywhere */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 999;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 300px 300px;
}
```

Additionally, cards (`.card` class) get a slightly stronger grain at `opacity: 0.06` applied via `::after` pseudo-element, making them feel like individual menu cards printed on textured stock.

This overlay is purely cosmetic. It must not interfere with click events (`pointer-events: none` required) or reduce text contrast below WCAG AA.

### Typography
```css
:root {
  /* Google Fonts — add to index.html:
     <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
  */
  --font-display: 'Fraunces', Georgia, serif;       /* hero name, section headers */
  --font-body:    'DM Sans', system-ui, sans-serif; /* all body, nav, buttons, tags */

  /* Type scale */
  --text-xs:   0.75rem;
  --text-sm:   0.875rem;
  --text-base: 1rem;
  --text-lg:   1.125rem;
  --text-xl:   1.375rem;
  --text-2xl:  1.75rem;
  --text-3xl:  2.5rem;
  --text-4xl:  3.5rem;
  --text-5xl:  5rem;
}
```

**Typography direction:** Fraunces is a variable optical-size serif with a distinctive ink-trap personality — set at large sizes with `font-weight: 800–900` for headers to get its most characterful look. DM Sans keeps body copy clean and scannable. The pairing should feel like a specialty coffee menu: one expressive display element, everything else in quiet service to it.

### Spacing & Shape
```css
:root {
  --radius-sm:   3px;
  --radius-md:   6px;
  --radius-lg:   12px;
  --radius-pill: 999px;

  --space-1:  0.25rem;
  --space-2:  0.5rem;
  --space-3:  0.75rem;
  --space-4:  1rem;
  --space-6:  1.5rem;
  --space-8:  2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;
}
```

Note: border radii are intentionally small. This design is crisp and slightly architectural — not bubbly or rounded. The `--radius-sm: 3px` gives just enough softness to feel handmade without looking like a pill-heavy UI framework.

---

## Illustrated Icon System

Create `src/components/icons/` with inline SVG icons in a loose hand-drawn line art style — slightly imperfect strokes, not polished vector. All icons use `currentColor`, accept `width`/`height` props (default `24`), and have `stroke-linecap: round` / `stroke-linejoin: round`.

Implement these named exports:

- `EspressoMachine` — side-profile machine with portafilter and steam wand
- `CoffeeCup` — cup on saucer with 2–3 steam wisps
- `CoffeeBeans` — two oval beans with a center crease
- `CoffeeBag` — gusseted bag with a small bean icon
- `Kettle` — gooseneck / pour-over kettle
- `Plant` — small potted plant with a few leaves
- `SteamWisp` — just 2–3 rising steam curves (used in BrewingBadge)
- `Moka` — stovetop moka pot

Icon aesthetic: stroke-width 1.5–2, never filled unless structurally necessary, slightly uneven path nodes to suggest hand-drawing. These should look like they belong on the NOOK menu or the Catpuccino poster — charming, not clipart.

Also create one larger illustration for the Hero background:

`src/components/icons/CafeStorefront.jsx` — a detailed café storefront SVG inspired by: a flat-front building with a large service window (styled like a coffee pickup window with a bold rectangular frame), an awning, two outdoor stools, and a small "OPEN" sandwich sign. This is used as a large decorative background element at very low opacity (0.06). Draw it in a single `currentColor` stroke — no fills. ViewBox: `0 0 600 500`.

---

## Project Structure

```
src/
├── components/
│   ├── icons/
│   │   ├── index.js            # named re-exports of all icons
│   │   ├── EspressoMachine.jsx
│   │   ├── CoffeeCup.jsx
│   │   ├── CoffeeBeans.jsx
│   │   ├── CoffeeBag.jsx
│   │   ├── Kettle.jsx
│   │   ├── Plant.jsx
│   │   ├── SteamWisp.jsx
│   │   ├── Moka.jsx
│   │   └── CafeStorefront.jsx
│   ├── NavBar.jsx
│   ├── ProjectCard.jsx
│   ├── ExperienceEntry.jsx
│   ├── BrewingBadge.jsx
│   ├── SkillTag.jsx            # pill tag for skills and tech stack
│   ├── SectionDivider.jsx      # hairline rule + centered icon
│   └── Modal.jsx
├── sections/
│   ├── Hero.jsx
│   ├── MeetTheBarista.jsx
│   ├── HouseSpecialties.jsx
│   ├── WhereITrained.jsx
│   ├── BehindTheCounter.jsx
│   ├── TheMenu.jsx
│   ├── TheToolkit.jsx
│   ├── DailySpecials.jsx
│   └── ComeFindMe.jsx
├── data/
│   ├── projects.js
│   ├── experience.js
│   ├── education.js
│   ├── skills.js
│   ├── specialties.js
│   └── personal.js
├── styles/
│   ├── tokens.css
│   └── global.css
├── assets/
│   └── resume.pdf
└── App.jsx
```

---

## Section Specifications

### NavBar
- Sticky top, `background: var(--color-bg)`, `border-bottom: 1px solid var(--color-border)`
- Left: small `CoffeeCup` icon + site name (first name only or initials) in `--font-display`
- Center: section links using themed names
- Right: "Full Résumé ↓" — small outlined button
- Active link: a short yellow underline bar (`background: var(--color-accent)`, 2px tall, animates in)
- Mobile (<768px): hamburger icon → full-screen overlay with `background: var(--color-bg-dark)`, links in large `--font-display` type, light text. Feels like a blackboard menu.

### Hero
- Full `100vh`, vertically centered content, left-aligned text on desktop
- Name: `--font-display`, `--text-5xl`, `font-weight: 900`, tight letter-spacing
- Positioning statement: `--font-body`, `--text-lg`, `--color-text-muted`
- Tagline: 2 sentences, `--font-body`, `--text-base`
- CTAs: "See the Menu →" (filled yellow `--color-accent`, dark text) + "Full Résumé ↓" (outlined, dark)
- **Background:** `CafeStorefront` SVG positioned absolutely, right side of hero on desktop, bottom on mobile. `color: var(--color-text)`, `opacity: 0.06`. No interaction, purely atmospheric.
- Entrance: name fades up first, then positioning statement (+150ms), then CTAs (+300ms). All use `opacity: 0 → 1` + `translateY: 16px → 0`, 350ms ease-out. Respects `prefers-reduced-motion`.

### Meet the Barista
- Two-column desktop (text 60% / aside 40%), single column mobile
- Header: `--font-display`, `--text-3xl`
- Body: 1–3 paragraphs, `--font-body`, `line-height: 1.75`
- Small `Plant` icon decorates the section header area
- **"What's in my cup right now"** aside: a small card with `background: var(--color-bg-card)`, a left border stripe in `--color-accent` (3px), italic body text. Used for a current project, interest, or book.

### House Specialties
- Full-width band, `background: var(--color-bg-dark)`, `color: var(--color-text-light)`
- A single thin yellow rule (`border-top: 2px solid var(--color-accent)`) at the very top of the band
- Header: "House Specialties" in `--font-display`, large, `font-weight: 300` (the contrast of light weight on dark bg is the moment)
- 3–5 items in a horizontal flex row (wraps on mobile), each as a compact card:
  - `CafeIcon` (small, `color: var(--color-accent)`)
  - Short label in `--font-display`, medium weight
  - 1-line descriptor in `--font-body`, muted light text
  - Entire card is a smooth-scroll anchor link to the relevant section
- This is the only fully dark section on the page — it should feel like stepping inside from the bright exterior

### Where I Trained (Education)
- Vertical stack, most recent first
- Each entry: institution (`--font-display`, `--text-xl`) + degree + dates
- Collapsed by default; click/tap to expand: GPA, coursework, honors, activities
- A `CoffeeBeans` icon (small, `--color-text-muted`) sits left of each institution name
- Expand/collapse with a smooth height transition

### Behind the Counter (Experience)
- Vertical timeline: a 1px line in `--color-border` runs down the left margin, each entry has a small circle marker
- Collapsed: company + role (bold) + dates + location
- Expanded: bullet points + `SkillTag` chips
- **Finance/quant roles:** a small yellow tag "★ House Specialty" rendered in `--color-accent-soft` background, dark text — makes them findable at a glance for finance recruiters
- Most recent first

### The Menu (Projects)
- Intro line: *"Here's what's been served."* — `--font-body`, italic, muted
- Filter row: All / Finance & Quant / Web & Apps / Data & ML — pill buttons, active state filled yellow
- Card grid: 2 col desktop, 1 col mobile, `gap: var(--space-6)`
- **ProjectCard:**
  - Background `--color-bg-card`, border `1px solid var(--color-border)`, `border-radius: var(--radius-md)`
  - Paper grain `::after` overlay (see texture spec above)
  - Top: small `CafeIcon` (category-matched) + `BrewingBadge` if `status === 'brewing'`
  - Project name: `--font-display`, `--text-xl`, `font-weight: 700`
  - Tagline: `--font-body`, `--text-sm`, muted
  - Bottom: `SkillTag` chips + GitHub / Demo links as small icon-text pairs
  - Hover: `transform: translateY(-4px)`, shadow deepens, left border turns yellow (`border-left: 3px solid var(--color-accent)`), 150ms ease
- Click opens `Modal` with full project detail

### BrewingBadge
- Pill: `background: var(--color-accent)`, `color: var(--color-bg-dark)`, `--text-xs`, `font-weight: 600`
- Text: "Currently Brewing"
- `SteamWisp` icon to the left: CSS keyframe — wisps drift upward and fade (`translateY: 0 → -4px`, `opacity: 1 → 0`), 2.5s loop, staggered between the steam lines
- `prefers-reduced-motion`: no animation, static badge only

### SkillTag
- `background: var(--color-bg-dark)`, `color: var(--color-text-light)`
- `--text-xs`, `--font-body`, `font-weight: 500`
- `border-radius: var(--radius-sm)` — intentionally boxy, not pill-shaped
- `padding: 3px 8px`
- On `--color-bg-dark` sections (House Specialties): invert to `background: rgba(255,255,255,0.1)`, `color: var(--color-text-light)`

### The Toolkit (Skills)
- Groups: Languages / Finance & Quant / Frameworks / Tools / Concepts
- Each group: header in `--font-display` (`--text-lg`) + small `CafeIcon` + `SkillTag` wrap layout
- Layout: 2-column grid on desktop (two groups side-by-side), single column mobile
- No bars, no percentages. Honest grouping only.

### Come Find Me (Contact)
- Intro: "Pull up a chair." in `--font-display`, italic
- Contact form: Name, Email, Message + Send button
  - Fields: `background: var(--color-bg-card)`, border `1px solid var(--color-border)`, focus ring in `--color-accent`
  - Send button: filled yellow, dark text, same style as hero primary CTA
  - Integrated with EmailJS (env vars: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`)
- Success toast: slides in from bottom, `background: var(--color-bg-dark)`, yellow left border, text: "Your message is brewing. I'll be in touch soon."
- Error: inline, plain-language, no red (use `--color-text`, underline emphasis instead of color)
- Below form: email address (copy-on-click), LinkedIn + GitHub as icon+text links

### Footer
- `background: var(--color-bg-dark)`, `color: var(--color-text-light)`
- Layout: three-column — copyright / centered icon row / back-to-top
- Icon row: `CoffeeCup`, `CoffeeBeans`, `Plant` at 16px, `opacity: 0.3`, evenly spaced
- "Thanks for stopping by." — centered, `--text-sm`, muted light
- Back to top: smooth scroll, small arrow icon

---

## Data File Shapes

### `src/data/projects.js`
```js
export const projects = [
  {
    id: 'project-1',
    name: 'Project Name',
    tagline: 'One sentence — what it does and why it matters.',
    description: 'Full detail for the modal. First person, active voice, plain language.',
    stack: ['Python', 'React', 'PostgreSQL'],
    category: 'web',          // 'finance-quant' | 'web' | 'data-ml' | 'other'
    status: 'complete',       // 'complete' | 'brewing'
    featured: true,
    links: { github: 'https://github.com/...', demo: null, writeup: null },
    icon: 'EspressoMachine',  // maps to a CafeIcon name
    outcome: 'Quantified outcome or impact.',
  },
];
```

### `src/data/experience.js`
```js
export const experience = [
  {
    id: 'exp-1',
    company: 'Company Name',
    role: 'Job Title',
    start: 'Jun 2024',
    end: 'Aug 2024',        // or 'Present'
    location: 'New York, NY',
    remote: false,
    isFinanceQuant: true,   // triggers "★ House Specialty" tag
    bullets: [
      'Built X using Y, resulting in Z.',
      'Collaborated with N-person team to...',
    ],
    tags: ['Python', 'Excel', 'Financial Modeling'],
  },
];
```

### `src/data/skills.js`
```js
export const skills = {
  languages:    ['Python', 'R', 'JavaScript', 'SQL'],
  financeQuant: ['Excel', 'Financial Modeling', 'DCF Analysis', 'Statistics'],
  frameworks:   ['React', 'Pandas', 'NumPy'],
  tools:        ['Git', 'Figma', 'VS Code'],
  concepts:     ['Portfolio Theory', 'Probability', 'Machine Learning Basics'],
};
```

---

## Animation & Interaction

- Section entry: `opacity: 0 → 1` + `translateY: 20px → 0`, 400ms ease-out, triggered by IntersectionObserver (threshold: 0.15)
- Child stagger: 80ms between items
- Card hover: `translateY(-4px)` + deepen shadow + yellow left border, 150ms ease
- Nav link hover: yellow underline bar grows from left, 200ms ease
- Modal open: fade + scale from 0.96 → 1, 200ms ease
- `prefers-reduced-motion`: all transforms and opacity transitions disabled; state changes are instant

---

## Responsive Breakpoints

```css
/* sm: 480px  |  md: 768px  |  lg: 1024px  |  xl: 1280px */
```

- Hero: centered stack on mobile, left-text + right illustration on desktop
- Projects: 1 col mobile → 2 col ≥768px
- Experience timeline: stacked (no left line) on mobile → timeline on desktop
- House Specialties: 1 col → row wrap on desktop
- Nav: hamburger <768px

---

## README

Generate `README.md` with:
- One-paragraph project overview
- Setup: `npm install` + `npm run dev`
- Required env vars (EmailJS)
- How to update content (data files only)
- How to add a project
- Deploy instructions for Vercel and Netlify

---

## Implementation Order

1. Vite + React scaffold
2. `tokens.css` + `global.css` with paper grain overlay
3. All icon components (`src/components/icons/`)
4. `NavBar` + scroll-spy
5. `Hero` with `CafeStorefront` background
6. All data files (placeholder content)
7. `BehindTheCounter` — timeline layout
8. `TheMenu` — card grid, filter, modal
9. `MeetTheBarista`, `HouseSpecialties`, `WhereITrained`
10. `TheToolkit`, `DailySpecials`, `ComeFindMe`
11. Footer
12. Responsive pass
13. Accessibility pass (keyboard nav, focus rings, alt text, contrast check)
14. Performance pass (lazy images, bundle audit)

---

## Constraints & Guardrails

- All values from `tokens.css` — zero hardcoded colors, sizes, or font names in components
- No external UI libraries — custom components only
- No skill percentage bars
- Yellow (`--color-accent`) used only in the specific places listed in the palette spec — not scattered
- "Currently Brewing" text appears only in `BrewingBadge`
- All content editable via `src/data/` only — no copy hardcoded in JSX
- All external links: `target="_blank" rel="noopener noreferrer"`
- Paper grain overlay: `pointer-events: none` always, must not reduce text contrast below WCAG AA
- Form submission: never navigates away, handled entirely in JS with toast feedback

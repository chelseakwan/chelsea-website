# Product Requirements Document
## Personal Portfolio Website — The Coffee Shop

**Version:** 1.3
**Stack:** React + JavaScript
**Status:** In Progress
**Theme:** Coffee shop — warm, personal, memorable. The metaphor lives in the language and texture; the professional signal lives in the content.

---

## Changelog: v1.2 → v1.3

- **House Specialties** renamed and repurposed: now the Skills section (was "The Toolkit"). The quant/finance callout band is removed entirely.
- **Behind the Counter (Experience)** retired: not deferred — intentionally removed. Work history surfaces through project cards in The Menu.
- **Daily Specials** removed from scope. Certs, awards, volunteering deferred to v2+.
- **Visual direction significantly expanded:** recycled paper texture is the foundation of the entire visual system, not a color approximation. See Section 6 for full specification.
- **Handdrawn coffee doodles** confirmed as decorative elements only — scattered in margins, section transitions, and the hero. No functional or navigational role.
- **File structure** updated to reflect removed components and data files.

---

## 1. Overview

A personal portfolio website styled as a cozy, welcoming coffee shop — where the owner happens to be a sharp, quantitatively-minded professional with range. The site answers "who are you, what have you done, and why should I care?" but does it in a way that's impossible to forget.

The coffee shop framing is the wrapper, not the distraction. Every section has a themed name and a warm visual texture, but the underlying content — job titles, companies, project outcomes, technical skills — remains crisp, honest, and recruiter-legible. A finance or quant recruiter who clicks through from LinkedIn should smile at the personality and immediately find what they need.

---

## 2. Goals

- Make a strong, memorable first impression within 5 seconds of landing
- Convey both professional competence and genuine personality in one unified experience
- Surface quantitative and finance-relevant credentials clearly, without burying them in the theme
- Showcase work with real outcomes, not just a list of things done
- Be maintainable: content lives in data files, not scattered through components
- Perform well on mobile, where a significant share of recruiter traffic originates

---

## 3. Non-Goals

- Not a blog platform (no CMS, no comment system)
- Not a social network integration hub
- Not a full-stack app with auth or a database
- Not meant to rank on Google for generic terms (SEO is nice-to-have, not a driver)
- The theme does not override legibility — if a metaphor makes content harder to find, drop the metaphor
- No experience/timeline section in the current build — this was an intentional decision, not a deferral

---

## 4. Theme Language Guide

The coffee shop metaphor applies to **section names, nav labels, microcopy, and visual texture**. It does not apply to job titles, company names, project descriptions, or any content a recruiter needs to read accurately.

| Standard Label | Coffee Shop Label | Tab |
|---|---|---|
| Hero / Landing | *(no label — just the vibe)* | Home |
| About Me | Meet the Barista | About |
| Education | Where I Trained | About |
| Projects | The Menu | The Menu |
| Skills | House Specialties | The Menu |
| Future Projects | What's Brewing | What's Brewing |
| Contact | Come Find Me | Come Find Me |
| Nav resume link | Full Résumé | *(all tabs)* |

**Retired labels (out of scope):**
- ~~The Toolkit~~ → replaced by House Specialties
- ~~Behind the Counter~~ → retired entirely
- ~~Daily Specials~~ → deferred to v2+
- ~~House Specialties (quant callout band)~~ → removed

**Copy principles:**
- Section intros can lean into the theme lightly ("Here's what's on offer" for projects)
- Project and experience descriptions use plain, active, first-person language
- Avoid overextending the metaphor — "steeping in financial models" is too cute; "built a discounted cash flow model" is correct

---

## 5. Sections & Content Requirements

### 5.1 Hero / Landing

**Purpose:** Immediate identity and tone establishment. Warm, confident, memorable.

**Content:**
- Full name (large, prominent)
- One-line positioning statement — leads with the person, not just a job title
  - e.g., "Finance & quant student. Builder of things. Brewed fresh daily."
- Very short tagline or welcome line (1–2 sentences max)
- Primary CTA: **See the Menu** (links to Projects)
- Secondary CTA: **Full Résumé** (PDF download)
- No profile photo

**Behavior:**
- Full viewport height (100vh) on load
- Recycled paper texture as background (see Section 6)
- Handdrawn coffee doodles scattered decoratively — loose, margin-dwelling, never centered or symmetrical. Think sketches that drifted onto the page, not a composed illustration
- Subtle entrance animation: name fades or slides in, tagline follows
- Smooth scroll on CTA click

---

### 5.2 Meet the Barista

**Theme label for: About Me**

**Purpose:** Humanize the person. This is voice and personality — credentials live in other sections.

**Content:**
- 1–3 paragraphs: who you are, what drives you, what you're working toward
- Mention of quantitative interests or finance focus here feels natural and unpretentious
- Personal interests, non-work identity, what makes you you
- Optional: "What's in my cup right now" — a current focus, book, or project

**Design note:** Conversational tone, first person. Not a third-person bio. The section should feel like meeting someone, not reading a LinkedIn summary. A small doodle or two can punctuate the section — a coffee cup near the edge, a sprig of something.

---

### 5.3 Where I Trained

**Theme label for: Education**

**Purpose:** Show educational background clearly and credibly.

**Content per entry:**
- Institution name
- Degree and major/field
- Graduation date (or expected)
- GPA (optional, recommended if strong — especially for finance recruiting)
- Relevant coursework (especially quant, stats, econ, CS courses)
- Honors, awards, dean's list
- Activities, clubs, research involvement

**Behavior:**
- Chronological order, most recent first
- Expandable detail per entry (collapsed by default)

---

### 5.4 The Menu

**Theme label for: Projects**

**Tab: The Menu** (alongside House Specialties)

**Purpose:** The centerpiece of the site. Show what you've actually built, with real outcomes. This section carries the full weight of professional history — there is no separate experience section.

**Content per project:**
- Project name (can be evocative — this is the "menu item name")
- Short description / tagline (1–2 sentences — the "menu description")
- Tech stack (displayed as ingredient-style tags/chips)
- Role: solo vs. team, specific contribution
- Key outcome or metric ("served 200+ users", "reduced runtime by 40%")
- Links: GitHub, live demo, writeup
- Screenshot or demo GIF (optional but high-impact)

**Behavior:**
- Card grid layout (2–3 columns on desktop, 1 on mobile)
- Cards styled as menu items — paper texture bleeds through, clean typography
- Filter by category: All / Finance & Quant / Web & Apps / Data & ML / Other
- Clicking a card opens a modal or expands inline for full detail
- Project detail uses plain language — the menu metaphor ends at the card title

**Note:** In-progress and upcoming projects live in **What's Brewing**, not as badges here.

---

### 5.5 House Specialties

**Theme label for: Skills**

**Tab: The Menu** (below The Menu section)

**Purpose:** Quick, scannable reference for technical capabilities. Replaces what was previously called "The Toolkit." The name "House Specialties" now simply evokes the café menu — no quant/finance targeting intended.

**Content:**
- Grouped by category:
  - Languages (Python, R, JavaScript, etc.)
  - Finance & Quant Tools (Excel, Bloomberg, financial modeling, etc.)
  - Frameworks & Libraries
  - Developer Tools
  - Concepts & Methods (statistics, DCF, portfolio theory, etc.)
- Honest proficiency framing: "proficient" vs. "familiar" — no percentage bars, no star ratings

**Design note:** Chalkboard or kraft-paper panel aesthetic suits this section well. Skills displayed as tags or a clean grouped list. A few small doodles in the margins — a coffee bean, a measuring tool, something that doesn't demand attention — keep the texture alive without decorating the data itself.

---

### 5.6 What's Brewing

**Theme label for: Future Projects**

**Tab: What's Brewing**

**Purpose:** Dedicated space for upcoming and planned work. Signals intellectual momentum and forward motion. Nothing currently in progress — this tab covers what's planned next.

**Content per item:**
- Project name
- Brief description of what it will be / the problem it'll address
- Status: Confirmed / In Planning
- Anticipated stack or domain (if known)

**Design note:** This tab intentionally breaks from the light paper aesthetic. Background shifts to a deep espresso tone — the one deliberate dark-roast moment in an otherwise light-roast site. Warm glowing borders on confirmed items; subdued treatment for in-planning. Animated steam wisps above the section header. The contrast makes the tab feel like a glimpse into the back of house — something's being prepared.

---

### 5.7 Come Find Me

**Theme label for: Contact**

**Purpose:** Make it frictionless to reach you.

**Content:**
- Contact form (name, email, message) with basic validation
- Direct email (displayed, copyable)
- LinkedIn, GitHub, and any other relevant profiles
- Optional: Calendly link

**Behavior:**
- Form sends email via EmailJS, Formspree, or similar (no backend)
- Success and error states clearly communicated
- All external links open in new tab
- Warm, inviting tone in the section intro — "Pull up a chair."

---

### 5.8 Navigation

**Behavior:**
- Sticky top nav with tab buttons: **About**, **The Menu**, **What's Brewing**, **Come Find Me**
- Active tab highlighted
- Switching tabs scrolls to top and fades in new content (Framer Motion AnimatePresence)
- Hamburger menu on mobile
- **Full Résumé** PDF download always visible in nav
- Nav evokes a café menu board through typography and spacing — not a literal illustration

**Tab → Sections mapping:**

| Tab | Sections rendered |
|---|---|
| Home | Hero |
| About | Meet the Barista, Where I Trained |
| The Menu | The Menu, House Specialties |
| What's Brewing | What's Brewing |
| Come Find Me | Come Find Me |

---

### 5.9 Footer

**Content:**
- Copyright line
- Quick links: LinkedIn, GitHub, email
- Back to top button
- Optional light sign-off: "Thanks for stopping by."

---

## 6. Visual Design Direction

### The Core Aesthetic: Paper as Foundation

The defining visual choice is that the entire site feels like it exists *on* recycled paper — not a website that approximates paper with a warm color, but something that makes a visitor want to touch the screen.

This distinction matters. A flat `#F5F0E8` background with a subtle CSS noise filter reads as a design trend. A genuine recycled paper texture reads as a material choice — it has character, inconsistency, and warmth that can't be replicated with a hex code.

### Paper Texture Implementation

**Method: Tiled seamless texture image (Option B)**

- Source a high-quality seamless scan of recycled or kraft paper — the kind with visible fiber variation, uneven density, soft grey-brown flecks, and slight color inconsistency across the surface. Free high-res sources: Unsplash, Subtle Patterns, Freepik (look for terms like "recycled paper texture seamless," "kraft paper scan," "handmade paper texture")
- Export as WebP. Target file size: under 200KB. Compress enough for performance, but not so aggressively that fiber detail is lost — the irregularity is the point
- Apply as `background-image` on the root/body with `background-repeat: repeat`. Tile size should be large enough (800px+) that the repeat seam is imperceptible at normal scroll speeds
- No flat color fallback that looks intentional — use a mid-tone from the texture (`#D9CFC0` range) as a `background-color` only for the instant before the image loads
- The paper texture is universal: it shows through cards, nav, sections, and the hero. Nothing sits on a flat color. Any overlay needed for contrast (e.g. on text-heavy cards) uses a semi-transparent tint, never an opaque fill that kills the texture beneath

**What to look for in the reference texture (per uploaded sample):**
- Visible fiber strands and variation — the surface is not uniform
- Warm grey-beige base with slight color drift across the sheet
- Occasional darker flecks or inclusions
- Soft, not crisp — no sharp noise, no obvious digital grain pattern
- The overall impression is tactile, aged, and handmade

### Palette

Built from the texture, not imposed on it.

- **Background:** The recycled paper texture itself — warm, variable, never flat
- **Text:** Deep espresso brown (`#2C1A0E` range) — high contrast against the paper, grounded and warm
- **Accent:** Muted terracotta or warm amber — used sparingly for CTAs, tags, hover states, active nav
- **Surface cards:** Semi-transparent warm tint over the paper texture — cards feel like they're resting on the page, not floating above it
- **What's Brewing tab exception:** Deep roasted brown background (`#1A0F08` range) with warm cream text and golden amber accents — the one intentional break from the paper aesthetic

### Typography

- **Display face:** A characterful serif — Playfair Display, Cormorant Garamond, or Fraunces. Used for the hero name, section headers, and project card titles. Should feel like something typeset by hand
- **Body face:** A clean, readable sans-serif — Inter or DM Sans. All professional content: descriptions, bullets, metadata
- **Decorative face:** A handwritten or chalk-style typeface — used *only* for small labels, nav flavor text, or section intros where a handwritten quality reinforces the paper aesthetic. Never on anything a recruiter needs to read quickly. One font, used sparingly

### Handdrawn Coffee Doodles

Decorative only. They never label, navigate, or explain anything — a recruiter who ignores them entirely reads the site perfectly.

**Character:** Loose, sketchy, ink-on-paper style — consistent with the reference sketch sheet (coffee bags, muffins, teapots, espresso machines, cups, coffee beans, flowers in a carafe). Black or near-black linework with no fill, so the paper texture shows through them.

**Placement principles:**
- Scattered asymmetrically — margin edges, section transitions, hero background corners
- Never centered, never symmetrical, never in a grid
- Vary in size: a large teapot drifting off the hero edge, a small coffee bean near a section divider, a cup sketched lightly in the corner of a card
- Slight rotation on each — nothing is perfectly upright
- Low opacity or light linework so they recede behind content rather than competing with it
- Implemented as inline SVGs or a hand-selected PNG sprite sheet, not icon fonts

**Placement by section:**
- **Hero:** The most doodle-dense zone — 3–5 elements scattered around the edges and background
- **Meet the Barista:** 1–2 small elements near the section edge (a cup, a sprig)
- **Section dividers:** A single small doodle centered or offset on the dividing line between major sections
- **House Specialties:** A coffee bean or small bag near the margins — not near the skill tags themselves
- **What's Brewing:** No doodles — the espresso-dark background is its own visual world; doodles would break the contrast shift
- **Come Find Me:** Optional single element, very light

### Signature Element

The **What's Brewing** tab. A deliberate palette break: deep espresso background, warm cream text, golden amber accents. Confirmed upcoming work gets a warm glowing border; in-planning work is visually subdued. Animated steam wisps above the section header. The contrast makes the tab feel like a glimpse into the kitchen — something is being made.

---

## 7. Technical Requirements

### 7.1 Stack

| Layer | Choice |
|---|---|
| Framework | React (Vite recommended) |
| Language | JavaScript (TypeScript optional, encouraged) |
| Styling | CSS Modules or Tailwind CSS |
| Animations | Framer Motion or CSS transitions |
| Form handling | EmailJS or Formspree (no backend) |
| Routing | Tab-based via `useState` + AnimatePresence (no React Router needed) |
| Hosting | GitHub Pages, Vercel, or Netlify |

### 7.2 Performance

- Lighthouse score ≥ 90 on Performance, Accessibility, Best Practices
- First Contentful Paint < 1.5s
- Paper texture image: WebP, compressed, loaded once and cached — not re-fetched per section
- Doodle assets: inline SVGs preferred; if PNG, compressed and lazy-loaded below the fold
- No unnecessary dependencies

### 7.3 Responsiveness

- Fully responsive: mobile (375px+), tablet (768px+), desktop (1280px+)
- Touch-friendly tap targets (min 44×44px)
- No horizontal scroll on any viewport
- Doodle placement adjusts on mobile — fewer elements, none that overlap readable content

### 7.4 Accessibility

- Semantic HTML throughout
- All doodle images marked `aria-hidden="true"` — they are decorative and must be invisible to screen readers
- All non-decorative images have meaningful alt text
- Keyboard navigable
- WCAG AA color contrast minimum — verify espresso text against paper texture at its lightest points
- `prefers-reduced-motion` respected — steam animations and entrance transitions disabled

### 7.5 Resume

PDF hosted in `assets/resume.pdf`. The nav link and CTA buttons point to this path. To update the resume: replace the file at `assets/resume.pdf` and redeploy. The path never changes, so no component edits are needed. If you want to avoid redeploying for resume updates in the future, the path in `data/meta.js` can be swapped to an external URL (Google Drive direct link, Dropbox, etc.) — but repo-hosted is simpler and keeps everything self-contained for now.

### 7.6 Content Architecture

- All content in a `data/` directory as JS objects or JSON
- No content hardcoded inside components
- Theme labels stored separately from content so they can be updated without touching data

```
src/
├── components/         # Reusable UI (Card, Modal, Badge, Tag, etc.)
├── sections/           # One component per section
│   ├── Hero.jsx
│   ├── MeetTheBarista.jsx
│   ├── WhereITrained.jsx
│   ├── TheMenu.jsx
│   ├── HouseSpecialties.jsx
│   ├── WhatsBrewing.jsx
│   └── ComeFindMe.jsx
├── data/               # Content files
│   ├── projects.js
│   ├── education.js
│   ├── skills.js
│   ├── brewing.js
│   └── meta.js         # Name, tagline, resume path, social links
├── assets/
│   ├── resume.pdf      # Replace this file to update resume; path stays fixed
│   ├── textures/       # paper-texture.webp (seamless tile)
│   └── doodles/        # SVGs or sprite sheet for handdrawn elements
├── styles/
│   ├── tokens.css      # Colors, typography, spacing
│   └── global.css      # Paper texture applied here at root level
└── App.jsx
```

---

## 8. Design Principles

- **Theme as wrapper, not wall.** The coffee shop framing enhances personality; it never obscures professional content. If a visitor has to decode the metaphor to find the information they need, the metaphor has gone too far.
- **Paper is the material, not the color.** The recycled paper texture is a genuine material choice — inconsistent, tactile, and alive. It is never approximated with a flat color and a CSS filter.
- **Doodles recede, content leads.** Handdrawn elements are atmosphere. They sit behind and beside the content, never in front of it. If a doodle draws the eye away from a name, title, or CTA, it's in the wrong place.
- **Warm but not whimsical.** The palette and typography are sophisticated. This is a specialty coffee shop, not a cartoon café.
- **Content-forward.** Design serves the content; decoration is earned. Every visual element should have a reason to exist.
- **Honest copy.** First person, active voice. "I built X to solve Y" beats "Responsible for development of X."

---

## 9. Pages / Routes

Tab-based single-page application. `activeTab` state in `App.jsx` drives which sections render; no React Router needed. AnimatePresence handles fade transitions between tabs.

Tabs: `home`, `about`, `menu`, `brewing`, `contact`

---

## 10. Future Considerations (v2+)

- Individual project case study pages (React Router + MDX)
- Blog / writing section
- Daily Specials section (certs, awards, volunteering) if content warrants it
- Behind the Counter (experience timeline) if the framing shifts
- CMS integration for non-technical content updates
- Privacy-respecting analytics (Plausible or Fathom)
- Dark / Light Roast toggle (dark mode — the espresso palette already exists)
- Custom domain integration (domain is owned; integration deferred)
- Internationalization if relevant

---

## 11. Success Metrics

| Metric | Target |
|---|---|
| Time to first meaningful impression | < 5 seconds |
| Paper texture: tactile, not approximate | Passes the "want to touch the screen" test |
| Mobile usability score (Lighthouse) | ≥ 90 |
| Accessibility score (Lighthouse) | ≥ 90 |
| Resume download | Always one click away |
| Contact form | Functional and reliable |
| Doodles | Invisible to screen readers, never overlapping readable content |

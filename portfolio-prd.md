# Product Requirements Document
## Personal Portfolio Website — The Coffee Shop

**Version:** 1.1  
**Stack:** React + JavaScript  
**Status:** Draft  
**Theme:** Coffee shop — warm, personal, memorable. The metaphor lives in the language and texture; the professional signal lives in the content.

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

---

## 4. Theme Language Guide

The coffee shop metaphor applies to **section names, nav labels, microcopy, and visual texture**. It does not apply to job titles, company names, project descriptions, or any content a recruiter needs to read accurately.

| Standard Label | Coffee Shop Label | Notes |
|---|---|---|
| Hero / Landing | *(no label needed — just the vibe)* | Warm, inviting, sets the tone |
| About Me | **Meet the Barista** | First person, conversational |
| House Specialties | **House Specialties** | New section — quant/finance callout |
| Experience | **Behind the Counter** | Timeline intact; content unchanged |
| Projects | **The Menu** | Cards as menu items |
| Active Projects | **Currently Brewing** | Clear WIP signal |
| Education | **Where I Trained** | Degree, GPA, coursework — all standard |
| Skills | **The Toolkit** | Grouped by category, no skill bars |
| Extras | **Daily Specials** | Certs, awards, volunteering |
| Contact | **Come Find Me** | Form + links, nothing weird |
| Nav resume link | **Order the Full Menu** or **Full Résumé** | Always one click away |
| Footer | *(quiet, standard)* | No need to force the metaphor here |

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
- Optional: profile photo or illustrated avatar with a warm café aesthetic

**Behavior:**
- Full viewport height (100vh) on load
- Warm background — think parchment, linen, or a deep espresso tone depending on palette choice
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

**Design note:** Conversational tone, first person. Not a third-person bio. The section should feel like meeting someone, not reading a LinkedIn summary.

---

### 5.3 House Specialties *(new section)*

**Purpose:** Surface quant and finance credentials prominently for the recruiters most likely to click through from LinkedIn. This is the one section that exists specifically to serve that audience without making everyone else wade through it.

**Content:**
- A small, tight callout — not a full section, more of a highlighted band or card cluster
- 3–5 "specialties" presented as short, punchy items:
  - Quantitative skills (statistics, modeling, relevant coursework)
  - Finance-specific experience or projects
  - Relevant tools (Python, Excel, Bloomberg, etc.)
  - Any certifications or coursework worth flagging (CFA prep, financial modeling, etc.)
- Each item links to the relevant section deeper in the page

**Design note:** This can be styled as a chalkboard-style "Today's Specials" board — visually distinct, easy to spot, quick to scan. It doubles as internal navigation for the audience that cares most.

---

### 5.4 Where I Trained

**Theme label for: Education / Academics**

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

### 5.5 Behind the Counter

**Theme label for: Experience**

**Purpose:** Demonstrate applied skills and professional growth.

**Content per entry:**
- Company/organization name
- Role/title *(use real titles — no metaphor here)*
- Duration (start – end month/year)
- Location or remote status
- 2–5 bullet points: what you did, what you built, what the impact was — quantified where possible
- Tags: relevant skills or tools

**Behavior:**
- Vertical timeline layout, most recent first
- Includes internships, research positions, part-time, freelance
- Collapsed default shows role + company + dates; expand for full bullets
- Finance and quant roles should be visually distinguishable (e.g., a subtle tag or accent) so recruiters can find them at a glance

---

### 5.6 The Menu

**Theme label for: Projects**

**Purpose:** The centerpiece of the site. Show what you've actually built, with real outcomes.

**Content per project:**
- Project name (can be evocative — this is the "menu item name")
- Short description / tagline (1–2 sentences — the "menu description")
- Tech stack (displayed as ingredient-style tags/chips)
- Role: solo vs. team, specific contribution
- Key outcome or metric ("served 200+ users", "reduced runtime by 40%")
- Links: GitHub, live demo, writeup
- Screenshot or demo GIF (optional but high-impact)
- **"Currently Brewing" badge** for active/in-progress projects

**Behavior:**
- Card grid layout (2–3 columns on desktop, 1 on mobile)
- Cards styled as menu items — warm paper texture, clean typography
- Filter by category: All / Finance & Quant / Web & Apps / Data & ML / Other
- "Currently Brewing" projects displayed first with a distinct visual treatment (steam icon, animated badge, or warm accent color)
- Featured/completed projects follow
- Clicking a card opens a modal or expands inline for full detail
- Project detail uses plain language for descriptions — the menu metaphor ends at the card title

---

### 5.7 The Toolkit

**Theme label for: Skills**

**Purpose:** Quick scannable reference for technical capabilities.

**Content:**
- Grouped by category:
  - Languages (Python, R, JavaScript, etc.)
  - Finance & Quant Tools (Excel, Bloomberg, financial modeling, etc.)
  - Frameworks & Libraries
  - Developer Tools
  - Concepts & Methods (statistics, DCF, portfolio theory, etc.)
- Honest proficiency framing: "proficient" vs. "familiar" — no percentage bars

**Design note:** A chalkboard or kraft-paper aesthetic works well here. Skills displayed as tags or a clean grouped list.

---

### 5.8 Daily Specials *(optional)*

**Theme label for: Extras / Other**

**Purpose:** Catch-all for credentials that don't fit neatly elsewhere.

| Item | What it includes |
|---|---|
| Certifications | Cert name, issuer, date, credential link |
| Publications / Research | Title, venue, date, link |
| Awards & Honors | Award name, org, year, brief description |
| Volunteering | Org, role, dates, impact |
| Speaking / Events | Talk title, event, date, recording/slides |

Displayed as a compact "specials board" — not a full section unless the content warrants it.

---

### 5.9 Come Find Me

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

### 5.10 Navigation

**Behavior:**
- Sticky top nav using the themed section names
- Active section highlighted on scroll (scroll-spy)
- Hamburger menu on mobile
- **"Full Résumé"** download always visible in nav (PDF)
- Smooth scroll on link click
- Nav can subtly evoke a café menu board — typography and spacing, not a literal illustration

---

### 5.11 Footer

**Content:**
- Copyright line
- Quick links: LinkedIn, GitHub, email
- "Back to top" button
- Optional: a light, one-line sign-off that fits the vibe ("Thanks for stopping by.")

---

## 6. Visual Design Direction

### Palette
Warm, sophisticated, not saccharine. Two directions to choose between:

**Option A — Light Roast** (inspired by annasgarden / pauwee references)
- Background: warm off-white / parchment (`#F5F0E8` range)
- Text: deep espresso brown (`#2C1A0E` range)
- Accent: muted terracotta or warm amber
- Surface cards: cream with subtle paper texture

**Option B — Dark Roast**
- Background: deep roasted brown (`#1A0F08` range)
- Text: warm cream
- Accent: golden amber or soft coral
- Surface cards: slightly lighter brown with texture

### Typography
- Display face: a characterful serif (e.g., Playfair Display, Cormorant Garamond, or Fraunces) — used for section headers and the hero name
- Body face: a clean, readable sans-serif (e.g., Inter, DM Sans) — used for all professional content
- Optional: a handwritten or chalk-style face for small decorative labels only (used sparingly)

### Texture & Atmosphere
- Subtle paper or linen texture on section backgrounds
- A chalkboard-style element for the House Specialties and/or Skills section
- Steam or subtle warmth motifs in loading states or the "Currently Brewing" badge
- No clip art, no literal coffee cup illustrations unless executed with real craft

### Signature Element
The **"Currently Brewing"** treatment on active projects — an animated steam badge or a warm glowing border that makes in-progress work feel alive and intentional, not incomplete.

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
| Routing | Single-page (scroll-based, no React Router needed) |
| Hosting | GitHub Pages, Vercel, or Netlify |

### 7.2 Performance
- Lighthouse score ≥ 90 on Performance, Accessibility, Best Practices
- First Contentful Paint < 1.5s
- Images lazy-loaded, compressed, WebP where possible
- No unnecessary dependencies

### 7.3 Responsiveness
- Fully responsive: mobile (375px+), tablet (768px+), desktop (1280px+)
- Touch-friendly tap targets (min 44×44px)
- No horizontal scroll on any viewport

### 7.4 Accessibility
- Semantic HTML throughout
- All images have meaningful alt text
- Keyboard navigable
- WCAG AA color contrast minimum
- `prefers-reduced-motion` respected — no animations that can't be disabled

### 7.5 Content Architecture
- All content in a `data/` directory as JS objects or JSON
- No content hardcoded inside components
- Theme labels stored separately from content so they can be updated without touching data

```
src/
├── components/         # Reusable UI (Card, Modal, Badge, Tag, etc.)
├── sections/           # One component per section
│   ├── Hero.jsx
│   ├── MeetTheBarista.jsx
│   ├── HouseSpecialties.jsx
│   ├── WhereITrained.jsx
│   ├── BehindTheCounter.jsx
│   ├── TheMenu.jsx
│   ├── TheToolkit.jsx
│   ├── DailySpecials.jsx
│   └── ComeFindMe.jsx
├── data/               # Content files
│   ├── projects.js
│   ├── experience.js
│   ├── education.js
│   ├── skills.js
│   ├── specialties.js
│   └── extras.js
├── assets/             # Images, icons, resume PDF, textures
├── styles/             # Global styles, design tokens
│   ├── tokens.css      # Colors, typography, spacing
│   └── global.css
└── App.jsx
```

---

## 8. Design Principles

- **Theme as wrapper, not wall.** The coffee shop framing enhances personality; it never obscures professional content. If a visitor has to decode the metaphor to find the information they need, the metaphor has gone too far.
- **Quantitative signal is explicit.** Finance and quant credentials are surfaced early (House Specialties) and tagged clearly throughout. A recruiter skimming for 30 seconds should find them.
- **Warm but not whimsical.** The palette and typography are sophisticated. This is a specialty coffee shop, not a cartoon café.
- **Content-forward.** Design serves the content; decoration is earned. Every visual element should have a reason to exist.
- **Honest copy.** First person, active voice. "I built X to solve Y" beats "Responsible for development of X."

---

## 9. Pages / Routes

Tabs for each section. About, The Menu, What's Brewing, and Contact should all be their own section on separate tabs.

---

## 10. Future Considerations (v2+)

- Individual project case study pages (React Router + MDX)
- Blog / writing section
- CMS integration for non-technical content updates
- Privacy-respecting analytics (Plausible or Fathom)
- Dark / light roast toggle (dark mode)
- Internationalization if relevant

---

## 11. Success Metrics

| Metric | Target |
|---|---|
| Time to first meaningful impression | < 5 seconds |
| Finance/quant credentials findable | Within 10 seconds of landing |
| Mobile usability score (Lighthouse) | ≥ 90 |
| Accessibility score (Lighthouse) | ≥ 90 |
| Resume download | Always one click away |
| Contact form | Functional and reliable |

---

## 12. Open Questions

Before development begins, resolve:

1. **Light Roast or Dark Roast?** Warm parchment background vs. deep espresso — pick the palette direction.
2. **Profile photo?** Real photo, illustrated avatar, or none? (A lightly illustrated or stylized photo works well with the café aesthetic.)
3. **Which "Daily Specials" apply?** Certifications, awards, volunteering, publications?
4. **Resume format?** PDF hosted in the repo, or link to an external source (e.g., a Google Doc)?
5. **House Specialties content?** What are the 3–5 quant/finance items worth calling out explicitly?
6. **Custom domain?** Own domain or `username.github.io`?
7. **"Currently Brewing" projects?** What's actively in progress right now?

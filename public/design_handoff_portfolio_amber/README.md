# Handoff: Matthew South — Developer Portfolio (Warm & Organic / Amber)

## Overview
A single-page developer portfolio for **Matthew South**, a Junior Frontend Engineer based in Osaka, Japan. It presents a hero, an about + skills section, three featured projects, an experience timeline, and a contact section with a form and social links. The visual direction is **warm and organic on a light background**: cream backdrop, amber/gold accents, warm-black text, soft rounded cards, floating blob shapes, and generous spacing.

## About the Design Files
The files in this bundle are **design references created in HTML** — a prototype showing the intended look and behavior. They are **not production code to copy directly**.

- `Portfolio Amber.dc.html` is authored in a proprietary "Design Component" HTML dialect (custom `<x-dc>`, `<sc-for>`, `<sc-if>` tags and a `Component` logic class). **Do not port this dialect.** Read it only as a reference for structure, content, and exact style values.
- `image-slot.js` is a drag-and-drop image placeholder web component used only for the prototype's editable avatar. **Do not ship it.** In production the avatar is just a normal `<img>` (see Assets).

**Your task:** recreate this design in the target codebase's environment using its established patterns and libraries. If no codebase exists yet, the recommended stack is **Next.js (App Router) + TypeScript + Tailwind CSS**, which matches Matthew's own stack. Framer Motion is a good fit for the animations described below.

## Fidelity
**High-fidelity (hifi).** All colors, typography, spacing, radii, and shadows below are final and exact. Recreate the UI pixel-perfectly. This document is self-sufficient — every value needed is listed in **Design Tokens** and per-section specs.

---

## Layout Fundamentals

- **Page background:** `#f6efe3` (warm cream), set on `body`.
- **Content container:** centered, `max-width: 1180px`, horizontal padding `clamp(20px, 5vw, 72px)`. The nav and footer share the same horizontal padding but are full-width bars.
- **Vertical rhythm:** sections use `padding: clamp(28px–60px, …, 88–120px) 0`. Be generous — this design breathes.
- **Responsiveness (no media queries needed):** every two-column region uses
  `display: grid; grid-template-columns: repeat(auto-fit, minmax(min(300–340px, 100%), 1fr)); gap: clamp(...)`.
  This yields two columns on wide screens and stacks to one column when the viewport is narrow. All font sizes and paddings use `clamp()` for fluid scaling. Reproduce this behavior (Tailwind: use `grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))]` or equivalent responsive breakpoints).
- **Two decorative fixed radial glows** sit behind everything (`position: fixed; z-index: 0`), content is `z-index: 1`:
  - Top-right: `width/height: 52vw` (max 720px), `background: radial-gradient(circle, rgba(230,168,76,0.28), transparent 62%)`, `filter: blur(12px)`.
  - Bottom-left: `width/height: 48vw` (max 640px), `background: radial-gradient(circle, rgba(207,122,31,0.16), transparent 64%)`, `filter: blur(12px)`.

---

## Screens / Views
This is a single scrolling page. Sections in order: **Nav → Hero → About → Work → Path → Contact → Footer.** Section labels (`01 About`, `02 Selected work`, `03 Path`, `04 Contact`) appear as small dividers between sections.

### 1. Nav (sticky top bar)
- **Layout:** `position: sticky; top: 0; z-index: 50`. Flex row, `space-between`, `flex-wrap: wrap`, `gap: 12px 20px`. Padding `18px clamp(20px,5vw,72px)`.
- **Background:** `rgba(246,239,227,0.78)` with `backdrop-filter: blur(14px)`; bottom border `1px solid rgba(60,42,18,0.12)`.
- **Left (brand):** a `12px` circle `background: #cf7a1f` with `box-shadow: 0 0 0 4px rgba(207,122,31,0.12)`, then the name **"Matthew South"** in the display font, weight 700, 16px, letter-spacing -0.01em.
- **Right (nav links + resume):** flex row, `gap: clamp(14px,2.6vw,32px)`, wrap.
  - Links: **About, Work, Path, Contact** → anchors to `#about, #work, #path, #contact`. 14.5px, weight 500, color `#6d5f4b`; hover color `#b0611a`; `transition: color .2s`.
  - **Resume** pill (last): text `#b0611a`, `1.5px solid rgba(207,122,31,0.34)`, `border-radius: 100px`, padding `9px 18px`, weight 600, 14px. Hover: `background: #cf7a1f; color: #fffaf0; border-color: #cf7a1f`. Links to a downloadable `Matthew-South-Resume.pdf` (`download` attribute).

### 2. Hero
- **Layout:** two-column responsive grid (see fundamentals; `minmax(min(330px,100%),1fr)`, `gap: clamp(36px,6vw,72px)`, `align-items: center`), padding `clamp(60px,11vw,120px) 0 clamp(56px,9vw,104px)`.
- **Left column:**
  - **Eyebrow chip:** inline-flex, `gap: 9px`, 13.5px weight 500, color `#b0611a`, `background: rgba(207,122,31,0.12)`, `border-radius: 100px`, padding `8px 15px`, margin-bottom 28px. Contains a `7px` amber dot (`#cf7a1f`) then text **"Junior Frontend Engineer · Osaka, Japan"**.
  - **H1:** display font, weight 700, `font-size: clamp(2.7rem, 7vw, 5rem)`, `line-height: 1.02`, `letter-spacing: -0.035em`. Text: **"I build software that feels _warm_ and works fast."** — the word **"warm"** is colored `#cf7a1f`.
  - **Sub-paragraph:** `max-width: 46ch`, margin-top 26px, `font-size: clamp(1.02rem,1.6vw,1.2rem)`, `line-height: 1.65`, color `#6d5f4b`. Text: _"I'm a frontend engineer in Osaka shipping fast, accessible web apps for real people — currently building tools that help an international school run smoother."_
  - **CTA row:** flex, `gap: 14px`, margin-top 38px, wrap.
    - **"Hire me →"** (primary): text `#fffaf0`, `background: #cf7a1f`, `border-radius: 100px`, padding `15px 28px`, weight 600, 15px, `box-shadow: 0 10px 26px rgba(207,122,31,0.28)`. Hover: `transform: translateY(-2px); box-shadow: 0 16px 38px rgba(207,122,31,0.4)`. Links to `#contact`.
    - **"See my work"** (secondary): text `#241d14`, `1.5px solid rgba(60,42,18,0.2)`, `border-radius: 100px`, padding `15px 28px`, weight 600. Hover: `border-color: rgba(207,122,31,0.34); background: #fffaf0`. Links to `#work`.
    - Both transitions: `.18s ease`.
- **Right column — the "status card" (the hero device):** replaces a traditional hero image. `justify-self: center`, `max-width: 390px`, `position: relative`.
  - **Two organic blob shapes** float behind the card (`position: absolute`, `filter: blur(4px)`):
    - Top-right blob: `150×150`, `background: linear-gradient(135deg, #e6a84c, #cf7a1f)`, `border-radius: 52% 48% 43% 57% / 55% 46% 54% 45%`, `opacity: 0.5`, `animation: floaty 7s ease-in-out infinite`.
    - Bottom-left blob: `120×120`, `background: linear-gradient(135deg, #cf7a1f, #e6a84c)`, `border-radius: 45% 55% 60% 40% / 48% 52% 48% 52%`, `opacity: 0.35`, `animation: floaty2 9s ease-in-out infinite`.
  - **Card:** `background: #fffaf0`, `1px solid rgba(60,42,18,0.12)`, `border-radius: 30px`, padding 26px, `box-shadow: 0 30px 70px rgba(120,80,20,0.16)`.
    - **Header row:** flex, `gap: 15px`. Avatar (66×66, `border-radius: 20px`) + name **"Matthew South"** (display font, 700, 1.15rem) and title **"Junior Frontend Engineer"** (13px, `#6d5f4b`).
    - **Divider:** `height: 1px; background: rgba(60,42,18,0.12); margin: 22px 0`.
    - **Live clock row:** flex `space-between`, margin-bottom 16px. Label **"Local time · Osaka"** (13px, `#a3927a`). Value: **live Osaka time**, format `HH:MM:SS` 24-hour, updates every second, display font weight 600 1.05rem, `#241d14`, `font-variant-numeric: tabular-nums`. Compute with `Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Tokyo', hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:false })`.
    - **"Currently" row:** flex `space-between`, margin-bottom 20px. Label **"Currently"** (13px `#a3927a`); value is a **rotating word** (weight 600, 14.5px, `#b0611a`) that cycles every **2400ms** through: `"React + TypeScript"`, `"accessible UIs"`, `"learning Next.js"`, `"shipping real products"`. Each change re-triggers a `fadeUp .45s ease` animation on the word (mount/remount or key change).
    - **Status pill:** flex, `gap: 10px`, `background: #f3ead9`, `border-radius: 16px`, padding `12px 15px`. A `9px` green dot (`#4a9d5b`, subtle pulse via `floaty 3s`) + text **"Open to junior frontend roles"** (13.5px, weight 500, `#241d14`).

### 3. Section label (repeats before About / Work / Path / Contact)
Flex row, `gap: 14px`, `align-items: center`. A two-digit number in the display font (weight 700, 14px, `#cf7a1f`) + an uppercase label (13px, weight 600, `letter-spacing: 0.14em`, `text-transform: uppercase`, `#a3927a`) + a flex-growing `1px` line `background: rgba(60,42,18,0.12)`. Labels: `01 About`, `02 Selected work`, `03 Path`, `04 Contact`.

### 4. About
- **Layout:** two-column responsive grid (`minmax(min(300px,100%),1fr)`, `gap: clamp(32px,5vw,64px)`, `align-items: start`), padding `clamp(32px,5vw,52px) 0 clamp(56px,9vw,88px)`.
- **Left column:**
  - **H2:** display font, 700, `clamp(1.9rem,4vw,2.8rem)`, `letter-spacing: -0.025em`, `line-height: 1.08`. Text **"A developer who _ships_ real products."** — "ships" colored `#cf7a1f`.
  - **Bio:** two paragraphs, `font-size: 1.05rem`, `line-height: 1.72`, color `#6d5f4b`, `max-width: 56ch`, margin-bottom 16px each:
    1. _"I started by solving problems in front of me at work — an international school that needed better software — and turned that into a craft I care about deeply."_
    2. _"I like interfaces that are quick, obvious, and genuinely useful. Give me a real problem and I'll ship a clean, well-built solution for it."_
  - **Values row:** flex wrap, `gap: 14px`, margin-top 28px. Three cards, each `flex: 1; min-width: 150px`, `background: #fffaf0`, `1px solid rgba(60,42,18,0.12)`, `border-radius: 18px`, padding `16px 18px`. Card title (display font, 700, 15px, `#b0611a`, lowercase) over description (13px, `#6d5f4b`, `line-height: 1.5`, margin-top 5px):
    - **ship it** — "Real products over pixel-perfect demos"
    - **clarity** — "Simple UI beats clever UI"
    - **keep learning** — "Always leveling up the stack"
- **Right column — skills by proficiency:** vertical flex, `gap: 16px`. Three cards, each `background: #fffaf0`, `1px solid rgba(60,42,18,0.12)`, `border-radius: 22px`, padding `22px 22px 24px`, `box-shadow: 0 12px 30px rgba(120,80,20,0.06)`.
  - Card header: flex `space-between`, margin-bottom 16px. Tier name (display font, 700, 16px) + a **dot indicator** (flex, `gap: 5px`, three `8px` circles; "on" dots are `#cf7a1f`, "off" dots are `rgba(60,42,18,0.12)`).
  - Skill chips: flex wrap, `gap: 9px`. Each chip: 13.5px, weight 500, `#241d14`, `background: #f3ead9`, `border-radius: 100px`, padding `7px 14px`. Hover: `background: #cf7a1f; color: #fffaf0`; `transition: .18s`.
  - Data:
    - **Expert** (3/3 dots on): HTML, CSS, JavaScript
    - **Comfortable** (2/3 dots on): React, Tailwind, Supabase
    - **Learning** (1/3 dots on): TypeScript, Next.js

### 5. Work (Featured projects)
- **Layout:** vertical flex, `gap: clamp(20px,3vw,28px)`, padding `clamp(28px,4vw,44px) 0 clamp(56px,9vw,88px)`.
- **Each project card:** `background: #fffaf0`, `1px solid rgba(60,42,18,0.12)`, `border-radius: 28px`, padding `clamp(26px,3.5vw,40px)`, `box-shadow: 0 14px 34px rgba(120,80,20,0.06)`. Hover: `transform: translateY(-4px); box-shadow: 0 26px 56px rgba(120,80,20,0.14); border-color: rgba(207,122,31,0.34)`; `transition: .25s`.
  - **Top row:** flex, `gap: 16px`, `align-items: center`, wrap, margin-bottom 22px.
    - **Number badge:** grid-centered `52×52` circle, `1.5px solid rgba(207,122,31,0.34)`, display font 700 1.1rem, `#cf7a1f`. Content: `01` / `02` / `03`.
    - **Kind label:** 12.5px, weight 600, `letter-spacing: 0.06em`, uppercase, `#a3927a`.
    - **"in progress" pill** (only project 3): 12px, weight 600, `#b0611a`, `background: rgba(207,122,31,0.12)`, `border-radius: 100px`, padding `4px 11px`.
  - **Title (H3):** display font, 700, `clamp(1.5rem,3.2vw,2.2rem)`, `letter-spacing: -0.02em`, `line-height: 1.1`, margin-bottom 14px.
  - **Problem paragraph:** `1.02rem`, `line-height: 1.72`, `#6d5f4b`, `max-width: 66ch`, margin-bottom 22px.
  - **Footer row:** flex wrap, `space-between`, `gap: 20px 28px`.
    - **Tech pills** (left): flex wrap, `gap: 8px`. Each: 12.5px, weight 500, `#6d5f4b`, `1px solid rgba(60,42,18,0.12)`, `border-radius: 100px`, padding `5px 12px`.
    - **Links** (right): flex, `gap: 20px`, open in new tab (`target="_blank" rel="noopener"`).
      - **"Live demo ↗"**: 14px, weight 600, `#b0611a`, `border-bottom: 1.5px solid rgba(207,122,31,0.34)`, `padding-bottom: 2px`; hover `border-color: #cf7a1f`.
      - **"GitHub ↗"**: 14px, weight 600, `#6d5f4b`, transparent bottom border; hover `color: #b0611a; border-color: rgba(207,122,31,0.34)`.
  - **Project data:**
    1. **Hoshida Dispatch** — kind "Product · React". Problem: _"The school needed parents to submit enrollment applications electronically — safely, since it handles children's information. I built a secure React application that lets parents apply online and pipes submissions and photos straight into Google Docs for staff to review."_ Stack: React, Google APIs, Vercel. Live: `https://dispatch-app-phi.vercel.app/` · Repo: `https://github.com/MatthewRSouth/dispatch-app`
    2. **Anichive** — kind "Personal · React". Problem: _"As an anime fan I wanted to see what other people thought of different series. So I built an app where users can search and browse anime and share their opinions — a small, opinionated community catalog."_ Stack: React, REST API, Vercel. Live: `https://anichive.vercel.app/` · Repo: `https://github.com/MatthewRSouth/anichive`
    3. **Hoshida Student Progress** — kind "Product · React + Supabase", **in progress**. Problem: _"Teachers needed a way to track each child's progress — both for their own teaching and for parent interviews. I'm building a clean dashboard that gives them a fast, structured way to log and review student progress."_ Stack: React, TypeScript, Tailwind, Supabase. Live: `https://student-progress-app-eight.vercel.app/` · Repo: `https://github.com/MatthewRSouth/student-progress-app`

### 6. Path (Experience timeline)
- **Layout:** vertical flex, `gap: 16px`, padding `clamp(28px,4vw,44px) 0 clamp(56px,9vw,88px)`.
- **Each entry:** a two-column responsive grid card (`minmax(min(220px,100%),1fr)`, `gap: 8px 32px`, `align-items: start`), `background: #fffaf0`, `1px solid rgba(60,42,18,0.12)`, `border-radius: 22px`, padding `24px clamp(22px,3vw,32px)`.
  - **Left cell:** a date row (inline-flex, `gap: 9px`, 13px, weight 600, `#b0611a`, with a `9px` amber dot) → role **H3** (display font, 700, `clamp(1.15rem,2.4vw,1.45rem)`, margin `10px 0 2px`) → org (14px, weight 500, `#6d5f4b`).
  - **Right cell:** summary paragraph (0.98rem, `line-height: 1.68`, `#6d5f4b`).
  - **Data:**
    1. **Apr 2026 — Present** · **Technical Lead & Developer** · Hoshida Dispatch — _"Leading the build of the school's secure parent-application platform end to end — architecture, React frontend, and Google Services integration."_
    2. **Feb 2025 — Present** · **Developer** · Hoshida International — _"Building internal web tools that help the school run — from enrollment to student-progress tracking — with React, TypeScript, Tailwind and Supabase."_

### 7. Contact
- **Layout:** two-column responsive grid (`minmax(min(300px,100%),1fr)`, `gap: clamp(32px,5vw,64px)`, `align-items: start`), padding `clamp(32px,5vw,52px) 0 clamp(64px,10vw,96px)`.
- **Left column:**
  - **H2:** display font, 700, `clamp(2.2rem,5vw,3.4rem)`, `letter-spacing: -0.03em`, `line-height: 1.02`. Text **"Let's build something _good._"** — "good." colored `#cf7a1f`.
  - **Paragraph:** `1.08rem`, `line-height: 1.65`, `#6d5f4b`, `max-width: 42ch`, margin-bottom 30px. Text: _"Open to junior frontend roles and freelance builds. Drop a line — I reply fast."_
  - **Social rows:** vertical flex, `gap: 12px`. Each is an anchor (`target="_blank" rel="noopener"`): flex `space-between`, `gap: 14px`, `background: #fffaf0`, `1px solid rgba(60,42,18,0.12)`, `border-radius: 16px`, padding `16px 20px`. Hover: `border-color: rgba(207,122,31,0.34); transform: translateX(4px)`; `transition: .2s / .18s`. Left side: a label (12.5px, weight 600, uppercase, `letter-spacing: 0.06em`, `#b0611a`, fixed `width: 70px`) + handle (14.5px, `#6d5f4b`). Right side: `↗` (`#a3927a`).
    - **GITHUB** — @MatthewRSouth — `https://github.com/MatthewRSouth`
    - **LINKEDIN** — in/mrsalt — `https://www.linkedin.com/in/mrsalt/`
    - **EMAIL** — matthew.south@example.com — `mailto:matthew.south@example.com` ⚠️ **placeholder — replace with Matthew's real email.**
- **Right column — contact form:** `background: #fffaf0`, `1px solid rgba(60,42,18,0.12)`, `border-radius: 28px`, padding `clamp(24px,3vw,34px)`, `box-shadow: 0 20px 46px rgba(120,80,20,0.08)`, vertical flex `gap: 16px`.
  - Three fields (Name / Email / Message), each: label (13px, weight 600, `#6d5f4b`) over input. Inputs: 15px, `#241d14`, `background: #f6efe3`, `1px solid rgba(60,42,18,0.12)`, `border-radius: 14px`, padding `13px 16px`, no outline; **focus** `border-color: #cf7a1f`. Message is a `<textarea rows="4">`, `resize: vertical`. All fields `required`. Placeholders: "Your name" / "you@company.com" / "What are you building?".
  - **Submit button:** full-width, weight 600, 15px, `#fffaf0` on `#cf7a1f`, `border-radius: 100px`, padding 15px, `box-shadow: 0 10px 24px rgba(207,122,31,0.28)`. Hover: `translateY(-2px); box-shadow: 0 16px 36px rgba(207,122,31,0.4)`. Default label **"Send message →"**.
  - **Behavior (currently visual only):** on submit, `preventDefault()` and set a `sent` flag → change button label to **"Message ready ✓"** and show a confirmation line (13px, weight 500, `#4a9d5b`, centered): _"✓ Ready to send — hook this up to your inbox when you add a backend."_ In production, wire this to a real send (e.g. Formspree, an API route, or a mailto fallback).

### 8. Footer
Full-width bar, top border `1px solid rgba(60,42,18,0.12)`, padding `26px clamp(20px,5vw,72px)`, `max-width: 1180px` centered, flex `space-between`, wrap. Left: **"© {year} Matthew South — built in Osaka."** (13px, `#a3927a`, year is dynamic). Right: **"React · TypeScript · Next.js"** (13px, `#a3927a`).

---

## Interactions & Behavior
- **Scroll-reveal:** every element marked for reveal starts at `opacity: 0; transform: translateY(22px)` and animates to `opacity: 1; transform: none` when it enters the viewport, via `IntersectionObserver` (`threshold: 0.12`, `rootMargin: 0px 0px -8% 0px`), unobserving after the first reveal. Transition: `opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1)`. Elements revealed: hero status card, about left + skills column, each project card, each timeline card, contact left column, contact form. (Framer Motion `whileInView` is the natural equivalent.)
- **Live Osaka clock:** updates every 1000ms (see Hero for the `Intl.DateTimeFormat` recipe).
- **Rotating "Currently" word:** cycles every 2400ms through the 4 phrases; each change replays a `fadeUp .45s ease` entrance.
- **Nav links:** in-page anchor scroll; page uses `scroll-behavior: smooth` on `html`.
- **Hover states:** documented per component above (buttons lift + deepen shadow; cards lift; chips fill amber; social rows nudge right). Standard transition durations: `.18s`–`.25s ease`.
- **Focus states:** form inputs switch `border-color` to `#cf7a1f`.
- **Responsive:** all layout via `auto-fit` grids + `clamp()` (no fixed breakpoints required); columns stack on narrow viewports. Target mobile, tablet, desktop.

## State Management
Minimal local component state:
- `osakaTime: string` — updated by a 1s interval.
- `focusIndex: number` — 0–3, advanced by a 2.4s interval, indexes the "Currently" phrases.
- `sent: boolean` — set true on contact-form submit; drives the button label + confirmation line.
- Clean up both intervals and the IntersectionObserver on unmount.
No data fetching. (If you later wire the form to a backend, add submit/loading/error state.)

## Animations (keyframes)
```css
@keyframes fadeUp  { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
@keyframes floaty  { 0%,100% { transform: translateY(0)   rotate(0deg);  } 50% { transform: translateY(-12px) rotate(-1.5deg); } }
@keyframes floaty2 { 0%,100% { transform: translateY(0)   rotate(0deg);  } 50% { transform: translateY(10px)  rotate(2deg);   } }
```

## Design Tokens

**Colors**
| Token | Value | Use |
|---|---|---|
| bg | `#f6efe3` | page background, input fill |
| bg2 / surface-alt | `#efe6d6` | scrollbar track / deeper cream |
| surface | `#fffaf0` | cards, nav on hover |
| raise | `#f3ead9` | chips, status pill |
| ink | `#241d14` | primary text |
| ink2 | `#6d5f4b` | secondary/body text |
| faint | `#a3927a` | labels, meta, footer |
| accent | `#cf7a1f` | primary amber (fills, dots, highlights) |
| accent-strong | `#b0611a` | amber text on light (better contrast) |
| gold | `#e6a84c` | blob gradients, top glow |
| line | `rgba(60,42,18,0.12)` | borders, dividers |
| line-strong | `rgba(60,42,18,0.2)` | secondary button border |
| accent-soft | `rgba(207,122,31,0.12)` | chip/pill tints |
| accent-line | `rgba(207,122,31,0.34)` | accent borders |
| on-accent | `#fffaf0` | text on amber |
| success | `#4a9d5b` | status dot, form confirmation |

**Typography**
- Display font (headings, brand, numbers, clock): **Bricolage Grotesque** (weights 500/600/700/800). Google Fonts.
- Body/UI font: **Plus Jakarta Sans** (weights 400/500/600/700). Google Fonts.
- Google Fonts import:
  `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700;12..96,800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap`
- Scale (all headings use the display font): H1 `clamp(2.7rem,7vw,5rem)` / -0.035em; section H2 `clamp(1.9rem,4vw,2.8rem)` to `clamp(2.2rem,5vw,3.4rem)`; project H3 `clamp(1.5rem,3.2vw,2.2rem)`; timeline H3 `clamp(1.15rem,2.4vw,1.45rem)`. Body 1.02–1.08rem, line-height ~1.65–1.72. Small labels 12.5–13.5px.

**Spacing / radius / shadow**
- Section vertical padding: `clamp(28px,4vw,44px)` top to `clamp(56px,9vw,120px)` bottom (varies by section — see per-section specs).
- Container padding: `clamp(20px,5vw,72px)`.
- Radii: pills/buttons `100px`; small value cards `16–18px`; skill/timeline cards `22px`; project & form cards `28px`; hero status card `30px`; inputs `14px`; avatar `20px`.
- Shadows: subtle card `0 12px 30px rgba(120,80,20,0.06)` / `0 14px 34px rgba(120,80,20,0.06)`; hero card `0 30px 70px rgba(120,80,20,0.16)`; card hover `0 26px 56px rgba(120,80,20,0.14)`; form `0 20px 46px rgba(120,80,20,0.08)`; button `0 10px 26px rgba(207,122,31,0.28)` → hover `0 16px 38px rgba(207,122,31,0.4)`.

## Assets
- **Avatar image:** the prototype uses a drag-and-drop placeholder (`image-slot.js`). **In production, replace with a normal 66×66 `<img>` with `border-radius: 20px`** and object-fit cover — Matthew supplies the photo. No other raster assets.
- **Icons:** the design uses only text arrows (`→`, `↗`) and CSS dots/shapes — no icon set required. If you prefer real icons for the social rows, use the codebase's existing icon library.
- **Fonts:** loaded from Google Fonts (see above).
- **Resume:** the nav "Resume" button links to `Matthew-South-Resume.pdf` (Matthew supplies the file).

## Placeholders to replace
- **Email address** — `matthew.south@example.com` is a placeholder in the contact section; swap in the real address.
- **Contact form backend** — currently visual only; wire to a real send.
- **Resume PDF** — add the actual file.

## Screenshots
Reference renders of the final design are in `screenshots/` (desktop width, ~908px viewport):
- `01-hero.png` — nav + hero with the status card (avatar, live Osaka clock, rotating "Currently", open-to-work pill)
- `02-about-skills.png` — About section: heading, bio, value cards, and skills-by-proficiency cards
- `03-work.png` — Selected work: project card layout (number badge, kind, title, problem, tech pills, links)
- `04-path.png` — Experience timeline cards
- `05-contact.png` — Contact section: heading, social rows, and the contact form

## Files
- `Portfolio Amber.dc.html` — the design reference (proprietary HTML dialect; read for structure/content/values, do not port the dialect).
- `image-slot.js` — prototype-only avatar placeholder component; do not ship.
- `README.md` — this spec (self-sufficient).

# Design System & Architectural Guidelines
**Ashikul Islam — System Architect & Software Engineer Portfolio**

---

## 1. Executive Summary & Design Philosophy

This design system defines the visual language, interface architecture, typography hierarchy, and interaction patterns for the **Ashikul Islam** portfolio ecosystem. 

### Core Tenets
1. **Architectural Precision**: Interfaces are structured with geometric discipline, strict alignment, and balanced visual weight. 
2. **Minimalist High-Density**: Clean aesthetics with high signal-to-noise ratio. Eliminate decorative clutter, pseudo-terminal noise, and unnecessary badges.
3. **Restrained Luxury Palette**: Deep obsidian surfaces contrasted against pure white display text, muted slate reading copy, and signature luxury cream accents (`#F7F2EB`).
4. **Zero Layout Shifts**: Interactions, tooltips, and hover states must never cause sudden content reflow or layout jumps.
5. **Universal Fluidity**: Responsive layouts that adapt seamlessly from mobile devices to ultra-wide displays.

---

## 2. Typography System (The 60-30-10 Rule)

Typography is strictly partitioned into three specialized typefaces following the golden ratio of digital typography:

```
+-------------------------------------------------------------------------+
|                               60% BODY                                  |
|                                Inter                                    |
|         Paragraphs · Descriptions · Form Inputs · Base UI Copy          |
+------------------------------------+------------------------------------+
|            30% HEADINGS            |            10% ACCENTS             |
|           Space Grotesk            |           JetBrains Mono           |
|  h1–h6 · Section Titles · Menu Nav | Badges · Metrics · Code · Statuses |
+------------------------------------+------------------------------------+
```

### Font Breakdown

| Ratio | Role | Font Family | Tailwind Class | CSS Variable | Usage & Application |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **60%** | **Body** | `Inter` | `font-sans` | `var(--font-sans)` | Primary reading font. Used for paragraphs, long-form bios, input fields, form labels, and general UI text. High legibility at small sizes. |
| **30%** | **Headings** | `Space Grotesk` | `font-heading` | `var(--font-heading)` | Display typography. Used for all headings (`h1`–`h6`), hero name, section headers, card titles, and modal headers. Features geometric neo-grotesque architecture and tight tracking (`-0.02em`). |
| **10%** | **Accents** | `JetBrains Mono` | `font-mono` | `var(--font-mono)` | Technical metadata. Used for indexes (`01`, `02`), dates (`2026`), tech pills, terminal code, telemetry badges, and button labels. |

### Global Typography Layer (`src/app/globals.css`)
```css
@layer base {
  body {
    @apply bg-background text-text-primary antialiased;
    font-family: var(--font-sans);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    letter-spacing: -0.02em;
  }

  code, pre, kbd, samp {
    font-family: var(--font-mono);
  }
}
```

---

## 3. Color Palette & Design Tokens

The color architecture is built on a dark obsidian aesthetic with high-contrast neutral scales and purposeful accent highlights.

### Surface Hierarchy
```
#000000 ── Pure Void       (Section background canvas)
└── #070709 ── Obsidian Deep  (Hero, Header blur, Footer canvas)
    └── #0c0c10 ── Card Shell    (Image containers, background frames)
        └── #141418 ── Raised Glass  (Elevated cards, Bento tiles, Tooltips)
```

### Color Tokens Table

| Token Name | Hex / Value | Tailwind Utility | Semantic Purpose |
| :--- | :--- | :--- | :--- |
| **Canvas Void** | `#000000` | `bg-black`, `bg-[#000000]` | Pure black background for high contrast section separation. |
| **Obsidian Deep** | `#070709` | `bg-[#070709]` | Deep dark canvas for Hero, Header backdrop, and Footer. |
| **Secondary Surface**| `#111111` | `bg-secondary-bg` | Secondary structural panels. |
| **Card Background** | `#141414` | `bg-card-bg` | Default container fill for interactive cards. |
| **Glass Tile Fill** | `rgba(255,255,255,0.02)` | `bg-white/[0.02]` | Ultra-clean semi-transparent frosted card fill. |
| **Glass Hover Fill**| `rgba(255,255,255,0.04)` | `hover:bg-white/[0.04]`| Subtle elevation lift on hover. |
| **Border Subtle** | `rgba(255,255,255,0.10)` | `border-white/10` | Standard hairline border for cards, inputs, and dividers. |
| **Border Elevated** | `rgba(255,255,255,0.15)` | `border-white/15` | Accent borders on focus or active containers. |
| **Luxury Cream** | `#F7F2EB` | `text-cream`, `bg-cream` | Signature primary accent: primary buttons, titles on hover, active tabs. |
| **Cream Light** | `#FAF7F2` | `bg-cream-light` | High-brightness cream for hover glow states. |
| **Cream Muted** | `#D1CBC1` | `text-cream-muted` | Secondary cream for subtle accents. |
| **Text Primary** | `#FFFFFF`, `#F3F4F6` | `text-white` | Headings, active states, emphasized labels. |
| **Text Secondary**| `#9CA3AF` | `text-neutral-400` | Body text, descriptions, sub-headings. |
| **Text Muted** | `rgba(255,255,255,0.40)` | `text-white/40` | Telemetry tags, timestamps, secondary metadata. |
| **Status Active** | `#34D399` | `text-emerald-400` | Live status pulse, production deployment indicators. |

---

## 4. Layout Architectures & Grid Systems

### Container Standards
- **Standard Width (`max-w-7xl` / `1280px`)**: Used for page navigation, footer, hero content, and chronology flow.
- **Content Width (`max-w-6xl` / `1152px`)**: Used for the Contact page Bento Grid, About overview, and long-form layouts.
- **Compact Showcase Width (`max-w-5xl` / `1024px`)**: Used for the Featured Systems 2x2 grid to maintain sleek, non-oversized card proportions.

---

### Pattern A: The Bento Grid (`/contact`)
Used to balance disparate UI elements (email action, status indicators, social channels, and input form) without vertical misalignment.

```
+------------------------------------+------------------------------------+
|  [ BENTO 1: Direct Email Card ]    |                                    |
|  md.ashikul4040@gmail.com          |                                    |
|  [Copy Email]   [Open Client ↗]    |                                    |
+------------------------------------+         [ BENTO 3: FORM ]          |
|  [ BENTO 2: Coordinates & Status ] |          Send a Message            |
|  Dhaka, BD · Available for Roles   |                                    |
+------------------------------------+         Name / Email / Msg         |
|  [ BENTO 4: 2x2 Link Matrix ]      |                                    |
|  GitHub      |  LinkedIn           |          [ Send Message ]          |
|  Scholar     |  Resume CV          |                                    |
+------------------------------------+------------------------------------+
```
- **Grid Ratio**: `grid-cols-1 lg:grid-cols-12 gap-6 items-stretch`
- **Left Column**: `lg:col-span-5 flex flex-col justify-between gap-5`
- **Right Column**: `lg:col-span-7 flex flex-col justify-between`
- **Rule**: Both columns use `items-stretch` so the bottom edge of the social matrix lines up with the bottom edge of the submit button.

---

### Pattern B: 2x2 Compact Showcase Grid (Featured Systems)
Replaces clumsy 3D canvases with a stable, high-end editorial showcase.

```
+------------------------------------+------------------------------------+
|  [ CARD 01: Planora AI ]           |  [ CARD 02: Ecommerce Admin ]      |
|  +------------------------------+  |  +------------------------------+  |
|  | Widescreen Preview (h-44)    |  |  | Widescreen Preview (h-44)    |  |
|  +------------------------------+  |  +------------------------------+  |
|  01 — WEB APP         Next.js 16   |  02 — FULL-STACK      PostgreSQL   |
|  PLANORA AI                        |  ECOMMERCE ADMIN DASHBOARD         |
|  Task & Focus Workspace            |  Multi-tenant RBAC platform        |
|  [Live Demo ↗]    [Source Code]    |  [Live Demo ↗]    [Source Code]    |
+------------------------------------+------------------------------------+
|  [ CARD 03: Eventify ]             |  [ CARD 04: IPGuardian ]           |
+------------------------------------+------------------------------------+
```
- **Image Frame**: `relative h-44 sm:h-48 w-full overflow-hidden rounded-lg border border-white/10 bg-[#0c0c10]`
- **Hover Micro-Zoom**: `group-hover:scale-105 transition-transform duration-500 ease-out`
- **Status Chip**: Floating pill in the top-right corner with a live pulsing dot.

---

### Pattern C: 4-Card 3D Interactive Flip Matrix (Core Expertise)
Used in the Capabilities section to display 4 domains in a single row without overwhelming the page with text.
- **Grid**: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5`
- **Card Height**: Fixed at `h-[280px]` with `[perspective:1000px]`
- **Front Face**: Minimal icon, domain title (`font-heading`), short subtext (`font-sans`), and interaction hint.
- **Back Face (`rotateY(180deg)`)**: 4 concise bullet points, core technology summary pill.

---

## 5. Component Standards & UI Patterns

### 1. Primary Action Button
```tsx
<button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cream py-3.5 px-6 font-mono text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(247,242,235,0.25)] active:scale-95 disabled:opacity-50">
  <span>Action Label</span>
  <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
</button>
```

### 2. Secondary Outline Button
```tsx
<a className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/[0.03] px-4 py-2 font-mono text-xs text-white/80 transition-all hover:border-cream/50 hover:bg-white/[0.06] hover:text-white active:scale-95">
  <Github size={14} className="text-cream" />
  <span>Source Code</span>
</a>
```

### 3. Floating Popover Tooltip (The Zero-Shift Title Pattern)
Used on project cards to prevent long titles from truncating permanently without shifting adjacent card heights on hover:

```tsx
<div className="relative group/title inline-block max-w-full mt-1">
  {/* Permanently 1 line to prevent layout reflow */}
  <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-white transition-colors duration-200 group-hover/title:text-cream line-clamp-1 cursor-pointer">
    {projectTitle}
  </h3>

  {/* Floating Tooltip positioned above title */}
  <div className="pointer-events-none absolute bottom-full left-0 mb-2 z-30 opacity-0 invisible group-hover/title:opacity-100 group-hover/title:visible transition-all duration-200 flex flex-col rounded-xl border border-white/20 bg-[#121216]/95 px-3 py-2 shadow-2xl backdrop-blur-md w-max max-w-[280px] sm:max-w-xs text-left">
    <span className="font-heading text-xs font-bold text-cream uppercase leading-snug tracking-wide">
      {projectTitle}
    </span>
    {/* Downward Caret */}
    <div className="absolute top-full left-4 -mt-px border-4 border-transparent border-t-[#121216]/95" />
  </div>
</div>
```

### 4. Input Fields & Textareas
```tsx
<input
  className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-2.5 font-sans text-sm text-white placeholder-white/20 outline-none transition-colors focus:border-cream focus:bg-white/[0.05]"
/>
```

---

## 6. Motion & Micro-Interactions

Motion must feel responsive, swift, and organic:
1. **Transition Curves**: Prefer `duration-200` to `duration-300` for color and scale changes. For drawer transitions, use cubic bezier: `[0.22, 1, 0.36, 1]`.
2. **Interactive Affordances**:
   - Buttons: `active:scale-95` gives tactile feedback on click.
   - Cards: Subtle border glow (`hover:border-cream/40`) accompanied by a faint luxury shadow (`hover:shadow-[0_0_35px_rgba(247,242,235,0.06)]`).
   - Image Previews: Slow zoom `scale-105` over `duration-500` on card hover.
3. **Live Telemetry Pulses**:
   - Status indicators use a 1.5px dot with `animate-pulse` (`bg-cream` or `bg-emerald-400`).

---

## 7. SEO, Metadata & OpenGraph Standards

Every page automatically adheres to modern crawler requirements:

### Standards Checklist
- **Title Structure**: Root `<title>` defaults to `Ashikul Islam - System Architect`, using template `%s | Ashikul Islam` for subpages.
- **Canonical URLs**: Configured via `metadataBase: new URL(siteMetadata.siteUrl)` and `alternates: { canonical: ... }`.
- **OpenGraph Asset Ratio**: 
  - Canonical `1200 x 630` aspect ratio (1.91:1).
  - Static fallback: [`public/og-image.png`](file:///f:/Web%20Development/portfolio/public/og-image.png).
  - Dynamic edge generation: [`src/app/opengraph-image.tsx`](file:///f:/Web%20Development/portfolio/src/app/opengraph-image.tsx) via `@vercel/og`.
- **Semantic Headings**: Exactly one `<h1>` per page. Sub-sections strictly ascend (`h2` for major sections, `h3` for cards).

---

## 8. Directory & File Conventions

```
src/
├── app/
│   ├── layout.tsx         # Root layout with Google font variables & base SEO
│   ├── globals.css        # Core tokens, Tailwind directives & layer base
│   ├── opengraph-image.tsx # Dynamic 1200x630 OpenGraph generation
│   ├── page.tsx           # Home entry point
│   ├── projects/          # Projects catalog (/projects)
│   ├── contact/           # Bento contact page (/contact)
│   └── about/             # Detailed about page (/about)
├── components/
│   ├── hero/              # HeroSection, HeroCanvasSlot
│   ├── capabilities/      # SystemsMatrix (4-card flip), CurvedTechRibbon
│   ├── chronology/        # ChronologyFlow (sticky stacking cards)
│   ├── projects/          # FeaturedSystems (2x2 showcase)
│   ├── contact/           # BlueprintContact (minimal CTA)
│   ├── navigation/        # StaggeredDrawer
│   └── ui/                # SectionHeader, Badge, Button, Input
└── data/
    └── portfolioData.ts   # Single source of truth for all content & meta
```

---

## 9. Rule of Thumb for New Features
When adding any new section or card to the portfolio:
1. **Never introduce unapproved fonts.** Always adhere to **Inter** (Body), **Space Grotesk** (Headings), and **JetBrains Mono** (Accents).
2. **Never hardcode arbitrary colors.** Always reference standard tokens (`bg-white/[0.02]`, `border-white/10`, `text-cream`).
3. **Keep cards proportional.** Avoid bloated image aspect ratios or tall blank columns. Keep containers disciplined (`max-w-5xl` for showcases, `max-w-6xl` for bento grids).
4. **Always reverse project arrays.** New projects added to the bottom of `portfolioData.ts` must render first at the top of showcase lists.

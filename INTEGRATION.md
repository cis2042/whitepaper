# Whitepaper Module — Integration Guide for twin3_home

> **This module is designed to be consumed by the [twin3_home](https://github.com/cis2042/twin3_home) project.**
> The Home project has **full authority** to modify, restyle, or restructure any content in this module to match its own design system, navigation patterns, and reader experience.

---

## Quick Start

### Option A: Git Submodule (Recommended)

```bash
# In the twin3_home project root
git submodule add https://github.com/cis2042/whitepaper.git whitepaper
git commit -m "feat: add whitepaper submodule"
```

Update to latest:
```bash
git submodule update --remote whitepaper
```

### Option B: npm Dependency

```bash
npm install github:cis2042/whitepaper
```

In `package.json`:
```json
{
  "dependencies": {
    "whitepaper": "github:cis2042/whitepaper"
  }
}
```

---

## Architecture

```
whitepaper/
├── src/
│   ├── app/               # Next.js pages (15 chapters)
│   │   ├── page.tsx        # Executive Summary (homepage)
│   │   ├── paradigm-shift/
│   │   ├── work-revolution/
│   │   ├── human-intelligence/
│   │   ├── algorithm/
│   │   ├── soul-injection/
│   │   ├── agent-economy/
│   │   ├── product/
│   │   ├── business-model/
│   │   ├── tokenomics/
│   │   ├── investment/
│   │   ├── go-to-market/
│   │   ├── roadmap/
│   │   ├── competitive/
│   │   ├── team/
│   │   ├── conclusion/
│   │   └── links/
│   ├── components/         # Shared UI components
│   │   ├── Animated.tsx      # Scroll reveal, KPI, charts
│   │   ├── Cinematic.tsx     # Hero, depth layers, parallax
│   │   ├── MatrixGrid.tsx    # 16×16 hex grid (256D identity)
│   │   ├── MatrixAnimations.tsx
│   │   ├── Navigation.tsx    # Sidebar + header nav
│   │   └── ThemeProvider.tsx # Dark/Cream toggle
│   └── app/
│       ├── globals.css       # Design tokens & styles
│       └── layout.tsx        # Root layout
├── public/                 # Static assets
├── package.json
└── tsconfig.json
```

### Tech Stack

| Layer     | Technology                    |
|-----------|-------------------------------|
| Framework | Next.js 15 (App Router)       |
| UI        | React 19 + Framer Motion      |
| Styling   | Tailwind CSS v4               |
| Theme     | Dark / Cream dual-mode        |
| Data      | Live API from holders.twin3.ai |

---

## Integration with twin3_home

### 1. Add WHITEPAPER to Navigation

In `index.html`, add the nav link alongside existing items (Soul / Agent / Economy / Dashboard):

```html
<ul class="nav-links">
  <li><a href="#stage1">Soul</a></li>
  <li><a href="#stage2">Agent</a></li>
  <li><a href="#stage3">Economy</a></li>
  <li><a href="https://holders.twin3.ai" target="_blank">Dashboard</a></li>
  <li><a href="/whitepaper" class="nav-whitepaper">Whitepaper</a></li>
</ul>
```

### 2. Deploy Strategy

The whitepaper runs as a standalone Next.js app. The recommended deployment is:

| Approach | Description |
|----------|-------------|
| **Subdirectory** | Deploy at `twin3.ai/whitepaper` using `basePath: '/whitepaper'` in `next.config.ts` |
| **Subdomain** | Deploy at `whitepaper.twin3.ai` as a separate service |
| **Iframe** | Embed via `<iframe src="https://whitepaper.twin3.ai">` (not recommended) |

#### Subdirectory Setup (Recommended)

In `whitepaper/next.config.ts`:
```ts
const nextConfig: NextConfig = {
  basePath: '/whitepaper',
  // ... existing config
};
```

Then set up routing in the Home project's Cloud Run / reverse proxy to forward `/whitepaper/*` to the whitepaper service.

---

## Home Project's Rights & Customization

> **The Home project (twin3_home) has the highest authority to modify any content in this module.**

### What Home Can Change

| Area | What to Modify |
|------|---------------|
| **Navigation** | `src/components/Navigation.tsx` — Header links, sidebar structure, logo |
| **Theme & Colors** | `src/app/globals.css` — CSS variables, tokens, color palette |
| **Layout** | `src/app/layout.tsx` — Root wrapper, fonts, meta tags |
| **Any Page Content** | `src/app/*/page.tsx` — Text, structure, sections |
| **Components** | `src/components/*.tsx` — Animation style, visual behavior |
| **Styling** | Override any class via CSS specificity or direct edit |

### Design Token Override

The whitepaper uses CSS custom properties. Override them in the Home project to enforce its design:

```css
/* In twin3_home's style.css — override whitepaper tokens */
:root {
  --font-heading: 'Cormorant Garamond', serif;  /* match home */
  --font-body: 'DM Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --green-deep: #1a3a24;
  --cream: #fafaf5;
  --gold-warm: #d4c89a;
}
```

### Fork & Customize Workflow

```bash
# Home team: fork or clone, modify freely
git clone https://github.com/cis2042/whitepaper.git
cd whitepaper
npm install
npm run dev    # preview at localhost:3000

# Edit any file → commit → deploy
```

---

## API Dependencies

| Endpoint | Purpose | Used In |
|----------|---------|---------|
| `https://holders.twin3.ai/api/sbt-holders` | Live SBT holder count | `page.tsx` (KPI card) |

---

## Run Locally

```bash
git clone https://github.com/cis2042/whitepaper.git
cd whitepaper
npm install
npm run dev
# → http://localhost:3000
```

## Build for Production

```bash
npm run build
npm start
# or export as static:
# next export (if configured)
```

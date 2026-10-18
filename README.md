# Portfolio — Sabbir Al Sameer

A single-page developer portfolio with project detail pages, built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4. Dark monochrome editorial theme with a single warm accent — deliberately not the generic AI-generated look.

> **AI attribution** — The vast majority of this codebase was generated in [OpenCode](https://opencode.ai) with the **`mimo-v2.6-flash-free`** model (MiMo-V2.6-Flash Free). That includes the components, content structure, styling, and configuration; the human contributor curated the data and design direction.

## Getting Started

npm only (a `package-lock.json` is committed — don't introduce pnpm/yarn/bun lockfiles).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Dev server (Turbopack)                        |
| `npm run build`   | Production build — required final check       |
| `npm run start`   | Serve the production build                    |
| `npm run lint`    | Plain `eslint` (`next lint` is gone in Next 16) |
| `npx tsc --noEmit` | Typecheck (no dedicated script)              |

Verify a change with: `npm run lint && npx tsc --noEmit && npm run build`

## Architecture

All site copy, links, ordering and data live in `content/` — components never hardcode them. Swapping the theme, about text, projects, or section order is a data-only change.

```
app/
  page.tsx                 # Single-page home: Navbar, Hero, sections registry, Footer
  layout.tsx               # Fonts (Libre Baskerville / Biryani / Geist Mono via next/font)
  projects/[slug]/page.tsx # Project detail pages (statically generated from projectsData)
content/                   # Typed static data — edit this to edit the site
  site.ts                  # Title, description, section order + nav labels, resumeUrl, year
  profile.ts               # Name, bio, journey, education, socials, contact, photo
  projects.ts              # Project entries (slug, tech stack, links, screenshots)
  skills.ts                # Skill categories
  experience.ts            # Experience entries ([] hides the section + its nav link)
components/
  sections/                # Hero, About, Skills, Education, Experience, Projects, Contact, Navbar, Footer
  projects/                # Project card + detail components
  ui/                      # shadcn primitives (@base-ui/react, base-nova style)
  icons.tsx                # Inline SVG social/skill icons (lucide dropped brand icons)
  section-heading.tsx      # Shared numbered-eyebrow section header
  copy-button.tsx          # Client copy-to-clipboard (email)
types/index.ts             # All shared TS types (Project, Profile, SiteConfig, …)
styles/theme.css           # The ONLY place colors are defined (CSS custom properties)
public/
  images/                  # Profile photo + project screenshots
  resume.pdf               # Behind siteData.resumeUrl
```

### Section registry

`app/page.tsx` renders `getVisibleSections()` from `content/site.ts` through `components/sections/index.ts`. Reorder, rename, or hide sections by editing that one file. Sections with no content (e.g. Experience when `experienceData` is `[]`) auto-hide from both the page and the navbar, so numbering never gaps.

To add a section: create the component → add its key to `SectionKey` in `types/index.ts` → register it in the registry → list it in `content/site.ts`.

## Design System

- **Tokens only** — colors live in `styles/theme.css` as CSS vars consumed via Tailwind (`bg-background`, `text-muted-foreground`, `text-highlight`, …). No inline hex/rgb in components.
- **Accent discipline** — `--highlight` (amber) is the only hue, used sparingly: links, focus rings, active nav. Everything else is grayscale.
- **Forbidden** — gradients, box-shadows, glassmorphism/blur, emoji in UI chrome. Hairline `border-border` dividers instead.
- **Imagery** — project cards render grayscale and fade to color on hover; detail imagery renders full color at `quality={100}`.

## Config Quirks (Next.js 16)

- `cacheComponents: true` + `partialPrefetching: true` — data fetching is dynamic by default; static output requires `"use cache"` (plus `cacheLife`/`cacheTag` where needed). Uncached async work must sit behind a `<Suspense>` boundary. `new Date()` in prerendered UI is a build error (`copyrightYear` is hardcoded for this reason).
- React Compiler is on (`reactCompiler: true`) — don't hand-write `useMemo`/`React.memo` for correctness.
- Tailwind v4 is CSS-first — no `tailwind.config`; theme and utilities live in `app/globals.css`.
- shadcn style is `base-nova` — primitives come from `@base-ui/react`, not Radix.
- The `[slug]` project page must not await `params` directly (breaks partial prefetching); it renders a shell + `<Suspense>` and passes the promise to `project-details.tsx`.
- `AGENTS.md`'s managed `nextjs-agent-rules` block is written by `next dev` — commit it if it shows as a diff.

## Stack

Next.js 16.4 · React 19.3 · TypeScript · Tailwind CSS v4 · shadcn (`@base-ui/react`) · lucide-react · React Compiler

## Deploy

Deployed on [Vercel](https://vercel.com) — a working live link is required for the bootcamp submission this site targets. Push to the connected repo and Vercel builds it with zero config.

## License

Personal portfolio. All rights reserved by the site owner.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Repo

Single-package personal portfolio site: Next.js 16.4 App Router, React 19.3, TypeScript, Tailwind v4. Not a monorepo. npm only (`package-lock.json` — don't introduce pnpm/yarn/bun files). No tests, no CI, no formatter config.

## Commands

- `npm run dev` — dev server (regenerates the managed block above; commit it if it shows as a diff)
- `npm run lint` — plain `eslint` (`next lint` is gone in Next 16)
- `npx tsc --noEmit` — typecheck; there is no `typecheck` script
- `npm run build` — required final check; `cacheComponents`/PPR errors only surface at build or runtime, not in `tsc`

Verify with: `npm run lint && npx tsc --noEmit && npm run build`

## Config quirks that change how you write code

- `next.config.ts` has `cacheComponents: true` + `partialPrefetching: true`. Data fetching is **dynamic by default**; to make something static you must opt in with `"use cache"` (plus `cacheLife`/`cacheTag` where needed). Uncached async work must sit behind a `<Suspense>` boundary or the build reports validation errors (sync IO like `Date.now()` in the prerender shell is a hard build error); `instant = false` in a route segment is a temporary escape hatch. Read `node_modules/next/dist/docs/01-app/02-guides/migrating-to-cache-components.md` and `node_modules/next/dist/docs/01-app/03-api-reference/01-directives/use-cache.md` before touching data fetching.
- React Compiler is on (`reactCompiler: true`) — don't hand-write `useMemo`/`React.memo` for correctness.
- Tailwind v4 is CSS-first: no `tailwind.config`; theme/utilities live in `app/globals.css`, loaded via the `@tailwindcss/turbopack` rule in `next.config.ts`.
- shadcn style is `base-nova` (`components.json`): primitives come from `@base-ui/react`, **not Radix**. `cn` is the `cn` npm package, re-exported by `lib/utils.ts` — don't add `clsx`/`tailwind-merge`.
- Path alias `@/*` maps to the repo root (`@/types`, `@/content`, `@/components/ui/...`).

## Structure

- `content/*.ts` — static typed data (`profileData`, `projectsData`, `skillsData`, `experienceData`, `siteData`), typed in `types/index.ts`. **All site copy, links, ordering and data live here — components must never hardcode them.**
  - `content/site.ts` — site title/description, section order + navbar labels (`sections`), `resumeUrl`, `copyrightYear` (a constant: `new Date()` in prerendered UI is a build error). Exports `getVisibleSections()`.
  - `content/experience.ts` — currently `[]`; the Experience section and its nav link auto-hide until an entry exists.
- `app/page.tsx` — single-page home: `<Navbar />`, `<Hero />`, then `getVisibleSections()` rendered through the section registry, then `<Footer />`. Reorder/rename/hide sections by editing `content/site.ts` only.
- `components/sections/index.ts` — `sectionRegistry` (`SectionKey → component`) + the shared `SectionProps` (`{ index, label }`). New sections: create component → extend `SectionKey` in `types/index.ts` → register → list in `content/site.ts`.
- `app/projects/[slug]/page.tsx` — project detail pages; `generateStaticParams` from `projectsData` (with cacheComponents it must return ≥1 param — do NOT export `dynamicParams`; unknown slugs hit `notFound()`). `generateMetadata` uses `"use cache"`. The page itself must NOT await `params` (triggers the "URL data outside of Suspense" insight under partial prefetching) — it renders a shell + `<Suspense>` and passes the promise to `app/projects/[slug]/project-details.tsx`, which awaits it.
- `components/icons.tsx` — inline SVG social brand icons (lucide dropped brand icons) + `skillIcons` map keyed by strings in `content/skills.ts`; unknown keys fall back to a dot.
- `styles/theme.css` — **the only place colors are defined** (see Design system).
- `components/ui/` — shadcn components (`npx shadcn add <component>` to extend, config already set).
- `public/images/` — `linkedinDP-bright.jpg` is the profile photo (referenced from `content/profile.ts`); `project1–3.png` are project screenshots (referenced from `content/projects.ts`). `overwatch-heroes-directory.png` is currently unreferenced. `public/resume.pdf` is the file behind `siteData.resumeUrl`.

## Design system (deliberately NOT the generic AI look)

Dark monochrome editorial + one warm accent. Hard rules:

- **Tokens only** — all colors defined in `styles/theme.css` as CSS vars consumed via Tailwind (`bg-background`, `text-muted-foreground`, `text-highlight`, …). Never inline hex/rgb colors in components.
- **Accent discipline** — `--highlight` (amber, `oklch(0.8 0.15 85)`) is the ONLY hue, used sparingly: links, focus rings (`--ring: var(--highlight)`), active nav, small details. Everything else is grayscale (saturation 0).
- **Forbidden**: gradients, box-shadows, glassmorphism/blur, emoji in UI chrome. Use hairline `border-border` dividers instead.
- **Fonts** (set in `app/layout.tsx` via next/font): `--font-display` = Libre Baskerville (headings), `--font-sans` = Biryani (body; note: weights 400/600/700 only — no 500), `--font-mono` = Geist Mono (labels, tags, meta). Mapped in `@theme inline` in `app/globals.css`.
- **Imagery** — project-card screenshots are `grayscale` by default and fade to full color on card hover; all other imagery (hero portrait, project detail screenshots) renders in full color at high quality (`quality={100}`).
- Section headers use `components/section-heading.tsx` (mono numbered eyebrow + serif heading + hairline).
- Light theme (if ever wanted): edit `:root` in `styles/theme.css` / toggle `.dark` — nothing else changes.

## Project goals / constraints

- Bootcamp assignment: single-page portfolio + project detail pages; **modularity is the top priority** — swapping themes, about text, projects, section order must stay a data-only change.
- Must be deployed with a working live link (Vercel) or the submission scores 0.
- `content/profile.ts` now holds the owner's real data (Sabbir Al Sameer); some entries in `content/projects.ts` still carry example.com placeholder URLs — keep new content real and data-only.

## Component conventions

- Server components by default; only `Navbar` and `CopyButton` are client components. Under cacheComponents, client components must not read `usePathname`/`useSearchParams` without a `<Suspense>` boundary — Navbar deliberately uses IntersectionObserver for scroll-spy instead.
- Social/skill icons come from `components/icons.tsx`; don't add brand icons via lucide (they were removed upstream).

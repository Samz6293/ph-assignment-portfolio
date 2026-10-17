import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    slug: "overwatch-heroes-directory",
    name: "Overwatch Heroes Directory",
    description:
      "A fan-made landing page and hero directory for Overwatch 2 that helps newer players explore the roster, organized by tank, damage, and support roles.",
    fullDescription:
      "A fan site for Overwatch 2 built with the Next.js App Router. The landing page pairs official-style key art with custom display typography, and the heroes page fetches the full hero roster from the Overfast API on the server, categorizing every hero by role so newcomers can quickly learn who does what before jumping into a match.",
    image: "/images/overwatch-heroes-directory.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://overwatch-nextjs.vercel.app/",
    githubUrl: "https://github.com/samz6293/overwatch-nextjs",
    challenges: [
      "Recreating the game's dark, cinematic look with custom display fonts and a full-bleed key-art hero section.",
      "Keeping the hero banner readable on mobile by layering a gradient scrim over the artwork.",
      "Fetching and categorizing the hero roster server-side from a third-party API.",
    ],
    futurePlans: [
      "Add per-hero detail pages with abilities, hitpoints, and backstory.",
      "Add role filters and search across the roster.",
      "Expand beyond heroes with maps and game modes.",
    ],
  },
  {
    slug: "bazar-dor",
    name: "BazarDor (বাজার দর)",
    description:
      "A Bangladeshi grocery price tracker that shows today's market rates for everyday essentials — with per-category browsing and daily price-change trends.",
    fullDescription:
      "BazarDor is a Bangla-first web platform that makes daily grocery prices across Bangladesh easy to follow. Users browse essentials by category — rice, lentils, oil, vegetables, fish, meat, eggs, and spices — see a live ticker of daily price increases and decreases, and open any product to compare average, minimum, maximum, and market-wise prices before they buy. Accounts are handled with social sign-in, and a MongoDB-backed database stores users alongside the price data.",
    image: "/images/bazar-dor.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "HeroUI", "Better Auth", "MongoDB"],
    liveUrl: "https://bazardor-samz6293.vercel.app/",
    githubUrl: "https://github.com/Samz6293/ph-assignment-7",
    challenges: [
      "Modeling per-market price data so each product can show average, min, max, and market-wise breakdowns.",
      "Setting up Better Auth with a MongoDB adapter for social sign-in alongside the price database.",
      "Designing a Bangla-first interface with proper Bangla typography and a scrolling price-change ticker.",
    ],
    futurePlans: [
      "Add historical price charts to show trends over time.",
      "Let users set price alerts for specific products.",
      "Add region selection so users only see prices for their local market.",
    ],
  },
  {
    slug: "liverpool-react",
    name: "Liverpool FC Squad Dashboard",
    description:
      "A React 19 dashboard for browsing the Liverpool FC squad, with a synchronized favorites shortlist backed by live data from TheSportsDB API.",
    fullDescription:
      "A squad browser for Liverpool FC built with React 19, TypeScript, and Vite. Player data is fetched asynchronously from TheSportsDB API and resolved with React 19's use() hook inside a Suspense boundary, so there's no manual loading boilerplate. Favoriting a player from the squad list or the shortlist stays in sync through lifted state in the root component, with toast notifications confirming every add and removal. Player cards show position, squad number, photo, and an expandable bio.",
    image: "/images/liverpool-react.png",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    liveUrl: "https://liverpool-players-react.netlify.app/",
    githubUrl: "https://github.com/Samz6293/liverpool-react",
    challenges: [
      "Resolving the async API fetch declaratively with React 19's use() hook and Suspense.",
      "Keeping the squad list, favorites board, and counter badges in sync with a single lifted state.",
      "Building expandable player bios that clamp text without breaking card layout.",
    ],
    futurePlans: [
      "Persist favorites in localStorage so they survive page reloads.",
      "Add search and position filters across the squad.",
      "Show career stats and recent match history per player.",
    ],
  },
];

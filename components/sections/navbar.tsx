"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profileData } from "@/content/profile";
import { getVisibleSections } from "@/content/site";
import { cn } from "cn";

const visibleSections = getVisibleSections();

/**
 * Fixed top bar. Active section is tracked with IntersectionObserver —
 * deliberately NOT usePathname/useSearchParams, which require Suspense
 * boundaries under `cacheComponents`.
 */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const ids = ["top", ...visibleSections.map((s) => s.id)];
    const entries = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (observed) => {
        const visible = observed
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    entries.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background">
      <Link
        href="/#top"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:border focus:border-highlight focus:bg-background focus:px-3 focus:py-2 focus:font-mono focus:text-xs"
      >
        Skip to content
      </Link>

      <nav
        aria-label="Main"
        className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6"
      >
        <Link
          href="/"
          className="font-display text-lg tracking-tight transition-colors hover:text-highlight"
        >
          {profileData.name}
          <span className="text-highlight">.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {visibleSections.map((section) => (
            <li key={section.id}>
              <a
                href={`/#${section.id}`}
                aria-current={active === section.id ? "true" : undefined}
                className={cn(
                  "font-mono text-[11px] tracking-widest uppercase transition-colors",
                  active === section.id
                    ? "text-highlight"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex size-8 items-center justify-center border border-border text-muted-foreground transition-colors hover:text-foreground md:hidden"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open ? (
        <ul className="border-t border-border md:hidden">
          {visibleSections.map((section) => (
            <li key={section.id}>
              <a
                href={`/#${section.id}`}
                onClick={() => setOpen(false)}
                aria-current={active === section.id ? "true" : undefined}
                className={cn(
                  "block border-b border-border px-6 py-3.5 font-mono text-xs tracking-widest uppercase",
                  active === section.id
                    ? "text-highlight"
                    : "text-muted-foreground"
                )}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}

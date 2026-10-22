"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";

interface RevealProps {
  children: ReactNode;
  /** Element to render — use "ul"/"ol" to stagger list items without breaking semantics. */
  as?: ElementType;
  className?: string;
  /** Play on mount instead of when scrolled into view (for above-the-fold content). */
  load?: boolean;
  /** Seconds between each direct child; 0 (default) animates the wrapper itself. */
  stagger?: number;
  /** Extra delay in seconds before the animation starts. */
  delay?: number;
}

/**
 * Fade-and-rise reveal. Animates the wrapper itself by default, or its
 * direct children when `stagger` is set. Content stays visible when JS is
 * off or the user prefers reduced motion — GSAP sets the initial hidden
 * state after hydration, never CSS.
 */
export function Reveal({
  children,
  as = "div",
  className,
  load = false,
  stagger = 0,
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const el = ref.current;
      if (!el) return;

      const scrollVars = load
        ? {}
        : { scrollTrigger: { trigger: el, start: "top 85%" } };

      if (stagger > 0 && el.children.length > 0) {
        gsap.from(el.children, {
          opacity: 0,
          y: 24,
          duration: 0.8,
          ease: "power3.out",
          stagger,
          delay,
          ...scrollVars,
        });
      } else {
        gsap.from(el, {
          opacity: 0,
          y: 24,
          duration: 0.8,
          ease: "power3.out",
          delay,
          ...scrollVars,
        });
      }
    },
    { scope: ref }
  );

  const Tag = as as "div";
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

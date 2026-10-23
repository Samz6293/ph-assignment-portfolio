"use client";

import { useRef } from "react";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";

interface SectionHeadingProps {
  /** Zero-based position of the section — rendered as "01", "02", ... */
  index: number;
  label: string;
  /** Optional short description under the heading */
  description?: string;
}

/**
 * Shared section header: mono numbered eyebrow + serif heading + hairline.
 * Keeps every section visually consistent (design system rule: no emoji,
 * mono labels, display serif headings). The eyebrow fades in and the
 * hairline draws in from the left as the section enters the viewport.
 */
export function SectionHeading({ index, label, description }: SectionHeadingProps) {
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: { trigger: ref.current, start: "top 88%" },
      });
      tl.from("[data-heading-eyebrow]", {
        opacity: 0,
        x: -12,
        duration: 0.7,
        stagger: 0.08,
      }).from(
        "[data-heading-line]",
        { scaleX: 0, transformOrigin: "left center", duration: 1, ease: "power2.out" },
        0.15
      );

      const descriptionEl = ref.current?.querySelector("[data-heading-description]");
      if (descriptionEl) {
        tl.from(descriptionEl, { opacity: 0, y: 12, duration: 0.7 }, 0.25);
      }
    },
    { scope: ref }
  );

  return (
    <header ref={ref} className="mb-12">
      <div className="flex items-center gap-4">
        <span
          data-heading-eyebrow
          className="font-mono text-xs tracking-widest text-highlight uppercase"
        >
          {String(index).padStart(2, "0")}
        </span>
        <span
          data-heading-eyebrow
          className="font-mono text-xs tracking-widest text-muted-foreground uppercase"
        >
          {label}
        </span>
        <span
          data-heading-line
          aria-hidden
          className="h-px flex-1 bg-border"
        />
      </div>
      {description ? (
        <p
          data-heading-description
          className="mt-4 max-w-2xl text-sm text-muted-foreground"
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}

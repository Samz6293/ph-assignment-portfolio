"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowDownToLine } from "lucide-react";
import { siteData } from "@/content/site";
import { profileData } from "@/content/profile";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";

const socialLinks = [
  { label: "GitHub", url: profileData.socials.github, Icon: GithubIcon },
  { label: "LinkedIn", url: profileData.socials.linkedin, Icon: LinkedinIcon },
].filter((s): s is typeof s & { url: string } => Boolean(s.url));

export function Hero() {
  const scope = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.9 },
      });
      tl.from("[data-hero-eyebrow]", { opacity: 0, y: 16 })
        .from("[data-hero-title]", { opacity: 0, y: 32 }, "-=0.65")
        .from(
          "[data-hero-dot]",
          { opacity: 0, scale: 0, transformOrigin: "50% 80%" },
          "-=0.55"
        )
        .from("[data-hero-bio]", { opacity: 0, y: 20 }, "-=0.6")
        .from("[data-hero-cta]", { opacity: 0, y: 20 }, "-=0.7")
        .from(
          "[data-hero-photo]",
          { opacity: 0, y: 28, scale: 0.97 },
          "-=0.75"
        )
        .from("[data-hero-frame]", { opacity: 0, x: -10, y: -10 }, "-=0.8");
    },
    { scope }
  );

  return (
    <section
      ref={scope}
      id="top"
      className="flex min-h-svh scroll-mt-14 flex-col justify-center border-b border-border"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-end gap-12 px-6 py-24 lg:grid-cols-[1fr_auto]">
        {/* Type block */}
        <div>
          <p
            data-hero-eyebrow
            className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase"
          >
            {profileData.designation}
          </p>

          <h1
            data-hero-title
            className="mt-6 font-display text-[clamp(3rem,10vw,7rem)] leading-[0.95] tracking-tight"
          >
            {profileData.name}
            <span data-hero-dot className="inline-block text-highlight">
              .
            </span>
          </h1>

          <p
            data-hero-bio
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            {profileData.bio}
          </p>

          <div data-hero-cta className="mt-10 flex flex-wrap items-center gap-4">
            {siteData.resumeUrl ? (
              <a
                href={siteData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-85 focus-visible:ring-3 focus-visible:ring-ring/50 outline-none"
              >
                <ArrowDownToLine className="size-4" />
                View / Download Resume
              </a>
            ) : null}

            <div className="flex items-center gap-2">
              {socialLinks.map(({ label, url, Icon }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-highlight hover:text-highlight"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Photo */}
        <div
          data-hero-photo
          className="relative mx-auto w-56 sm:w-72 lg:w-80"
        >
          <div
            data-hero-frame
            aria-hidden
            className="absolute -top-3 -left-3 h-full w-full border border-border"
          />
          <Image
            src={profileData.photo}
            alt={`Portrait of ${profileData.name}`}
            width={640}
            height={800}
            sizes="(max-width: 640px) 100vw, 320px"
            quality={100}
            priority
            className="relative aspect-4/5 w-full border border-border object-cover"
          />
        </div>
      </div>
    </section>
  );
}

import { profileData } from "@/content/profile";
import { SectionHeading } from "@/components/section-heading";
import type { SectionProps } from "@/components/sections";

/** Vertical hairline timeline with mono period labels. */
export function Education({ index, label }: SectionProps) {
  return (
    <section id="education" className="scroll-mt-14 border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index={index} label={label} />

        <ol className="max-w-3xl border-l border-border pl-8">
          {profileData.education.map((entry) => (
            <li key={`${entry.degree}-${entry.institution}`} className="relative pb-10 last:pb-0">
              <span
                aria-hidden
                className="absolute top-1.5 -left-[calc(2rem+5px)] size-2.5 border border-highlight bg-background"
              />
              <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                {entry.year}
              </p>
              <h3 className="mt-2 font-display text-xl">{entry.degree}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{entry.institution}</p>
              {entry.details ? (
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {entry.details}
                </p>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

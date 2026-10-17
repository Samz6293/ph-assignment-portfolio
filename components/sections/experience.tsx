import { experienceData } from "@/content/experience";
import { SectionHeading } from "@/components/section-heading";
import type { SectionProps } from "@/components/sections";

/** Renders nothing while content/experience.ts is empty (requirement: "if applicable"). */
export function Experience({ index, label }: SectionProps) {
  if (experienceData.length === 0) return null;

  return (
    <section id="experience" className="scroll-mt-14 border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index={index} label={label} />

        <ol className="max-w-3xl border-l border-border pl-8">
          {experienceData.map((entry) => (
            <li key={`${entry.company}-${entry.role}`} className="relative pb-10 last:pb-0">
              <span
                aria-hidden
                className="absolute top-1.5 -left-[calc(2rem+5px)] size-2.5 border border-highlight bg-background"
              />
              <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                {entry.period}
              </p>
              <h3 className="mt-2 font-display text-xl">{entry.role}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{entry.company}</p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {entry.summary}
              </p>
              {entry.tech && entry.tech.length > 0 ? (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {entry.tech.map((tech) => (
                    <li
                      key={tech}
                      className="border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

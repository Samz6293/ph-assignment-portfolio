import { skillsData } from "@/content/skills";
import { getSkillIcon } from "@/components/icons";
import { Reveal } from "@/components/animation/reveal";
import { SectionHeading } from "@/components/section-heading";
import type { SectionProps } from "@/components/sections";

/**
 * Icon grid, hairline-separated — the 1px gaps between cells become the
 * borders (editorial "table" look instead of floating cards).
 */
export function Skills({ index, label }: SectionProps) {
  return (
    <section id="skills" className="scroll-mt-14 border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index={index}
          label={label}
          description="The stack I reach for day to day."
        />

        <Reveal
          stagger={0.1}
          className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillsData.map((group) => (
            <div key={group.category} className="bg-background p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="font-mono text-xs tracking-widest text-foreground uppercase">
                  {group.category}
                </h3>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {String(group.skills.length).padStart(2, "0")}
                </span>
              </div>

              <ul className="mt-5 space-y-1">
                {group.skills.map((skill) => {
                  const Icon = getSkillIcon(skill.icon);
                  return (
                    <li
                      key={skill.name}
                      className="group flex items-center gap-3 border-b border-border/60 py-2.5 last:border-0"
                    >
                      <Icon className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-highlight" />
                      <span className="text-sm">{skill.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

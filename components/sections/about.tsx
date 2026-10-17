import { profileData } from "@/content/profile";
import { SectionHeading } from "@/components/section-heading";
import type { SectionProps } from "@/components/sections";

export function About({ index, label }: SectionProps) {
  return (
    <section id="about" className="scroll-mt-14 border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index={index} label={label} />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Narrative */}
          <div className="space-y-8 lg:col-span-7">
            <p className="font-display text-2xl leading-snug italic md:text-3xl">
              {profileData.bio}
            </p>

            <div className="space-y-4 text-muted-foreground">
              <h3 className="font-mono text-xs tracking-widest text-foreground uppercase">
                The journey so far
              </h3>
              {profileData.journey.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Interests */}
          <aside className="lg:col-span-5">
            <div className="border border-border p-6">
              <h3 className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                Off the clock
              </h3>
              <ul className="mt-5 divide-y divide-border">
                {profileData.hobbies.map((hobby) => (
                  <li
                    key={hobby}
                    className="flex items-center gap-3 py-3 text-sm"
                  >
                    <span aria-hidden className="size-1.5 shrink-0 bg-highlight" />
                    {hobby}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

import { projectsData } from "@/content/projects";
import { Reveal } from "@/components/animation/reveal";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/section-heading";
import type { SectionProps } from "@/components/sections";

export function Projects({ index, label }: SectionProps) {
  return (
    <section id="projects" className="scroll-mt-14 border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index={index}
          label={label}
          description="Selected work — each card opens a full write-up."
        />

        <Reveal
          stagger={0.1}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

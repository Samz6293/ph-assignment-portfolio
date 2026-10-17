import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types";

/**
 * Project card — image-first, hairline border. The whole card is clickable
 * (the "View Details" link is stretched over the card via `after:inset-0`).
 * Imagery is grayscale by default and fades to full color on card hover.
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col border border-border bg-background transition-colors hover:border-muted-foreground/60">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-card">
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={100}
          className="object-contain grayscale transition-[filter] duration-500 group-hover:grayscale-0"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <ul className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        <h3 className="mt-4 font-display text-xl">{project.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-6 inline-flex items-center gap-2 border-t border-border pt-4 font-mono text-xs tracking-widest uppercase transition-colors after:absolute after:inset-0 after:content-[''] hover:text-highlight"
        >
          View Details
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </article>
  );
}

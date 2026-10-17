import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types";

/** Project card — image-first, hairline border, grayscale imagery. */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col border border-border bg-background transition-colors hover:border-muted-foreground/60">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover grayscale transition-transform duration-500 group-hover:scale-[1.03]"
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
          className="mt-6 inline-flex items-center gap-2 border-t border-border pt-4 font-mono text-xs tracking-widest uppercase transition-colors hover:text-highlight"
        >
          View Details
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}

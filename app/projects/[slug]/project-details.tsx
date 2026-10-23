import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/content/projects";
import { Reveal } from "@/components/animation/reveal";

/**
 * All content that depends on the URL. Awaits `params` inside the page's
 * <Suspense> boundary (see page.tsx) so the App Shell stays URL-independent
 * and navigation stays instant. All slugs are known at build time via
 * generateStaticParams, so this still prerenders statically.
 */
export async function ProjectDetails({
  params,
}: Pick<PageProps<"/projects/[slug]">, "params">) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      {/* Tech stack */}
      <Reveal
        as="ul"
        stagger={0.04}
        delay={0.1}
        className="mt-10 flex flex-wrap gap-1.5"
      >
        {project.techStack.map((tech) => (
          <li
            key={tech}
            className="border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
          >
            {tech}
          </li>
        ))}
      </Reveal>

      <Reveal>
        <h1 className="mt-5 font-display text-4xl tracking-tight md:text-5xl">
          {project.name}
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {project.fullDescription}
        </p>

        {/* Links */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-85"
          >
            Live Site
            <ArrowUpRight className="size-4" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 border border-border px-5 text-sm transition-colors hover:border-muted-foreground/60"
          >
            GitHub Repository
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </Reveal>

      {/* Screenshot */}
      <Reveal className="relative mt-12 aspect-video w-full border border-border bg-card">
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          fill
          sizes="(max-width: 896px) 100vw, 896px"
          quality={100}
          className="object-contain"
          priority
        />
      </Reveal>

      {/* Challenges & future plans */}
      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
        <Reveal as="section">
          <h2 className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Challenges faced
          </h2>
          <ol className="mt-5 space-y-5">
            {project.challenges.map((challenge, i) => (
              <li key={challenge} className="flex gap-4">
                <span className="font-mono text-xs text-highlight">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {challenge}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal as="section" delay={0.1}>
          <h2 className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Improvements & future plans
          </h2>
          <ol className="mt-5 space-y-5">
            {project.futurePlans.map((plan, i) => (
              <li key={plan} className="flex gap-4">
                <span className="font-mono text-xs text-highlight">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {plan}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </>
  );
}

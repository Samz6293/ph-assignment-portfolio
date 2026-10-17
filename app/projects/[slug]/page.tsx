import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projectsData } from "@/content/projects";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

/** All slugs are known at build time (static data), so every project page is prerendered. */
export function generateStaticParams() {
  return projectsData.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  "use cache";
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.name} — Project`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-4xl px-6 py-20">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground uppercase transition-colors hover:text-highlight"
        >
          <ArrowLeft className="size-3.5" />
          All projects
        </Link>

        {/* Tech stack */}
        <ul className="mt-10 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

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

        {/* Screenshot */}
        <div className="relative mt-12 aspect-[16/9] w-full border border-border">
          <Image
            src={project.image}
            alt={`${project.name} screenshot`}
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover grayscale"
            priority
          />
        </div>

        {/* Challenges & future plans */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          <section>
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
          </section>

          <section>
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
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

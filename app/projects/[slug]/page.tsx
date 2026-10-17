import Link from "next/link";
import { Suspense } from "react";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { ProjectDetails } from "./project-details";
import { projectsData } from "@/content/projects";

/** All slugs are known at build time (static data), so every project page is prerendered. */
export function generateStaticParams() {
  return projectsData.map(({ slug }) => ({ slug }));
}

/**
 * Project detail page. Under cacheComponents + partial prefetching, URL data
 * (`params`) must not be awaited in the page itself — that ties the shared
 * App Shell to one URL and triggers the "URL data outside of Suspense"
 * insight. The shell (nav, back link, frame) renders instantly; the
 * params-dependent content streams in behind <Suspense>.
 */
export default function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
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

        <Suspense fallback={<ProjectDetailsSkeleton />}>
          <ProjectDetails params={params} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

/** Hairline placeholder shown while the URL-specific content streams in. */
function ProjectDetailsSkeleton() {
  return (
    <div className="mt-10 animate-pulse" aria-hidden>
      <div className="h-5 w-2/3 border border-border bg-card" />
      <div className="mt-6 h-9 w-1/2 border border-border bg-card" />
      <div className="mt-6 space-y-2">
        <div className="h-4 w-full border border-border bg-card" />
        <div className="h-4 w-5/6 border border-border bg-card" />
      </div>
      <div className="mt-12 aspect-video w-full border border-border bg-card" />
    </div>
  );
}

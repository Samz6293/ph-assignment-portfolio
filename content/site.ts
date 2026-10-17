import { experienceData } from "@/content/experience";
import { SectionEntry, SiteConfig } from "@/types";

export const siteData: SiteConfig = {
  title: "Sameer — Full Stack Developer",
  description:
    "Portfolio of Sameer, a full stack developer building modern, efficient and scalable web applications.",
  sections: [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ],
  resumeUrl: "/resume.pdf",
  copyrightYear: 2026,
};

/**
 * Sections that will actually render — e.g. Experience hides itself while
 * content/experience.ts is empty. Used for navbar links and numbering so no
 * dead anchors or numbering gaps appear.
 */
export function getVisibleSections(): SectionEntry[] {
  return siteData.sections.filter(
    (s) => s.id !== "experience" || experienceData.length > 0
  );
}

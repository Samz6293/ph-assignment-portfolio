export interface Project {
  slug: string;
  name: string;
  description: string;
  fullDescription: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  challenges: string[];
  futurePlans: string[];
}

export interface SkillCategory {
  /** Free-form category name — add new categories without touching types */
  category: string;
  skills: { name: string; /** lucide icon name or key in components/icons.tsx */ icon?: string }[];
}

export interface Experience {
  role: string;
  company: string;
  /** e.g. "2023 — Present" */
  period: string;
  summary: string;
  tech?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface Profile {
  name: string;
  designation: string;
  /** Path to the hero photo, e.g. "/images/profile.png" */
  photo: string;
  bio: string;
  /** Story paragraphs rendered under "The journey so far" in the About section */
  journey: string[];
  hobbies: string[];
  education: Education[];
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
    facebook?: string;
  };
  contact: {
    email: string;
    phone?: string;
    whatsapp?: string;
  };
}

/** Keys of the reorderable page sections (see content/site.ts) */
export type SectionKey =
  | "about"
  | "skills"
  | "education"
  | "experience"
  | "projects"
  | "contact";

export interface SectionEntry {
  id: SectionKey;
  /** Displayed in the navbar and as the section's numbered heading */
  label: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  /** Section order + navbar labels — reorder, rename or drop sections here */
  sections: SectionEntry[];
  /** View/download resume button in the hero (leave undefined until the PDF exists) */
  resumeUrl?: string;
  /** Hardcoded on purpose: new Date() is a build error under cacheComponents */
  copyrightYear: number;
}

import type { ComponentType } from "react";
import type { SectionKey } from "@/types";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";

/** Props every reorderable section receives (see app/page.tsx). */
export interface SectionProps {
  /** 1-based position in the page — rendered in the numbered heading */
  index: number;
  /** Section label from content/site.ts */
  label: string;
}

/**
 * Maps SectionKey → component. To add a new section:
 *   1. create components/sections/<name>.x with ({ index, label }: SectionProps)
 *   2. add the key to SectionKey in types/index.ts
 *   3. register it here and list it in content/site.ts `sections`
 */
export const sectionRegistry: Record<SectionKey, ComponentType<SectionProps>> = {
  about: About,
  skills: Skills,
  education: Education,
  experience: Experience,
  projects: Projects,
  contact: Contact,
};

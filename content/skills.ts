import { SkillCategory } from "@/types";

/**
 * `icon` keys map to icons in components/icons.tsx (skillIcons).
 * Unknown keys fall back to a neutral dot, so adding a skill never breaks the build.
 */
export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "next" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "HTML5 / CSS3", icon: "html" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "node" },
      { name: "Python", icon: "python" },
      { name: "Express", icon: "express" },
      { name: "SQLite", icon: "database" },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", icon: "git" },
      { name: "Linux / WSL2", icon: "terminal" },
      { name: "VS Code / Neovim", icon: "code" },
      { name: "Vercel / Netlify", icon: "deploy" },
    ],
  },
];

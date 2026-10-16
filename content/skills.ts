import { SkillCategory } from '@/types';

export const skillsData: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'HTML5/CSS3' }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js' },
      { name: 'Python' },
      { name: 'Express' },
      { name: 'SQLite' }
    ]
  },
  {
    category: 'Tools & Technologies',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'Linux / WSL2' },
      { name: 'VS Code / Neovim' },
      { name: 'Vercel / Netlify' }
    ]
  }
];
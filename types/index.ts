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
  category: 'Frontend' | 'Backend' | 'Tools & Technologies';
  skills: { name: string; icon?: string }[];
}

export interface Profile {
  name: string;
  designation: string;
  bio: string;
  journey: string;
  hobbies: string[];
  education: {
    degree: string;
    institution: string;
    year: string;
    details?: string;
  }[];
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
  resumeUrl?: string;
}
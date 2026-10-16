import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    slug: "expense-tracker",
    name: "Web Expense Tracker",
    description: "A simple web application to track daily expenses and visualize budget habits.",
    fullDescription: "A feature-rich web application built to help users seamlessly log, categorize, and track personal expenses over time.",
    image: "/images/project1.png",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/expense-tracker",
    challenges: [
      "Handling state management efficiently for dynamic transaction filters.",
      "Ensuring smooth UI transitions across mobile and desktop interfaces."
    ],
    futurePlans: [
      "Add charts for monthly spending visual analytics.",
      "Integrate local browser storage export options."
    ]
  },
  {
    slug: "password-manager",
    name: "CLI Password Manager",
    description: "A secure command-line tool for managing credentials with encryption.",
    fullDescription: "A security-focused CLI application designed to securely encrypt and store credentials.",
    image: "/images/project2.png",
    techStack: ["Python", "Cryptography", "SQLite"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/password-manager",
    challenges: [
      "Implementing safe key derivation and encryption routines.",
      "Designing an intuitive command-line interface."
    ],
    futurePlans: [
      "Add automated vault backup functionality.",
      "Support master password timeout triggers."
    ]
  },
  {
    slug: "player-directory",
    name: "Sports Directory Showcase",
    description: "An interactive directory web app highlighting sports team rosters and player stats.",
    fullDescription: "A modern web application showcasing team details, player stats, and positions in a clean responsive grid.",
    image: "/images/project3.png",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/player-directory",
    challenges: [
      "Structuring responsive image grids that render well across screens.",
      "Optimizing rendering performance during dataset filtering."
    ],
    futurePlans: [
      "Add real-time player statistics integration.",
      "Introduce bookmarking and search filters."
    ]
  }
];
export type SkillCategory = {
  category: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend & Databases",
    items: ["Supabase", "PostgreSQL", "PostGIS", "Database Design & Management"],
  },
  {
    category: "Development & Deployment",
    items: ["Git", "GitHub", "Vercel", "Claude Code"],
  },
  {
    category: "Data & Productivity",
    items: ["Microsoft Excel", "Google Sheets", "Microsoft Word", "Microsoft PowerPoint"],
  },
  {
    category: "Design & Media",
    items: ["Canva", "Adobe Premiere Pro", "CapCut"],
  },
];

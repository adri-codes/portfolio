export type ProjectLink = {
  label: string;
  href: string | null; // null = not public / not available, button is hidden
};

export type Project = {
  slug: string;
  name: string;
  role: string;
  tagline: string;
  overview: string;
  problem: string;
  solution: string;
  process: string;
  tech: string[];
  features: string[];
  links: ProjectLink[];
  featured: boolean;
};

export const featuredProjects: Project[] = [
  {
    slug: "upd-eats",
    name: "UPD Eats",
    role: "Full-Stack Developer",
    tagline:
      "A food discovery platform for UP Diliman students to explore campus food establishments, landmarks, and location-based information.",
    overview:
      "UPD Eats is a food discovery platform built for UP Diliman students — a campus where finding out what's open, what's good, and where it actually is tends to travel by word of mouth. It maps food establishments and landmarks around campus and layers in the social side: reviews, lists, and a personal meal diary.",
    problem:
      "There wasn't a good campus-specific way to discover food spots around UP Diliman. General map apps don't understand campus geography or student context, and information about new stalls, canteens, or hidden spots mostly spreads informally.",
    solution:
      "I built a geospatial web app on Next.js and Supabase/PostGIS that maps campus food establishments with location-aware search, and added the social layer — profiles, ratings, lists, and a meal diary — that gives students a reason to keep coming back and contributing.",
    process:
      "I developed UPD Eats end to end — schema design, geospatial queries, auth, and the frontend. I used Claude as an AI-assisted development tool throughout: for architecture planning, implementation, debugging, and iterating on features. The decisions and the code are mine; Claude was a tool in that process, not the author of it.",
    tech: [
      "Next.js 14",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "PostGIS",
      "Leaflet",
      "React-Leaflet",
      "Tailwind CSS",
      "Vercel",
    ],
    features: [
      "Food discovery across campus establishments",
      "Interactive campus map",
      "Geospatial search with PostGIS",
      "User authentication and profiles",
      "Ratings and reviews",
      "Personal meal diary",
      "Custom lists",
      "Social features",
    ],
    links: [
      { label: "GitHub", href: null },
      { label: "Live Demo", href: null },
    ],
    featured: true,
  },
  {
    slug: "tac-quotes",
    name: "TAC Quotes",
    role: "Full-Stack Developer",
    tagline:
      "A quotation management system built for Triple A & C Enterprise to create, manage, track, and retrieve client quotations.",
    overview:
      "TAC Quotes is a quotation management system I built for Triple A & C Enterprise, replacing a manual, spreadsheet-based quotation workflow with a centralized system for creating, tracking, and retrieving client quotes.",
    problem:
      "The company's quotations lived in loose spreadsheets — no central record, no validation on entries, and generating a client-ready PDF meant manually formatting each one. Retrieving a past quotation meant knowing which file it was in.",
    solution:
      "I built a centralized quotation system with authenticated access, structured data entry with validation, and one-click PDF generation, so quotations are created, searched, and retrieved from a single place instead of scattered spreadsheets.",
    process:
      "I planned, built, and iterated on TAC Quotes end to end, working directly with how the company actually prepares quotes. I used Claude as an AI-assisted development tool for planning, implementation, debugging, and iteration throughout.",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Zod",
      "React-PDF",
    ],
    features: [
      "Quotation creation and management",
      "Centralized database",
      "Authentication",
      "PDF quotation generation",
      "Input validation with Zod",
      "Search and retrieval",
    ],
    links: [
      { label: "GitHub", href: null },
      { label: "Live Demo", href: null },
    ],
    featured: true,
  },
];

export const otherProjects: Project[] = [
  {
    slug: "math-tutorial-website",
    name: "Mathematics Tutorial Website",
    role: "Designer & Builder",
    tagline:
      "A collaborative mathematics tutorial website organizing educational resources into an accessible online learning platform.",
    overview:
      "Designed and structured a collaborative mathematics tutorial website on Wix, organizing educational resources into a clear, navigable learning platform.",
    problem:
      "Educational resources for the tutorial group were scattered with no shared structure, making them hard to browse or hand off to students.",
    solution:
      "I designed the site structure and information hierarchy in Wix so the material reads as one coherent resource rather than a pile of separate files.",
    process:
      "Built and organized directly in Wix, focused on structuring content for clarity rather than custom code.",
    tech: ["Wix"],
    features: [
      "Organized educational resource structure",
      "Accessible navigation for students",
    ],
    links: [
      { label: "Visit Site", href: "https://11dprudence.wixsite.com/11dprudencebcal" },
    ],
    featured: false,
  },
  {
    slug: "price-list-database",
    name: "Price List Database",
    role: "Builder",
    tagline:
      "A centralized, structured reference database of company product pricing for quotation preparation and price verification.",
    overview:
      "Centralized Triple A & C Enterprise's product pricing into a structured, maintainable Excel reference database used for preparing quotations and verifying prices.",
    problem:
      "Pricing information was inconsistent across documents, making quotation preparation slower and more error-prone than it needed to be.",
    solution:
      "I built a structured Excel database as a single source of truth for pricing, used directly in quotation preparation and price verification.",
    process:
      "Built in Microsoft Excel, structured for easy maintenance and lookup by non-technical staff.",
    tech: ["Microsoft Excel"],
    features: [
      "Centralized pricing reference",
      "Structured for quotation preparation",
      "Used for price verification",
    ],
    links: [{ label: "GitHub", href: null }],
    featured: false,
  },
];

export const allProjects = [...featuredProjects, ...otherProjects];

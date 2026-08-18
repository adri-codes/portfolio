export type VideoLink = {
  label: string;
  href: string;
};

export type ExperienceEntry = {
  organization: string;
  role: string;
  period: string;
  responsibilities: string[];
  selectedWorks?: {
    event: string;
    videos: VideoLink[];
  }[];
};

export const experience: ExperienceEntry[] = [
  {
    organization: "Engineering Radio Guild — UP Diliman",
    role: "Multimedia / Video Editor",
    period: "January 2026 – Present",
    responsibilities: [
      "Produce and edit video content for organizational events, campaigns, and student-oriented media projects.",
      "Manage video editing from raw footage through final delivery.",
      "Collaborate with organization members on creative concepts and event-focused content.",
      "Work within production schedules and deadlines.",
    ],
    selectedWorks: [
      {
        event: "ERG Anniversary Event",
        videos: [
          { label: "Teaser", href: "https://www.facebook.com/reel/931902235927055" },
          { label: "Music Video", href: "https://www.facebook.com/reel/2407342063070482" },
          { label: "Same-Day Edit", href: "https://www.facebook.com/reel/26014136494945442" },
        ],
      },
      {
        event: "Chill Ikot 2026",
        videos: [
          { label: "Event Recap", href: "https://www.facebook.com/reel/2363117424429965" },
        ],
      },
    ],
  },
  {
    organization: "Nidec Control Techniques",
    role: "Intern",
    period: "Jun 2023 – Sep 2023",
    responsibilities: [
      "Met assigned Key Performance Areas and delivered research and reporting outputs on schedule.",
      "Managed, cleaned, and validated datasets in Google Sheets.",
      "Conducted client-specific research and synthesized findings into decision-ready insights.",
    ],
  },
  {
    organization: "Triple A & C Enterprise",
    role: "Executive Assistant",
    period: "Jan 2020 – Feb 2021",
    responsibilities: [
      "Prepared and validated client quotations.",
      "Verified pricing, specifications, and order details.",
      "Built and maintained a centralized database of historical quotations.",
      "Supported administrative and operational requirements.",
    ],
  },
];

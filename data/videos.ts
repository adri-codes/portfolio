export type VideoCard = {
  title: string;
  event: string;
  type: string;
  href: string;
  role?: string;
};

export const videos: VideoCard[] = [
  {
    title: "Noli Me Tangere",
    event: "OLFU Medical Technology Students",
    type: "Film Adaptation",
    href: "https://www.facebook.com/share/v/1976Gw26t5/",
    role: "Videographer & Editor",
  },
  {
    title: "ERG Anniversary Teaser",
    event: "Engineering Radio Guild Anniversary",
    type: "Teaser",
    href: "https://www.facebook.com/reel/931902235927055",
  },
  {
    title: "ERG Anniversary Music Video",
    event: "Engineering Radio Guild Anniversary",
    type: "Music Video",
    href: "https://www.facebook.com/reel/2407342063070482",
  },
  {
    title: "ERG Anniversary Same-Day Edit",
    event: "Engineering Radio Guild Anniversary",
    type: "Same-Day Edit",
    href: "https://www.facebook.com/reel/26014136494945442",
  },
  {
    title: "Chill Ikot 2026 Recap",
    event: "Chill Ikot 2026",
    type: "Event Recap",
    href: "https://www.facebook.com/reel/2363117424429965",
  },
];

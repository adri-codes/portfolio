export type DownloadableDocument = {
  label: string;
  description: string;
  href: string;
  fileLabel: string;
};

export const documents: DownloadableDocument[] = [
  {
    label: "Resume",
    description:
      "A traditional one-page resume covering experience, projects, and education.",
    href: "/documents/Adriane_Fernandez_Resume.pdf",
    fileLabel: "PDF",
  },
  {
    label: "Portfolio PDF",
    description:
      "A clickable portfolio summary with links to projects, video work, and this site.",
    href: "/documents/Adriane_Fernandez_Portfolio.pdf",
    fileLabel: "PDF",
  },
];

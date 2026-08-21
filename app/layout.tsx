import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { siteUrl } from "@/lib/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Adriane Fernandez — Computer Engineering Student & Developer";
const description =
  "Personal portfolio of Adriane Fernandez, a Computer Engineering student at UP Diliman specializing in full-stack development, data, and multimedia production.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Adriane Fernandez",
  },
  description,
  keywords: [
    "Adriane Fernandez",
    "Computer Engineering",
    "UP Diliman",
    "Full-Stack Developer",
    "Software Developer",
    "Video Editor",
    "Portfolio",
  ],
  authors: [{ name: "Adriane Fernandez" }],
  creator: "Adriane Fernandez",
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "Adriane Fernandez",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      document.documentElement.setAttribute("data-theme", stored);
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full bg-background text-foreground">
        <Nav />
        <div className="flex min-h-full flex-col lg:pl-64">
          {children}
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}

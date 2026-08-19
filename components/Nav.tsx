"use client";

import { useEffect, useState } from "react";
import {
  User,
  FolderGit2,
  Briefcase,
  Clapperboard,
  FileText,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Container } from "@/components/ui/Container";
import { PlaceholderLink } from "@/components/ui/PlaceholderLink";
import { profile } from "@/data/profile";

const links = [
  { label: "About", href: "#about", icon: User },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Creative", href: "#creative", icon: Clapperboard },
  { label: "Resume", href: "#resume", icon: FileText },
  { label: "Contact", href: "#contact", icon: Mail },
];

function useActiveSection() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Desktop: fixed left sidebar */}
      <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 flex-col border-r border-border bg-card lg:flex">
        <div className="px-5 pt-6 pb-5">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0c0a09] font-mono text-xs font-semibold text-[#2dd4bf]">
              AF
            </span>
            <span className="font-mono text-sm font-medium tracking-tight text-foreground">
              {profile.name}
            </span>
          </a>
          <div className="mt-3 flex items-center gap-1.5 font-mono text-[11px] tracking-wide text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Open to opportunities
          </div>
        </div>

        <nav
          className="flex-1 space-y-0.5 overflow-y-auto px-3"
          aria-label="Primary"
        >
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? "bg-accent-soft font-medium text-accent"
                    : "text-muted-foreground hover:bg-accent-soft/60 hover:text-foreground"
                }`}
              >
                <Icon size={16} className="shrink-0" />
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="space-y-4 border-t border-border px-5 py-5">
          <a
            href="#contact"
            className="block rounded-full bg-foreground px-4 py-2.5 text-center text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            Let&apos;s Connect
          </a>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <PlaceholderLink
                href={profile.github}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <GithubIcon size={16} />
              </PlaceholderLink>
              <PlaceholderLink
                href={profile.linkedin}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <LinkedinIcon size={16} />
              </PlaceholderLink>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </aside>

      {/* Mobile / tablet: top bar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 lg:hidden ${
          scrolled
            ? "border-b border-border bg-background/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <Container>
          <nav
            className="flex h-16 items-center justify-between"
            aria-label="Primary"
          >
            <a
              href="#top"
              className="font-mono text-sm font-medium tracking-tight text-foreground"
            >
              {profile.name}
            </a>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </Container>

        {open && (
          <div className="border-t border-border bg-background">
            <Container>
              <div className="flex flex-col gap-1 py-4">
                {links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-md px-2 py-3 text-base text-muted-foreground transition-colors hover:bg-accent-soft hover:text-foreground"
                    >
                      <Icon size={18} />
                      {link.label}
                    </a>
                  );
                })}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-full bg-foreground px-4 py-3 text-center text-sm font-medium text-background"
                >
                  Let&apos;s Connect
                </a>
              </div>
            </Container>
          </div>
        )}
      </header>
    </>
  );
}

import { Mail, Play } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PlaceholderLink } from "@/components/ui/PlaceholderLink";
import { TerminalCard } from "@/components/TerminalCard";
import { profile } from "@/data/profile";
import { isPlaceholder } from "@/lib/placeholder";

export function Hero() {
  const videoHref = isPlaceholder(profile.videoPortfolio)
    ? "#creative"
    : profile.videoPortfolio;

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_40%,transparent_100%)]"
      />
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-fade-up">
            <p className="font-mono text-xs tracking-widest text-accent uppercase">
              {profile.role}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
              {profile.heroHeading}
            </h1>
            <p className="mt-3 max-w-xl text-xl text-muted-foreground text-balance">
              {profile.heroSubheading}
            </p>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
              {profile.heroSupporting}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#projects" variant="primary">
                View My Work
              </Button>
              <Button href="#contact" variant="secondary">
                Get in Touch
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <PlaceholderLink
                href={profile.github}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <GithubIcon size={16} /> GitHub
              </PlaceholderLink>
              <PlaceholderLink
                href={profile.linkedin}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <LinkedinIcon size={16} /> LinkedIn
              </PlaceholderLink>
              <PlaceholderLink
                href={isPlaceholder(profile.email) ? null : `mailto:${profile.email}`}
                external={false}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <Mail size={16} /> Email
              </PlaceholderLink>
              <a
                href={videoHref}
                {...(videoHref?.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <Play size={16} /> Video Portfolio
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in">
            <TerminalCard />
          </div>
        </div>
      </Container>
    </section>
  );
}

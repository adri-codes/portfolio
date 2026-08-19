import { Mail, Play } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderLink } from "@/components/ui/PlaceholderLink";
import { profile } from "@/data/profile";
import { isPlaceholder } from "@/lib/placeholder";

export function Contact() {
  const videoHref = isPlaceholder(profile.videoPortfolio)
    ? "#creative"
    : profile.videoPortfolio;

  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <SectionHeading index="08" title="Contact" />

        <div className="rounded-xl border border-border bg-card px-6 py-14 text-center sm:px-12">
          <h3 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Let&apos;s build something.
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Whether you&apos;re looking for a developer, collaborator, video
            editor, or simply want to connect, I&apos;d be happy to hear from
            you.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PlaceholderLink
              href={isPlaceholder(profile.email) ? null : `mailto:${profile.email}`}
              external={false}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
              placeholderClassName="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"
            >
              <Mail size={16} /> Email Me
            </PlaceholderLink>
            <PlaceholderLink
              href={profile.github}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <GithubIcon size={16} /> GitHub
            </PlaceholderLink>
            <PlaceholderLink
              href={profile.linkedin}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <LinkedinIcon size={16} /> LinkedIn
            </PlaceholderLink>
            <a
              href={videoHref}
              {...(videoHref?.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Play size={16} /> Video Portfolio
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { PlaceholderLink } from "@/components/ui/PlaceholderLink";
import { profile } from "@/data/profile";
import { isPlaceholder } from "@/lib/placeholder";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <div>
            <p className="font-mono text-sm font-medium text-foreground">
              {profile.name}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Computer Engineering · Development · Creative Work
            </p>
          </div>

          <div className="flex items-center gap-4">
            <PlaceholderLink
              href={profile.github}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon size={18} />
            </PlaceholderLink>
            <PlaceholderLink
              href={profile.linkedin}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <LinkedinIcon size={18} />
            </PlaceholderLink>
            <PlaceholderLink
              href={isPlaceholder(profile.email) ? null : `mailto:${profile.email}`}
              external={false}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail size={18} />
            </PlaceholderLink>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted sm:text-left">
          © {year} {profile.name}
        </p>
      </Container>
    </footer>
  );
}

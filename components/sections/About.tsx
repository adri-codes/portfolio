import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="border-b border-border py-20 sm:py-28">
      <Container>
        <SectionHeading index="01" title="About" />
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            {profile.about.map((paragraph, i) => (
              <p key={i} className={i === 0 ? "text-foreground" : ""}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <p className="font-mono text-xs tracking-widest text-muted uppercase">
              Currently
            </p>
            <ul className="mt-4 space-y-3">
              {profile.currentlyExploring.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

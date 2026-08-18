import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="border-b border-border py-20 sm:py-28">
      <Container>
        <SectionHeading index="03" title="Experience" />

        <div className="divide-y divide-border border-t border-border">
          {experience.map((entry) => (
            <div
              key={entry.organization}
              className="grid gap-2 py-8 sm:grid-cols-[180px_1fr] sm:gap-8"
            >
              <p className="font-mono text-sm text-muted">{entry.period}</p>

              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {entry.role}
                </h3>
                <p className="mt-0.5 text-sm text-accent">
                  {entry.organization}
                </p>

                <ul className="mt-4 space-y-2">
                  {entry.responsibilities.map((r) => (
                    <li
                      key={r}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                      {r}
                    </li>
                  ))}
                </ul>

                {entry.selectedWorks && (
                  <div className="mt-5 space-y-4">
                    <p className="font-mono text-xs tracking-widest text-muted uppercase">
                      Selected Works
                    </p>
                    {entry.selectedWorks.map((work) => (
                      <div key={work.event}>
                        <p className="text-sm font-medium text-foreground">
                          {work.event}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {work.videos.map((video) => (
                            <a
                              key={video.href}
                              href={video.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                            >
                              {video.label}
                              <ArrowUpRight size={13} />
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

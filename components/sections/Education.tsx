import { GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="border-b border-border py-20 sm:py-28">
      <Container>
        <SectionHeading index="06" title="Education" />

        <div className="flex flex-col gap-6 rounded-xl border border-border bg-card p-6 sm:flex-row sm:items-start sm:p-8">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
            <GraduationCap size={20} />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              {education.school}
            </h3>
            <p className="mt-1 text-accent">{education.degree}</p>
            <p className="mt-1 font-mono text-sm text-muted">
              {education.expectedGraduation}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {education.areasOfStudy.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

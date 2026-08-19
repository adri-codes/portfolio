import { FileText, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { documents } from "@/data/documents";

export function Resume() {
  return (
    <section id="resume" className="border-b border-border py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="07"
          title="Resume & CV"
          description="Want to take this with you? Here's a traditional resume and a clickable portfolio summary."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {documents.map((doc) => (
            <a
              key={doc.href}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-sm"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                <FileText size={20} />
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-semibold text-foreground">
                    {doc.label}
                  </h3>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {doc.description}
                </p>
                <span className="mt-3 inline-block font-mono text-[11px] tracking-widest text-muted uppercase">
                  {doc.fileLabel}
                </span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

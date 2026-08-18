import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/ProjectVisual";

export function ProjectCard({
  project,
  onOpen,
  featured = false,
}: {
  project: Project;
  onOpen: () => void;
  featured?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 text-left transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-sm focus-visible:-translate-y-0.5"
    >
      <ProjectVisual
        name={project.name}
        className={featured ? "h-40 sm:h-48" : "h-28"}
      />

      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            {project.name}
          </h3>
          <p className="mt-0.5 text-sm text-accent">{project.role}</p>
        </div>
        <ArrowUpRight
          size={18}
          className="mt-1 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
        />
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {project.tagline}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.slice(0, featured ? 6 : 3).map((t) => (
          <span
            key={t}
            className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground"
          >
            {t}
          </span>
        ))}
        {project.tech.length > (featured ? 6 : 3) && (
          <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
            +{project.tech.length - (featured ? 6 : 3)}
          </span>
        )}
      </div>
    </button>
  );
}

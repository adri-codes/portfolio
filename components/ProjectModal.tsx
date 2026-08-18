"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/ProjectVisual";
import { PlaceholderLink } from "@/components/ui/PlaceholderLink";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/50 px-4 py-8 backdrop-blur-sm sm:py-16"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="w-full max-w-2xl rounded-xl border border-border bg-card p-6 shadow-lg animate-fade-up sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3
              id="project-modal-title"
              className="text-2xl font-semibold text-foreground"
            >
              {project.name}
            </h3>
            <p className="mt-1 text-sm text-accent">{project.role}</p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="shrink-0 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent-soft hover:text-foreground"
          >
            <X size={20} />
          </button>
        </div>

        <ProjectVisual
          name={project.name}
          cover={project.cover}
          className="mt-6 h-40"
        />

        <div className="mt-6 space-y-5">
          <div>
            <h4 className="font-mono text-xs tracking-widest text-muted uppercase">
              Overview
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.overview}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <h4 className="font-mono text-xs tracking-widest text-muted uppercase">
                Problem
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.problem}
              </p>
            </div>
            <div>
              <h4 className="font-mono text-xs tracking-widest text-muted uppercase">
                Solution
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.solution}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-widest text-muted uppercase">
              Key Features
            </h4>
            <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-widest text-muted uppercase">
              Development Process
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.process}
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-widest text-muted uppercase">
              Technologies
            </h4>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {project.links.filter((l) => l.href).length > 0 && (
            <div className="flex flex-wrap gap-3 pt-2">
              {project.links
                .filter((l) => l.href)
                .map((link) => (
                  <PlaceholderLink
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    {link.label}
                  </PlaceholderLink>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

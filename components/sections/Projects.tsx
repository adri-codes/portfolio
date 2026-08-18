"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { featuredProjects, otherProjects, Project } from "@/data/projects";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="border-b border-border py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="02"
          title="Selected Projects"
          description="A few things I've built end to end — from schema design to the interface people actually use."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              featured
              onOpen={() => setActive(project)}
            />
          ))}
        </div>

        <p className="mt-14 mb-6 font-mono text-xs tracking-widest text-muted uppercase">
          Also built
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {otherProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onOpen={() => setActive(project)}
            />
          ))}
        </div>
      </Container>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}

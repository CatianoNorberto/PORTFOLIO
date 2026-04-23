import type { Project } from "@/types/project";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      interactive
      className={cn(
        "flex h-full flex-col gap-6 p-6 sm:p-8",
        project.featured && "border-accent/25 bg-surface-strong"
      )}
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-cyan/20 bg-cyan-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
            {project.category}
          </span>
          {project.featured ? (
            <span className="rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Destaque
            </span>
          ) : null}
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-2xl font-semibold text-foreground">
            {project.name}
          </h3>
          <p className="text-sm leading-7 text-muted-foreground sm:text-base">
            {project.description}
          </p>
        </div>
      </div>

      <div className="rounded-3xl border border-line/70 bg-background/40 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Impacto
        </p>
        <p className="mt-2 text-sm leading-7 text-foreground">{project.impact}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-line bg-background/40 px-3 py-2 text-xs font-medium text-muted-foreground"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-3 pt-2">
        <Button href={project.demoUrl} size="sm">
          Ver demo
        </Button>
        <Button href={project.githubUrl} size="sm" variant="secondary">
          Ver GitHub
        </Button>
      </div>
    </Card>
  );
}

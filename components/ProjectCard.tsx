import Image from "next/image";
import { useTranslations } from "next-intl";
import type { Project } from "@/types/project";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const tProject = useTranslations("ProjectsData");
  const tCommon = useTranslations("Common");

  return (
    <Card
      interactive
      className={cn(
        "flex h-full flex-col gap-6 p-6 sm:p-8",
        project.featured && "border-accent/25 bg-surface-strong"
      )}
    >
      {project.mockupSrc ? (
        <div className="relative overflow-hidden rounded-[1.75rem] border border-line/70 bg-background/50 p-3">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(86,216,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,140,66,0.12),transparent_28%)]" />
          <Image
            src={project.mockupSrc}
            alt={tProject(`${project.id}.name`)}
            width={1200}
            height={760}
            className="relative w-full rounded-[1.1rem] border border-line/60"
          />
        </div>
      ) : null}

      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-cyan/20 bg-cyan-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
            {tProject(`${project.id}.category`)}
          </span>
          {project.featured ? (
            <span className="rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {tCommon("featured")}
            </span>
          ) : null}
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-2xl font-semibold text-foreground">
            {tProject(`${project.id}.name`)}
          </h3>
          <p className="text-sm leading-7 text-muted-foreground sm:text-base">
            {tProject(`${project.id}.description`)}
          </p>
        </div>
      </div>

      <div className="rounded-3xl border border-line/70 bg-background/40 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {tCommon("impact")}
        </p>
        <p className="mt-2 text-sm leading-7 text-foreground">
          {tProject(`${project.id}.impact`)}
        </p>
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
        {project.demoUrl ? <Button href={project.demoUrl} size="sm">Demo</Button> : null}
        {project.githubUrl ? (
          <Button href={project.githubUrl} size="sm" variant="secondary">
            GitHub
          </Button>
        ) : null}
        {!project.demoUrl && !project.githubUrl ? (
          <p className="w-full text-sm leading-7 text-muted-foreground">
            {tProject(`${project.id}.visibilityNote`)}
          </p>
        ) : null}
      </div>
    </Card>
  );
}

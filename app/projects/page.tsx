import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";
import { ProjectCard } from "@/components/ProjectCard";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = createPageMetadata({
  title: "Projetos",
  description:
    "Portfólio de projetos com foco em pagamentos, performance, SaaS e soluções full stack com impacto mensurável.",
  path: "/projects",
  keywords: ["projetos next.js", "portfolio full stack", "pagamentos"],
});

const projectPillars = [
  "Produtos financeiros e pagamentos",
  "Plataformas web com experiência interativa",
  "Projetos corporativos proprietários",
];

export default function ProjectsPage() {
  return (
    <Container className="section-spacing space-y-14">
      <SectionTitle
        eyebrow="Projetos"
        title="Soluções construídas para resolver problemas reais e mensuráveis."
        description="Cada projeto desta seleção foi pensado para destacar impacto de negócio, clareza de arquitetura e consistência de experiência do usuário."
      />

      <Card className="grid gap-6 p-6 sm:grid-cols-[1.15fr_0.85fr] sm:p-8">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
            Direção de portfólio
          </p>
          <h2 className="font-display text-3xl font-semibold text-foreground">
            Projetos que evidenciam profundidade técnica e leitura de produto.
          </h2>
          <p className="text-sm leading-7 text-muted-foreground sm:text-base">
            Aqui estão entregas baseadas na minha experiência profissional real.
            Parte desse trabalho foi construída em ambiente corporativo, então alguns
            projetos não possuem links públicos de demo ou repositório.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {projectPillars.map((pillar) => (
            <span
              key={pillar}
              className="inline-flex h-fit rounded-full border border-line bg-background/45 px-4 py-2 text-sm text-foreground"
            >
              {pillar}
            </span>
          ))}
        </div>
      </Card>

      <div className="grid gap-6 xl:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Container>
  );
}

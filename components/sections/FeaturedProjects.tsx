import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function FeaturedProjects() {
  return (
    <section className="section-spacing">
      <Container className="space-y-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            eyebrow="Projetos em destaque"
            title="Casos com impacto real em receita, operação e experiência."
            description="Selecionei projetos que mostram capacidade de execução ponta a ponta: UX, arquitetura, integrações críticas e leitura de indicadores para tomada de decisão."
          />
          <Button href="/projects" variant="secondary">
            Ver todos os projetos
          </Button>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

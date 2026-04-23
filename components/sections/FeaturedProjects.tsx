import { useTranslations } from "next-intl";
import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function FeaturedProjects() {
  const t = useTranslations("Home.featuredProjects");
  const tCommon = useTranslations("Common");

  return (
    <section className="section-spacing">
      <Container className="space-y-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
          <Button href="/projects" variant="secondary">
            {tCommon("viewAllProjects")}
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

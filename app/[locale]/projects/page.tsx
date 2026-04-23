import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";
import type { AppLocale } from "@/i18n/routing";
import { ProjectCard } from "@/components/ProjectCard";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

type ProjectsPageProps = PageProps<"/[locale]/projects">;

export async function generateMetadata({
  params,
}: ProjectsPageProps): Promise<Metadata> {
  const { locale } = await params;

  return createPageMetadata({
    locale: locale as AppLocale,
    pathname: "/projects",
    namespace: "Metadata.pages.projects",
  });
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;

  setRequestLocale(locale as AppLocale);

  const t = await getTranslations({ locale, namespace: "ProjectsPage" });

  return (
    <Container className="section-spacing space-y-14">
      <SectionTitle
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
      />

      <Card className="grid gap-6 p-6 sm:grid-cols-[1.15fr_0.85fr] sm:p-8">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
            {t("portfolioDirectionLabel")}
          </p>
          <h2 className="font-display text-3xl font-semibold text-foreground">
            {t("portfolioDirectionTitle")}
          </h2>
          <p className="text-sm leading-7 text-muted-foreground sm:text-base">
            {t("portfolioDirectionDescription")}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {(["finance", "interactive", "private"] as const).map((pillarKey) => (
            <span
              key={pillarKey}
              className="inline-flex h-fit rounded-full border border-line bg-background/45 px-4 py-2 text-sm text-foreground"
            >
              {t(`pillars.${pillarKey}`)}
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

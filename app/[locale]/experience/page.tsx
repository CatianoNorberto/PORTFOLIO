import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { experiences } from "@/data/experience";
import { createPageMetadata } from "@/lib/metadata";
import type { AppLocale } from "@/i18n/routing";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

type ExperiencePageProps = PageProps<"/[locale]/experience">;

export async function generateMetadata({
  params,
}: ExperiencePageProps): Promise<Metadata> {
  const { locale } = await params;

  return createPageMetadata({
    locale: locale as AppLocale,
    pathname: "/experience",
    namespace: "Metadata.pages.experience",
  });
}

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const { locale } = await params;

  setRequestLocale(locale as AppLocale);

  const [tPage, tExperience] = await Promise.all([
    getTranslations({ locale, namespace: "ExperiencePage" }),
    getTranslations({ locale, namespace: "ExperiencesData" }),
  ]);

  return (
    <Container className="section-spacing space-y-14">
      <SectionTitle
        eyebrow={tPage("hero.eyebrow")}
        title={tPage("hero.title")}
        description={tPage("hero.description")}
      />

      <div className="relative space-y-6 before:absolute before:bottom-0 before:left-5 before:top-0 before:w-px before:bg-line sm:before:left-7">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.period}`}
            className="relative pl-12 sm:pl-16"
          >
            <span className="absolute left-[0.65rem] top-9 h-3 w-3 rounded-full bg-accent shadow-[0_0_20px_rgba(255,140,66,0.6)] sm:left-[1.15rem]" />
            <Card className="p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
                    {experience.period}
                  </p>
                  <h2 className="font-display text-2xl font-semibold text-foreground">
                    {tExperience(`${experience.id}.role`)}
                  </h2>
                  <p className="text-base text-muted-foreground">{experience.company}</p>
                </div>

                <div className="space-y-5">
                  <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                    {tExperience(`${experience.id}.description`)}
                  </p>

                  <div className="space-y-3">
                    {experience.outcomeKeys.map((outcomeKey) => (
                      <div key={outcomeKey} className="flex gap-3">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan" />
                        <p className="text-sm leading-7 text-foreground">
                          {tExperience(`${experience.id}.outcomes.${outcomeKey}`)}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {experience.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-line bg-background/45 px-3 py-2 text-xs font-medium text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </article>
        ))}
      </div>
    </Container>
  );
}

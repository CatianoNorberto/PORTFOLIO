import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const achievementKeys = ["payments", "banking", "backend", "aws"] as const;

export function MainAchievements() {
  const t = useTranslations("Home.achievements");

  return (
    <section className="section-spacing pt-0">
      <Container className="space-y-14">
        <SectionTitle
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {achievementKeys.map((achievementKey) => (
            <Card key={achievementKey} interactive className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">
                {t(`items.${achievementKey}.metric`)}
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">
                {t(`items.${achievementKey}.title`)}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {t(`items.${achievementKey}.description`)}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

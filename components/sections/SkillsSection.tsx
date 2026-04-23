import { useTranslations } from "next-intl";
import { skillGroups } from "@/data/skills";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function SkillsSection() {
  const tHome = useTranslations("Home.skills");
  const tSkills = useTranslations("SkillsData");

  return (
    <section className="section-spacing">
      <Container className="space-y-14">
        <SectionTitle
          eyebrow={tHome("eyebrow")}
          title={tHome("title")}
          description={tHome("description")}
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <Card
              key={group.id}
              interactive
              className="flex h-full flex-col gap-5 p-6 animate-fade-up"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="space-y-3">
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {tSkills(`${group.id}.title`)}
                </h3>
                <p className="text-sm leading-7 text-muted-foreground">
                  {tSkills(`${group.id}.description`)}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-background/45 px-3 py-2 text-xs font-medium text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

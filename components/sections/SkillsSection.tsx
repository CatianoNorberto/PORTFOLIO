import { skillGroups } from "@/data/skills";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function SkillsSection() {
  return (
    <section className="section-spacing">
      <Container className="space-y-14">
        <SectionTitle
          eyebrow="Tecnologias"
          title="Stack completa para construir, evoluir e escalar produtos digitais."
          description="Combino front-end moderno, back-end robusto e visão de produto para entregar interfaces rápidas, integrações seguras e arquitetura sustentável."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <Card
              key={group.title}
              interactive
              className="flex h-full flex-col gap-5 p-6 animate-fade-up"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="space-y-3">
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {group.title}
                </h3>
                <p className="text-sm leading-7 text-muted-foreground">
                  {group.description}
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

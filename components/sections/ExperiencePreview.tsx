import { experiences } from "@/data/experience";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ExperiencePreview() {
  return (
    <section className="section-spacing">
      <Container className="space-y-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            eyebrow="Experiência"
            title="Trajetória construída em produtos de alta exigência técnica."
            description="Minha experiência combina ritmo de startup, consistência de produto B2B e responsabilidade sobre fluxos críticos como pagamentos, analytics e operações em tempo real."
          />
          <Button href="/experience" variant="secondary">
            Ver experiência completa
          </Button>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {experiences.slice(0, 2).map((experience) => (
            <Card key={`${experience.company}-${experience.period}`} className="p-6 sm:p-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">
                    {experience.period}
                  </p>
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    {experience.role}
                  </h3>
                  <p className="text-base text-muted-foreground">{experience.company}</p>
                </div>

                <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                  {experience.description}
                </p>

                <div className="space-y-3">
                  {experience.outcomes.map((outcome) => (
                    <div key={outcome} className="flex gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent" />
                      <p className="text-sm leading-7 text-foreground">{outcome}</p>
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
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

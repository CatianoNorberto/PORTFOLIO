import type { Metadata } from "next";
import { experiences } from "@/data/experience";
import { createPageMetadata } from "@/lib/metadata";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = createPageMetadata({
  title: "Experiência",
  description:
    "Experiência profissional em produtos digitais, plataformas de pagamento, dashboards SaaS e times orientados por performance.",
  path: "/experience",
  keywords: ["experiencia desenvolvedor full stack", "pagamentos", "node.js"],
});

export default function ExperiencePage() {
  return (
    <Container className="section-spacing space-y-14">
      <SectionTitle
        eyebrow="Experiência"
        title="Construindo software de alta responsabilidade em diferentes contextos de produto."
        description="Minha trajetória passa por fintech, SaaS e consultoria, sempre com atuação próxima de engenharia, design e negócio para transformar requisitos complexos em entregas consistentes."
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
                    {experience.role}
                  </h2>
                  <p className="text-base text-muted-foreground">{experience.company}</p>
                </div>

                <div className="space-y-5">
                  <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                    {experience.description}
                  </p>

                  <div className="space-y-3">
                    {experience.outcomes.map((outcome) => (
                      <div key={outcome} className="flex gap-3">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan" />
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
              </div>
            </Card>
          </article>
        ))}
      </div>
    </Container>
  );
}

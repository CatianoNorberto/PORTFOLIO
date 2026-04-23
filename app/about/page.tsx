import type { Metadata } from "next";
import Image from "next/image";
import { skillGroups } from "@/data/skills";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = createPageMetadata({
  title: "Sobre",
  description:
    "Conheça a trajetória, o foco técnico e a forma de trabalho por trás deste portfólio full stack.",
  path: "/about",
  keywords: ["sobre desenvolvedor full stack", "trajetoria profissional"],
});

export default function AboutPage() {
  return (
    <Container className="section-spacing space-y-20">
      <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-8">
          <SectionTitle
            eyebrow="Sobre mim"
            title="Experiência full stack aplicada a produtos web, mobile e cenários financeiros."
            description="Atuo do frontend ao backend em aplicações web e mobile, com foco em qualidade de código, performance, UX e boas práticas. Minha trajetória combina interfaces modernas, APIs robustas e evolução constante de produto."
          />

          <div className="grid gap-4 sm:grid-cols-3">
            {siteConfig.stats.map((stat) => (
              <Card key={stat.label} className="p-5">
                <p className="font-display text-3xl font-semibold text-foreground">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {stat.label}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <Card className="relative overflow-hidden p-6 sm:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,140,66,0.12),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(86,216,255,0.12),transparent_34%)]" />
          <div className="relative space-y-6">
            <Image
              src="/profile-workspace.svg"
              alt="Ilustração profissional representando desenvolvimento full stack"
              width={900}
              height={900}
              className="w-full"
            />
            <p className="text-sm leading-7 text-muted-foreground">
              {siteConfig.headline}
            </p>
          </div>
        </Card>
      </section>

      <section className="space-y-8">
        <SectionTitle
          eyebrow="Como eu trabalho"
          title="Princípios que guiam minhas decisões técnicas."
          description="Meu currículo mostra uma atuação prática em entregas reais. Estes são os pilares que mais se repetem no meu jeito de construir software."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {siteConfig.principles.map((principle, index) => (
            <Card key={principle} interactive className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">
                0{index + 1}
              </p>
              <p className="mt-4 text-base leading-8 text-foreground">{principle}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionTitle
          eyebrow="Stack em profundidade"
          title="Tecnologias e contextos em que atuo com mais recorrência."
          description="Minha atuação passa por frontend, mobile, backend, APIs, bancos de dados e cloud, sempre conectando implementação com boa experiência de uso."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <Card key={group.title} className="p-6">
              <h3 className="font-display text-2xl font-semibold text-foreground">
                {group.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {group.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
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
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
            Formação acadêmica
          </p>
          <div className="mt-5 space-y-4">
            {siteConfig.education.map((item) => (
              <div key={`${item.title}-${item.institution}`} className="space-y-1">
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.institution}</p>
                <p className="text-sm leading-7 text-foreground">{item.period}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
            Idiomas & Ferramentas
          </p>
          <div className="mt-5 space-y-6">
            <div>
              <p className="text-sm font-semibold text-foreground">Idiomas</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {siteConfig.languages.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-background/45 px-3 py-2 text-xs font-medium text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-foreground">Ferramentas</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {siteConfig.tooling.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-background/45 px-3 py-2 text-xs font-medium text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </section>
    </Container>
  );
}

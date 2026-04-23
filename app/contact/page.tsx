import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { ContactForm } from "@/components/ContactForm";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = createPageMetadata({
  title: "Contato",
  description:
    "Entre em contato para discutir oportunidades, projetos web e mobile, evolução de produto ou desafios técnicos.",
  path: "/contact",
  keywords: ["contato desenvolvedor full stack", "react native", "node.js"],
});

export default function ContactPage() {
  return (
    <Container className="section-spacing space-y-14">
      <SectionTitle
        eyebrow="Contato"
        title="Vamos falar sobre produto, arquitetura ou a próxima entrega importante do seu time."
        description="Se você busca apoio para estruturar um novo produto, elevar performance ou destravar uma iniciativa crítica, este é um bom ponto de partida."
      />

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-6">
          <Card className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
              Disponibilidade
            </p>
            <p className="mt-4 text-base leading-8 text-foreground">
              {siteConfig.availability}
            </p>
          </Card>

          <Card className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
              Email
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 block text-lg font-semibold text-foreground transition-colors duration-300 hover:text-accent"
            >
              {siteConfig.email}
            </a>
          </Card>

          <Card className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
              Telefone
            </p>
            <a
              href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
              className="mt-4 block text-lg font-semibold text-foreground transition-colors duration-300 hover:text-accent"
            >
              {siteConfig.phone}
            </a>
          </Card>

          <Card className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
              Presença digital
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {siteConfig.socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  className="rounded-full border border-line bg-background/45 px-4 py-2 text-sm font-medium text-foreground transition-colors duration-300 hover:border-cyan/30"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </Card>
        </div>

        <Card className="p-6 sm:p-8">
          <div className="mb-8 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Formulário de contato
            </p>
            <h2 className="font-display text-3xl font-semibold text-foreground">
              Me conte o contexto e a prioridade.
            </h2>
            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              O endpoint já está preparado via Route Handler em Next.js. Neste projeto,
              a resposta é mockada para facilitar evolução futura.
            </p>
          </div>

          <ContactForm />
        </Card>
      </div>
    </Container>
  );
}

import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

export function ContactCta() {
  return (
    <section className="section-spacing pt-8">
      <Container>
        <Card className="overflow-hidden p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-5">
              <span className="inline-flex rounded-full border border-accent/20 bg-accent-soft px-4 py-1 text-xs font-semibold uppercase tracking-[0.26em] text-accent">
                Vamos construir algo forte
              </span>
              <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Se você precisa elevar produto, performance ou confiabilidade,
                vamos conversar.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground">
                {siteConfig.availability} Posso colaborar em novos produtos,
                evolução de plataformas existentes ou iniciativas de modernização.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href="/contact" size="lg">
                Abrir contato
              </Button>
              <Button href={`mailto:${siteConfig.email}`} size="lg" variant="secondary">
                {siteConfig.email}
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}

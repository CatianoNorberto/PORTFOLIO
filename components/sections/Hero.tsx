import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { ProfilePhoto } from "@/components/ui/ProfilePhoto";

export function Hero() {
  const tHome = useTranslations("Home.hero");
  const tSite = useTranslations("Site");

  return (
    <section className="section-spacing pt-14 md:pt-20">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="flex flex-col gap-8 animate-fade-up">
          <span className="inline-flex w-fit items-center rounded-full border border-cyan/20 bg-cyan-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-cyan">
            {tHome("eyebrow")}
          </span>

          <div className="space-y-6">
            <h1 className="max-w-4xl font-display text-5xl font-semibold tracking-tight text-foreground sm:text-6xl xl:text-7xl">
              {tHome("title", { firstName: siteConfig.name.split(" ")[0] })}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              {tSite("heroDescription")}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/projects" size="lg">
              {tHome("projectsButton")}
            </Button>
            <Button href="/contact" size="lg" variant="secondary">
              {tHome("contactButton")}
            </Button>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            {siteConfig.focusAreaKeys.map((item) => (
              <span
                key={item}
                className="rounded-full border border-line bg-surface px-4 py-2"
              >
                {tSite(`focusAreas.${item}`)}
              </span>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {(["experience", "payments", "companies"] as const).map((statKey) => (
              <Card key={statKey} className="p-5">
                <p className="font-display text-3xl font-semibold text-foreground">
                  {tSite(`stats.${statKey}.value`)}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {tSite(`stats.${statKey}.label`)}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:120ms]">
          <Card className="relative overflow-hidden p-6 sm:p-8">
            <div className="grid-pattern absolute inset-0 opacity-25" />
            <div className="absolute -right-8 top-10 h-28 w-28 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -left-10 bottom-4 h-32 w-32 rounded-full bg-cyan/15 blur-3xl" />

            <div className="relative space-y-6">
              <ProfilePhoto
                alt={tHome("imageAlt")}
                priority
                className="mx-auto max-w-[34rem]"
              />

              <div className="flex items-center justify-between gap-4 rounded-3xl border border-line/70 bg-background/45 px-4 py-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {tHome("availabilityLabel")}
                  </p>
                  <p className="mt-1 text-sm text-foreground">{tSite("availability")}</p>
                </div>
                <span className="h-3 w-3 rounded-full bg-cyan shadow-[0_0_20px_rgba(86,216,255,0.8)]" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-line/70 bg-background/45 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {tHome("specialtiesLabel")}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-foreground">
                    {tSite("specialties")}
                  </p>
                </div>
                <div className="rounded-3xl border border-line/70 bg-background/45 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {tHome("currentFocusLabel")}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-foreground">
                    {tSite("currentFocus")}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}

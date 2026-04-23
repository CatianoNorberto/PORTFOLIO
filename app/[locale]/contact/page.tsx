import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import type { AppLocale } from "@/i18n/routing";
import { ContactForm } from "@/components/ContactForm";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

type ContactPageProps = PageProps<"/[locale]/contact">;

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;

  return createPageMetadata({
    locale: locale as AppLocale,
    pathname: "/contact",
    namespace: "Metadata.pages.contact",
  });
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;

  setRequestLocale(locale as AppLocale);

  const [tPage, tCommon, tSite] = await Promise.all([
    getTranslations({ locale, namespace: "ContactPage" }),
    getTranslations({ locale, namespace: "Common" }),
    getTranslations({ locale, namespace: "Site" }),
  ]);

  return (
    <Container className="section-spacing space-y-14">
      <SectionTitle
        eyebrow={tPage("hero.eyebrow")}
        title={tPage("hero.title")}
        description={tPage("hero.description")}
      />

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-6">
          <Card className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
              {tCommon("availability")}
            </p>
            <p className="mt-4 text-base leading-8 text-foreground">
              {tSite("availability")}
            </p>
          </Card>

          <Card className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
              {tCommon("email")}
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
              {tCommon("phoneWhatsapp")}
            </p>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-4 block text-lg font-semibold text-foreground transition-colors duration-300 hover:text-accent"
            >
              {siteConfig.phone}
            </a>
            <a
              href={`tel:+${siteConfig.phoneDigits}`}
              className="mt-2 inline-flex text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {tCommon("directCall")}
            </a>
          </Card>

          <Card className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
              {tCommon("digitalPresence")}
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
              {tCommon("contactForm")}
            </p>
            <h2 className="font-display text-3xl font-semibold text-foreground">
              {tPage("formTitle")}
            </h2>
            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              {tPage("formDescription")}
            </p>
          </div>

          <ContactForm />
        </Card>
      </div>
    </Container>
  );
}

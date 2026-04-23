import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { ContactCta } from "@/components/sections/ContactCta";
import { ExperiencePreview } from "@/components/sections/ExperiencePreview";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { createPageMetadata } from "@/lib/metadata";
import type { AppLocale } from "@/i18n/routing";

type HomePageProps = PageProps<"/[locale]">;

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;

  return createPageMetadata({
    locale: locale as AppLocale,
    pathname: "/",
    namespace: "Metadata.pages.home",
  });
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  setRequestLocale(locale as AppLocale);

  return (
    <>
      <Hero />
      <SkillsSection />
      <FeaturedProjects />
      <ExperiencePreview />
      <ContactCta />
    </>
  );
}

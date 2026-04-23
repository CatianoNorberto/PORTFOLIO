import { ContactCta } from "@/components/sections/ContactCta";
import { ExperiencePreview } from "@/components/sections/ExperiencePreview";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { SkillsSection } from "@/components/sections/SkillsSection";

export default function Home() {
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

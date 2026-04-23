import type { MetadataRoute } from "next";
import { routing, type AppLocale } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";

const routes = ["/", "/about", "/projects", "/experience", "/contact"] as const;

function localizedPathname(locale: AppLocale, pathname: string) {
  const cleanPathname = pathname === "/" ? "" : pathname;

  if (locale === routing.defaultLocale) {
    return cleanPathname || "/";
  }

  return `/${locale}${cleanPathname || ""}`;
}

function languageAlternates(pathname: (typeof routes)[number]) {
  return Object.fromEntries(
    routing.locales.map((locale) => [
      locale,
      `${siteConfig.url}${localizedPathname(locale, pathname)}`,
    ])
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) =>
    routing.locales.map((locale) => ({
      url: `${siteConfig.url}${localizedPathname(locale, route)}`,
      lastModified: new Date(),
      changeFrequency: route === "/" ? "weekly" : "monthly",
      priority: route === "/" ? 1 : 0.8,
      alternates: {
        languages: languageAlternates(route),
      },
    }))
  );
}

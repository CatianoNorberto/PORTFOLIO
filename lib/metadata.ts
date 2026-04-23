import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing, type AppLocale } from "@/i18n/routing";
import { defaultKeywords, siteConfig } from "@/lib/site";

const localeMap: Record<AppLocale, string> = {
  pt: "pt_BR",
  en: "en_US",
  es: "es_ES",
};

function localizedPathname(locale: AppLocale, pathname: string) {
  const cleanPathname = pathname === "/" ? "" : pathname;

  if (locale === routing.defaultLocale) {
    return cleanPathname || "/";
  }

  return `/${locale}${cleanPathname || ""}`;
}

function absoluteUrl(pathname: string) {
  return new URL(pathname, siteConfig.url).toString();
}

function languageAlternates(pathname: string) {
  return Object.fromEntries(
    routing.locales.map((locale) => [locale, localizedPathname(locale, pathname)])
  );
}

export async function createLocaleMetadata(
  locale: AppLocale
): Promise<Metadata> {
  const [siteT, metadataT] = await Promise.all([
    getTranslations({ locale, namespace: "Site" }),
    getTranslations({ locale, namespace: "Metadata" }),
  ]);

  const title = `${siteConfig.name} | ${siteT("role")}`;
  const canonical = localizedPathname(locale, "/");

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description: metadataT("layoutDescription"),
    applicationName: siteConfig.name,
    referrer: "origin-when-cross-origin",
    keywords: defaultKeywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "technology",
    alternates: {
      canonical,
      languages: languageAlternates("/"),
    },
    openGraph: {
      type: "website",
      locale: localeMap[locale],
      url: absoluteUrl(canonical),
      title,
      description: metadataT("layoutDescription"),
      siteName: siteConfig.name,
      images: [absoluteUrl("/opengraph-image")],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: metadataT("layoutDescription"),
      images: [absoluteUrl("/opengraph-image")],
    },
  };
}

type PageMetadataOptions = {
  locale: AppLocale;
  pathname: string;
  namespace: `Metadata.pages.${string}`;
};

export async function createPageMetadata({
  locale,
  pathname,
  namespace,
}: PageMetadataOptions): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace });
  const canonical = localizedPathname(locale, pathname);

  return {
    metadataBase: new URL(siteConfig.url),
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical,
      languages: languageAlternates(pathname),
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: localeMap[locale],
      url: absoluteUrl(canonical),
      siteName: siteConfig.name,
      images: [absoluteUrl("/opengraph-image")],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [absoluteUrl("/opengraph-image")],
    },
  };
}

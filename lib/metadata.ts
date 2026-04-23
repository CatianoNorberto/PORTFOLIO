import type { Metadata } from "next";
import { defaultKeywords, siteConfig } from "@/lib/site";

const defaultTitle = `${siteConfig.name} | ${siteConfig.role}`;

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  referrer: "origin-when-cross-origin",
  keywords: defaultKeywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    title: defaultTitle,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: siteConfig.description,
    creator: "@catianonorberto",
  },
  alternates: {
    canonical: "/",
  },
};

type CreatePageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: CreatePageMetadataOptions): Metadata {
  const url = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "pt_BR",
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@catianonorberto",
    },
  };
}

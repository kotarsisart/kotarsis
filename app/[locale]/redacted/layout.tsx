import { I18nProvider } from "@/data/I18nProvider";

import { 
  messages,
  type Locale 
} from "./data/messages";
import { ogLocales } from "@/data/seo/ogLocales";
import { createAlternates } from "@/data/seo/createAlternates";
import { createFaviconSet } from "@/data/seo/createFaviconSet";

import ProjectLayout from "@/components/layouts/ProjectLayout";

import ScrollRevealProvider from "@/utils/animations/ScrollRevealProvider";

import { Metadata } from "next";
import { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#0b297a",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const ogLocale =
    ogLocales[locale as keyof typeof ogLocales] ?? "en_US";

  const meta = messages[locale as Locale].meta;

  return {
    manifest: "/projects/redacted/webmanifest",

    title: meta.title,

    description: meta.description,

    keywords: meta.keywords,

    icons: createFaviconSet(
      "redacted"
    ),

    openGraph: {
      title: meta.title,
      description: meta.description,

      url: `https://kotarsis.com/${locale}/redacted`,

      siteName: meta.siteName,

      images: [
        {
          url: "https://kotarsis.com/projects/redacted/preview-2.jpg",
          width: 1200,
          height: 630,
          alt: meta.imgAlt,
        },
      ],

      locale: ogLocale,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",

      title: meta.title,

      description: meta.description,

      images: [
        "https://kotarsis.com/projects/redacted/preview-2.jpg",
      ],
    },

    alternates: createAlternates(
      locale,
      "/redacted"
    ),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <ProjectLayout
      locale={locale}
      messages={messages}
      withScrollReveal
    >
      {children}
    </ProjectLayout>
  );
}

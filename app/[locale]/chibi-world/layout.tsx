import { messages } from "./data/messages";
import { ogLocales } from "@/data/seo/ogLocales";
import { createAlternates } from "@/data/seo/createAlternates";
import { createFaviconSet } from "@/data/seo/createFaviconSet";

import ProjectLayout from "@/components/layouts/ProjectLayout";

import { Metadata } from "next";
import { Viewport } from "next";
import { projectLocale } from "@/data/projectLocale";

export const viewport: Viewport = {
  themeColor: "#0B0F1A",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: requestedLocale } = await params;

  const locale = projectLocale(
    requestedLocale,
    messages,
    "chibi-world",
  );

  const meta = messages[locale].meta;

  const ogLocale =
    ogLocales[locale as keyof typeof ogLocales] ?? "en_US";

  return {
    manifest: "/projects/chibi-world/webmanifest",

    title: meta.title,

    description: meta.description,

    keywords: meta.keywords,

    icons: createFaviconSet(
      "chibi-world"
    ),

    openGraph: {
      title: meta.title,
      description: meta.description,

      url: `https://kotarsis.com/${locale}/chibi-world`,

      siteName: meta.siteName,

      images: [
        {
          url: "https://kotarsis.com/projects/chibi-world/preview.jpg",
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
        "https://kotarsis.com/projects/chibi-world/preview.jpg",
      ],
    },

    alternates: createAlternates(
      locale,
      "/chibi-world"
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
  const { locale: requestedLocale } = await params;

  const locale = projectLocale(
    requestedLocale,
    messages,
    "chibi-world",
  );

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

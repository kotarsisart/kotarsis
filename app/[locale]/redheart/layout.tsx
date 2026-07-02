import { messages } from "./data/messages";
import { ogLocales } from "@/data/seo/ogLocales";
import { createAlternates } from "@/data/seo/createAlternates";
import { createFaviconSet } from "@/data/seo/createFaviconSet";

import ProjectLayout from "@/components/layouts/ProjectLayout";

import { Metadata } from "next";
import { Viewport } from "next";
import { projectLocale } from "@/data/projectLocale";

export const viewport: Viewport = {
  themeColor: "#8b0000",
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
    "redheart",
  );

  const meta = messages[locale].meta;

  const ogLocale =
    ogLocales[locale as keyof typeof ogLocales] ?? "en_US";

  return {
    manifest: "/projects/redheart/webmanifest",

    title: meta.title,

    description: meta.description,

    keywords: meta.keywords,

    icons: createFaviconSet(
      "redheart"
    ),

    openGraph: {
      title: meta.title,
      description: meta.description,

      url: `https://kotarsis.com/${locale}/redheart`,

      siteName: meta.siteName,

      images: [
        {
          url: "https://kotarsis.com/projects/redheart/preview-2.jpg",
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
        "https://kotarsis.com/projects/redheart/preview-2.jpg",
      ],
    },

    alternates: createAlternates(
      locale,
      "/redheart"
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
    "redheart",
  );

  return (
    <ProjectLayout
      locale={locale}
      messages={messages}
    >
      {children}
    </ProjectLayout>
  );
}

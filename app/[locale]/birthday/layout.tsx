import { messages } from "./data/messages";
import { ogLocales } from "@/data/seo/ogLocales";
import { createAlternates } from "@/data/seo/createAlternates";
import { createFaviconSet } from "@/data/seo/createFaviconSet";

import ProjectLayout from "@/components/layouts/ProjectLayout";

import { Metadata } from "next";
import { Viewport } from "next";
import { projectLocale } from "@/data/projectLocale";

export const viewport: Viewport = {
  themeColor: "#C6F3FF",
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
    "birthday",
  );

  const meta = messages[locale].meta;

  const ogLocale =
    ogLocales[locale as keyof typeof ogLocales] ?? "en_US";

  return {
    manifest: "/projects/birthday/webmanifest",

    title: meta.title,

    description: meta.description,

    keywords: meta.keywords,

    icons: createFaviconSet(
      "birthday"
    ),

    openGraph: {
      title: meta.title,
      description: meta.description,

      url: `https://kotarsis.com/${locale}/birthday`,

      siteName: meta.siteName,

      images: [
        {
          url: "https://kotarsis.com/projects/birthday/preview-2.jpg",
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
        "https://kotarsis.com/projects/birthday/preview-2.jpg",
      ],
    },

    alternates: createAlternates(
      locale,
      "/birthday"
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
    "birthday",
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

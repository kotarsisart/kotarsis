import { I18nProvider } from "@/data/I18nProvider";

import { 
  messages,
  type Locale 
} from "./data/messages";
import { ogLocales } from "@/data/seo/ogLocales";
import { createAlternates } from "@/data/seo/createAlternates";
import { createFaviconSet } from "@/data/seo/createFaviconSet";

import ProjectLayout from "@/components/layouts/ProjectLayout";

import { Metadata } from "next";
import { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#000000",
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
    manifest: "/projects/minimalism/webmanifest",

    title: meta.title,

    description: meta.description,

    keywords: meta.keywords,

    icons: createFaviconSet(
      "minimalism"
    ),

    openGraph: {
      title: meta.title,
      description: meta.description,

      url: `https://kotarsis.com/${locale}/minimalism`,

      siteName: meta.siteName,

      images: [
        {
          url: "https://kotarsis.com/projects/minimalism/preview-2.jpg",
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
        "https://kotarsis.com/projects/minimalism/preview-2.jpg",
      ],
    },

    alternates: createAlternates(
      locale,
      "/minimalism"
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
    >
      {children}
    </ProjectLayout>
  );
}

import { I18nProvider } from "@/data/I18nProvider";

import { 
  messages,
  type Locale 
} from "../../data/messages";
import { ogLocales } from "@/data/seo/ogLocales";
import { createAlternates } from "@/data/seo/createAlternates";

import { Metadata } from "next";
import { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#F6F4FF",
};

import ScrollRevealProvider from "@/utils/animations/ScrollRevealProvider";

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
    title: meta.title,

    description: meta.description,

    keywords: meta.keywords,
  
    openGraph: {
      title: meta.title,
      description: meta.description,

      url: `https://kotarsis.com/${locale}`,

      siteName: meta.siteName,

      images: [
        {
          url: "https://kotarsis.com/preview-2.jpg",
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
        "https://kotarsis.com/preview-2.jpg",
      ],
    },

    alternates: createAlternates(locale),
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
    <html lang={locale}>
      <body>
        <I18nProvider
          initialLocale={locale}
          messages={messages}
        >
          <ScrollRevealProvider />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}

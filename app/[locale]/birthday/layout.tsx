import { I18nProvider } from "@/data/I18nProvider";

import { 
  messages,
  type Locale 
} from "./data/messages";

import { Metadata } from "next";
import { Viewport } from "next";

import ScrollRevealProvider from "@/utils/animations/ScrollRevealProvider";

export const viewport: Viewport = {
  themeColor: "#C6F3FF",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const meta = messages[locale as Locale].meta;

  const ogLocales: Record<string, string> = {
    en: "en_US",
    ru: "ru_RU",
    pl: "pl_PL",
    uk: "uk_UA",
    be: "be_BY",
    cs: "cs_CZ",
    sk: "sk_SK",
    bg: "bg_BG",
    mk: "mk_MK",
    sr: "sr_RS",
    hr: "hr_HR",
    sl: "sl_SI",
  };

  const languages = Object.fromEntries(
    Object.keys(messages).map((lang) => [
      lang,
      `https://kotarsis.com/${lang}/birthday`,
    ])
  );

  return {
    manifest: "/projects/birthday/webmanifest",

    title: meta.title,

    description: meta.description,

    keywords: meta.keywords,

    icons: {
      icon: [
        {
          url: "/projects/birthday/favicon/favicon.svg",
          type: "image/svg+xml",
        },
        {
          url: "/projects/birthday/favicon/favicon.ico",
        },
        {
          url: "/projects/birthday/favicon/icon-16.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          url: "/projects/birthday/favicon/icon-32.png",
          sizes: "32x32",
          type: "image/png",
        },
      ],

      apple: [
        {
          url: "/projects/birthday/favicon/apple-touch-icon.png",
          sizes: "180x180",
        }
      ]
    },

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

      locale: ogLocales[locale] ?? "en_US",
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

    alternates: {
      canonical: `https://kotarsis.com/${locale}/birthday`,
      languages,
    },
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
    <I18nProvider
      initialLocale={locale}
      messages={messages}
    >
      <ScrollRevealProvider />
      {children}
    </I18nProvider>
  );
}

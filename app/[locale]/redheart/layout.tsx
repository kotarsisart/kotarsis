import { I18nProvider } from "@/data/I18nProvider";

import { 
  messages,
  type Locale 
} from "./data/messages";

import { Metadata } from "next";
import { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#8b0000",
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
      `https://kotarsis.com/${lang}/redheart`,
    ])
  );

  return {
    manifest: "/projects/redheart/webmanifest",

    title: meta.title,

    description: meta.description,

    keywords: meta.keywords,

    icons: {
      icon: [
        {
          url: "/projects/redheart/favicon/favicon.svg",
          type: "image/svg+xml",
        },
        {
          url: "/projects/redheart/favicon/favicon.ico",
        },
        {
          url: "/projects/redheart/favicon/icon-16.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          url: "/projects/redheart/favicon/icon-32.png",
          sizes: "32x32",
          type: "image/png",
        },
      ],

      apple: [
        {
          url: "/projects/redheart/favicon/apple-touch-icon.png",
          sizes: "180x180",
        }
      ]
    },

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

      locale: ogLocales[locale] ?? "en_US",
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

    alternates: {
      canonical: `https://kotarsis.com/${locale}/redheart`,
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
      {children}
    </I18nProvider>
  );
}

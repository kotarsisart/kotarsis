import "@fontsource-variable/manrope";
import "@fontsource-variable/inter";
import "@fontsource-variable/cinzel";
import "@fontsource/playfair-display-sc";
import "@fontsource-variable/exo-2";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource-variable/comfortaa";
import "@fontsource/great-vibes";
import "@fontsource/balsamiq-sans";
import "@fontsource-variable/roboto-slab";


import type { Metadata } from "next";
import { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#F6F4FF",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kotarsis.com"),

  title: "kotarsis — where thoughts become transparent",

  description:
    "A place where thoughts become clear as glass. Step inside and let the light pass through you — this is where your catharsis begins.",

  keywords:
    "kotarsis, catharsis, project hub, digital worlds, philosophy, transparency, glass, enlightenment, creative path, atmosphere, personal universe",

  icons: {
    icon: [
      {
        url: "/favicon/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon/favicon.ico",
      },
      {
        url: "/favicon/icon-16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon/icon-32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
      }
    ]
  },

  openGraph: {
    title: "kotarsis — where thoughts become transparent",

    description:
      "A place where thoughts become clear as glass. Step inside and let the light pass through you — this is where your catharsis begins.",

    url: "https://kotarsis.com",

    siteName: "kotarsis",

    images: [
      {
        url: "https://kotarsis.com/preview-2.jpg",
        width: 1200,
        height: 630,
        alt: "kotarsis preview image",
      },
    ],

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "kotarsis — where thoughts become transparent",

    description:
      "A place where thoughts become clear as glass. Step inside and let the light pass through you — this is where your catharsis begins.",

    images: [
      "https://kotarsis.com/preview-2.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

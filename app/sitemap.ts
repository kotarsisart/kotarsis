import { MetadataRoute } from "next";

const baseUrl = "https://kotarsis.com";

import { locales } from "@/data/locales";

const projects = [
  "",
  "oraculux",
  "concentrator",
  "minimalism",
  "redheart",
  "redacted",
  "censored",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date("2026-06-13");

  return locales.flatMap((locale) =>
    projects.map((project) => {
      const path = project ? `/${locale}/${project}` : `/${locale}`;

      const languages = Object.fromEntries(
        locales.map((lang) => [
          lang,
          project
            ? `${baseUrl}/${lang}/${project}`
            : `${baseUrl}/${lang}`,
        ])
      );

      return {
        url: `${baseUrl}${path}`,

        lastModified: today,

        changeFrequency: project ? "monthly" : "weekly",

        priority: project ? 0.8 : 1.0,

        alternates: {
          languages,
        },
      };
    })
  );
}

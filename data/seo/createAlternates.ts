import { messages } from "@/data/messages";

export function createAlternates(
  locale: string,
  path: string = ""
) {
  const languages = Object.fromEntries(
    Object.keys(messages).map((lang) => [
      lang,
      `https://kotarsis.com/${lang}${path}`,
    ])
  );

  return {
    canonical: `https://kotarsis.com/${locale}${path}`,

    languages: {
      ...languages,
      "x-default": `https://kotarsis.com/en${path}`,
    },
  };
}

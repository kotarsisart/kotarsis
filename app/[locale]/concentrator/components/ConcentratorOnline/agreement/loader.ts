
import type { AgreementSection } from "./types";

export type AgreementLocale = string;

type AgreementModule = Record<string, AgreementSection>;

const sectionCache = new Map<string, Promise<AgreementSection>>();
const documentCache = new Map<string, Promise<AgreementSection>>();

const DEFAULT_LOCALE = "ru";

/**
 * Loads a section from the requested locale.
 *
 * Expected structure:
 * locales/
 *   ru/
 *     section-01.ts
 *     section-02.ts
 *   en/
 *     section-01.ts
 *     section-02.ts
 */
async function importSection(
  locale: AgreementLocale,
  sectionNumber: number,
): Promise<AgreementSection> {
  const name = `section-${String(sectionNumber).padStart(2, "0")}`;

  const module: AgreementModule = await import(
    `./locales/${locale}/${name}`
  );

  const section = module[
    `section${String(sectionNumber).padStart(2, "0")}`
  ];

  if (!Array.isArray(section)) {
    throw new Error(
      `Invalid agreement section: ${locale}/${name}`,
    );
  }

  return section;
}

/**
 * Returns the requested locale.
 * Falls back to Russian when a locale cannot be loaded.
 */
export function resolveAgreementLocale(
  locale: string,
): AgreementLocale {
  return locale || DEFAULT_LOCALE;
}

/**
 * Loads one section and caches the result.
 * index is zero-based.
 */
export function loadAgreementSection(
  locale: AgreementLocale,
  index: number,
): Promise<AgreementSection> {
  const key = `${locale}:${index}`;

  const existing = sectionCache.get(key);
  if (existing) return existing;

  const pending = importSection(locale, index + 1)
    .catch(async (error: unknown) => {
      if (locale === DEFAULT_LOCALE) {
        throw error;
      }

      return loadAgreementSection(DEFAULT_LOCALE, index);
    })
    .catch((error: unknown) => {
      sectionCache.delete(key);
      throw error;
    });

  sectionCache.set(key, pending);

  return pending;
}

/**
 * Loads all consecutively numbered sections.
 *
 * Stops when the next section is missing.
 * Sections must start at 01 without gaps.
 */
export function loadPublishedAgreement(
  locale: AgreementLocale,
): Promise<AgreementSection> {
  const existing = documentCache.get(locale);
  if (existing) return existing;

  const pending = (async () => {
    const pages: AgreementSection = [];

    for (let index = 0; ; index++) {
      try {
        const section = await loadAgreementSection(locale, index);
        pages.push(...section);
      } catch (error) {
        if (index === 0) throw error;
        break;
      }
    }

    const ids = pages.map((page) => page.id);

    if (new Set(ids).size !== ids.length) {
      throw new Error("Duplicate agreement page IDs");
    }

    if (
      pages.some(
        (page) =>
          !page.id ||
          !page.title ||
          page.paragraphs.length === 0,
      )
    ) {
      throw new Error("Incomplete agreement page");
    }

    return pages;
  })().catch((error: unknown) => {
    documentCache.delete(locale);
    throw error;
  });

  documentCache.set(locale, pending);

  return pending;
}

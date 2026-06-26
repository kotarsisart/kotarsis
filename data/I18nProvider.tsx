"use client";

import {
  createContext,
  useContext,
  useEffect,
  type ReactNode,
} from "react";

/*
|--------------------------------------------------------------------------
| Context Contract
|--------------------------------------------------------------------------
|
| locale     → current language
| t()        → translation resolver
|
*/


type Messages = Record<Locale, Record<string, unknown>>;

export type Locale = string;

interface I18nContextType {
  locale: string;

  t: <T = string>(path: string) => T;
}

const I18nContext = createContext<I18nContextType | null>(null);

/*
|--------------------------------------------------------------------------
| Provider
|--------------------------------------------------------------------------
|
| Next.js provides locale through route:
|
| /en
| /ru
| /pl
|
| We no longer read:
|
| window.location
| localStorage (for initialization)
| history.pushState
|
| Routing is handled by Next Router.
|
*/

export function I18nProvider({
  children,
  initialLocale = "en",
  messages,
}: {
  children: ReactNode;
  initialLocale?: string;
  messages: Messages;
}) {

  /*
  |--------------------------------------------------------------------------
  | Locale Side Effects
  |--------------------------------------------------------------------------
  |
  | Sync locale with:
  |
  | - document.documentElement.lang
  | - localStorage cache
  |
  | URL remains the source of truth.
  |
  */

  useEffect(() => {
    document.documentElement.lang = initialLocale;

    document.cookie =
      `lang=${initialLocale}; Path=/; Max-Age=31536000`;
  }, [initialLocale]);

  /*
  |--------------------------------------------------------------------------
  | Translation Resolver
  |--------------------------------------------------------------------------
  |
  | Example:
  |
  | t("hero.title")
  |
  | Resolves:
  |
  | messages[initialLocale].hero.title
  |
  */

  const t = <T = string>(path: string): T => {
    const segments = path.split(".");

    let result: unknown = messages[initialLocale];

    for (const key of segments) {
      if (
        typeof result !== "object" ||
        result === null
      ) {
        result = undefined;
        break;
      }

      result = (result as Record<string, unknown>)[key];
    }

    if (result == null) {
      console.warn(
        `[i18n] Missing translation: ${path} (${initialLocale})`
      );

      return path as T;
    }

    return result as T;
  };

  const value = {
    locale: initialLocale,
    t,
  };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

/*
|--------------------------------------------------------------------------
| Hook
|--------------------------------------------------------------------------
|
| Provides access to:
|
| const { locale, t } = useI18n();
|
*/

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be inside <I18nProvider>");
  }

  return context;
}

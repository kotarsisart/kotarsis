"use client";

import {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
  type ReactNode,
} from "react";

/*
|--------------------------------------------------------------------------
| Context Contract
|--------------------------------------------------------------------------
|
| locale     → current language
| setLocale  → change current language
| t()        → translation resolver
|
*/


type Messages = Record<string, any>;

export type Locale = string;

interface I18nContextType {
  locale: string;
  setLocale: (locale: string) => void;

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
  | Locale State
  |--------------------------------------------------------------------------
  |
  | URL is the source of truth.
  |
  | This state exists only because some legacy components
  | still call setLocale() before route navigation occurs.
  |
  | In the future this state can be removed completely.
  |
  */

  const [locale, setLocaleState] =
    useState<string>(initialLocale);

  useEffect(() => {
    setLocaleState(initialLocale);
  }, [initialLocale]);
  /*
  |--------------------------------------------------------------------------
  | Sync HTML lang attribute
  |--------------------------------------------------------------------------
  |
  | <html lang="ru">
  | <html lang="en">
  |
  | Useful for:
  | - accessibility
  | - SEO
  | - screen readers
  |
  */


  /*
  |--------------------------------------------------------------------------
  | Locale Side Effects
  |--------------------------------------------------------------------------
  |
  | Sync current locale with:
  |
  | - document <html lang="">
  | - localStorage cache
  |
  | URL remains the primary source of truth.
  |
  */

  useEffect(() => {
    localStorage.setItem("lang", locale);
    document.documentElement.lang = locale;
  }, [locale]);


  /*
  |--------------------------------------------------------------------------
  | Locale Setter
  |--------------------------------------------------------------------------
  |
  | Legacy compatibility layer.
  |
  | Some UI components still call setLocale()
  | before performing route navigation.
  |
  */

  function setLocale(newLocale: string) {
    setLocaleState(newLocale);
  }

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
  | messages[locale].hero.title
  |
  */

  const t = useMemo(() => {
    return function <T = string>(path: string): T {
      const segments = path.split(".");

      let result: any = messages[locale];

      for (const key of segments) {
        result = result?.[key];
      }

      return (result ?? path) as T;
    };
  }, [locale]);

  return (
    <I18nContext.Provider
      value={{
        locale,
        setLocale,
        t,
      }}
    >
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
| const { locale, setLocale, t } = useI18n();
|
*/

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be inside <I18nProvider>");
  }

  return context;
}

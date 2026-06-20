import { useMemo } from "react";
import { useI18n } from "@/data/I18nProvider";
import { languages } from "@/data/languages";

import "./_header.scss";

import KotarsisLogo from "@/icons/KotarsisLogo";
import LangGlobe from "@/icons/LangGlobe";

interface HeaderProps {
  onOpenLanguages: () => void;
}

export default function Header({ onOpenLanguages }: HeaderProps) {
  const { locale, t } = useI18n();

  const currentLanguage = useMemo(() => {
    const normalized = locale.slice(0, 2);

    const lang =
      languages.find((l) => l.routeCode === locale) ||
      languages.find((l) => l.routeCode === normalized);

    return lang?.name ?? normalized.toUpperCase();
  }, [locale]);

  return (
    <header className="header">
      <div className="header__logo">

        <KotarsisLogo 
          className="header__logo-icon"
        />

        <p className="header__logo-name">
          {t("header.logo")}
        </p>

      </div>

      <button
        type="button"
        className="header__langs"
        aria-label={t("header.lang")}
        onClick={onOpenLanguages}
      >
        <span className="header__langs-text">
          {currentLanguage}
        </span>

        <LangGlobe
          className="header__langs-icon"
        />

      </button>
    </header>
  );
}

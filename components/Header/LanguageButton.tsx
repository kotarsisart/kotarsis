"use client";

import { useI18n } from "@/data/I18nProvider";
import { languages } from "@/data/languages";

import LangGlobe from "@/icons/LangGlobe";

interface LanguageButtonProps {
  onClick: () => void;
}

export default function LanguageButton({
  onClick,
}: LanguageButtonProps) {
  const { locale } = useI18n();

  const langObj = languages.find(
    (l) => l.routeCode === locale
  );

  return (
    <div
      className="header__langs"
      onClick={onClick}
    >
      <p className="header__langs-text">
        {langObj?.name ?? locale.toUpperCase()}
      </p>

      <LangGlobe
        className="header__langs-icon"
      />
    </div>
  );
}

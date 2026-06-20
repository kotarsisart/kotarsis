import { useI18n } from "@/data/I18nProvider";
import { languages } from "@/data/languages";

import './_header.scss';

import LogoSwitcher from "@/elements/LogoSwitcher/LogoSwitcher"

import CensoredLogo from "../../icons/CensoredLogo";
import KotarsisLogo from "@/icons/KotarsisLogo";

import LangGlobe from "@/icons/LangGlobe";

interface HeaderProps {
  onOpenLanguages: () => void;
}

export default function Header({ onOpenLanguages }: HeaderProps) {
  const { locale } = useI18n();

  // find correct lang object by locale
  const langObj = languages.find((l) => l.routeCode === locale);

  return (
    <header className="header">

      <a
        href="https://kotarsis.com"
        className="header-logo__link"
        rel="noopener noreferrer"
      >
        <LogoSwitcher
          className="header-logo"
          versions={[
            {
              icon: <CensoredLogo />,
              text: "Censored",
            },
            {
              icon: <KotarsisLogo />,
              text: "kotarsis",
            },
          ]}
        />
      </a>

      <div
        className="header__langs"
        onClick={onOpenLanguages}
      >
        <p className="header__langs-text">
          {langObj?.name ?? locale.toUpperCase()}
        </p>

        <LangGlobe
          className="header__langs-icon"
        />
      </div>

    </header>
  );
}

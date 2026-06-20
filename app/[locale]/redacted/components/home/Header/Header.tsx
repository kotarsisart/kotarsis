import { useI18n } from "@/data/I18nProvider";
import { languages } from "@/data/languages";

import "./_header.scss";
import LogoSwitcher from "./LogoSwitcher/LogoSwitcher";

import LangGlobe from "@/icons/LangGlobe";

interface HeaderProps {
  onOpenLanguages: () => void;
}

export default function Header({ onOpenLanguages }: HeaderProps) {
  const { locale, t } = useI18n();
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
          main={{
            short: "/projects/redacted/icons/header/redacted-header-short.svg",
            long: "/projects/redacted/icons/header/redacted-header-long.svg",
            alt: t("header.logo.projectAlt"),
          }}
          alt={{
            short: "/projects/redacted/icons/header/kotarsis-header-short.svg",
            long: "/projects/redacted/icons/header/kotarsis-header-long.svg",
            alt: t("header.logo.kotarsisAlt"),
          }}
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

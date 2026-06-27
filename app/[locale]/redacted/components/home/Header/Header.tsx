import "./_header.scss";

import LogoSwitcher from "./LogoSwitcher/LogoSwitcher";

import BaseHeader from "@/components/Header/BaseHeader";
import LanguageButton from "@/components/Header/LanguageButton";

import { useI18n } from "@/data/I18nProvider";

interface HeaderProps {
  onOpenLanguages: () => void;
}

export default function Header({
  onOpenLanguages,
}: HeaderProps) {
  const { t } = useI18n();

  const logo = (
    <a
      href="https://kotarsis.com"
      aria-label="Go to kotarsis homepage"
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
  );

  const actions = (
    <LanguageButton
      onClick={onOpenLanguages}
    />
  );

  return (
    <BaseHeader
      logo={logo}
      actions={actions}
    />
  );
}

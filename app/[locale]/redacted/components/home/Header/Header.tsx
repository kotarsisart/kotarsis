import "./_header-theme.scss";
import "@/components/Header/_base-header.scss"

import LogoSwitcher from "./LogoSwitcher/LogoSwitcher";

import BaseHeader from "@/components/Header/BaseHeader";
import LanguageButton from "@/components/Header/LanguageButton";

import { useI18n } from "@/data/I18nProvider";
import Link from "next/link";

interface HeaderProps {
  onOpenLanguages: () => void;
}

export default function Header({
  onOpenLanguages,
}: HeaderProps) {
  const { t } = useI18n();

  const logo = (
    <Link
      href="/"
      onClick={(event) => {
        event.preventDefault();
        window.location.assign("/");
      }}
      aria-label="Go to kotarsis homepage"
      className="header-logo__link"
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
    </Link>
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

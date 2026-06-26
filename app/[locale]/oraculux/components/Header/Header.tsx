"use client";

import "./_header.scss";

import LogoSwitcher from "@/elements/LogoSwitcher/LogoSwitcher";

import KotarsisLogo from "@/icons/KotarsisLogo";
import OraculuxLogo from "../../icons/OraculuxLogo";

import BaseHeader from "@/components/Header/BaseHeader";
import LanguageButton from "@/components/Header/LanguageButton";

interface HeaderProps {
  onOpenLanguages: () => void;
}

export default function Header({
  onOpenLanguages,
}: HeaderProps) {
  const logo = (
    <a
      href="https://kotarsis.com"
      className="header-logo__link"
      rel="noopener noreferrer"
    >
      <LogoSwitcher
        className="header-logo"
        versions={[
          {
            icon: <OraculuxLogo />,
            text: "Oraculux",
          },
          {
            icon: <KotarsisLogo />,
            text: "kotarsis",
          },
        ]}
      />
    </a>
  );

  return (
    <BaseHeader
      logo={logo}
      actions={
        <LanguageButton
          onClick={onOpenLanguages}
        />
      }
    />
  );
}

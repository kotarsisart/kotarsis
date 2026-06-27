import "./_header.scss";

import LogoSwitcher from "@/elements/LogoSwitcher/LogoSwitcher";

import KotarsisLogo from "@/icons/KotarsisLogo";
import MinimalismLogo from "../../icons/MinimalismLogo";

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
      aria-label="Go to kotarsis homepage"
      className="header-logo__link"
      rel="noopener noreferrer"
    >
      <LogoSwitcher
        className="header-logo"
        versions={[
          {
            icon: <MinimalismLogo />,
            text: "Minimalism",
          },
          {
            icon: <KotarsisLogo />,
            text: "kotarsis",
          },
        ]}
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

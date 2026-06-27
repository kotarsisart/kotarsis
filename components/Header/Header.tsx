import "./_header.scss";

import KotarsisLogo from "@/icons/KotarsisLogo";

import BaseHeader from "@/components/Header/BaseHeader";
import LanguageButton from "@/components/Header/LanguageButton";

interface HeaderProps {
  onOpenLanguages: () => void;
}

export default function Header({
  onOpenLanguages,
}: HeaderProps) {
  const logo = (
    <div className="header__logo">

      <KotarsisLogo 
        className="header__logo-icon"
      />

      <p className="header__logo-name">
        kotarsis
      </p>

    </div>
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

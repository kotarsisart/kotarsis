import "./_header-theme.scss";
import "@/components/Header/_base-header.scss"

import ProjectLogo from "@/components/Header/ProjectLogo";
import CensoredLogo from "../../icons/CensoredLogo";

import BaseHeader from "@/components/Header/BaseHeader";
import LanguageButton from "@/components/Header/LanguageButton";

interface HeaderProps {
  onOpenLanguages: () => void;
}

export default function Header({
  onOpenLanguages,
}: HeaderProps) {
  const logo = <ProjectLogo icon={<CensoredLogo />} name="Censored" />;

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

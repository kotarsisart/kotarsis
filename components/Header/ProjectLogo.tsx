import Link from "next/link";
import LogoSwitcher from "@/elements/LogoSwitcher/LogoSwitcher";
import KotarsisLogo from "@/icons/KotarsisLogo";

interface ProjectLogoProps {
  icon: React.ReactNode;
  name: string;
}

export default function ProjectLogo({
  icon,
  name,
}: ProjectLogoProps) {
  return (
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
        versions={[
          { icon, text: name },
          { icon: <KotarsisLogo />, text: "kotarsis"}
        ]}
      />
    </Link>
  );
};

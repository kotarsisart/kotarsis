import ProjectPreloader
  from "@/components/Preloader/ProjectPreloader";

import './_preloader-theme.scss'
import CensoredLogo from "../../icons/CensoredLogo";

export default function Preloader() {
  return (
    <ProjectPreloader
      projectName="Censored"
      projectIcon={<CensoredLogo />}
    />
  );
}

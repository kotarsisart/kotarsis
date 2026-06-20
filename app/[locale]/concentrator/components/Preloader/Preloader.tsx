import ProjectPreloader
  from "@/components/Preloader/ProjectPreloader";

import ConcentratorLogo
  from "../../icons/ConcentratorLogo";

import "./_preloader-theme.scss";

export default function Preloader() {
  return (
    <ProjectPreloader
      projectName="Concentrator™"
      projectIcon={<ConcentratorLogo />}
    />
  );
}
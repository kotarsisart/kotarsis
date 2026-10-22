import ProjectPreloader
  from "@/components/Preloader/ProjectPreloader";

import './_preloader-theme.scss'

import OpinionLogo from "../../../icons/OpinionLogo";

export default function Preloader() {
  return (
    <ProjectPreloader
      projectName="OPINION"
      projectIcon={<OpinionLogo />}
    />
  );
}

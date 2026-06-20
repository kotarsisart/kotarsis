import ProjectPreloader
  from "@/components/Preloader/ProjectPreloader";

import './_preloader-theme.scss'

import RedheartLogo from "../../icons/RedheartLogo";

export default function Preloader() {
  return (
    <ProjectPreloader
      projectName="Redheart"
      projectIcon={<RedheartLogo />}
    />
  );
}

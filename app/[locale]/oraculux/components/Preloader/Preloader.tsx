import ProjectPreloader
  from "@/components/Preloader/ProjectPreloader";

import './_preloader-theme.scss'

import OraculuxLogo from "../../icons/OraculuxLogo";

export default function Preloader() {
  return (
    <ProjectPreloader
      projectName="Oraculux"
      projectIcon={<OraculuxLogo />}
    />
  );
}

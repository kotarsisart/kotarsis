import ProjectPreloader
  from "@/components/Preloader/ProjectPreloader";

import './_preloader-theme.scss'

import PreloaderLogo from "../../icons/PreloaderLogo";
export default function Preloader() {
  return (
    <ProjectPreloader
      projectName=""
      projectIcon={<PreloaderLogo />}
    />
  );
}

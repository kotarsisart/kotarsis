import ProjectPreloader
  from "@/components/Preloader/ProjectPreloader";

import './_preloader-theme.scss'

import MinimalismLogo from "../../icons/MinimalismLogo";

export default function Preloader() {
  return (
    <ProjectPreloader
      projectName="Minimalism"
      projectIcon={<MinimalismLogo />}
    />
  );
}

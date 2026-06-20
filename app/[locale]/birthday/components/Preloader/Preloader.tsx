import ProjectPreloader
  from "@/components/Preloader/ProjectPreloader";

import './_preloader-theme.scss'

import BirthdayLogo from "../../icons/BirthdayLogo";

export default function Preloader() {
  return (
    <ProjectPreloader
      projectName="Birthday"
      projectIcon={<BirthdayLogo />}
    />
  );
}

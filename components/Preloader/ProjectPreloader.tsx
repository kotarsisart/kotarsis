"use client";

import KotarsisLogo from '@/icons/KotarsisLogo';

import BasePreloader from "./BasePreloader/BasePreloader";
import useTypewriter from "../../hooks/useTypeWriter";

import { ReactNode } from 'react';

import "./_project-preloader.scss";

interface ProjectPreloaderProps {
  projectName?: string;
  projectIcon: ReactNode;
  duration?: number;
}

export default function ProjectPreloader({
  projectName,
  projectIcon,
  duration = 2800,
}: ProjectPreloaderProps) {
  const typedProject = useTypewriter(
    projectName,
    {
      delay: 1500,
    }
  );

  return (
    <BasePreloader duration={duration}>
      <div className="preloader__content">

        <div className="preloader__kotarsis">

          <KotarsisLogo
            className="preloader__kotarsis-icon fade-up-1"
          />

          <p className="preloader__kotarsis-title fade-up-1">
            kotarsis
          </p>
        </div>

        <div className="preloader__divider" />

        <p className="preloader__presents fade-up-2">
          PRESENTS
        </p>

        <div className="preloader__project fade-up-3">
          <div 
            className="preloader__project-icon fade-up-4"
          >
            {projectIcon}
          </div>

          <p className="preloader__project-title fade-up-4">
            {typedProject}
          </p>
        </div>

      </div>
    </BasePreloader>
  );
}

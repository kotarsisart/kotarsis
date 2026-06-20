"use client";

import BasePreloader from "./BasePreloader";

import useTypewriter from "../../../hooks/useTypeWriter";

import '../_kotarsis-preloader.scss'

export default function KotarsisPreloader() {
  const typedCoffee = useTypewriter("cup of tea: fill", {
    delay: 1200,
    speed: 10,
    variance: 10
  });

  const typedNpm = useTypewriter("npm create kotarsis", {
    delay: 1600,
    speed: 10,
    variance: 10
  });

  const typedInit = useTypewriter("kotarsis --init", {
    delay: 2100,
    speed: 10,
    variance: 10
  });

  return (
    <BasePreloader duration={3000}>
      <div className="preloader__content">

        <div className="preloader__kotarsis">
          <p className="preloader__kotarsis-title fade-up-1">
            kotarsis
          </p>

          <div className="preloader__divider divider-grow" />
        </div>

        <div className="preloader__init">
          <p className="preloader__init-text">
            {typedCoffee}
          </p>

          <p className="preloader__init-text">
            {typedNpm}
          </p>

          <p className="preloader__init-text">
            {typedInit}
          </p>
        </div>

      </div>
    </BasePreloader>
  );
}

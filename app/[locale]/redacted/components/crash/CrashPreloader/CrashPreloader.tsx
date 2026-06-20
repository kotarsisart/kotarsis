"use client";

import { useEffect, useState } from "react";

import KotarsisLogo from "@/icons/KotarsisLogo";
import useTypewriter from "@/hooks/useTypeWriter";

import "./_crash-preloader.scss";

type Props = {
  onComplete: () => void;
};

type Phase =
  | "normal"
  | "invert"
  | "invert-final";

export default function CrashPreloader({
  onComplete,
}: Props) {
  const [phase, setPhase] =
    useState<Phase>("normal");

  const typedProject = useTypewriter(
    "Redacteeøπæ…¬eeeddddd œ∑®†¥¨ˆ˚∆©ƒ∂ß≈√∫˜µ≤≥«•§ªº≠∞",
    {
      delay: 1800,
      speed: 1,
      variance: 50,
    }
  );

  useEffect(() => {
    const t1 =
      setTimeout(
        () => setPhase("invert"),
        2000
      );

    const t2 =
      setTimeout(
        () => setPhase("normal"),
        2800
      );

    const t3 =
      setTimeout(
        () => setPhase("invert-final"),
        3000
      );

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  useEffect(() => {
    const finishTimer =
      setTimeout(() => {
        onComplete();
      }, 4200);

    return () =>
      clearTimeout(finishTimer);
  }, [onComplete]);

  return (
    <div
      className={`
        crash-preloader
        crash-preloader--${phase}
      `}
    >

      <div className="crash-preloader__kotarsis">
        <KotarsisLogo
          className="
            crash-preloader__kotarsis-icon

          "
        />

        <h1
          className="
            crash-preloader__kotarsis-title
            fade-up-1
          "
        >
          kotarsis
        </h1>
      </div>

      <div className="crash-preloader__divider" />

      <p
        className="
          crash-preloader__presents
          fade-up-2
        "
      >
        PRESENTS
      </p>

      <div
        className="
          crash-preloader__project
          fade-up-3
        "
      >
        <p
          className="
            crash-preloader__project-title
            fade-up-4
          "
        >
          {typedProject}
        </p>
      </div>

    </div>
  );
}

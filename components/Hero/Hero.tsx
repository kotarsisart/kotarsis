"use client"

import { useState } from "react";
import "./_hero.scss";
import { projects } from "./Projects/projects";
import ProjectCard from "./Projects/ProjectCard";
import { useI18n } from "@/data/I18nProvider";

import KotarsisLogo from "@/icons/KotarsisLogo";

export default function Hero() {
  const { t } = useI18n();

  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section className="hero">
      <div className="hero__brand">
        
        <KotarsisLogo 
          className="hero__brand-icon"
        />

        <h1 className="hero__brand-title">
          {t("hero.brand")}
        </h1>
      </div>

      <h2 className="hero__ideology">
        {t("hero.ideology.line1")}
        <br />
        {t("hero.ideology.line2")}
      </h2>

      <a
        className="hero__button"
        href="https://buymeacoffee.com/kotarsis"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("hero.button")}
      </a>

      <div className="hero__projects">
        {projects.map((p, index) => (
          <ProjectCard
            key={p.id}
            {...p}
            priority={index === 0}
            isActive={activeCard === p.id}
            onToggle={() =>
              setActiveCard((prev) =>
                prev === p.id ? null : p.id
              )
            }
          />
        ))}
      </div>
    </section>
  );
}

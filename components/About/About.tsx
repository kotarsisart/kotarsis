"use client"

import "./_about.scss";
import { useI18n } from "@/data/I18nProvider";

export default function About() {
  const { t } = useI18n();

  return (
    <section className="about">
      <h2 className="about__title fade-left delay-400">{t("about.title")}</h2>

      <p className="about__subline fade-right delay-1200">{t("about.subline")}</p>

      <p className="about__description fade-up delay-1800">
        {t("about.description")}
      </p>
    </section>
  );
}

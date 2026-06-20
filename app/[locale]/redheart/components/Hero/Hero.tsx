"use client"

import "./_hero.scss";
import { useI18n } from "@/data/I18nProvider";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="hero">
      <h1 className="hero__title">
        {t("hero.title")}
      </h1>
    </section>
  );
}

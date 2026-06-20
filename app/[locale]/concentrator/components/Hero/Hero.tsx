"use client";

import "./_hero.scss";

import { useState } from "react";
import Image from "next/image";

import BlockWrapper from "../../elements/BlockWrapper/BlockWrapper";
import { useI18n } from "@/data/I18nProvider";

export default function Hero() {
  const { t } = useI18n();

  const [isFocusing, setIsFocusing] =
    useState(false);

  const [isSynced, setIsSynced] =
    useState(false);

  const [isActivated, setIsActivated] =
    useState(false);

  const [counterValue, setCounterValue] =
    useState(12000);

  async function activateFocus() {
    if (isActivated || isFocusing) return;

    setIsFocusing(true);

    await new Promise((r) =>
      setTimeout(r, 1000)
    );

    await new Promise((r) =>
      setTimeout(r, 900)
    );

    setIsFocusing(false);

    await new Promise((r) =>
      setTimeout(r, 100)
    );

    setIsSynced(true);
    setIsActivated(true);

    setCounterValue((prev) => prev + 1);
  }

  return (
    <BlockWrapper>
      <section className="hero">

        <div
          className={`hero-overlay ${
            isFocusing
              ? "is-visible"
              : ""
          }`}
        />

        <div className="hero-left">

          <p className="hero-slogan">
            {t("hero.slogan")}
          </p>

          <h1 className="hero__title">
            {t("hero.title")}
          </h1>

          <p className="hero-outro">
            {t("hero.outro")}
          </p>

          <button
            onClick={activateFocus}
            disabled={isActivated}
            className={`hero-button ${
              isActivated
                ? "is-activated"
                : ""
            }`}
          >
            {isActivated
              ? t("hero.button.active")
              : t("hero.button.default")}
          </button>

          <p className="hero-counter">
            {t("hero.counter.label")}:
            {" "}
            <span>{counterValue}</span>
          </p>

          <p
            className={`hero-cognitive ${
              isSynced
                ? "is-visible"
                : ""
            }`}
          >
            {t("hero.cognitive")}
          </p>

        </div>

        <div className="hero-right">

          <Image
            src="/projects/concentrator/images/gallery/dark.jpg"
            alt={t("hero.image.alt")}
            width={800}
            height={800}
            loading="eager"
            className="hero-right__img"
          />

        </div>

      </section>
    </BlockWrapper>
  );
}

"use client"

import { useState } from "react";
import { useI18n } from "@/data/I18nProvider";

import "./_hero.scss";

import dynamic from "next/dynamic";

const HeroEye = dynamic(
  () => import("./animation/HeroEye"),
  {
    ssr: false,
  }
);

export default function Hero() {
  const { t } = useI18n();

  const [modal, setModal] = useState(false);
  const [closing, setClosing] = useState(false);

  /**
   * Handles modal closing with animation delay.
   * Keeps component mounted long enough for CSS transition to finish.
   */

  const closeModal = () => {
    setClosing(true);

    setTimeout(() => {
      setModal(false);
      setClosing(false);
    }, 350); // Must match CSS animation duration
  };

  return (
    <>
      {/* Modal is conditionally rendered to avoid unnecessary DOM presence */}
      {modal && (
        <div className={`oracle-modal ${closing ? "closing" : "open"}`}>
          <div className="oracle-modal__overlay" />

          <div className="oracle-modal__content">
            <p className="oracle-modal__content-text">
              {t("hero.modal.text")}
            </p>

            <a
              className="oracle-modal__button"
              href="https://t.me/The_Oraculux_bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("hero.modal.button")}
            </a>

            <p className="oracle-modal__close" onClick={closeModal}>
              ×
            </p>
          </div>
        </div>
      )}

      {/* Hero section with animated focal point (eye) */}
      <section className="hero" id="hero">

      <div className="hero__eye">
        <div className="hero__eye">
          <HeroEye />
        </div>
      </div>

        <h1 className="hero__title fade-up delay-1200">
          {t("hero.title")}
        </h1>

        <p className="hero__subline fade-up delay-1400">
          {t("hero.subline")}
        </p>

        <div className="fade-up delay-1600">
          {/* Opens modal instead of navigation to keep user in flow */}
          <button
            className="hero__button"
            onClick={() => setModal(true)}
          >
            {t("hero.button")}
          </button>
        </div>
      </section>
    </>
  );
}

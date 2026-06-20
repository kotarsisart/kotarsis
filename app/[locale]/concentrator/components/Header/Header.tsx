"use client";

import "./_header.scss";
import LogoSwitcher from "@/elements/LogoSwitcher/LogoSwitcher"

import Image from "next/image";
import LangGlobe from "@/icons/LangGlobe";
import { useEffect, useState } from "react";

import BlockWrapper from "../../elements/BlockWrapper/BlockWrapper";
import { useI18n } from "@/data/I18nProvider";
import { languages } from "@/data/languages";
import KotarsisLogo from "@/icons/KotarsisLogo";
import ConcentratorLogo from "../../icons/ConcentratorLogo";

interface HeaderProps {
  onOpenLanguages: () => void;
}

export default function Header({
  onOpenLanguages,
}: HeaderProps) {
  const { t, locale } = useI18n();

  const langObj = languages.find((l) => l.routeCode === locale);

  const [focusLevel, setFocusLevel] = useState(50);

  useEffect(() => {
    let lastScroll = 0;

    const increaseFocus = (amount = 0.5) => {
      setFocusLevel((prev) =>
        Math.min(100, prev + amount)
      );
    };

    const handleClick = () => {
      increaseFocus(0.5);
    };

    const handleHover = () => {
      increaseFocus(0.3);
    };

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      const diff = Math.abs(
        currentScroll - lastScroll
      );

      if (diff > 8) {
        increaseFocus(0.1);
      }

      lastScroll = currentScroll;
    };

    const observeHoverables = () => {
      const targets = document.querySelectorAll(
        "button, a, .hiw__steps-card, .benefits-card, .lang-select__item"
      );

      targets.forEach((el) => {
        el.addEventListener(
          "mouseenter",
          handleHover
        );
      });

      return targets;
    };

    window.addEventListener(
      "click",
      handleClick
    );

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    const targetsTimeout = setTimeout(
      observeHoverables,
      800
    );

    const decayInterval = setInterval(() => {
      setFocusLevel((prev) =>
        Math.max(0, prev - 0.012)
      );
    }, 100);

    return () => {
      window.removeEventListener(
        "click",
        handleClick
      );

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      clearInterval(decayInterval);
      clearTimeout(targetsTimeout);
    };
  }, []);

  return (
    <BlockWrapper>
      <header className="header">

        {/* Logo */}
        <div className="header-logo">

          <a
            href="https://kotarsis.com"
            className="header-logo__link"
          >
            <LogoSwitcher
              className="header-logo"
              versions={[
                {
                  icon: <ConcentratorLogo />,
                  text: "Concentrator™",
                },
                {
                  icon: <KotarsisLogo />,
                  text: "kotarsis",
                },
              ]}
            />
          </a>

        </div>

        <p className="header-slogan">
          {t("header.slogan")}
        </p>

        <div className="header-actions">

          <div
            className={`header-focus-bar ${
              focusLevel >= 100
                ? "header-focus-bar--max"
                : ""
            }`}
          >
            <Image
              src="/projects/concentrator/images/section-icons/header/brain.svg"
              alt={t("header.focus.label")}
              width={32}
              height={32}
              className="header-focus-bar__icon"
            />

            <span>
              {t("header.focus.label")}
            </span>

            <span className="header-focus-bar__percent">
              {focusLevel.toFixed(0)}%
            </span>

            <div className="header-focus-bar__progress">

              <div
                className="header-focus-bar__progress-fill"
                style={{
                  width: `${focusLevel}%`,
                }}
              />

            </div>

          </div>

          <div
            className="header__langs"
            onClick={onOpenLanguages}
          >
            <p className="header__langs-text">
              {langObj?.name ?? locale.toUpperCase()}
            </p>

            <LangGlobe
              className="header__langs-icon"
            />
          </div>

        </div>

      </header>

    </BlockWrapper>
  );
}

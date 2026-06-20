"use client"

import { useI18n } from "@/data/I18nProvider";
import { languages } from "@/data/languages";
import { useState, useEffect } from "react";

import LangGlobe from "@/icons/LangGlobe";

import "./_header.scss";
import LogoSwitcher from "@/elements/LogoSwitcher/LogoSwitcher"

import KotarsisLogo from "@/icons/KotarsisLogo";
import RedheartLogo from "../../icons/RedheartLogo";

interface HeaderProps {
  onOpenLanguages: () => void;
}

/**
 * Controls global font size for "reasons" section.
 * Persists user preference in localStorage and applies it via CSS variable.
 * Also toggles a class on <html> to enable custom font mode.
 */
function useFontSizeControl() {
  const MIN = 12;
  const MAX = 40;

  const [fontSize, setFontSize] = useState<number | null>(null);

  // Restore saved font size from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("reasons-font-size");

    if (saved) {
      const size = parseInt(saved);

      document.documentElement.classList.add("font-custom");
      document.documentElement.style.setProperty(
        "--reasons-font-size",
        `${size}px`
      );

      setFontSize(size);
    }
  }, []);

  // Calculate new font size with clamping between MIN and MAX
  const changeSize = (delta: number) => {
    const current =
      fontSize ??
      parseInt(
        getComputedStyle(document.documentElement)
          .getPropertyValue("--reasons-font-size")
      );

    const newSize = Math.min(MAX, Math.max(MIN, current + delta));

    document.documentElement.classList.add("font-custom");
    document.documentElement.style.setProperty(
      "--reasons-font-size",
      `${newSize}px`
    );

    localStorage.setItem("reasons-font-size", newSize.toString());
    setFontSize(newSize);
  };

  // Reset font size to default by removing custom CSS variable and class
  const reset = () => {
    document.documentElement.classList.remove("font-custom");
    document.documentElement.style.removeProperty("--reasons-font-size");
    localStorage.removeItem("reasons-font-size");
    setFontSize(null);
  };

  return { changeSize, reset, isCustom: fontSize !== null };
}

export default function Header({ onOpenLanguages }: HeaderProps) {
  const { locale } = useI18n();
  const { changeSize, reset, isCustom } = useFontSizeControl();

  const langObj = languages.find((l) => l.routeCode === locale);

  return (
    <header className="header">
      <a
        href="https://kotarsis.com"
        className="header-logo__link"
        rel="noopener noreferrer"
      >
        {/* Switches between Redheart and kotarsis branding dynamically */}
        <LogoSwitcher
          className="header-logo"
          versions={[
            {
              icon: <RedheartLogo />,
              text: "Redheart",
            },
            {
              icon: <KotarsisLogo />,
              text: "kotarsis",
            },
          ]}
        />
      </a>

      <div className="header__font-controls">
        <button
          onClick={() => changeSize(-2)}
          className="header__font-control"
        >
          A−
        </button>

        <button
          onClick={() => changeSize(2)}
          className="header__font-control"
        >
          A+
        </button>

        <button
          onClick={reset}
          className={`header__font-control header__font-auto ${
            isCustom ? "is-visible" : ""
          }`}
        >
          Auto
        </button>
      </div>

      {/* Displays current language and opens language selection modal */}
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

    </header>
  );
}

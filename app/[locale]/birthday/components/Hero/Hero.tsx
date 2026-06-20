"use client"

import "./_hero.scss";
import { useI18n } from "@/data/I18nProvider";

import Image from "next/image";

import confetti from "canvas-confetti";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

export default function Hero() {
  const { t } = useI18n();
  const params = useSearchParams();

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const name = params.get("name") || "";
  const from = params.get("from") || "";
  const message = params.get("message") || "";

  const safeFrom = from || t("hero.defaultFrom");
  const safeMessage = message || t("hero.defaultMessage");

  useEffect(() => {
    if (!canvasRef.current) return;

    const isMobile = window.innerWidth < 768;
    const scale = isMobile ? 0.3 : 1;

    const myConfetti = confetti.create(canvasRef.current, {
      resize: true,
      useWorker: true,
    });

    const colors = [
      "#FF1A63",
      "#28B4FF",
      "#FF1F23",
      "#FFE711",
      "#00FFD0",
      "#7B00FF",
    ];

    myConfetti({
      particleCount: 280 * scale,
      spread: isMobile ? 90 : 140,
      startVelocity: 70 * scale,
      scalar: isMobile ? 0.7 : 1,
      gravity: 0.9,
      ticks: 200,
      origin: { y: isMobile ? 0.5 : 0.6 },
      colors,
    });

    const secondExplosion = setTimeout(() => {
      myConfetti({
        particleCount: 150 * scale,
        spread: isMobile ? 80 : 120,
        startVelocity: 40 * scale,
        scalar: isMobile ? 0.7 : 1.1,
        gravity: 0.8,
        origin: { y: isMobile ? 0.4 : 0.5 },
        colors,
      });
    }, 400);

    const duration = isMobile ? 1200 : 2000;
    const end = Date.now() + duration;

    const frame = () => {
      myConfetti({
        particleCount: 5 * scale,
        angle: 30,
        spread: 100,
        startVelocity: 30 * scale,
        gravity: 1,
        scalar: isMobile ? 0.3 : 0.5,
        origin: { x: 0 },
        colors,
      });

      myConfetti({
        particleCount: 5 * scale,
        angle: 150,
        spread: 100,
        startVelocity: 30 * scale,
        gravity: 1,
        scalar: isMobile ? 0.3 : 0.5,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();

    const rainInterval = isMobile ? 500 : 300;

    const rain = setInterval(() => {
      myConfetti({
        particleCount: 8 * scale,
        startVelocity: 20 * scale,
        spread: 360,
        ticks: 120,
        gravity: 0.6,
        scalar: isMobile ? 0.7 : 0.8,
        origin: {
          x: Math.random(),
          y: -0.1,
        },
        colors,
      });
    }, rainInterval);

    const stopRain = setTimeout(
      () => clearInterval(rain),
      isMobile ? 3000 : 4000
    );

    const clickHandler = () => {
      myConfetti({
        particleCount: 120 * scale,
        spread: 110,
        startVelocity: 35 * scale,
        origin: { y: 0.7 },
        colors,
      });
    };

    document.addEventListener("click", clickHandler);

    return () => {
      clearTimeout(secondExplosion);
      clearTimeout(stopRain);
      clearInterval(rain);
      document.removeEventListener("click", clickHandler);
    };
  }, []);

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="confetti-canvas" />

      <div className="hero__title-container">
        <Image
          src="/projects/birthday/icons/hero/celebration.svg"
          alt={t("hero.altCelebratingIcon")}
          width={80}
          height={80}
          className="hero__icon"
        />

        <h1 className="hero__title zoom-in">
          {name
            ? `${t("hero.title")}, ${name}!`
            : t("hero.title")}
        </h1>
      </div>

      <p className="hero__subline zoom-out delay-600">
        {t("hero.subtitle")}
      </p>

      {from && (
        <p className="hero__sender fade-down delay-1000">
          {t("hero.from").replace("{{name}}", safeFrom)}
        </p>
      )}

      <div className="zoom-in delay-2000">
        <div className="hero__message">
          <p className="hero__message-title">
            {t("hero.messageTitle").replace("{{name}}", safeFrom)}
          </p>

          <p className="hero__message-text">
            {safeMessage}
          </p>
        </div>
      </div>
    </section>
  );
}

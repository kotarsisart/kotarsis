"use client";

import "./_availability.scss";

import { useState } from "react";
import Image from "next/image";

import { useI18n } from "@/data/I18nProvider";

import BlockWrapper from "../../elements/BlockWrapper/BlockWrapper";
import Timer from "./Timer";

import useTypeWriterReveal from "@/utils/animations/useTypeWriterReveal";
import useTypewriter from "@/hooks/useTypeWriter";

export default function Availability() {
  const { t } = useI18n();

    const {
      ref,
      visible,
    } = useTypeWriterReveal();
  
    const typedTimer = useTypewriter(
      t("availability.timer.label"),
      {
        delay: 400,
        speed: 35,
        variance: 60,
      },
      visible
    );

  const totalDevices = 20;

  const [devicesLeft, setDevicesLeft] = useState(2);

  const [messageMode, setMessageMode] =
    useState<"normal" | "unavailable">("normal");

  const progress =
    (devicesLeft / totalDevices) * 100;

  const buttonText =
    devicesLeft > 0
      ? t("availability.buttons.try")
      : t("availability.buttons.soldout");

  const messageText =
    messageMode === "normal"
      ? t("availability.messages.normal")
      : t("availability.messages.unavailable");

  function handleBuy() {
    if (devicesLeft > 0) {
      setDevicesLeft((prev) => prev - 1);
    } else {
      setMessageMode("unavailable");
    }
  }

  return (
    <BlockWrapper>
      <section className="availability">

        {/* Promotion Top */}
        <div className="availability__promotion promotion--up">
          <p
            className="availability__promotion-text is-up"
            data-text={t("availability.promotions.up")}
          >
            {t("availability.promotions.up")}
          </p>
        </div>

        {/* Central Section */}
        <div className="availability__central">

          <div className="availability__central-content">

            <h2 className="availability__title fade-left delay-400">
              {t("availability.title.part1")}
              
              {" "}
              
              <span>{devicesLeft}</span>
              
              {" "}{t("availability.title.part2")}{" "}

              {totalDevices}
            </h2>

            <div className="availability__progress">
              <div
                className="availability__progress-fill"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            <div  ref={ref} className="availability__timer">

              <p className="availability__label">
                {typedTimer}
              </p>

              <Timer
                seconds={3600}
              />

            </div>

            <button
              className={`
                availability__button
                ${devicesLeft === 0 ? "is-soldout" : ""}
              `}
              onClick={handleBuy}
            >
              {buttonText}
            </button>

            <div
              className={`
                availability__message
                ${messageMode === "unavailable"
                  ? "is-unavailable"
                  : ""}
              `}
            >
              <p className="availability__message-text">
                {messageText}
              </p>
            </div>

          </div>

          <div className="availability__image-container fade-up">

            <Image
              src="/projects/concentrator/images/gallery/equipment.jpg"
              alt={t("availability.image.alt")}
              width={1200}
              height={1200}
              className="availability__img"
            />

          </div>

        </div>

        {/* Promotion Bottom */}
        <div className="availability__promotion promotion--down">
          <p
            className="availability__promotion-text is-down"
            data-text={t("availability.promotions.down")}
          >
            {t("availability.promotions.down")}
          </p>
        </div>

      </section>
    </BlockWrapper>
  );
}

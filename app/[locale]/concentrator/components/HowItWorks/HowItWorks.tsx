"use client";

import "./_hiw.scss";

import Image from "next/image";
import { Fragment } from "react/jsx-runtime";
import BlockWrapper from "../../elements/BlockWrapper/BlockWrapper";
import { useI18n } from "@/data/I18nProvider";

export default function HowItWorks() {
  const { t } = useI18n();

  const steps = [
    {
      icon: "/projects/concentrator/images/section-icons/hiw/laptop.svg",
      alt: t("hiw.steps.laptop.alt"),
      text: t("hiw.steps.laptop.text"),
    },
    {
      icon: "/projects/concentrator/images/section-icons/hiw/power-off.svg",
      alt: t("hiw.steps.off.alt"),
      text: t("hiw.steps.off.text"),
    },
    {
      icon: "/projects/concentrator/images/section-icons/hiw/flame.svg",
      alt: t("hiw.steps.flame.alt"),
      text: t("hiw.steps.flame.text"),
    },
  ];

  return (
    <BlockWrapper>
      <section
        className="hiw"
        id="hiw"
      >
        <h2 className="hiw__title fade-up delay-300">
          {t("hiw.title")}
        </h2>

        <div className="hiw__steps">

          {steps.map((step, i) => (
            <Fragment key={i}>

              <div className={`fade-up delay-${800 + i * 400}`}>
                <div className="hiw__steps-card">

                  <Image
                    src={step.icon}
                    alt={step.alt}
                    width={100}
                    height={100}
                    className="hiw__steps-card-icon"
                  />

                  <p className="hiw__steps-card-text">
                    {step.text}
                  </p>

                </div>
              </div>

              {i < steps.length - 1 && (
                <div className={`fade-up delay-${1200 + i * 600}`}>
                  <p className="hiw__steps-arrow">
                    →
                  </p>
                </div>
              )}

            </Fragment>
          ))}

        </div>
      </section>
    </BlockWrapper>
  );
}

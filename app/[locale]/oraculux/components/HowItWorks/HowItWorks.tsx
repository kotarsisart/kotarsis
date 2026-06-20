"use client"

import './_hiw.scss';
import {
  howItWorksSteps,
  howItWorksArrow,
  howItWorksTitleKey,
  howItWorksQuoteKey
} from './hiw';

import Image from 'next/image';
import React from 'react';

import { useI18n } from "@/data/I18nProvider";

export default function HowItWorks() {
  const { t } = useI18n();

  return (
    <section className="hiw">
      <h2 className="hiw__title fade-up delay-400">
        {t(howItWorksTitleKey)}
      </h2>

      <div className="hiw__steps">
        {howItWorksSteps.map((step, i) => (
          <React.Fragment key={step.titleKey}>

              <div className={`fade-up delay-${800 + i * 200}`}>
                <div
                  className="hiw__step"
                  key={i}
                >
                  <div className="hiw__step-title-container">
                    <p className="hiw__step-title">{t(step.titleKey)}</p>
                    <Image
                      src={step.icon}
                      alt={step.alt}
                      width={40}
                      height={40}
                      className="hiw__step-icon"
                    />
                  </div>

                  <div className="hiw__step-text-container">
                    <p className="hiw__step-description">{t(step.hoverKey)}</p>
                  </div>
                </div>
            </div>

              {i < howItWorksSteps.length - 1 && (
                <div className={`fade-up delay-${1000 + i * 200}`}>
                <div key={"arrow-" + i} className="hiw__arrow">
                  <Image
                    src={howItWorksArrow}
                    className="hiw__arrow-icon"
                    width={20}
                    height={28}
                    alt={t("hiw.arrow")}
                  />
                </div>
                </div>
              )}
          </React.Fragment>
        ))}
      </div>

      <p className="hiw__quote fade-up delay-2000">
        {t(howItWorksQuoteKey)}
      </p>
    </section>
  );
}

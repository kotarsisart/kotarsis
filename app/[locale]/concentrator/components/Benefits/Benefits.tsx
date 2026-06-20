"use client";

import "./_benefits.scss";

import Image from "next/image";

import { useI18n } from "@/data/I18nProvider";

import BlockWrapper from "../../elements/BlockWrapper/BlockWrapper";

export default function Benefits() {
  const { t } = useI18n();

  const benefits = [
    {
      icon: "/projects/concentrator/images/section-icons/benefits/no-charge.svg",
      alt: t("benefits.cards.0.alt"),
      title: t("benefits.cards.0.title"),
      description: t("benefits.cards.0.description"),
    },
    {
      icon: "/projects/concentrator/images/section-icons/benefits/book-question.svg",
      alt: t("benefits.cards.1.alt"),
      title: t("benefits.cards.1.title"),
      description: t("benefits.cards.1.description"),
    },
    {
      icon: "/projects/concentrator/images/section-icons/benefits/coffee-cat.png",
      alt: t("benefits.cards.2.alt"),
      title: t("benefits.cards.2.title"),
      description: t("benefits.cards.2.description"),
    },
  ];

  return (
    <BlockWrapper>
      <section className="benefits">

        <h2 className="benefits__title fade-up delay-300">
          {t("benefits.title")}
        </h2>

        <div className="benefits__container">

          {benefits.map((card, i) => (
            
            <div
              key={i}
              className={`
                fade-up
                delay-${800 + i * 400}
              `}
            >
              <div className="benefits-card">

                <Image
                  src={card.icon}
                  alt={card.alt}
                  width={128}
                  height={128}
                  className="benefits-card__icon"
                />

                <h3 className="benefits-card__title">
                  {card.title}
                </h3>

                <p className="benefits-card__description">
                  {card.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>
    </BlockWrapper>
  );
}

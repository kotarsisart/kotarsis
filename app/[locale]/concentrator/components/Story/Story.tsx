"use client";

import "./_story.scss";
import Image from "next/image";

import BlockWrapper from "../../elements/BlockWrapper/BlockWrapper";
import { useI18n } from "@/data/I18nProvider";

export default function Story() {
  const { t } = useI18n();

  const paragraphs =
    (t("story.paragraphs") as string[]) || [];

  const storyQuote =
    `${t("story.quote.text")} — ${t("story.quote.author")}`;

  return (
    <BlockWrapper>
      <section className="story">

        <div className="story__left">

          <h2 className="story__left-title fade-up delay-300">
            {t("story.title")}
          </h2>

          <div className="story__left-text">

            {paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="fade-up delay-500"
              >
                {paragraph}
              </p>
            ))}

          </div>

          <p className="story__left-quote fade-up delay-1200">
            {storyQuote}
          </p>

        </div>

        <div className="fade-up delay-800">

          <Image
            src="/projects/concentrator/images/origin.jpg"
            className="story__img"
            width={700}
            height={980}
            alt={t("story.image.alt")}
          />

        </div>

      </section>
    </BlockWrapper>
  );
}

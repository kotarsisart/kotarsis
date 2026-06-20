"use client"

import "./_indie.scss";
import { indieLayers } from "./IndieLayers";
import { getIcon } from "./getIcon";
import { useI18n } from "@/data/I18nProvider";

import Image from "next/image";

export default function Indie() {
  const { t } = useI18n();

  return (
    <section className="indie">
      <h2 className="indie__title fade-up">
        {t("indie.title")}
      </h2>

      <p className="indie__subline fade-up delay-400">
        {t("indie.subline")}
      </p>

      <div className="indie__layers">
        {indieLayers.map((layer, index) => {
          const base = 600 + index * 300;

          return (
            <div className="indie__pair" key={layer.code}>
              <div className={`
                  indie__layer fade-up delay-${base + 100}
                `}
              >

                <h3 className={`
                  indie__layer-title fade-up delay-${base + 100}
                `}>
                  {t(layer.titleKey)}
                </h3>

                <div className="indie__layer-elements">
                  {layer.elements.map((el, i) => (
                    <div
                      className={`
                        indie__layer-element fade-up delay-${1200 + i * 100}
                      `}
                      key={i}
                    >
                      <Image
                        src={getIcon(el.icon)}
                        alt={t(`indie.alt.${el.icon}`)}
                        width={28}
                        height={28}
                        className="indie__layer-icon"
                      />

                      <p className="indie__layer-text">
                        {t(el.textKey)}
                      </p>
                    </div>
                  ))}
                </div>

                <p className={`indie__layer-description fade-up delay-${base + 200}`}>
                  {t(layer.descriptionKey)}
                </p>
              </div>

              {index < indieLayers.length - 1 && (
                <Image
                  src='/icons/indie/chain.svg'
                  alt={t("indie.alt.chain")}
                  width={32}
                  height={32}
                  className={`indie__chain fade-up delay-${600 + index * 400}`}
                />
              )}
            </div>
          );
        })}

      </div>

      <p className="indie__outro">{t("indie.outro")}</p>

      <Image
        src='/icons/indie/molecule-cycle.svg'
        alt={t("indie.alt.continuum")}
        width={100}
        height={100}
        className="indie__continuum"
      />

    </section>
  );
}

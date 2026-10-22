import { useI18n } from "@/data/I18nProvider";

import OpinionLogo from "../../../icons/OpinionLogo";
import Image from 'next/image';

import "./_instrusction.scss";

type InstructionProps = {
  onStart: () => void;
};

export default function Instruction({ onStart }: InstructionProps) {
  const { t } = useI18n();

  return (
    <section className="instruction">
      <div className="instruction__top">
        <div className="instruction__about">
          <h1 className="instruction__title">
            OPINION
          </h1>

          <h2 className="instruction__description">
            {t("instruction.description")}
          </h2>

          <h3 className="instruction__philosophy">
            {t("instruction.philosophy")}
          </h3>
        </div>

        <OpinionLogo className="instruction__logo"/>

      </div>

      <div className="instruction__controls">

        <div className="instruction__controls-swipe">
          <div className="instruction__controls-swipe-icons">
            <Image
              src="/projects/opinion/icons/instruction/controls/mouse.svg"
              className="instruction__controls-icons"
              width={90}
              height={100}
              alt={t("instruction.mouseAlt")}
            />

            <Image
              src="/projects/opinion/icons/instruction/controls/swipe.svg"
              className="instruction__controls-icons"
              width={90}
              height={100}
              alt={t("instruction.swipeAlt")}
            />
          </div>

          <p className="instruction__controls-text">
            {t("instruction.swipe")}
          </p>

        </div>

        <div className="instruction__controls-keyboard">
          <Image
            src="/projects/opinion/icons/instruction/controls/keyboard.svg"
            className="instruction__controls-icons"
            width={200}
            height={110}
            alt={t("instruction.keyboardAlt")}
          />

          <p className="instruction__controls-text">
            {t("instruction.keyboard")}
          </p>
        </div>
      </div>

      <div className="instruction__cta fade-up delay-600">
        <p className="instruction__cta-losung">
          {t("instruction.losung")}
        </p>

        <div className="instruction__cta-inner fade-up delay-800">

          <p
            className="instruction__cta-start"
            onClick={onStart}
          >
            {t("instruction.start")}
          </p>

          <Image
            src="/projects/opinion/icons/instruction/start.svg"
            className="instruction__cta-icon"
            width={20}
            height={27}
            alt={t("instruction.mouseAlt")}
          />

        </div>
      </div>
    </section>
  );
}

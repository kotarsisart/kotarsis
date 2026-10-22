
import "./_outro.scss";

import { useI18n } from "@/data/I18nProvider";

import Image from "next/image";

type OutroProps = {
  onRestart: () => void;
};

export default function Outro({ onRestart }: OutroProps) {
  const { t } = useI18n();

  return (
    <section className="outro">
      <h1 className="outro__title">
        {t("outro.title")}
      </h1>

      <h2 className="outro__description">
        {t("outro.description")}
      </h2>

      <div className="outro__divider" />

      <h3 className="outro__sides">
        {t("outro.sides")}
      </h3>

      <h4 className="outro__seen">
        {t("outro.seen")}
      </h4>

      <button
        type="button"
        className="outro__button"
        onClick={onRestart}
      >
        <Image
          src="/projects/opinion/icons/outro/circle-arrow.svg"
          width={30}
          height={30}
          alt={t("outro.buttonAlt")}
          aria-hidden="true"
        />

        <span className="outro__button-text">
          {t("outro.button")}
        </span>
      </button>
    </section>
  );
}

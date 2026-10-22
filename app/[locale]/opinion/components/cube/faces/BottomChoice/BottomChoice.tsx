
import { useI18n } from "@/data/I18nProvider";
import "./_bottom-choice.scss";

export default function BottomChoice() {
  const { t } = useI18n();

  return (
    <section className="face bottom choice">
      <h2 className="choice__title">
        {t("bottom.title")}
      </h2>

      <h3 className="choice__subline">
        {t("bottom.subline")}
      </h3>

      <div className="choice__separation">
        <p className="choice__separation-text">
          <span aria-hidden="true">←</span>{" "}
          {t("bottom.pessimists")}
        </p>

        <p className="choice__separation-text">
          {t("bottom.optimists")}{" "}
          <span aria-hidden="true">→</span>
        </p>
      </div>
    </section>
  );
}

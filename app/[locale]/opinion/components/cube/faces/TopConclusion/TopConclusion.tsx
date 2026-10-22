import { useI18n } from "@/data/I18nProvider";

import "./_top-conclusion.scss";

type TopConclusionProps = {
  onFinish: () => void;
};

export default function TopConclusion({
  onFinish,
}: TopConclusionProps) {
  const { t } = useI18n();

  return (
    <section className="face top conclusion">
      <div className="conclusion__container">
        <h2 className="conclusion__title">
          {t("top.title")}
        </h2>

        <h3 className="conclusion__subline">
          {t("top.subline")}
          <br />
          {t("top.sublineSecond")}
        </h3>

        <p className="conclusion__outro">
          {t("top.outro")}
        </p>

        <button
          className="conclusion__finish"
          type="button"
          onClick={onFinish}
        >
          {t("top.finish")}
        </button>
      </div>
    </section>
  );
}

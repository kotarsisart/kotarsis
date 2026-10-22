
import { useI18n } from "@/data/I18nProvider";
import "./_front-introduction.scss";

export default function FrontIntroduction() {
  const { t } = useI18n();

  return (
    <section className="face front introduction">
      <h1 className="introduction__title">
        {t("front.title")}
      </h1>

      <p className="introduction__subline">
        {t("front.subline")}
      </p>

      <p className="introduction__arrow" aria-hidden="true">
        →
      </p>
    </section>
  );
}

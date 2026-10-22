
import { useI18n } from "@/data/I18nProvider";
import "./_back-reveal.scss";

export default function BackReveal() {
  const { t } = useI18n();

  return (
    <section className="face back reveal">
      <h2 className="reveal__title">
        {t("back.title")}
      </h2>

      <h3 className="reveal__or">
        {t("back.or")}
      </h3>

      <p className="reveal__conclusion">
        {t("back.conclusion")}
      </p>
    </section>
  );
}

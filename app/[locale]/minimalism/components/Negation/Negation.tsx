import "./_negation.scss";
import { useI18n } from "@/data/I18nProvider";

export default function Negation() {
  const { t } = useI18n();

  return (
    <section className="negation">
      <h2 className="negation__title fade-down delay-400">
        {t("negation.title")}
      </h2>
    </section>
  );
}

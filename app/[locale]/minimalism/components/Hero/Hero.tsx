import "./_hero.scss";
import { useI18n } from "@/data/I18nProvider";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="hero">
      <div className="hero__top">
        <h1 className="hero__top-text fade-left delay-3200">
          {t("hero.title")}
        </h1>
      </div>

      <div className="hero__down">
        <p className="hero__down-text fade-right delay-3200">
          {t("hero.subtitle")}
        </p>
      </div>
    </section>
  );
}

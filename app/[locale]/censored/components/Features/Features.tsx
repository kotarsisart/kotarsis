import { useI18n } from "@/data/I18nProvider";
import FeaturesCard from "./FeaturesCard";
import { featureCards } from "./featureCards";

export default function Features() {
  const { t } = useI18n();

  return (
    <section 
      className="
        bg-linear-to-b from-blue-200 to-indigo-300
        px-3 py-8 bp-md:px-6 bp-md:py-32
      "
    >
      <div className="mx-auto max-w-7xl">

        <div className="max-w-4xl">

          <p 
            className="
              text-sm bp-md:text-xl font-semibold text-blue-600
              uppercase tracking-widest 
            "
          >
            {t("features.label")}
          </p>

          <h2 
          className="
              mt-4
              text-2xl bp-md:text-3xl bp-lg:text-5xl
              font-semibold tracking-tight text-indigo-900
            "
          >
            {t("features.title")}
          </h2>

          <p 
            className="
                mt-6
                text-sm bp-md:text-lg
                leading-relaxed
                text-indigo-400
              "
            >
            {t("features.description")}
          </p>

          <div
            className="
              mt-10 bp-md:mt-20
              grid gap-6 bp-md:grid-cols-2 bp-lg:grid-cols-3
            "
          >
            {featureCards.map((card) => (
              <FeaturesCard 
                key={card.id}
                title={t(card.titleKey)}
                description={t(card.descriptionKey)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

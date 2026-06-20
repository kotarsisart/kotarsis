import { useI18n } from "@/data/I18nProvider";
import FeaturesCard from "./FeaturesCard";
import { featureCards } from "./featureCards";

export default function Features() {
  const { t } = useI18n();

  return (
    <section 
      className="
        bg-linear-to-b from-zinc-100 to-indigo-100
        px-6 py-32
      "
    >
      <div className="mx-auto max-w-7xl">

        <div className="max-w-4xl">

          <p 
            className="
              text-xl font-semibold text-blue-600
              uppercase tracking-widest 
            "
          >
            {t("features.label")}
          </p>

          <h2 
          className="
              mt-4
              text-2xl md:text-3xl lg:text-5xl
              font-semibold tracking-tight text-zinc-950
            "
          >
            {t("features.title")}
          </h2>

          <p 
            className="
                mt-6 text-lg leading-relaxed text-zinc-500
              "
            >
            {t("features.description")}
          </p>

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

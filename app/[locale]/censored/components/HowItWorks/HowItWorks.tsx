import { useI18n } from "@/data/I18nProvider";
import HowItWorksCard from "./HowItWorksCard";
import { hiwSteps } from "./hiwSteps";

export default function HowItWorks () {
  const { t } = useI18n();

  return (
    <section 
      className="
        relative overflow-hidden
        bg-linear-to-b from-indigo-300 via-green-50 to-blue-50
        px-3 py-8 bp-md:px-6 bp-md:py-32
      "
    >
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">
          <p 
            className="
                text-base bp-md:text-xl
                font-semibold uppercase tracking-widest
                text-violet-600
              "
            >
            {t("hiw.label")}
          </p>

          <h2 
            className="
              mt-4
              text-3xl bp-md:text-4xl bp-lg:text-5xl
              font-semibold tracking-tight
              text-sky-950
            "
          >
            {t("hiw.title")}
          </h2>

          <p 
            className="
              mt-6
              text-sm bp-md:text-lg
              leading-relaxed
              text-cyan-700
            "
          >
            {t("hiw.description")}
          </p>
        </div>

        <div
          className="
            mt-8 bp-md:mt-24
            grid gap-6 bp-md:grid-cols-2 bp-lg:grid-cols-4
          "
        >
          {hiwSteps.map((step) => (
            <HowItWorksCard
              key={step.number}
              number={step.number}
              title={t(step.titleKey)}
              description={t(step.descriptionKey)}
            />
          ))}
        </div>

      </div>

    </section>
  );
};

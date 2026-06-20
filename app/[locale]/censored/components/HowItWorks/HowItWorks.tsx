import { useI18n } from "@/data/I18nProvider";
import HowItWorksCard from "./HowItWorksCard";
import { hiwSteps } from "./hiwSteps";

export default function HowItWorks () {
  const { t } = useI18n();

  return (
    <section 
      className="
        relative overflow-hidden
        bg-linear-to-b from-indigo-100 via-neutral-50 to-blue-50
        px-6 py-32
      "
    >
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">
          <p 
            className="
                text-xl font-semibold uppercase tracking-widest text-violet-600
              "
            >
            {t("hiw.label")}
          </p>

          <h2 
            className="
              mt-4
              text-4xl font-semibold tracking-tight text-zinc-950 md:text-6xl
            "
          >
            {t("hiw.title")}
          </h2>

          <p 
            className="
              mt-6
              text-lg leading-relaxed text-zinc-500"
          >
            {t("hiw.description")}
          </p>
        </div>

        <div className="mt-24 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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

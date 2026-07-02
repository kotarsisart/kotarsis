import CarrerBenefitCard from "./CareersCard";
import { benefits } from "./careersData";

import { useI18n } from "@/data/I18nProvider";

export default function CareersIntro() {
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-7xl">

      <div className="max-w-3xl">

        <p
          className="
            text-lg bp-md:text-xl
            font-semibold
            uppercase tracking-widest
            text-violet-400
          "
        >
          {t("careers.label")}
        </p>

        <h2
          className="
            mt-4
            text-2xl bp-md:text-4xl bp-lg:text-5xl
            font-semibold tracking-tight
            bg-linear-to-r from-slate-300 to-slate-500 bg-clip-text text-transparent
          "
        >
          {t("careers.title")}
        </h2>

        <p
          className="
            mt-6
            text-base bp-md:text-lg
            leading-relaxed
            text-slate-400
          "
        >
          {t("careers.description")}
        </p>

      </div>

      <div
        className="
          mt-10 bp-md:mt-20 grid gap-6 bp-md:grid-cols-2
        "
      >
        {benefits.map((benefit) => (
          <CarrerBenefitCard
            key={benefit.titleKey}
            title={t(benefit.titleKey)}
            description={t(benefit.descriptionKey)}
          />
        ))}
      </div>

    </div>
  )
}
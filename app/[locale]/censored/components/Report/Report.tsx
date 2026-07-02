import { useI18n } from "@/data/I18nProvider";
import ReportCard from "./ReportCard"
import { reportCards } from "./reportCards";

export default function Report () {
  const { t } = useI18n();

  return (
    <section
      className="
        px-3 py-8 bp-md:px-6 bp-md:py-32
        bg-black
      "
    >

      <div className="mx-auto max-w-7xl">

        <div 
          className="
            rounded-4xl
            border border-zinc-800
            bg-zinc-950
            px-2 py-6
            bp-md:p-8
            bp-lg:p-12
          "
        >
          <p 
            className="
              text-xs bp-md:text-base
              font-semibold
              uppercase
              tracking-widest
              text-violet-500
            "
          >
            {t("report.label")}
          </p>

          <h2 
            className="
              mt-6
              max-w-4xl
              font-semibold
              leading-none
              text-slate-200
              text-sm
              bp-md:text-3xl
              bp-lg:text-5xl
            "
          >
            {t("report.title")}
          </h2>

          <p 
            className="
              mt-4 bp-md:mt-12
              text-xl bp-md:text-4xl
              font-semibold
              text-slate-400
            "
          >
            {t("report.answer")}
          </p>

          <p 
            className="
              mt-4 bp-md:mt-8
              max-w-3xl
              bp-md:text-lg 
              leading-tight
              bp-md:leading-relaxed
              text-slate-600
            "
          >
            {t("report.description")}
          </p>

          <div 
            className="
              mt-8 bp-md:mt-16
              grid
              gap-3 bp-lg:gap-6
              bp-md:grid-cols-2
              bp-lg:grid-cols-3
            "
          >
            {reportCards.map((card) => (
              <ReportCard
                key={card.id}
                title={t(`report.cards.${card.id}.title`)}
                description={t(`report.cards.${card.id}.description`)}
                value={
                  card.valueKey
                    ? t(`report.values.${card.valueKey}`)
                    : card.value
                }
              />
            ))}

          </div>

          <div 
            className="
              mt-16
              rounded-3xl
              border border-zinc-800
              bg-zinc-900
              p-3 bp-md:p-8
            "
          >
            <p
              className="
                text-sm bp-md:text-2xl
                font-semibold
                text-violet-400
              "
            >
              {t("report.optimization.title")}
            </p>

            <p 
              className="
                mt-4
                text-sm bp-md:text-lg
                font-light
                whitespace-pre-line
                text-slate-400
              "
            >
              {t("report.optimization.description")}
            </p>
          </div>

          <div className="mt-10 bp-md:mt-20 text-center">

            <p
              className="
                text-xl bp-md:text-3xl
                font-semibold
                text-slate-400
              "
            >
              {t("report.root.title")}
            </p>

            <p 
              className="
                mt-4
                text-5xl bp-md:text-7xl bp-lg:text-8xl
                font-medium
                text-zinc-900
                bp-md:text-neutral-900
              "
            >
              {t("report.root.answer")}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

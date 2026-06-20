import { useI18n } from "@/data/I18nProvider";
import ReportCard from "./ReportCard"
import { reportCards } from "./reportCards";

export default function Report () {
  const { t } = useI18n();

  return (
    <section className="px-6 py-32">

      <div className="mx-auto max-w-7xl">

        <div 
          className="
            rounded-4xl
            border border-zinc-800
            bg-zinc-950
            p-8
            md:p-12
            lg:p-16
          "
        >
          <p 
            className="
              text-base
              font-semibold
              uppercase
              tracking-widest
              text-violet-400
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
              text-white
              md:text-5xl
              lg:text-6xl
            "
          >
            {t("report.title")}
          </h2>

          <p 
            className="
              mt-12
              text-3xl
              font-semibold
              text-violet-400
              md:text-3xl
            "
          >
            {t("report.answer")}
          </p>

          <p 
            className="
              mt-8
              max-w-3xl
              text-lg 
              leading-relaxed
              text-zinc-400
            "
          >
            {t("report.description")}
          </p>

          <div 
            className="
              mt-16 
              grid
              gap-6
              md:grid-cols-2
              lg:grid-cols-3
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
              p-8
            "
          >
            <p className="text-2xl font-semibold text-violet-400">
              {t("report.optimization.title")}
            </p>

            <p 
              className="
                mt-4
                text-lg font-light text-zinc-400
                whitespace-pre-line
              "
            >
              {t("report.optimization.description")}
            </p>
          </div>

          <div className="mt-20 text-center">

            <p className="text-3xl text-stone-200 font-semibold">
              {t("report.root.title")}
            </p>

            <p 
              className="
                text-5xl md:text-7xl lg:text-8xl font-medium
                text-black/80
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

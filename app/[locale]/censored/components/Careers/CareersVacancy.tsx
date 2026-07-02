import { useI18n } from "@/data/I18nProvider";
import { requirementsList } from "./careersData";

type CareersVacancyProps = {
  onOpen: () => void;
};

export default function CareersVacancy({
  onOpen,
}: CareersVacancyProps) {
  const { t } = useI18n();

  return (
    <div
      className="
        mt-20
        rounded-4xl border border-zinc-800
        bg-zinc-900
        p-4 bp-lg:p-10
      "
    >
      
      <div
        className="
          flex flex-col gap-10
          bp-lg:flex-row bp-lg:items-start bp-lg:justify-between
        "
      >
        <div className="max-w-2xl">

          <p
            className="
              text-sm font-semibold uppercase tracking-widest
              text-violet-400
            "
          >
            {t("careers.vacancy.label")}
          </p>

          <h3 
            className="
            mt-4
            text-2xl bp-lg:text-4xl font-semibold tracking-tight text-white
            "
          >
            {t("careers.vacancy.title")}
          </h3>

          <p 
            className="
              mt-6
              text-sm
              leading-relaxed text-zinc-400
            "
          >
            {t("careers.vacancy.description")}
          </p>

          <div className="mt-10">
            <p
              className="
                text-sm
                font-semibold
                uppercase tracking-widest
                text-zinc-500
              "
            >
              {t("careers.requirements.title")}
            </p>

            <ul
              className="
                mt-3 bp-md:mt-6
                flex flex-col
                gap-2 bp-md:gap-4
              "
            >
              {requirementsList.map((requirement) => (
                <li 
                  key={requirement}
                  className="
                    text-sm bp-md:text-base
                    text-zinc-300
                  "
                >
                  {t(`careers.requirements.list.${requirement}`)}
                </li>
              ))}
            </ul>

          </div>
        </div>

        <div 
          className="
            w-full max-w-sm
            flex flex-col
            rounded-3xl border border-zinc-800
            bg-zinc-950
            p-4 bp-lg:p-8
          "
        >
          <p
            className="
              text-xs bp-md:text-sm uppercase tracking-widest text-zinc-500
            "
          >
            {t("careers.applicationFlow.title")}
          </p>

          <p
            className="
              mt-4
              text-sm bp-md:text-lg
              leading-relaxed
              text-zinc-400
            "
          >
            {t("careers.applicationFlow.description")}
          </p>

          <button 
            className="
              mt-4 bp-md:mt-10
              rounded-2xl
              bg-linear-to-r from-violet-600 to-indigo-600
              px-4 py-2 bp-md:px-6 bp-md:py-4
              text-sm font-semibold text-white
              transition duration-300
              hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/20
            "
            onClick={onOpen}
          >
            {t("careers.applicationFlow.button")}
          </button>

          <p className="mt-4 text-xs bp-md:text-sm text-zinc-600">
            {t("careers.applicationFlow.response")}
          </p>
        </div>

      </div>

    </div>

  )
}

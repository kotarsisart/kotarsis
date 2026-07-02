import { useI18n } from "@/data/I18nProvider";
import { applicationStages } from "./careersData";

type CareersApplicationStatusProps = {
  currentStage: number;
  currentEvent: string;
  finalResult: string;
  syncPercent: number;
  onClose: () => void;
};

export default function CareersApplicationStatus({
  currentStage,
  currentEvent,
  finalResult,
  syncPercent,
  onClose,
}: CareersApplicationStatusProps) {
  const { t } = useI18n();

  const progress =
    ((currentStage + 1) / applicationStages.length) * 100;
  return (
    <div
      className="
        rounded-3xl border border-zinc-800
        bg-zinc-900
        p-2 bp-lg:p-8
      "
    >

      <button
        onClick={onClose}
        className="
          absolute right-6 bp-lg:right-4 bp-lg:top-4
          text-lg
          text-zinc-500
          transition hover:text-white
        "
      >
        ✕
      </button>

      <p
        className="
          mt-2
          text-sm
          uppercase tracking-widest
          text-violet-400
        "
      >
        {t("careers.status.title")}
      </p>

      <h4
        className="
          mt-4
          text-2xl bp-md:text-3xl
          font-semibold tracking-tight
          text-white
        "
      >
        {t("careers.status.emotionalCompability")}
      </h4>

      <p
        className="
          mt-3 bp-md:mt-6
          leading-relaxed
          text-zinc-400
        "
      >
        {t("careers.status.ourAi")}
      </p>

      <div
        className="
          mt-6 bp-md:mt-10
          h-3
          overflow-hidden
          rounded-full
          bg-zinc-800
        "
      >

        <div
          className="
            h-full
            rounded-full
            bg-linear-to-r from-violet-600 to-indigo-600
            transition-all duration-700
          "
          style={{ width: `${progress}%` }}
        />
        
      </div>

      {currentEvent && (
        <div
          className="
            mt-4 bp-md:mt-8
            rounded-2xl
            border border-amber-500/20
            bg-amber-500/10
            px-3 py-2 bp-md:px-5 bp-md:py-4
            text-sm
            text-amber-200
          "
        >
          {currentEvent}
        </div>
      )}

      <div
        className="
          mt-6 bp-md:mt-10
          flex flex-col
          gap-2 bp-md:gap-4
        "
      >
        {applicationStages.map((stage, index) => (
          <div
            key={stage}
            className={`
              rounded-2xl border
              px-3 py-1 bp-md:px-5 bp-md:py-4
              text-sm
              transition duration-300
              ${
                index < currentStage
                  ? "border-violet-600 bg-violet-500/10 text-slate-300"
                  : index === currentStage &&
                currentStage < applicationStages.length
                  ? "border-zinc-600 bg-zinc-800 text-zinc-200"
                  : "border-zinc-800 bg-zinc-900 text-zinc-800/40"
              }`}
            > 
              {t(`careers.applicationStages.${stage}`)}
          </div>
        ))}
      </div>

      {finalResult && (
        <div 
          className="
            mt-6 bp-md:mt-10
            rounded-3xl border border-red-500/20
            bg-red-500/10
            p-3 bp-md:p-6
          "
        >

          <p 
            className="
              text-sm
              uppercase tracking-widest
              text-red-300
            "
          >
            {t("careers.final.title")}
          </p>

          <p 
            className="
              mt-4
              bp-md:text-lg
              leading-relaxed
              text-red-100
            "
          >
            {finalResult}
          </p>
        </div>
      )}
      <p className="mt-4 text-sm text-zinc-600">
        {t("careers.final.emotionalSynchronization")}
        {syncPercent}%
      </p>

    </div>
  )
}
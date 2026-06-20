import { useI18n } from "@/data/I18nProvider";

const achievements = [
  "thoughtReduced",
  "workplace",
  "emotionalVariance",
  "humanComplexity",
  "shareholderExpectations",
];

export default function Victory() {
  const { t } = useI18n();

  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-5xl">

        <h2 
          className="
            mt-8
            text-center
            text-4xl
            font-semibold
            leading-none
            text-white
            md:text-6xl
            lg:text-7xl
          "
        >
          {t("victory.title")}
        </h2>

        <p 
          className="
            mx-auto
            mt-8
            max-w-3xl
            text-center
            text-lg
            leading-relaxed
            text-zinc-400
          "
        >
          {t("victory.description")}
        </p>

        <div 
          className="
            flex
            flex-col
            items-center
            mx-auto
            mt-20
            max-w-3xl
            space-y-6
          "
        >

          {achievements.map((achievement) => (
            <div
              className="flex items-center gap-4"
              key={achievement}
            >
              
              <span className="text-violet-400">
                ✓
              </span>

              <p className="text-xl text-zinc-200">
                {t(`victory.achievements.${achievement}`)}
              </p>
            </div>
          ))};

        </div>

        <div className="mt-32 text-center">
          <p 
            className="
              text-sm
              uppercase
              tracking-widest
              text-zinc-600
            "
          >
            {t("victory.note.title")}
          </p>

          <p 
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-3xl
              leading-relaxed
              whitespace-pre-line
              text-zinc-500
              md:text-5xl
            "
          >
            {t("victory.note.unauthorizedThought")}
          </p>
        </div>
      </div>

    </section>
  );
};

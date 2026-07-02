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
    <section
      className="
        px-3 py-8 bp-md:px-6 bp-md:py-32
        bg-black
      "
    >
      <div className="mx-auto max-w-5xl">

        <h2 
          className="
            text-center
            text-xl
            bp-md:text-6xl
            bp-lg:text-7xl
            font-semibold
            leading-none
            text-slate-300
          "
        >
          {t("victory.title")}
        </h2>

        <p 
          className="
            mx-auto
            mt-4 bp-md:mt-8
            max-w-3xl
            text-center
            text-sm bp-md:text-lg
            leading-relaxed
            text-slate-400
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
            mt-8 bp-md:mt-20
            max-w-3xl
            space-y-6
          "
        >

          {achievements.map((achievement) => (
            <div
              className="flex items-center gap-3 bp-md:gap-4"
              key={achievement}
            >
              
              <span className="text-violet-400">
                ✓
              </span>

              <p
                className="
                  text-sm bp-md:text-xl
                  text-slate-500
                "
              >
                {t(`victory.achievements.${achievement}`)}
              </p>
            </div>
          ))}

        </div>

        <div className="mt-10 bp-md:mt-32 text-center">
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
              text-xl bp-md:text-3xl
              leading-relaxed
              whitespace-pre-line
              text-zinc-500
              bp-md:text-5xl
            "
          >
            {t("victory.note.unauthorizedThought")}
          </p>
        </div>
      </div>

    </section>
  );
};

import { useI18n } from "@/data/I18nProvider";
import { heroCards } from "./heroCards";
import HeroCard from "./HeroCard";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section 
      className="
        min-h-screen flex flex-col bp-md:flex-row items-center
        bg-linear-to-b from-indigo-900 via-zinc-950 to-blue-950
        px-3 py-8 bp-md:px-6 bp-bp-md:py-20
      "
    >
      
      <div 
        className="
          absolute left-1/2 top-0 h-125 w-225
          -translate-x-1/2
          rounded-full
          bg-cyan-900
          blur-3xl opacity-20
        "
      />

      <div className="mx-auto w-full max-w-7xl">

        <div className="mb-6 w-fit">

          <div
            className="
              rounded-full 
              bg-linear-to-br from-cyan-50/40 to-sky-50/20
              border border-blue-100
              px-4 py-4
            "
          >

            <p className="
                text-sm bp-md:text-lg font-semibold
                bg-linear-to-tr from-cyan-50 to-indigo-300
                bg-clip-text text-transparent
              "
            >
              CENSORED™ ENTERPRISE
            </p>

          </div>

        </div>

        <h1 
          className="
            max-w-5xl
            text-3xl bp-md:text-5xl bp-lg:text-6xl
            font-bold leading-[1.3] tracking-tight whitespace-pre-line
            bg-linear-to-br from-violet-500 to-indigo-500
            bg-clip-text text-transparent
          "
        >
          {t("hero.title")}
        </h1>

        <p 
          className="
            mt-8 max-w-3xl
            text-sm bp-md:text-xl
            leading-relaxed
            text-blue-400
          "
        >
          {t("hero.description")}
        </p>

        <p 
          className="
            mt-6
            text-sm text-blue-300
          "
        >
          {t("hero.conclusion")}
        </p>

      </div>

      <div className="mt-10 bp-md:mt-1 bp-md:ml-8 w-full max-w-sm">
        <h2
          className="text-xl font-bold text-zinc-400"
        >
          SYSTEM STATUS
        </h2>

        <div className="mt-4 bp-md:mt-8 grid gap-6 grid-cols-1">
          {heroCards.map((card) => (
            <HeroCard 
              key={card.id}
              title={t(card.titleKey)}
            />
          ))}
        </div>
      
      </div>

    </section>
  );
}

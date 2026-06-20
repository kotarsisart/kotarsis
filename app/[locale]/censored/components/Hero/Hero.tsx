import { useI18n } from "@/data/I18nProvider";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section 
      className="
        min-h-screen flex items-center
        bg-linear-to-b from-white via-zinc-50 to-blue-50 
        px-6 py-20
      "
    >
      
      <div 
        className="
          absolute left-1/2 top-0 h-125 w-225
          -translate-x-1/2
          rounded-full
          bg-blue-300
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
                text-xl font-semibold
                bg-linear-to-tr from-zinc-950 to-stone-900
                bg-clip-text text-transparent
              "
            >
              {t("hero.label")}
              
            </p>

          </div>

        </div>

        <h1 
          className="
            max-w-5xl text-3xl md:text-5xl lg:text-6xl
            font-bold leading-tight tracking-tight
            bg-linear-to-br from-violet-600 to-indigo-500
            bg-clip-text text-transparent
          "
        >
          {t("hero.title")}
        </h1>

        <p 
          className="
            mt-8 max-w-3xl
            text-sm md:text-xl
            leading-relaxed
            text-zinc-600
          "
        >
          {t("hero.description")}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <button
            className="
              rounded-xl 
              font-semibold text-white 
              bg-blue-600 hover:bg-blue-500 
              transition 
              px-6 py-3 text-sm 
              shadow-lg shadow-blue-500/20
              cursor-pointer
            "
          >
            {t("hero.buttons.start")}
          </button>

          <button 
            className="
              rounded-xl 
              border border-cyan-300 bg-white/80
              backdrop:blur 
              text-sm font-semibold text-black
              px-6 py-3
              transition hover:bg-zinc-100
              cursor-pointer
            "
          >
            {t("hero.buttons.book")}
          </button>

        </div>

        <p 
          className="
            mt-6
            text-sm text-zinc-400
          "
        >
          {t("hero.conclusion")}
        </p>

      </div>

    </section>
  );
}

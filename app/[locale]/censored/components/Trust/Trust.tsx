import { useI18n } from "@/data/I18nProvider";
import TrustCard from "./TrustCard";

export default function Trust() {
  const { t } = useI18n();

  const cards = [
    {
      value: "94%",
      text: t("trust.cards.1"),
    },
    {
      value: "67%",
      text: t("trust.cards.2"),
    },
    {
      value: "12k+",
      text: t("trust.cards.3"),
    },
    {
      value: "4",
      text: t("trust.cards.4"),
      highlighted: true,
    },
  ];

  return (
    <section 
      className="
        bg-linear-to-b from-blue-50 via-white to-zinc-100
        px-6 py-24
      "
    >
      
      <div className="mx auto max-w-7xl">

        <div className="max-w-2xl">
        
          <p 
            className="
                text-xl font-bold uppercase tracking-widest text-indigo-500
              "
            >
            {t("trust.label")}
          </p>

          <h2 
            className="
              mt-6
              text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl
            "
          >
            {t("trust.title")}
          </h2>

          <p 
            className="
              mt-8
              text-lg leading-relaxed text-zinc-950
            "
          >
            {t("trust.description")}
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {cards.map((card) => (
              <TrustCard
                key={card.value}
                value={card.value}
                text={card.text}
                highlighted={card.highlighted}
              />
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};

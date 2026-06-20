import { useI18n } from "@/data/I18nProvider";

type PricingCardProps = {
  title: string;
  price: string | null;
  isCustom?: boolean;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export default function PricingCard({
  title,
  price,
  isCustom,
  description,
  features,
  highlighted,
}: PricingCardProps) {
  const { t } = useI18n();

  return (
    <div
      className={`
        relative rounded-4xl border p-8 transition duration-300 hover:-translate-y-2
        ${
          highlighted
            ? "border-violet-500 bg-violet-500/10 shadow-2xl shadow-violet-500/20"
            : "border-zinc-800 bg-zinc-950"
        }
      `}
    >
    
        {highlighted && (
          <div className="absolute right-4 top-6 rounded-full bg-violet-500 px-4 py-2 text-xs font-semibold uppercase text-white">
            {t("pricing.plans.popular")}
          </div>
        )}

        <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
          {title}
        </p>

        <div className="mt-6 flex items-end gap-2">
          <h3 className={`
             font-semibold text-white
            ${
              isCustom
                ? "text-xl lg:text-2xl"
                : "text-3xl lg:text-4xl"
            }
          `}
            
          >
            {isCustom ? t("pricing.plans.custom") : price}
          </h3>

          {!isCustom && (
            <p className="pb-2 text-zinc-500">
              / {t("pricing.plans.month")}
            </p>
          )}
        </div>

        <p 
          className={`
            mt-6 leading-relaxed
            ${
              highlighted
                ? "text-zinc-700"
                : "text-zinc-400"
            }
          `}
        >
          {description}
        </p>

        <div className="mt-10 flex flex-col gap-4">
          {features.map((feature) => (
            <div 
              key={feature}
              className="flex items-center gap-3"
            >
              <div className="h-2 w-2 rounded-full bg-violet-400" />

              <p 
                className={`
                  ${
                  highlighted
                    ? "bg-linear-to-br from-indigo-800 to-amber-800 bg-clip-text text-transparent"
                    : "text-zinc-300"
                  }
                `}
              >
                {feature}
              </p>
            </div>
          ))}
        </div>

        <button
          className={`
            mt-10 w-full rounded-2xl px-6 py-4 text-sm text-white font-semibold transition duration-300
            ${
              highlighted
                ? "bg-violet-500 hover:bg-violet-400"
                : "bg-zinc-900 hover:bg-zinc-800"
            }  
          `}
        >
          {t("pricing.plans.button")}
        </button>
    </div>
  );
};

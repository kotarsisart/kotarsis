import { useI18n } from "@/data/I18nProvider";
import PricingCard from "./PricingCard";
import { pricingPlans } from "./pricingPlans";

export default function Pricing() {
  const { t } = useI18n();

  return (
    <section 
      className="
        bg-linear-to-br from-blue-50 to-indigo-100
        px-6 py-20
      "
    >

      <div className="mx-auto max-w-7xl">

        <div className="max-w-3xl">

          <p className="text-2xl font-medium uppercase text-violet-400">
            {t("pricing.label")}
          </p>

          <h2 
            className="
              mt-4 text-2xl font-semibold text-zinc-950 md:text-3xl lg:text-5xl
            "
          >
            {t("pricing.title")}
          </h2>

          <p className="mt-6 text-xl text-zinc-400">
            {t("pricing.description")}
          </p>

        </div>
      
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              title={t(`pricing.plans.${plan.id}.title`)}
              price={plan.price}
              isCustom={plan.isCustom}
              description={t(`pricing.plans.${plan.id}.description`)}
              features={plan.featuresKeys?.map((feature) => 
                t(`pricing.plans.${plan.id}.features.${feature}`)
              )}
              highlighted={plan.highlighted}           
            />
          ))}
        </div>

      </div>

    </section>
  );
};

import { useI18n } from "@/data/I18nProvider";
import PricingCard from "./PricingCard";
import { pricingPlans } from "./pricingPlans";
import PricingPurchaseModal from "./PricingPurchaseModal";

import { useState } from "react";

export default function Pricing() {
  const { t } = useI18n();

  const [isPurchaseOpen, setIsPurchaseOpen] = useState(false);

  return (
    <>
      <section 
        className="
          bg-linear-to-br from-blue-50 to-indigo-100
          px-3 py-8 bp-md:px-6 bp-md:py-20
        "
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p
              className="
                text-lg bp-md:text-2xl font-medium uppercase text-violet-500
              "
            >
              {t("pricing.label")}
            </p>

            <h2 
              className="
                mt-4
                text-xl bp-md:text-3xl bp-lg:text-5xl
                font-semibold
                text-slate-700
                
              "
            >
              {t("pricing.title")}
            </h2>

            <p className="mt-6 text-sm bp-md:text-xl text-slate-500">
              {t("pricing.description")}
            </p>

          </div>
        
          <div
            className="
              mt-10 bp-md:mt-20
              grid grid-cols-1 bp-md:grid-cols-2 bp-lg:grid-cols-3
              gap-4 bp-lg:gap-8 
            "
          >
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
                onBuy={() => setIsPurchaseOpen(true)}
                highlighted={plan.highlighted}           
              />
            ))}
          </div>

        </div>

      </section>
      <PricingPurchaseModal
        isOpen={isPurchaseOpen}
        onClose={() => setIsPurchaseOpen(false)}
      />
    </>
  );
};

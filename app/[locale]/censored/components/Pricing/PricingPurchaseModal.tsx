"use client";

import { useI18n } from "@/data/I18nProvider";

type PricingPurchaseModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function PricingPurchaseModal({
  isOpen,
  onClose,
}: PricingPurchaseModalProps) {

  const { t } = useI18n();

  if (!isOpen) return null;

  function goToVacancy() {
    onClose();

    setTimeout(() => {
      document
        .getElementById("careers")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 200);
  }

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        bg-black/70
        backdrop-blur-sm
        overflow-y-auto
        p-2 bp-md:p-12
      "
    >
      <div className="flex min-h-full items-center justify-center">

        <div
          className="
            relative
            w-full max-w-3xl
            rounded-4xl
            border border-zinc-800
            bg-zinc-950
            p-2 bp-md:p-8 bp-lg:p-12
          "
        >
          <button
            onClick={onClose}
            className="
              w-10
              h-10
              absolute 
              z-1
              right-1 top-1
              bp-md:right-4 bp-md:top-2
              text-lg
              text-zinc-500
              cursor-pointer
              rounded-full
              transition
              hover:text-white hover:bg-zinc-800
            "
          >
            ✕
          </button>

          <div
            className="
              rounded-2xl
              border border-zinc-800
              bg-zinc-900/40
              backdrop-blur-xl
              p-2 bp-md:p-8
            "
          >

            <label
              className="text-lg font-medium uppercase text-violet-400"
            >
              {t("pricing.modal.label")}
            </label>

            <h3
              className="
                mt-2
                text-2xl font-bold text-slate-300
              "
            >
              {t("pricing.modal.title")}
            </h3>

            <p
              className="
                mt-4
                text-base text-slate-400
              "
            >
              {t("pricing.modal.description")}
            </p>

          </div>

          <div
            className="
              mt-8
              rounded-2xl
              border border-zinc-800
              bg-zinc-900/40
              backdrop-blur-xl
              p-2 bp-md:p-8
            "
          >
            <p
              className="
                text-lg font-medium uppercase text-violet-400
              "
            >
              {t("pricing.modal.status")}
            </p>
            <p
              className="
                mt-2
                text-2xl font-bold text-slate-300
              "
            >
              {t("pricing.modal.lookingFor")}
            </p>
            <p
              className="
                mt-4
                text-base text-slate-400
              "
            >
              {t("pricing.modal.problem")}
            </p>
            <p
              className="
                mt-4
                text-base text-slate-400
              "
            >
              {t("pricing.modal.aboutRole")}
            </p>
            <div
              className="
                mt-4
                flex flex-row gap-4 
              "
            >

              <button
                onClick={goToVacancy}
                className="
                  bg-gradient-to-r
                  from-violet-600
                  to-indigo-600
                  shadow-lg
                  shadow-violet-500/20
                  text-sm
                  bp-md:text-base
                  text-slate-300
                  font-semibold
                  rounded-2xl
                  px-4 py-2
                  cursor-pointer
                  transition duration-300
                  hover:-translate-y-0.5 hover:scale-[1.02]
                "
              >
                {t("pricing.modal.buttons.goToVacancy")}
              </button>

              <button
                onClick={onClose}
                className="
                  border border-zinc-700
                  bg-zinc-900
                  hover:bg-zinc-800
                  text-sm
                  bp-md:text-base
                  text-slate-300
                  font-semibold
                  rounded-2xl
                  px-4 py-2
                  cursor-pointer
                  transition duration-300
                  hover:-translate-y-0.5
                "
              >
                {t("pricing.modal.buttons.close")}
              </button>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

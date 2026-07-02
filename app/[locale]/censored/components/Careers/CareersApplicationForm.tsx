import { useI18n } from "@/data/I18nProvider";

type CareersApplicationFormProps = {
  fullName: string;
  motivation: string;
  onFullNameChange: (value: string) => void;
  onMotivationChange: (value: string) => void;
  onSubmit: () => void;
  onClose: () => void;
};

export default function CareersApplicationForm({
  fullName,
  motivation,
  onFullNameChange,
  onMotivationChange,
  onSubmit,
  onClose,
}: CareersApplicationFormProps) {
  const { t } = useI18n();

  return (
    <div
      className="
        flex flex-col bp-lg:flex-row
        items-start
        gap-10
      "
    >

      <div
        className="w-full bp-lg:w-3/4 flex-3 min-w-0"
      >
        <button
          onClick={onClose}
          className="
            absolute right-4 bp-lg:top-2
            text-lg
            text-zinc-500
            cursor-pointer
            transition
            hover:text-white
          "
        >
          ✕
        </button>

        <p
          className="
            text-xs bp-md:text-sm
            font-semibold
            uppercase tracking-widest
            text-violet-400
          "
        >
          {t("careers.form.title")}
        </p>

        <h3
          className="
            mt-4
            text-2xl bp-md:text-4xl
            font-semibold tracking-tight
            text-slate-200
          "
        >
          {t("careers.form.candidate")}
        </h3>

        <p 
          className="
            mt-2 bp-md:mt-10
            text-sm
            font-extralight tracking-wide
            text-slate-300
          "
        >
          {t("careers.form.reading")}
        </p>
      </div>

      <div
        className="
          min-w-0
          bp-md:mt-10
          flex flex-col
          gap-4 bp-md:gap-8
          flex-4
        "
      >

        <div>
          <label
            className="
              text-xs bp-md:text-sm
              uppercase tracking-widest
              text-zinc-500
            "
          >
            {t("careers.form.fullName")}
          </label>

          <input
            type="text"
            value={fullName}
            onChange={(e) => onFullNameChange(e.target.value)}
            placeholder={t("careers.form.optimazedIdentity")}
            className="
              mt-2 bp-md:mt-3
              w-full
              rounded-2xl border border-zinc-800
              bg-zinc-900
              px-3 py-2 bp-md:px-6 bp-md:py-4
              text-sm bp-md:text-lg
              text-white
              outline-none
              transition focus:border-violet-500
            "
          />

        </div>

        <div>

          <label
            className="
              text-xs bp-md:text-sm
              uppercase tracking-widest
              text-zinc-500
            "
          >
            {t("careers.form.workWithUs")}
          </label>

          <textarea
            value={motivation}
            onChange={(e) => onMotivationChange(e.target.value)}
            placeholder={t("careers.form.believableResponse")}
            className="
              mt-2 bp-md:mt-3
              resize-none
              min-h-40 w-full
              rounded-2xl border border-zinc-800
              bg-zinc-900
              px-3 py-2 bp-md:px-6 bp-md:py-4
              text-sm bp-md:text-lg
              text-white outline-none
              transition focus:border-violet-500
            "
          />

        </div>

        <button
          onClick={onSubmit}
          className="
            rounded-2xl
            bg-linear-to-r from-violet-600 to-indigo-600
            px-3 py-2 bp-md:px-6 bp-md:py-4
            text-sm font-semibold text-white
            transition duration-300
            hover:scale-[1.02] hover:shadow-2xl hover:shadow-violet-500/30
          "
        >
          {t("careers.form.button")}
        </button>
      </div>
    </div>
  )
}
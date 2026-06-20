import { useState, useEffect } from "react";
import CarrerBenefitCard from "./CareersCard";
import {
  benefits,
  requirementsList,
  applicationStages,
  randomEvents, 
  finalResults 
} from "./careersData";
import { useI18n } from "@/data/I18nProvider";

export default function Careers() {
  const { t } = useI18n();

  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [fullName, setFullname] = useState("");
  const [motivation, setMotivation] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);
  const [currentEvent, setCurrentEvent] = useState("");
  const [finalResult, setFinalResult] = useState("");
  const [syncPercent, setSyncPercent] = useState(72);

  useEffect(() => {
    if (!isSubmitted) return;

    const interval = setInterval(() => {
      setCurrentStage((prev) => {
        if (prev >= applicationStages.length) {

          const randomResult =
            finalResults[
              Math.floor(Math.random() * finalResults.length)
            ];

          setFinalResult(
            t(`careers.finalResults.${randomResult}`)
          );

          clearInterval(interval);

          return prev;
        }

        if (Math.random() > 0.6) {
          const randomIndex = Math.floor(
            Math.random() * randomEvents.length
          );
          
          const randomKey = randomEvents[randomIndex];

          setCurrentEvent(
            t(`careers.randomEvents.${randomKey}`)
          );
        }

        const randomPercent =
          Math.floor(Math.random() * 35) + 55;
        
        setSyncPercent(randomPercent);

        return prev + 1;
      })
    }, 2000);

    return () => clearInterval(interval);
  }, [isSubmitted]);

  return (
    <section className="relative overflow-hidden bg-zinc-950 px-6 py-32 text-white">
      
      <div className="mx-auto max-w-7xl">

        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
            {t("careers.label")}
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-">
            {t("careers.title")}
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-">
            {t("careers.description")}
          </p>

        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {benefits.map((benefit) => (
            <CarrerBenefitCard
              key={benefit.titleKey}
              title={t(benefit.titleKey)}
              description={t(benefit.descriptionKey)}
            />
          ))}
        </div>

        <div className="mt-20 rounded-4xl border border-zinc-800 bg-zinc-900 p-4 lg:p-10">
          
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">

              <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
                {t("careers.vacancy.label")}
              </p>

              <h3 className="mt-4 text-3xl lg:text-4xl font-semibold tracking-tight text-white">
                {t("careers.vacancy.title")}
              </h3>

              <p className="mt-6 leading-relaxed text-zinc-400">
                {t("careers.vacancy.description")}
              </p>

              <div className="mt-10">
                <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
                  {t("careers.requirements.title")}
                </p>

                <ul className="mt-6 flex flex-col gap-4 text-zinc-300">
                  {requirementsList.map((requirement) => (
                    <li key={requirement}>
                      {t(`careers.requirements.list.${requirement}`)}
                    </li>
                  ))}
                </ul>

              </div>
            </div>

            <div className="flex w-full max-w-sm flex-col rounded-3xl border border-zinc-800 bg-zinc-950 p-4 lg:p-8">
              <p className="text-sm uppercase tracking-widest text-zinc-500">
                {t("careers.applicationFlow.title")}
              </p>

              <p className="mt-4 text-lg leading-relaxed text-zinc-400">
                {t("careers.applicationFlow.description")}
              </p>

              <button className="mt-10 rounded-2xl bg-linear-to-r from-violet-600 to-indigo-600 px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/20"
                onClick={() => setIsApplicationOpen(true)}
              >
                {t("careers.applicationFlow.button")}
              </button>

              <p className="mt-4 text-sm text-zinc-600">
                {t("careers.applicationFlow.response")}
              </p>
            </div>

          </div>

        </div>
      </div>

      {isApplicationOpen && (
        <div className="
            fixed inset-0 z-9999 overflow-y-auto bg-black/70 backdrop-blur-sm
            p-6 md:p-16
          "
        >

          <div className="flex min-h-full items-center justify-center">

            <div className="relative w-full max-w-4xl rounded-4xl border border-zinc-800 bg-zinc-950 p-4 lg:p-10">
              {!isSubmitted ? (
                <div className="flex flex-col lg:flex-row items-start gap-10">

                  <div
                    className="w-full lg:w-3/4 flex-3 min-w-0"
                  >
                    <button
                      onClick={() => setIsApplicationOpen(false)}
                      className="absolute right-4 lg:top-2 text-zinc-500 transition hover:text-white"
                    >
                      ✕
                    </button>

                    <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
                      {t("careers.form.title")}
                    </p>

                    <h3 className="mt-4 text-4xl font-semibold tracking-tight text-white">
                      {t("careers.form.candidate")}
                    </h3>

                    <p className="mt-10 text-sm font-extralight tracking-wide text-violet-300">
                      {t("careers.form.reading")}
                    </p>
                  </div>

                  
                    <div className="mt-10 flex flex-col gap-8 flex-4 min-w-0">

                      <div>
                        <label className="text-sm uppercase tracking-widest text-zinc-500">
                          {t("careers.form.fullName")}
                        </label>

                        <input
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullname(e.target.value)}
                          placeholder={t("careers.form.optimazedIdentity")}
                          className="mt-3 w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-6 py-4 text-white outline-none transition focus:border-violet-500"
                        />

                      </div>

                      <div>

                        <label className="text-sm uppercase tracking-widest text-zinc-500">
                          {t("careers.form.workWithUs")}
                        </label>

                        <textarea
                          value={motivation}
                          onChange={(e) => setMotivation(e.target.value)}
                          placeholder={t("careers.form.believableResponse")}
                          className="mt-3 min-h-40 w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-6 py-4 text-white outline-none transition focus:border-violet-500"
                        />

                      </div>

                      <button
                        onClick={() => setIsSubmitted(true)}
                        className="rounded-2xl bg-linear-to-r from-violet-600 to-indigo-600 px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-violet-500/30"
                      >
                        {t("careers.form.button")}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-4 lg:p-8">

                    <button
                      onClick={() => setIsApplicationOpen(false)}
                      className="absolute right-4 lg:top-4 text-zinc-500 transition hover:text-white"
                    >
                      ✕
                    </button>

                    <p className="text-sm uppercase tracking-widest text-violet-400">
                      {t("careers.status.title")}
                    </p>

                    <h4 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                      {t("careers.status.emotionalCompability")}
                    </h4>

                    <p className="mt-6 leading-relaxed text-zinc-400">
                      {t("careers.status.ourAi")}
                    </p>

                    <div className="mt-10 h-3 overflow-hidden rounded-full bg-zinc-800">

                      <div
                        className="h-full rounded-full bg-linear-to-r from-violet-600 to-indigo-600 transition-all duration-700"
                        style={{
                          width: `${((currentStage + 1) / applicationStages.length) * 100}%`,
                        }}
                      />
                      
                    </div>

                    {currentEvent && (
                      <div className="mt-8 rounded-2xl border border-amber-500/20 bg-amber-500/10 px-5 py-4 text-sm text-amber-200">
                        {currentEvent}
                      </div>
                    )}

                    <div className="mt-10 flex flex-col gap-4">
                      {applicationStages.map((stage, index) => (
                        <div
                          key={stage}
                          className={`
                            rounded-2xl border px-5 py-4 text-sm transition duration-300
                            ${
                              index < currentStage
                              ? "border-violet-500 bg-violet-500/10 text-white"
                              : index === currentStage &&
                              currentStage < applicationStages.length
                              ? "border-zinc-600 bg-zinc-800 text-zinc-200"
                              : "border-zinc-800 bg-zinc-900 text-zinc-600"
                            }`}
                          > 
                            {t(`careers.applicationStages.${stage}`)}
                        </div>
                      ))}
                    </div>

                    {finalResult && (
                      <div className="mt-10 rounded-3xl border border-red-500/20 bg-red-500/10 p-6">

                        <p className="text-sm uppercase tracking-widest text-red-300">
                          {t("careers.final.title")}
                        </p>

                        <p className="mt-4 text-lg leading-relaxed text-red-100">
                          {finalResult}
                        </p>
                      </div>
                    )}
                    <p className="mt-4 text-sm text-zinc-600">
                      {t("careers.final.emotionalSynchronization")}
                      {syncPercent}%
                    </p>

                  </div>
                )}

              </div>

            </div>

          </div> 
      )}

    </section>
  )
};

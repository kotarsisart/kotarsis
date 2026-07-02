"use client"

import {
  applicationStages,
  randomEvents,
  finalResults,
} from "./careersData";

import { useState, useEffect } from "react";
import { useI18n } from "@/data/I18nProvider";

import CareersApplicationStatus from './CareersApplicationStatus'
import CareersApplicationForm from './CareersApplicationForm'

type CareersApplicationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CareersApplicationModal({
  isOpen,
  onClose,
}: CareersApplicationModalProps) {

  const { t } = useI18n();

  const [fullName, setFullName] = useState("");
  const [motivation, setMotivation] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);
  const [currentEvent, setCurrentEvent] = useState("");
  const [finalResult, setFinalResult] = useState("");
  const [syncPercent, setSyncPercent] = useState(72);

  function closeApplication() {
    setIsSubmitted(false);
    setCurrentStage(0);
    setCurrentEvent("");
    setFinalResult("");
    setSyncPercent(72);

    setFullName("");
    setMotivation("");

    onClose();
  }

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
  }, [isSubmitted, t]);

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 z-9999
        overflow-y-auto
        bg-black/70
        backdrop-blur-sm
        p-2 bp-lg:p-16
      "
    >
      <div className="flex min-h-full items-center justify-center">
        <div
          className="
            relative
            w-full max-w-4xl
            rounded-4xl
            border border-zinc-800
            bg-zinc-950
            p-4 bp-lg:p-10
          "
        >
          {isSubmitted ? (
            <CareersApplicationStatus
              currentStage={currentStage}
              currentEvent={currentEvent}
              finalResult={finalResult}
              syncPercent={syncPercent}
              onClose={closeApplication}
            />
          ) : (
            <CareersApplicationForm
              fullName={fullName}
              motivation={motivation}
              onFullNameChange={setFullName}
              onMotivationChange={setMotivation}
              onSubmit={() => setIsSubmitted(true)}
              onClose={closeApplication}
            />
          )}
        </div>
      </div>
    </div>
  );
}
import { useState } from "react";
import NotificationCard from "./notifications/NotificationCard";
import { benefits, notifications } from "./newsLetterData";
import { useI18n } from "@/data/I18nProvider";

type NewsLetterModalProps = {
  isOpen: boolean;
  onClose: () => void;

  hasUnreadNotification: boolean;

  setHasUnreadNotification:
    React.Dispatch<React.SetStateAction<boolean>>;

  isSubscribed: boolean;

  setIsSubscribed:
    React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NewsLetterModal({
  isOpen,
  onClose,
  setHasUnreadNotification,
  hasUnreadNotification,
  isSubscribed,
  setIsSubscribed,
}: NewsLetterModalProps) {

  const { t } = useI18n();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [currentNotification, setCurrentNotification] = useState(0);

  if (!isOpen) return null;

  function handleSubscription() {
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
    }, 2500);
  }

  return (
    <div 
      className="
        fixed inset-0 z-9999 overflow-y-auto 
        bg-black/70 p-2 bp-md:p-6 backdrop-blur-sm
      "
    >

      <div className="flex min-h-full items-center justify-center">

        <div 
            className="
            relative w-full max-w-2xl
            rounded-4xl 
            border border-zinc-800
            bg-zinc-950 
            p-4 bp-md:p-10
          "
        > 

          <button
            onClick={onClose}
            className="
              absolute right-6 top-4 bp-md:top-6
              text-lg
              text-zinc-500
              transition hover:text-white
            "
          >
            ✕
          </button>

          {
            !isSubscribed ? (
              <>
                <p 
                  className="
                    text-xs bp-md:text-sm font-semibold uppercase whitespace-pre-line bp-md:whitespace-nowrap
                    tracking-widest text-violet-400
                  "
                >
                  {t("newsletter.label")}
                </p>

                <h3 
                  className="
                    mt-3 bp-md:mt-6
                    max-w-xl
                    text-xl bp-md:text-4xl font-semibold 
                    leading-none text-white
                  "
                >
                  {t("newsletter.title")}
                </h3>

                <p
                  className="
                    mt-3 bp-md:mt-6
                    leading-relaxed text-zinc-400
                  "
                >
                  {t("newsletter.description")}
                </p>

                <ul className="mt-4 bp-md:mt-10 flex flex-col gap-3">

                  {benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="
                        rounded-2xl
                        border border-zinc-800
                        bg-zinc-900
                        text-xs bp-md:text-base
                        text-zinc-300
                        p-2 bp-md:p-4
                      "  
                    >
                      ✓ {t(`newsletter.benefits.${benefit}`)}
                    </li>
                  ))}

                </ul>

                <button
                  onClick={handleSubscription}
                  disabled={isSubmitting}
                  className="
                    mt-4 bp-md:mt-10
                    w-full
                    rounded-2xl
                    bg-linear-to-r from-violet-600 to-indigo-600
                    text-sm bp-md:text-lg font-semibold
                    text-white
                    px-3 py-2 bp-md:px-4 bp-md:py-4
                    transition duration-300
                    hover:scale-[1.01]
                    hover:shadow-2xl hover:shadow-violet-500/30
                  "
                >
                  {
                    isSubmitting
                      ? t("newsletter.submitButton.analyzing")
                      : t("newsletter.submitButton.accept")
                  }
                </button>

                <p
                  className="
                    mt-6
                    text-xs bp-md:text-sm leading-relaxed
                    text-zinc-600
                  "
                >
                  {t("newsletter.warning")}
                </p>

              </>
            ) : (
              // if subscribed show this
              <>
                <p 
                  className="
                    text-sm font-semibold uppercase tracking-widest 
                    text-violet-400
                  "
                >
                  {t("newsletter.subscription.label")}
                </p>

                <h3 
                  className="
                    mt-6
                    text-xl bp-md:text-4xl font-semibold leading-none text-white
                  "
                >
                  {t("newsletter.subscription.title")}
                </h3>

                <p
                  className="
                    mt-2 bp-md:mt-6
                    leading-relaxed text-sm text-zinc-400
                  "
                >
                  {t("newsletter.subscription.behavioralProfile")}
                </p>

                <div 
                  className="
                    mt-4 bp-md:mt-8 rounded-2xl
                    border border-violet-500/20
                    bg-violet-500/10
                    p-2 bp-md:p-6
                  "
                >

                  <p className="text-sm leading-relaxed text-violet-200">
                    {t("newsletter.subscription.communication")}
                  </p>

                </div>

                <button
                  disabled
                  className="
                    mt-4 bp-md:mt-8
                    w-full
                    rounded-2xl bg-zinc-800
                    text-sm bp-md:text-lg
                    font-semibold text-zinc-400
                    px-3 py-2 bp-md:px-6 bp-md:py-4
                  "
                >
                  {t("newsletter.subscription.monitoring")}
                </button>

                {
                  hasUnreadNotification ? (

                    <NotificationCard
                      title={
                        t(`newsletter.notifications.${notifications[currentNotification].id}.title`)
                      }
                      buttons={
                        notifications[currentNotification].buttons.map((button) =>
                          notifications[currentNotification].id === "emotionalScalability"
                            ? button
                            : t(`newsletter.buttons.${button}`)
                        )
                      }
                      onNext={() => {
                        setHasUnreadNotification(false);

                        setCurrentNotification((prev) =>
                          prev < notifications.length - 1
                            ? prev + 1
                            : prev
                        );
                      }}
                    />

                  ) : (

                    <div 
                      className="
                        mt-10 rounded-4xl
                        border border-zinc-800
                        bg-zinc-900
                        p-4
                      "
                    >

                      <p
                        className="
                          text-base bp-md:text-lg
                          text-zinc-400
                        "
                      >
                        {t("newsletter.subscription.unresolvedNotifications")}
                      </p>

                    </div>

                  )
                }
              </>
            )
          }

        </div>

      </div>

    </div>
  );
};

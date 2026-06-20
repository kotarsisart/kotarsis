import { useState, useEffect } from "react";
import NewsLetterModal from "../../components/NewsLetterModal/NewsLetterModal";
import { useI18n } from "@/data/I18nProvider";

export default function BubbleCTA() {
  const { t } = useI18n();

  const [isOpen, setIsOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  const [isSubscribed, setIsSubscribed] = useState(false);

  const [hasUnreadNotification, setHasUnreadNotification] = useState(false);

  const [isShaking, setIsShaking] = useState(false);

  const SHOW_BUTTON = 2 * 60 * 1000; // show button after 2 minutes
  const SHOW_NEXT_NOTIFICATION = 20 * 1000; // 20 seconds
  const SHAKING_DURATION = 1800;

  useEffect(() => {
    const timeout = setTimeout(() => {
        setIsVisible(true);
    }, SHOW_BUTTON)

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {

    if (!isSubscribed) return;

    if (hasUnreadNotification) return;

    const timeout = setTimeout(() => {

      setHasUnreadNotification(true);

      setIsShaking(true);

      setTimeout(() => {
        setIsShaking(false);
      }, SHAKING_DURATION);

    }, SHOW_NEXT_NOTIFICATION);

    return () => clearTimeout(timeout);

  }, [isSubscribed, hasUnreadNotification]);

  return (
    <>
      {isVisible && (
        <button
          onClick={() => setIsOpen(true)}
          className={`
            fixed bottom-6 right-6 z-40
            rounded-full border border-violet-500/30
            bg-zinc-950
            text-xs tracking-tight font-medium text-white
            px-4 py-3
            shadow-2xl shadow-violet-500/20
            transition duration-300
            hover:scale-105
            hover:animate-none
            ${
              isShaking ? "animate-bounce" : "animate-none opacity-50"
            }
          `}
        >
          {
            hasUnreadNotification
              ? t("bubbleCta.unread")
              : t("bubbleCta.pending")
          }
        </button>
      )}

      <NewsLetterModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        hasUnreadNotification={hasUnreadNotification}
        setHasUnreadNotification={setHasUnreadNotification}
        isSubscribed={isSubscribed}
        setIsSubscribed={setIsSubscribed}
      />
    </>
  )
};

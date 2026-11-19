
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

import { useI18n } from "@/data/I18nProvider";
import BlockWrapper from "../../elements/BlockWrapper/BlockWrapper";
import AgreementModal from "./AgreementModal/AgreementModal";
import useConcentratorSound from "./hooks/useConcentratorSound";

import "./_concentrator-online.scss";

const ConcentratorDevice3D = dynamic(
  () => import("./ConcentratorDevice/ConcentratorDevice3D"),
  { ssr: false },
);

const SESSION_DURATION = 180;
const NOTIFICATION_DURATION = 4500;
const LICENSE_STORAGE_KEY = "concentrator-license-accepted";

const NOTIFICATION_TIMES = [15, 45, 90, 150] as const;

type SessionStatus = "ready" | "active" | "stopped" | "completed";

type Notification = {
  time: (typeof NOTIFICATION_TIMES)[number];
};

function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
}

export default function ConcentratorOnline() {
  const { t } = useI18n();

  const [status, setStatus] = useState<SessionStatus>("ready");
  const [remaining, setRemaining] = useState(SESSION_DURATION);

  const [hasInteractedWithAgreement, setHasInteractedWithAgreement] =
    useState(false);

  const [hasStartedSession, setHasStartedSession] = useState(false);

  const [isAgreementOpen, setIsAgreementOpen] = useState(false);
  const [hasAccepted, setHasAccepted] = useState(false);

  const [notification, setNotification] = useState<Notification | null>(
    null,
  );

  // Refs preserve timer information between renders.
  const endTimeRef = useRef<number | null>(null);
  const shownNotificationsRef = useRef<Set<number>>(new Set());

  const notificationTimeoutRef = useRef<
    ReturnType<typeof setTimeout> | null
  >(null);

  const { playSound } = useConcentratorSound();

  // Restore license acceptance for the current browser tab.
  useEffect(() => {
    const timeout = setTimeout(() => {
      try {
        const accepted =
          sessionStorage.getItem(LICENSE_STORAGE_KEY) === "true";

        setHasAccepted(accepted);
        setHasInteractedWithAgreement(accepted);
      } catch {
        // Storage may be unavailable.
      }
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  // Dismiss the current notification and clear its timeout.
  const dismissNotification = useCallback(() => {
    if (notificationTimeoutRef.current !== null) {
      clearTimeout(notificationTimeoutRef.current);
      notificationTimeoutRef.current = null;
    }

    setNotification(null);
  }, []);

  // Display a notification for a limited amount of time.
  const showNotification = useCallback(
    (time: Notification["time"]) => {
      dismissNotification();

      setNotification({ time });
      playSound("notification", true);

      notificationTimeoutRef.current = setTimeout(() => {
        setNotification(null);
        notificationTimeoutRef.current = null;
      }, NOTIFICATION_DURATION);
    },
    [dismissNotification, playSound],
  );

  // Clear pending notification timeout on unmount.
  useEffect(() => {
    return () => {
      if (notificationTimeoutRef.current !== null) {
        clearTimeout(notificationTimeoutRef.current);
      }
    };
  }, []);

  // Start a new three-minute concentration session.
  const startSession = () => {
    dismissNotification();

    shownNotificationsRef.current.clear();

    endTimeRef.current = Date.now() + SESSION_DURATION * 1000;

    setRemaining(SESSION_DURATION);
    setHasStartedSession(true);
    setStatus("active");

    playSound("activate", true);
  };

  // Stop the session while preserving its remaining time.
  const stopSession = () => {
    if (endTimeRef.current !== null) {
      const millisecondsLeft = Math.max(
        0,
        endTimeRef.current - Date.now(),
      );

      setRemaining(Math.ceil(millisecondsLeft / 1000));
    }

    endTimeRef.current = null;

    dismissNotification();
    setStatus("stopped");
  };

  // Finish the session when the countdown reaches zero.
  const completeSession = useCallback(() => {
    endTimeRef.current = null;

    dismissNotification();

    setRemaining(0);
    setStatus("completed");

    playSound("complete", true);
  }, [dismissNotification, playSound]);

  // The physical device button controls the entire session.
  const handleDeviceClick = () => {
    playSound("click", true);

    if (!hasAccepted) {
      setIsAgreementOpen(true);
      return;
    }

    if (status === "active") {
      stopSession();
      return;
    }

    startSession();
  };

  // Both affirmative agreement buttons allow using the device.
  const handleAcceptAgreement = () => {
    setHasAccepted(true);
    setHasInteractedWithAgreement(true);
    setIsAgreementOpen(false);

    try {
      sessionStorage.setItem(LICENSE_STORAGE_KEY, "true");
    } catch {
      // The device still works without storage.
    }
  };

  /*
    The countdown uses a wall-clock deadline instead of
    decrementing a counter on every interval.

    This prevents timing drift when the browser throttles
    an inactive tab.
  */
  useEffect(() => {
    if (status !== "active") return;

    const updateTimer = () => {
      const endTime = endTimeRef.current;

      if (endTime === null) return;

      const millisecondsLeft = Math.max(
        0,
        endTime - Date.now(),
      );

      const secondsLeft = Math.ceil(millisecondsLeft / 1000);

      setRemaining(secondsLeft);

      if (millisecondsLeft <= 0) {
        completeSession();
        return;
      }

      const elapsed = SESSION_DURATION - secondsLeft;

      /*
        If the browser was suspended and several milestones
        have passed, display only the latest notification.
      */
      let latestMilestone: Notification["time"] | null = null;

      for (const time of NOTIFICATION_TIMES) {
        if (
          elapsed >= time &&
          !shownNotificationsRef.current.has(time)
        ) {
          shownNotificationsRef.current.add(time);
          latestMilestone = time;
        }
      }

      if (latestMilestone !== null) {
        showNotification(latestMilestone);
      }
    };

    updateTimer();

    const interval = setInterval(updateTimer, 250);

    return () => clearInterval(interval);
  }, [status, completeSession, showNotification]);

  const isActive = status === "active";

  const progress =
    ((SESSION_DURATION - remaining) / SESSION_DURATION) * 100;

  return (
    <BlockWrapper>
      <section
        className="concentrator-online"
        id="concentrator-online"
        aria-labelledby="concentrator-online-title"
      >
        <header className="concentrator-online__header">
          <h2
            className="concentrator-online__header-title"
            id="concentrator-online-title"
          >
            {t("concentratorOnline.title")}
          </h2>

          <p className="concentrator-online__header-subline">
            {t("concentratorOnline.subline")}
          </p>

          <button
            type="button"
            className="concentrator-online__agreement-button"
            onClick={() => setIsAgreementOpen(true)}
          >
            {t("concentratorOnline.agreement.button")}
          </button>

          <p className="concentrator-online__agreement-note">
            {t("concentratorOnline.agreement.note")}
          </p>
        </header>

        <div className="concentrator-online__device">
          <ConcentratorDevice3D
            isActive={isActive}
            onPress={handleDeviceClick}
          />
        </div>

        <div
          className={`concentrator-online__session ${
            hasInteractedWithAgreement
              ? "concentrator-online__session--visible"
              : ""
          }`}
        >
          {/* Timer and progress bar appear after first activation. */}
          <div
            className={`concentrator-online__session ${
              hasInteractedWithAgreement
                ? "concentrator-online__session--visible"
                : ""
            }`}
          >
            <div
              className={`concentrator-online__timer ${
                hasStartedSession
                  ? "concentrator-online__timer--visible"
                  : ""
              }`}
              aria-hidden={!hasStartedSession}
            >
              <time
                className="concentrator-online__timer-value"
                dateTime={`PT${remaining}S`}
              >
                {formatTime(remaining)}
              </time>

              <div
                className="concentrator-online__progress"
                role={hasStartedSession ? "progressbar" : undefined}
                aria-label={
                  hasStartedSession
                    ? t("concentratorOnline.timer.progressAriaLabel")
                    : undefined
                }
                aria-valuemin={hasStartedSession ? 0 : undefined}
                aria-valuemax={hasStartedSession ? 100 : undefined}
                aria-valuenow={
                  hasStartedSession ? Math.round(progress) : undefined
                }
              >
                <div
                  className="concentrator-online__progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div
              className="concentrator-online__status"
              role={hasInteractedWithAgreement ? "status" : undefined}
            >
              <p className="concentrator-online__status-title">
                {t(`concentratorOnline.status.${status}.title`)}
              </p>

              <p className="concentrator-online__status-subline">
                {t(`concentratorOnline.status.${status}.description`)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notifications remain visible while scrolling the page. */}
      {notification && isActive && (
        <div
          className="concentrator-notification"
          role="status"
          aria-live="polite"
        >
          <div className="concentrator-notification__content">
            <span className="concentrator-notification__label">
              Concentrator™
            </span>

            <p>
              {t(`concentratorOnline.notifications.${notification.time}`)}
            </p>
          </div>

          <button
            type="button"
            className="concentrator-notification__close"
            onClick={dismissNotification}
            aria-label={t(
              "concentratorOnline.notifications.closeAriaLabel",
            )}
          >
            ×
          </button>
        </div>
      )}

      {isAgreementOpen && (
        <AgreementModal
          onClose={() => setIsAgreementOpen(false)}
          onAccept={handleAcceptAgreement}
        />
      )}
    </BlockWrapper>
  );
}

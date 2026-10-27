import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/data/I18nProvider";
import "./_clarity.scss";

type Phase = "drifting" | "stabilizing" | "stable";

/**
 * Clarity interaction component.
 *
 * A small interactive mechanic where the user must hold input
 * (mouse or touch) to stabilize the state.
 *
 * Stability increases while holding and decreases otherwise,
 * directly affecting visual clarity (blur, spacing, opacity).
 *
 * Once fully stabilized, the flow completes automatically.
 */
export default function Clarity({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const { t } = useI18n();

  const [stability, setStability] = useState(0);
  const phase: Phase =
    stability >= 1
      ? "stable"
      : stability > 0
        ? "stabilizing"
        : "drifting";
  const [showHint, setShowHint] = useState(false);
  const [showSubHint, setShowSubHint] = useState(false);

  const holdRef = useRef(false);
  const idleTimer = useRef<number | null>(null);
  const subHintTimer = useRef<number | null>(null);

  // Handles idle detection and progressive hint system
  const FIRST_HINT_TIMER = 8000;
  const SECOND_HINT_TIMER = 5000;

  function clearHintTimers() {
    if (idleTimer.current !== null) {
      clearTimeout(idleTimer.current);
      idleTimer.current = null;
    }

    if (subHintTimer.current !== null) {
      clearTimeout(subHintTimer.current);
      subHintTimer.current = null;
    }
  }

  function startIdleTimer() {
    idleTimer.current = window.setTimeout(() => {
      setShowHint(true);

      subHintTimer.current = window.setTimeout(() => {
        setShowSubHint(true);
      }, SECOND_HINT_TIMER);
    }, FIRST_HINT_TIMER);
  }

  function resetIdleTimer() {
    clearHintTimers();

    setShowHint(false);
    setShowSubHint(false);

    startIdleTimer();
  }

  useEffect(() => {
    const firstTimer = window.setTimeout(() => {
      setShowHint(true);

      subHintTimer.current = window.setTimeout(() => {
        setShowSubHint(true);
      }, SECOND_HINT_TIMER);
    }, FIRST_HINT_TIMER);

    idleTimer.current = firstTimer;

    return () => {
      clearTimeout(firstTimer);

      if (subHintTimer.current !== null) {
        clearTimeout(subHintTimer.current);
      }
    };
  }, []);
  // Core loop: stability increases when holding, decreases otherwise
  useEffect(() => {
    if (phase === "stable") return;

    const interval = setInterval(() => {
      setStability((prev) =>
        holdRef.current
          ? Math.min(prev + 0.04, 1)
          : Math.max(prev - 0.03, 0)
      );
    }, 50);

    return () => clearInterval(interval);
  }, [phase]);

  // Complete flow after reaching stable state
  useEffect(() => {
    if (phase === "stable") {
      const timer = setTimeout(() => {
        onComplete();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

  // Map stability to visual feedback
  const blur = phase === "stable" ? 0 : (1 - stability) * 7;
  const letterSpacing = phase === "stable" ? 0 : (1 - stability) * 2;
  const opacity = phase === "stable" ? 1 : 0.6 + stability * 0.4;

  return (
    <section
      className="clarity"
      onMouseDown={() => {
        holdRef.current = true;
        resetIdleTimer();
      }}
      onMouseUp={() => {
        holdRef.current = false;
        resetIdleTimer();
      }}
      onMouseLeave={() => {
        holdRef.current = false;
      }}
      onTouchStart={() => {
        holdRef.current = true;
        resetIdleTimer();
      }}
      onTouchEnd={() => {
        holdRef.current = false;
        resetIdleTimer();
      }}
    >
      <p
        className="clarity__phrase"
        style={{
          filter: `blur(${blur}px)`,
          letterSpacing: `${letterSpacing}px`,
          opacity,
        }}
      >
        {t("clarity.phrase")}
      </p>

      {showHint && (
        <div className="clarity__hint">
          <p className="clarity__hint-text">
            {t("clarity.hint")}
          </p>

          {showSubHint && (
            <p className="clarity__hint-text next-hint">
              {t("clarity.subHint")}
            </p>
          )}
        </div>
      )}
    </section>
  );
}

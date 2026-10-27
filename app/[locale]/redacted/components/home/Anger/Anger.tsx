import { useState } from "react";
import { useI18n } from "@/data/I18nProvider";
import "./_anger.scss";

/**
 * Anger
 *
 * Interactive escalation mechanic driven by repeated user input.
 *
 * Each click increases intensity (visual + emotional),
 * progressively revealing internal states until a breaking point is reached.
 *
 * Once broken, interaction is disabled and the state becomes final.
 */
export default function Anger() {
  const { t } = useI18n();

  const [clicks, setClicks] = useState(0);

  // Derived state: no separate state or effect needed
  const isBroken = clicks >= 20;

  // Determine the current emotional state from click thresholds
  const currentText =
    clicks >= 20
      ? t("anger.states.fourth")
      : clicks >= 12
        ? t("anger.states.third")
        : clicks >= 7
          ? t("anger.states.second")
          : clicks >= 2
            ? t("anger.states.first")
            : null;

  // Prevent further interaction after breaking point
  const handleClick = () => {
    if (isBroken) return;

    setClicks((prev) => Math.min(prev + 1, 20));
  };

  return (
    <section
      className={`anger ${isBroken ? "is-broken" : ""}`}
      style={{
        // Visual intensity increases with interaction
        filter: `contrast(${1 + clicks * 0.1})`,
      }}
    >
      {/* Section title */}
      <h2 className="anger__title zoom-in delay-200">
        {t("anger.title")}
      </h2>

      {/* Subline hinting at interaction */}
      <p className="anger__subline zoom-out delay-600">
        {t("anger.subline")}
      </p>

      {/* Main interaction trigger */}
      <button
        className={`anger__button ${isBroken ? "is-disabled" : ""}`}
        onClick={handleClick}
        style={{
          // Increasing instability / resistance effect
          transform: `translateX(-${clicks * 3}px)`,
        }}
        disabled={isBroken}
      >
        {t("anger.button")}
      </button>

      {/* Emotional state output */}
      <div className="anger__states">
        <p
          key={currentText}
          className={`anger__state ${
            currentText ? "visible" : ""
          }`}
        >
          {currentText}
        </p>
      </div>
    </section>
  );
}

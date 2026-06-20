"use client"

import "./_reasons.scss";
import { useI18n } from "@/data/I18nProvider";
import { reasonsMessages } from "../../data/content/reasons";
import { useState, useEffect, useRef } from "react";

export default function Reasons() {
  const { t, locale } = useI18n();

  const reasons =
    reasonsMessages[
      locale as keyof typeof reasonsMessages
    ].reasons;

  const [showSkip, setShowSkip] = useState(false);
  const [atFooter, setAtFooter] = useState(false);

  const footerRef = useRef<HTMLElement | null>(null);

  // Scrolls smoothly to footer and hides the skip hint
  const handleSkip = () => {
    setShowSkip(false);
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Show "skip" hint based on scroll progress
  useEffect(() => {
    footerRef.current = document.getElementById("footer") as HTMLElement | null;

    // Scroll-based logic
    const handleScroll = () => {
      const scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      const windowHeight = window.innerHeight;

      const fullHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );

      const scrollProgress =
        scrollTop / (fullHeight - windowHeight);

      // Show the button if the user has scrolled > 12%
      setShowSkip(scrollProgress > 0.12);
    };

    document.body.addEventListener("scroll", handleScroll);

    // Footer observer
    let footerObserver: IntersectionObserver | null = null;

    if (footerRef.current) {
      footerObserver = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          setAtFooter(entry.isIntersecting);
        },
        { threshold: 0.2 }
      );

      footerObserver.observe(footerRef.current);
    }

    return () => {
      document.body.removeEventListener("scroll", handleScroll);
      footerObserver?.disconnect();
    };
  }, []);

  return (
    <section className="reasons">
      <p
        className={`reasons__whisper-skip 
          ${
          showSkip && !atFooter ? "visible" : ""
        }`}
        onClick={handleSkip}
      >
        {t("reasons.hint")}
      </p>

      <div className="reasons__container">
        {reasons.map((reason, index) => (
          <p
            key={`${locale}-${index}`}
            className="reasons__reason"
          >
            <span className="reasons__number">
              {index + 1}.
            </span>{" "}
            {reason}
          </p>
        ))}
      </div>
    </section>
  );
}

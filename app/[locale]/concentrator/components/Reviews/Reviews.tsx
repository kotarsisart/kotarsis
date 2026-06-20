"use client";

import "./_reviews.scss";

import {
  useEffect,
  useMemo,
  useRef,
} from "react";

import BlockWrapper from "../../elements/BlockWrapper/BlockWrapper";
import { useI18n } from "@/data/I18nProvider";

interface Review {
  text: string;
  author: string;
  date: string;
}

export default function Reviews() {
  const { t } = useI18n();

  const reviews =
    (t("reviews.items") as Review[]) || [];

  const multiplier = 8;

  const extendedReviews = useMemo(
    () =>
      Array.from(
        { length: multiplier },
        () => reviews
      ).flat(),
    [reviews]
  );

  const carouselContainer =
    useRef<HTMLDivElement>(null);

  const track =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container =
      carouselContainer.current;

    const innerTrack =
      track.current;

    if (!container || !innerTrack) {
      return;
    }

    let isPaused = false;

    const autoScroll = () => {
      if (isPaused) return;

      container.scrollLeft += 1;

      const maxScroll =
        innerTrack.scrollWidth;

      const current =
        container.scrollLeft;

      if (current > maxScroll * 0.7) {
        container.scrollLeft =
          maxScroll * 0.3;
      }
    };

    const intervalId = setInterval(
      autoScroll,
      20
    );

    const pause = () => {
      isPaused = true;
    };

    const resume = () => {
      isPaused = false;
    };

    container.addEventListener(
      "mouseenter",
      pause
    );

    container.addEventListener(
      "mouseleave",
      resume
    );

    container.addEventListener(
      "touchstart",
      pause
    );

    container.addEventListener(
      "touchend",
      resume
    );

    return () => {
      clearInterval(intervalId);

      container.removeEventListener(
        "mouseenter",
        pause
      );

      container.removeEventListener(
        "mouseleave",
        resume
      );

      container.removeEventListener(
        "touchstart",
        pause
      );

      container.removeEventListener(
        "touchend",
        resume
      );
    };
  }, []);

  return (
    <BlockWrapper>
      <section
        className="reviews"
        id="reviews"
      >
        <h2 className="reviews__title fade-up delay-300">
          {t("reviews.title")}
        </h2>

        <div
          ref={carouselContainer}
          className="reviews__carousel fade-up delay-600"
        >
          <div
            ref={track}
            className="reviews__track"
          >
            {extendedReviews.map(
              (review, i) => (
                <div
                  key={i}
                  className={`reviews__card-wrapper fade-up delay-${
                    500 + i * 200
                  }`}
                >
                  <div className="reviews__card">

                    <p className="reviews__card-text">
                      {review.text}
                    </p>

                    <div className="reviews__card-footer">

                      <span className="reviews__card-author">
                        {review.author}
                      </span>

                      <span className="reviews__card-date">
                        {review.date}
                      </span>

                    </div>

                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </BlockWrapper>
  );
}

"use client";

import "./_faq.scss";

import React, { useEffect, useRef, useState } from "react";

import BlockWrapper from "../../elements/BlockWrapper/BlockWrapper";
import { useI18n } from "@/data/I18nProvider";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ() {
  const { t } = useI18n();

  const faqItems =
    (t("faq.items") as FAQItem[]) || [];

  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const [heights, setHeights] = useState<number[]>([]);

  const answerRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  function isOpen(index: number) {
    return openIndexes.includes(index);
  }

  function toggleItem(index: number) {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  }

  useEffect(() => {
    const newHeights = answerRefs.current.map((el) => {
      if (!el) return 0;

      const style = getComputedStyle(el);

      const padding =
        parseFloat(style.paddingTop) +
        parseFloat(style.paddingBottom);

      return el.scrollHeight + padding;
    });

    setHeights(newHeights);
  }, [openIndexes]);

  useEffect(() => {
    const newHeights = answerRefs.current.map((el) => {
      if (!el) return 0;

      const style = getComputedStyle(el);

      const padding =
        parseFloat(style.paddingTop) +
        parseFloat(style.paddingBottom);

      return el.scrollHeight + padding;
    });

    setHeights(newHeights);
  }, []);

  return (
    <BlockWrapper>
      <section className="faq" id="faq">

        <h2 className="faq__title fade-up delay-300">
          {t("faq.title")}
        </h2>

        <div className="faq__items fade-up delay-600">

          {faqItems.map((item, i) => (
            <div
              key={i}
              className={`faq__item fade-up delay-${500 + i * 100}`}
            >

              <button
                className="faq__item-question"
                onClick={() => toggleItem(i)}
                aria-expanded={isOpen(i)}
              >
                {item.q}

                <span
                  className={`faq__arrow ${
                    isOpen(i)
                      ? "faq__arrow--open"
                      : ""
                  }`}
                >
                  ⌄
                </span>
              </button>

              <div
                className="faq__item-answer"
                style={
                  {
                    "--h": isOpen(i)
                      ? `${heights[i] ?? 0}px`
                      : "0px",

                    opacity: isOpen(i) ? 1 : 0,
                  } as React.CSSProperties
                }
              >
                <p
                  ref={(el) => {
                    answerRefs.current[i] = el;
                  }}
                >
                  {item.a}
                </p>
              </div>

            </div>
          ))}

        </div>

      </section>
    </BlockWrapper>
  );
}

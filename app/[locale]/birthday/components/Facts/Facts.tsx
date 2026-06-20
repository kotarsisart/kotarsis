"use client"

import { useI18n } from "@/data/I18nProvider";
import { useSearchParams } from "next/navigation";

import FactCard from "./FactCard";
import "./_facts.scss";

import Image from "next/image";

export default function Facts() {
  const { t, locale } = useI18n();
  const params = useSearchParams();

  const birthday = params.get("birthday");
  const age = params.get("age");

  let days = 0;

  if (birthday) {
    const birthDate = new Date(birthday);
    const now = new Date();
    days = Math.floor((now.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24));
  } else if (age) {
    days = Math.floor(Number(age) * 365.25);
  }

  const hours = days * 24;
  const heartbeats = Math.floor(days * 24 * 60 * 70);
  const population = Math.floor(days * 250000);

  const years = Math.floor(days / 365);

  let stageKey = "youth";

  if (years < 13) stageKey = "childhood";
  else if (years < 18) stageKey = "teen";
  else if (years < 30) stageKey = "youth";
  else if (years < 50) stageKey = "maturity";
  else stageKey = "experience";

  const format = (num: number) => num.toLocaleString(locale);

  const cards = [
    {
      title: t("facts.liveAlready"),
      value: format(days),
      outro: t("facts.days"),
    },
    {
      title: t("facts.hoursApprox"),
      value: format(hours),
      outro: t("facts.hours"),
    },
    {
      title: t("facts.heartbeats"),
      value: format(heartbeats),
      outro: t("facts.beats"),
    },
    {
      title: t("facts.populationBorn"),
      value: format(population),
      outro: t("facts.people"),
    },
    {
      title: t("facts.stage"),
      value: t(`facts.stages.${stageKey}`),
    },
  ];

  return (
    <section className="facts">
      <h2 className="facts__title">
        {t("facts.title")}
      </h2>

      <div className="facts__cards">
        {cards.map((card, index) => (
          <FactCard
            key={index}
            title={card.title}
            value={card.value}
            outro={card.outro}
          />
        ))}
      </div>

      <div className="facts__outro">
        <p className="facts__outro-text fade fade-down delay-600">
          {t("facts.outro.line1")}
          <br />
          {t("facts.outro.line2")}
        </p>

        <Image
          src="/projects/birthday/icons/facts/star.svg"
          alt={t("facts.altBirthdayStar")}
          width={40}
          height={40}
          className="fade fade-up delay-600"
        />
      </div>
    </section>
  );
}

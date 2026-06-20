"use client"

import SeoSchema from "@/utils/SeoSchema/SeoSchema";

import AppLayout from "./components/AppLayout/AppLayout";

import Hero from "./components/Hero/Hero";
import HowItWorks from './components/HowItWorks/HowItWorks'
import Story from './components/Story/Story'
import Benefits from './components/Benefits/Benefits'
import Comparison from "./components/Comparison/Comparison"
import Availability from "./components/Availability/Availability";
import Gallery from "./components/Gallery/Gallery";
import Reviews from "./components/Reviews/Reviews";
import FAQ from "./components/FAQ/FAQ";
import Order from "./components/Order/Order";

import { useI18n } from "@/data/I18nProvider";
import '@/utils/animations/animations.scss'
import './globals.css';

export default function LocalePage() {
  const { t, locale } = useI18n();

  return (
    <>
      <SeoSchema
        title={t("meta.title")}
        description={t("meta.description")}
        url={`https://kotarsis.com/${locale}/concentrator`}
      />

      <AppLayout>
        <Hero />
        <HowItWorks />
        <Story />
        <Benefits />
        <Comparison />
        <Availability />
        <Gallery />
        <Reviews />
        <FAQ />
        <Order />
      </AppLayout>
    </>
  );
}

"use client"

import SeoSchema from "@/utils/SeoSchema/SeoSchema";

import AppLayout from "./components/AppLayout/AppLayout";

import Hero from "./components/Hero/Hero";
import Benefits from './components/Benefits/Benefits'
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Ritual from "./components/Ritual/Ritual";
import ConstellationMap from "./components/ConstellationMap/ConstellationMap";
import Form from "./components/Form/Form";
import Graffiti from "./components/Graffiti/Graffiti";

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
        url={`https://kotarsis.com/${locale}/oraculux`}
      />

      <AppLayout>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Ritual />
        <ConstellationMap />
        <Form />
        <Graffiti />
      </AppLayout>
    </>
  );
}

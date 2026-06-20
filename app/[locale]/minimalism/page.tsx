"use client"

import SeoSchema from "@/utils/SeoSchema/SeoSchema";

import AppLayout from "./components/AppLayout/AppLayout";

import Hero from "./components/Hero/Hero";
import Manifesto from "./components/Manifesto/Manifesto";
import Structure from "./components/Structure/Structure";
import Interpretation from "./components/Interpreptation/Interpretation";
import Negation from "./components/Negation/Negation";
import Conclusion from "./components/Conclusion/Conclusion";

import { useI18n } from "@/data/I18nProvider";
import './globals.css';

export default function CorePage() {
  const { t, locale } = useI18n();

  return (
    <>
      <SeoSchema
        title={t("meta.title")}
        description={t("meta.description")}
        url={`https://kotarsis.com/${locale}/minimalism`}
      />

      <AppLayout>
        <Hero />
        <Manifesto />
        <Structure />
        <Interpretation />
        <Negation />
        <Conclusion />
      </AppLayout>
    </>
  )
}

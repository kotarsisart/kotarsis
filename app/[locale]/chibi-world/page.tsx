"use client"

import SeoSchema from "@/utils/SeoSchema/SeoSchema";

import AppLayout from "./components/AppLayout/AppLayout";

import Hero from "./components/Hero/Hero";

import { useI18n } from "@/data/I18nProvider";
import '@/utils/animations/animations.scss'

export default function LocalePage() {
  const { t, locale } = useI18n();

  return (
    <>
      <SeoSchema
        title={t("meta.title")}
        description={t("meta.description")}
        url={`https://kotarsis.com/${locale}/chibi-world`}
      />

      <AppLayout>
        <Hero />
      </AppLayout>
    </>
  );
}

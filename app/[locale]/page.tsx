"use client"

import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Indie from "@/components/Indie/Indie";
import AppLayout from "@/components/AppLayout/AppLayout";

import SeoSchema from "@/utils/SeoSchema/SeoSchema";

import { useI18n } from "@/data/I18nProvider";

import '../globals.css'

export default function HomePage() {
  const { t, locale } = useI18n();

  return (
    <>
      <SeoSchema
        title={t("meta.title")}
        description={t("meta.description")}
        url={`https://kotarsis.com/${locale}`}
      />

      <AppLayout>
        <Hero />
        <About />
        <Indie />
      </AppLayout>
    </>
  )
}
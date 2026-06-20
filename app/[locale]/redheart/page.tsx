"use client"

import SeoSchema from "@/utils/SeoSchema/SeoSchema";

import AppLayout from "./components/AppLayout/AppLayout";

import Hero from "./components/Hero/Hero";
import Reasons from "./components/Reasons/Reasons";

import { useI18n } from "@/data/I18nProvider";
import './globals.css';

export default function LocalePage() {
  const { t, locale } = useI18n();

  return (
    <>
      <SeoSchema
        title={t("meta.title")}
        description={t("meta.description")}
        url={`https://kotarsis.com/${locale}/redheart`}
      />

      <AppLayout>
        <Hero />
        <Reasons />
      </AppLayout>
    </>
  );
}

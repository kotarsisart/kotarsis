"use client"

import RedactedPage from "./components/RedactedPage";

import SeoSchema from "@/utils/SeoSchema/SeoSchema";

import { useI18n } from "@/data/I18nProvider";

import "@/utils/animations/animations.scss"

export default function Page() {
  const { t, locale } = useI18n();

  return (
    <>
      <SeoSchema
        title={t("meta.title")}
        description={t("meta.description")}
        url={`https://kotarsis.com/${locale}/redacted`}
      />

      <RedactedPage />
    </>
  );
}

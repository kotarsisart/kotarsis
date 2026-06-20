"use client"

import SeoSchema from "@/utils/SeoSchema/SeoSchema";
import InputPage from "../components/Input/InputPage";
import "@/utils/animations/animations.scss"
import { useI18n } from "@/data/I18nProvider";

export default function BirthdayPage() {
  const { t, locale } = useI18n();

  return (
    <>
      <SeoSchema
        title={t("meta.title")}
        description={t("meta.description")}
        url={`https://kotarsis.com/${locale}/birthday`}
      />
      
      <InputPage />
    </>
  );
}

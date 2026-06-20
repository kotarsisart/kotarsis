"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { locales, type Locale } from "@/data/messages";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");

    if (
      savedLang &&
      locales.includes(savedLang as Locale)
    ) {
      router.replace(`/${savedLang}`);
      return;
    }

    const browserLang =
      navigator.language
        .split("-")[0]
        .toLowerCase();

    if (
      locales.includes(browserLang as Locale)
    ) {
      router.replace(`/${browserLang}`);
      return;
    }

    router.replace("/en");
  }, [router]);

  return null;
}

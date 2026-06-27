"use client";

import { type ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

import Preloader from "../../preloader/Preloader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LanguagePage from "@/components/LangPage/LanguagePage";

import { messages } from "../../../data/messages";

import "../../home/LangPage/_lang-page-theme.scss"

interface HomeLayoutProps {
  children: ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  const [isLangOpen, setLangOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  function handleSelectLanguage(newLang: string) {
    localStorage.setItem("lang", newLang);
    
    const segments = pathname.split("/");

    segments[1] = newLang;

    router.replace(
      segments.join("/"),
      { scroll: false }
    );

    setLangOpen(false);
  }

  return (
    <>
      <Preloader />

      <Header onOpenLanguages={() => setLangOpen(true)} />

      <main>{children}</main>

      <Footer />

      {isLangOpen && (
        <LanguagePage
          messages={messages}
          onClose={() => setLangOpen(false)}
          onSelect={handleSelectLanguage}
        />
      )}
    </>
  );
}
 
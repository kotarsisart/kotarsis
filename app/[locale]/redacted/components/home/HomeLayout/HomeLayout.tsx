"use client";

import { type ReactNode } from "react";
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

  function handleSelectLanguage(newLang: string) {
    console.log("selected locale:", newLang);

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
 
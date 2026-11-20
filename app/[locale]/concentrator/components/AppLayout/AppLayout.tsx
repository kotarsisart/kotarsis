"use client"

import { type ReactNode } from "react";
import { useState } from "react";

import Preloader from "../Preloader/Preloader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LanguagePage from "@/components/LangPage/LanguagePage";

import { useChangeLanguage } from "@/hooks/handleSelectLanguage";
import { messages } from "../../data/messages";

import "../../components/LangPage/_lang-page-theme.scss"

import "./_app-layout.scss";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  
  const [isLangOpen, setLangOpen] = useState(false);
  const changeLanguage = useChangeLanguage();

  function handleSelectLanguage(lang: string) {
    changeLanguage(lang);
    setLangOpen(false);
  }

  return (
    <div className="app-layout">

      <Preloader />

      <Header onOpenLanguages={() => setLangOpen(true)} />

      <main
        className="app-content"
      >
        {children}
      </main>

      <Footer />

      {isLangOpen && (
        <LanguagePage
          messages={messages}
          onClose={() => setLangOpen(false)}
          onSelect={handleSelectLanguage}
        />
      )}
    </div>

  );
}

"use client"

import { type ReactNode, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Preloader from "../Preloader/Preloader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import GlobalBackground from "../../elements/GlobalBackground/GlobalBackground";
import LanguagePage from "@/components/LangPage/LanguagePage";

import { messages } from "../../data/messages";

import "../../components/LangPage/_lang-page-theme.scss";
import { useChangeLanguage } from "@/hooks/handleSelectLanguage";

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
    <>
      <GlobalBackground />
      <Preloader />

      <Header onOpenLanguages={() => setLangOpen(true)} />

      <div className="base-layout">
        <main className="base-layout__main">{children}</main>
      </div>

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

import { useState } from "react";
import {
  languages,
  type LanguageItem,
} from "@/data/languages";

import "./_language-page-base.scss";

import Image from "next/image";
import { skipNextPreloader } from "@/data/preloader";

type Messages = Record<string, any>;

interface LanguagePageProps {
  onClose: () => void;
  onSelect: (langCode: string) => void;
  messages: Messages;
}

/**
 * Language selection modal.
 *
 * – Groups languages by main/sub categories
 * – Persists selected locale
 * – Uses exit animation before unmount
 */
export default function LanguagePage({
  onClose,
  onSelect,
  messages,
}: LanguagePageProps) {

  skipNextPreloader();

  const [leaving, setLeaving] = useState(false);

  function close() {
    setLeaving(true);
    setTimeout(() => onClose(), 300);
  }

  function selectLanguage(code: string) {
    const lang = languages.find((l) => l.code === code);
    if (!lang) return;

    // UI closes
    setLeaving(true);
    setTimeout(() => {
      onSelect(lang.routeCode);
    }, 300);
  }

  /**
   * Transform flat language list into:
   * mainGroup → subGroup → languages[]
   */
  const grouped = languages.reduce((acc, lang) => {
    const main = lang.mainGroup;
    const sub = lang.subGroup || "Other";

    if (!acc[main]) acc[main] = {};
    if (!acc[main][sub]) acc[main][sub] = [];

    acc[main][sub].push(lang);
    return acc;
  }, {} as Record<LanguageItem["mainGroup"], Record<string, LanguageItem[]>>);

  const enabledLocales = Object.keys(messages);

  function isEnabled(lang: LanguageItem) {
    return enabledLocales.includes(lang.routeCode);
  }

  return (
    <div className={`lang-select ${leaving ? "is-leaving" : ""}`}>

      <div className="lang-select__inner">

        <p className="lang-select__close" onClick={close}>×</p>

        {Object.entries(grouped).map(([main, subgroups]) => (
          <div key={main} className="lang-select__group">

            <h3 className="lang-select__group-title">{main} Languages</h3>

            <div className="lang-select__subgroups">

              {Object.entries(subgroups).map(([sub, langs]) => (
                <div key={sub} className="lang-select__subgroup">

                  {sub !== "Other" && (
                    <h4 className="lang-select__subgroup-title">{sub}</h4>
                  )}

                  <ul className="lang-select__list">

                    {langs.map((lang) => (
                      <li
                        key={lang.code}
                        className={`lang-select__item ${
                          isEnabled(lang) ? "" : "is-disabled"
                        }`}
                        onClick={() =>
                          isEnabled(lang) &&
                          selectLanguage(lang.code)
                        }
                      >
                        <Image
                          src={lang.flag}
                          alt={lang.alt}
                          width={50}
                          height={33}
                          className="lang-select__flag"
                        />

                        <span className="lang-select__name">{lang.name}</span>
                      </li>
                    ))}

                  </ul>

                </div>
              ))}

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

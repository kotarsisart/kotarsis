"use client";

import "./_footer.scss"

import Image from "next/image";

import BlockWrapper from "../../elements/BlockWrapper/BlockWrapper"; 
import useTypewriter from "@/hooks/useTypeWriter";

import useTypeWriterReveal from "@/utils/animations/useTypeWriterReveal";
import { useI18n } from "@/data/I18nProvider";

export default function Footer() {
  const { t } = useI18n();

  const {
    ref,
    visible,
  } = useTypeWriterReveal();

  const copyrightText = useTypewriter(
    t("footer.copyright"),
    {
      delay: 500,
      speed: 20,
      variance: 40,
    },
    visible
  );

  const footer = {
    nav: {
      links: {
        hiw: "",
        reviews: "",
        order: "",
        faq: "",
      },
    },
  }    

  return (
    <BlockWrapper>
      <footer className="footer">

        <div className="footer__nav">

          <div className="footer__nav-links">

            {Object.keys(footer.nav.links).map((key) => (
              <a
                key={key}
                href={`#${key}`}
                className="footer__nav-text"
              >
                {t(`footer.nav.links.${key}`)}
              </a>
            ))}

          </div>

          <div className="footer__nav-team">
            <a
              href="https://www.linkedin.com/company/kotarsis/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__nav-text"
            >
              {t("footer.nav.team")}
            </a>
          </div>

        </div>

        <div className="footer__me">

          <p className="footer__me-text">
            {t("footer.me.author")}
          </p>

          <a
            href="https://buymeacoffee.com/kotarsis"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__me-bmac"
          >
            <Image
              src="/projects/concentrator/images/section-icons/footer/coffee.svg"
              width={32}
              height={32}
              alt={t("footer.me.coffee")}
              className="footer__me-links-icon"
            />

            <p className="footer__me-text">
              {t("footer.me.coffee")}
            </p>
          </a>

          <a
            href="https://t.me/kotarsis_art"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__me-text"
          >
            {t("footer.me.telegram")}
          </a>

          <a
            href="mailto:kotarsis.studio@gmail.com?subject=Custom website"
            className="footer__me-text"
          >
            {t("footer.me.custom")}
          </a>

        </div>

        <div
            ref={ref}
            className="footer__copyright"
          >

          <p className="footer__copyright-text fade-right delay-200">
            {copyrightText}
          </p>

        </div>

      </footer>
    </BlockWrapper>
  );
}

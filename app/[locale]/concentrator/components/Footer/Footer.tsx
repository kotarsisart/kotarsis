"use client";

import "./_footer.scss"

import BlockWrapper from "../../elements/BlockWrapper/BlockWrapper"; 
import useTypewriter from "@/hooks/useTypeWriter";

import useTypeWriterReveal from "@/utils/animations/useTypeWriterReveal";
import { useI18n } from "@/data/I18nProvider";
import FooterLinks from "@/components/Footer/FooterLinks";

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

        <FooterLinks
          coffeeIcon="/projects/concentrator/images/section-icons/footer/coffee.svg"
          coffeeWidth={32}
          coffeeHeight={32}
          coffeeAlt={t("footer.coffeeAlt")}
        />

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

"use client"

import './_footer.scss';
import { useI18n } from "@/data/I18nProvider";

import FooterLinks from '@/components/Footer/FooterLinks';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="footer">
      {/* === NAVIGATION === */}
      <div className="footer__nav">
        <a href="#ask-oracle" className="footer__nav-text">
          {t("footer.nav.ask")}
        </a>

        <a href="#common-question" className="footer__nav-text">
          {t("footer.nav.commonQuestion")}
        </a>

        <a href="#oracle-sources" className="footer__nav-text">
          {t("footer.nav.sources")}
        </a>
      </div> 

      {/* === LINKS === */}
      <FooterLinks
        coffeeIcon="/projects/oraculux/icons/footer/coffee.svg"
        coffeeWidth={24}
        coffeeHeight={30}
        coffeeAlt={t("footer.coffeeAlt")}
      />

      {/* === CREATION INFO BLOCK === */}
      <div className="footer__outro">
        <div className="footer__about">
          <p className="footer__about-text">
            {t("footer.about.handcrafted")}
          </p>

          <p className="footer__about-text">
            {t("footer.about.noAiHarmed")}
          </p>

          {/* COPYRIGHT BLOCK */}
          <div className="footer-copyright">
            <p className="footer-copyright__item footer-copyright__item--main">
              {t("footer.copyright.main")}
            </p>

            <p className="footer-copyright__item footer-copyright__item--alt">
              {t("footer.copyright.alt")}
            </p>
          </div>
        </div>

        <p className="footer__outro-easter-egg">
          {t("footer.easterEgg")}
        </p>
      </div>
    </footer>
  );
}

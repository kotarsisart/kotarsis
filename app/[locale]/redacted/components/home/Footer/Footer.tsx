import './_footer.scss';
import { useI18n } from "@/data/I18nProvider";
import Image from 'next/image';

export default function Footer() {
  const { t } = useI18n();

  return (
    <section className="footer">
      <p className="footer__title fade-up delay-400">
        {t("footer.title")}
      </p>

      <div className="footer__links">
        <p className="footer__link">
          {t("footer.author")}
        </p>

        <a
          href="https://t.me/kotarsis_art"
          className="footer__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("footer.telegram")}
        </a>

        <a
          href="https://buymeacoffee.com/kotarsis"
          className="footer__bmac"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/projects/redacted/icons/footer/coffee.svg"
            alt={t("footer.coffeeAlt")}
            width={35}
            height={35}
            className="footer__bmac-icon"
          />
          <p className="footer__link">
            {t("footer.support")}
          </p>
        </a>

        <a
          href="mailto:kotarsis.studio@gmail.com?subject=Custom website"
          className="footer__link"
        >
          {t("footer.custom")}
        </a>
      </div>

      <p className="footer__copyright">
        {t("footer.copyright")}
      </p>
    </section>
  );
}

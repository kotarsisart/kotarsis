import "./_footer.scss";
import { useI18n } from "@/data/I18nProvider";
import Image from "next/image";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="footer">
      <p className="footer__title fade-up">
        {t("footer.title")}
      </p>

      <p className="footer__philosophy fade-up delay-400">
        {t("footer.philosophy1")}
      </p>

      <p className="footer__philosophy fade-up delay-600">
        {t("footer.philosophy2")}
      </p>

      <p className="footer__warm fade-up delay-800">
        {t("footer.warm")}
      </p>

      <div className="footer__outro">
        <a href="https://buymeacoffee.com/kotarsis"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__bmac fade-left delay-600"
        >
          <Image
            src="/icons/footer/coffee.svg"
            alt={t("footer.support.alt")}
            height={35}
            width={35}
            className="footer__bmac-icon"
          />
          <p className="footer__outro-text">
            {t("footer.support.text")}
          </p>
        </a>

        <p className="footer__outro-text fade-right delay-600">
          {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}

import FooterLinks from '@/components/Footer/FooterLinks';
import './_footer.scss';
import { useI18n } from "@/data/I18nProvider";

export default function Footer() {
  const { t } = useI18n();

  return (
    <section className="footer">
      <p className="footer__title fade fade-up delay-400">
        {t("footer.title")}
      </p>

      <FooterLinks
        coffeeIcon="/projects/birthday/icons/footer/coffee.png"
        coffeeWidth={25}
        coffeeHeight={35}
        coffeeAlt={t("footer.coffeeAlt")}
      />

      <p className="footer__copyright">
        {t("footer.copyright")}
      </p>
    </section>
  );
}

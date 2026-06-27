import './_footer.scss';
import { useI18n } from "@/data/I18nProvider";

import FooterLinks from '@/components/Footer/FooterLinks';

export default function Footer() {
  const { t } = useI18n();

  return (
    <section className="footer">
      <p className="footer__title fade-up delay-400">
        {t("footer.title")}
      </p>

      <FooterLinks
        coffeeIcon="/projects/minimalism/icons/footer/coffee.png"
        coffeeWidth={34}
        coffeeHeight={20}
        coffeeAlt={t("footer.coffeeAlt")}
      />

      <p className="footer__copyright">
        {t("footer.copyright")}
      </p>
    </section>
  );
}

import './_footer.scss';
import { useI18n } from "@/data/I18nProvider";
import FooterLinks from '@/components/Footer/FooterLinks';
export default function Footer() {
  const { t } = useI18n();

  return (
    <section className="footer" id='footer'>
      <p className="footer__title fade-up delay-400">
        {t("footer.title")}
      </p>

      <FooterLinks
        coffeeIcon="/projects/redheart/icons/footer/coffee.svg"
        coffeeWidth={30}
        coffeeHeight={30}
        coffeeAlt={t("footer.coffeeAlt")}
      />

      <p className="footer__copyright">
        {t("footer.copyright")}
      </p>
    </section>
  );
}

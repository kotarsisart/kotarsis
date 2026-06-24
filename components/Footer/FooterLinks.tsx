import { useI18n } from "@/data/I18nProvider";
import { commonMessages } from "@/data/commonMessages/index";
import Image from "next/image";

interface FooterLinksProps {
  coffeeIcon: string;
  coffeeWidth: number;
  coffeeHeight: number;
  coffeeAlt: string;
  withWrapper?: boolean;
}

export default function FooterLinks({
  coffeeIcon,
  coffeeWidth,
  coffeeHeight,
  coffeeAlt,
  withWrapper,
}: FooterLinksProps) {
  const { t, locale } = useI18n();

  const common =
    commonMessages[
      locale as keyof typeof commonMessages
    ];

  const coffeeImage = (
    <Image
      src={coffeeIcon}
      alt={coffeeAlt}
      width={coffeeWidth}
      height={coffeeHeight}
      className="footer__bmac-icon"
    />
  );

  return (
    <div className="footer__links">
      <p className="footer__link">
        {common.footer.author}
        : kotarsis_art
      </p>

      <a
        href="https://buymeacoffee.com/kotarsis"
        className="footer__bmac"
        target="_blank"
        rel="noopener noreferrer"
      >
        {withWrapper ? (
          <div className="footer__bmac-icon-wrapper">
            {coffeeImage}
          </div>
        ) : (
          coffeeImage
        )}

        <p className="footer__link">
          {t("footer.links.support")}
        </p>
      </a>


      <a
        href="mailto:kotarsis.studio@gmail.com?subject=Custom website"
        className="footer__link"
      >
        {common.footer.customSite}
      </a>
    </div>
  );
}

import "./_interpretation.scss";
import { useI18n } from "@/data/I18nProvider";

export default function Interpretation() {
  const { t } = useI18n();

  const rawLines = t("interpretation.lines") as unknown;
  const lines: string[] = Array.isArray(rawLines) ? rawLines : [];

  return (
    <section className="interpretation">
      <h2 className="interpretation__title fade-left delay-800">
        {t("interpretation.title")}
      </h2>

      <p className="interpretation__text fade-right delay-800">
        {lines.map((line, i) =>
          line === "" ? (
            <br key={i} />
          ) : (
            <span key={i}>
              {line}
              <br />
            </span>
          )
        )}
      </p>
    </section>
  );
}

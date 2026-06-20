import "./_manifesto.scss";
import { useI18n } from "@/data/I18nProvider";

export default function Manifesto() {
  const { t } = useI18n();

  const rawBlocks = t("manifesto.blocks") as unknown;
  const blocks: string[][] = Array.isArray(rawBlocks) ? rawBlocks : [];

  return (
    <section className="manifesto">
      <h2 className="manifesto__title fade-down delay-400">
        {t("manifesto.title")}
      </h2>

      <div className="manifesto__content">
        {blocks.map((block, i) => (
          <p key={i} className="manifesto__content-text fade-up delay-800">
            {block.map((line, j) => (
              <span key={j}>
                {line}
                <br />
              </span>
            ))}
          </p>
        ))}
      </div>
    </section>
  );
}

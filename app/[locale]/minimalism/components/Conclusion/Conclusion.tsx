import "./_conclusion.scss";
import { useI18n } from "@/data/I18nProvider";

import Image from "next/image";

const FIGURES = {
  triangle: "/projects/minimalism/icons/conclusion/triangle.svg",
  square: "/projects/minimalism/icons/conclusion/square.svg",
  circle: "/projects/minimalism/icons/conclusion/circle.svg",
} as const;

type ConclusionFigure = {
  key: "triangle" | "square" | "circle";
  alt: string;
};

export default function Conclusion() {
  const { t } = useI18n();

  const rawFigures = t("conclusion.figures") as unknown;
  const figures: ConclusionFigure[] = Array.isArray(rawFigures)
    ? rawFigures
    : [];

  const rawBoasting = t("conclusion.boasting") as unknown;
  const boasting: string[] = Array.isArray(rawBoasting)
    ? rawBoasting
    : [];

  return (
    <section className="conclusion">
      <div className="conclusion__main fade-up delay-800">
        <h2 className="conclusion__title">
          {t("conclusion.title")}
        </h2>

        <div className="conclusion__figures">
          {figures.map((item) => (
            <Image
              key={item.key}
              src={FIGURES[item.key]}
              alt={item.alt}
              width={80}
              height={80}
              className="conclusion__figure"
            />
          ))}
        </div>
      </div>

      {boasting.length > 0 && (
        <p className="conclusion__boasting fade-left delay-1400">
          {boasting[0]}
          <br />
          {boasting[1]}
        </p>
      )}

      <Image
        src="/projects/minimalism/icons/conclusion/octahedron.svg"
        alt={t("conclusion.octahedronAlt")}
        width={210}
        height={210}
        className="conclusion__octahedron fade-up delay-2000"
      />
    </section>
  );
}

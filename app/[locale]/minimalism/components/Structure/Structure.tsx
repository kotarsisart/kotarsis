import "./_structure.scss";
import { useI18n } from "@/data/I18nProvider";

import Image from "next/image";

const ICONS = {
  triangle: "/projects/minimalism/icons/structure/triangle.svg",
  square: "/projects/minimalism/icons/structure/square.svg",
  circle: "/projects/minimalism/icons/structure/circle.svg",
} as const;

type StructureItem = {
  key: "square" | "circle" | "triangle";
  label: string;
  alt: string;
};

export default function Structure() {
  const { t } = useI18n();

  const rawItems = t("structure.items") as unknown;
  const items: StructureItem[] = Array.isArray(rawItems) ? rawItems : [];

  const rawOutro = t("structure.outro") as unknown;
  const outro: string[] = Array.isArray(rawOutro) ? rawOutro : [];

  return (
    <section className="structure">
      <h2 className="structure__title">
        {t("structure.title")}
      </h2>

      <div className="structure__content">
        {items.map((item, index) => (
          <div className="structure__element" key={item.key}>
            <Image
              src={ICONS[item.key]}
              alt={item.alt}
              width={80}
              height={80}
              className="structure__element-figure"
            />
            <p
              className={`structure__element-meaning fade-up delay-${600 + index * 400}`}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {outro.length > 0 && (
        <p className="structure__outro">
          {outro[0]}
          <br />
          {outro[1]}
        </p>
      )}
    </section>
  );
}

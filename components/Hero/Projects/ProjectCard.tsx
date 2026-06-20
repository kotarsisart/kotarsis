import "./_project-card.scss";
import { useI18n } from "@/data/I18nProvider";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface ProjectCardProps {
  id: string;
  image: string;
  priority?: boolean;
  title: string;
  descriptionKey: string;
  link?: string;
  font: string;
  isActive: boolean;
  onToggle: () => void;
  colors: {
    bg1: string;
    bg2?: string;
    textMain: string;
    textSecondary: string;
  };
}

/**
 * ProjectCard
 *
 * Flippable card used to present a project.
 * – Front: preview image
 * – Back: description + optional link
 */
export default function ProjectCard({
  image,
  priority = false,
  title,
  descriptionKey,
  link,
  font,
  isActive,
  onToggle,
  colors,
}: ProjectCardProps) {
  const { t } = useI18n();
  const pathname = usePathname();

  const locale = 
    pathname.split("/").filter(Boolean)[0];

  return (
    <div
      className={`project-card-wrapper ${
        isActive ? "project-card-wrapper--active" : ""
      }`}
      onClick={onToggle}
    >
      <div
        className={`project-card ${
          isActive ? "project-card--flipped" : ""
        }`}
      >
        <div className="project-card__inner">
          {/* FRONT */}
          <div className="project-card__front">
            <Image
              src={image}
              className="project-card__image"
              alt={title}
              width={300}
              height={200}
              priority={priority}
            />
          </div>

          {/* BACK */}
          {link ? (
            <a
              href={`${locale}${link}`}
              className="project-card__back"
              style={{
                background: colors.bg2
                  ? `linear-gradient(180deg, ${colors.bg1}, ${colors.bg2})`
                  : colors.bg1,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3
                className={`project-card__title ${font}`}
                style={{ color: colors.textMain }}
              >
                {title}
              </h3>

              <p
                className="project-card__description"
                style={{ color: colors.textSecondary }}
              >
                {t(descriptionKey)}
              </p>

              <span
                className="project-card__link"
                style={{ color: colors.textMain }}
              >
                {t("projects.go")}
              </span>
            </a>
          ) : (
            <div
              className="project-card__back"
              style={{
                background: colors.bg2
                  ? `linear-gradient(180deg, ${colors.bg1}, ${colors.bg2})`
                  : colors.bg1,
              }}
            >
              <h3
                className={`project-card__title ${font}`}
                style={{ color: colors.textMain }}
              >
                {title}
              </h3>

              <p
                className="project-card__description"
                style={{ color: colors.textSecondary }}
              >
                {t(descriptionKey)}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

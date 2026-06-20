"use client";

import "./_gallery.scss";

import { useEffect, useState } from "react";

import BlockWrapper from "../../elements/BlockWrapper/BlockWrapper";
import GallerySwiper from "./GallerySwiper";
import GalleryDesktop from "./GalleryDesktop";

import { useI18n } from "@/data/I18nProvider";

export default function Gallery() {
  const { t } = useI18n();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 834);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  const images = [
    {
      src: "/projects/concentrator/images/gallery/front-view.jpg",
      alt: t("gallery.alts.front"),
    },
    {
      src: "/projects/concentrator/images/gallery/side-view.jpg",
      alt: t("gallery.alts.side"),
    },
    {
      src: "/projects/concentrator/images/gallery/top-angle.jpg",
      alt: t("gallery.alts.top"),
    },
    {
      src: "/projects/concentrator/images/gallery/hand_press.jpg",
      alt: t("gallery.alts.press"),
    },
    {
      src: "/projects/concentrator/images/gallery/interior.jpg",
      alt: t("gallery.alts.interior"),
    },
    {
      src: "/projects/concentrator/images/gallery/meditation.jpg",
      alt: t("gallery.alts.meditation"),
    },
    {
      src: "/projects/concentrator/images/gallery/equipment.jpg",
      alt: t("gallery.alts.equipment"),
    },
    {
      src: "/projects/concentrator/images/gallery/in-hands.jpg",
      alt: t("gallery.alts.hands"),
    },
    {
      src: "/projects/concentrator/images/gallery/full-interior.jpg",
      alt: t("gallery.alts.full"),
    },
  ];

  return (
    <BlockWrapper>
      <section className="gallery">

        <h2 className="gallery__title fade-up delay-300">
          {t("gallery.title")}
        </h2>

        {isMobile ? (
          <GallerySwiper images={images} />
        ) : (
          <GalleryDesktop images={images} />
        )}

      </section>
    </BlockWrapper>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import "./_gallery-desktop.scss"

type GalleryImage = {
  src: string;
  alt: string;
};

type Props = {
  images: GalleryImage[];
};

export default function GalleryDesktop({
  images,
}: Props) {
  const galleryRef = useRef<HTMLDivElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const setActive = (i: number) => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
    }

    hoverTimeout.current = setTimeout(() => {
      setActiveIndex(i);
    }, 100);
  };

  useEffect(() => {
    const el = galleryRef.current;

    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const start = (e: MouseEvent) => {
      isDown = true;

      el.classList.add("is-dragging");

      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    const move = (e: MouseEvent) => {
      if (!isDown) return;

      e.preventDefault();

      const x = e.pageX - el.offsetLeft;

      const walk = (x - startX) * 1.1;

      el.scrollLeft = scrollLeft - walk;
    };

    const end = () => {
      isDown = false;

      el.classList.remove("is-dragging");
    };

    el.addEventListener("mousedown", start);
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseup", end);
    el.addEventListener("mouseleave", end);

    return () => {
      el.removeEventListener("mousedown", start);
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseup", end);
      el.removeEventListener("mouseleave", end);
    };
  }, []);

  return (
    <div
      className="gallery-desktop"
      ref={galleryRef}
    >
      <div className="gallery-desktop__wrapper fade-right delay-600">

        {images.map((img, i) => (
          <Image
            key={i}
            src={img.src}
            alt={img.alt}
            width={350}
            height={450}
            priority={i === 0}
            className={`gallery-desktop__img ${
              i === activeIndex
                ? "gallery-desktop__img--active"
                : "gallery-desktop__img--inactive"
            }`}
            onMouseEnter={() => setActive(i)}
          />
        ))}

      </div>
    </div>
  );
}

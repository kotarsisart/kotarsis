"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

import Image from "next/image";
import './_gallery-swiper.scss'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type GalleryImage = {
  src: string;
  alt: string;
};

type Props = {
  images: GalleryImage[];
};

export default function GallerySwiper({
  images,
}: Props) {

  return (
    <div className="gallery-swiper fade-up delay-600">

      <Swiper
        modules={[
          Navigation,
          Pagination,
          Autoplay,
        ]}
        slidesPerView={1}
        loop={true}
        spaceBetween={8}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".gallery-swiper__pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".gallery-swiper__next",
          prevEl: ".gallery-swiper__prev",
        }}
        className="gallery-swiper__container"
      >

        {images.map((img, i) => (
          <SwiperSlide 
            key={i}
          >
            <Image
              src={img.src}
              width={300}
              height={200}
              alt={img.alt}
              priority={i === 0}
              className="gallery-swiper__img"
            />
          </SwiperSlide>
        ))}

      </Swiper>

      <div className="gallery-swiper__arrows fade-up delay-900">

        <button
          className="gallery-swiper__arrow gallery-swiper__prev"
          aria-label="Previous image"
        >
          <svg 
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          className="gallery-swiper__arrow gallery-swiper__next"
          aria-label="Next image"
        >
          <svg 
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

      </div>

      <div className="gallery-swiper__pagination fade-up delay-1200" />

    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

import {
  shouldShowPreloader,
  PRELOADER_DURATION,
  PRELOADER_FADE_DURATION,
} from "@/data/preloader";

import "./_base-preloader.scss";

interface BasePreloaderProps {
  duration?: number;
  children: React.ReactNode;
}

export default function BasePreloader({
  duration = PRELOADER_DURATION,
  children,
}: BasePreloaderProps) {

  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(true);

  // show / hide logic
  useEffect(() => {
    if (!shouldShowPreloader()) {
      const id = setTimeout(() => {
        setHidden(true);
        setMounted(false);
      }, 0);

      return () => clearTimeout(id);
    }

    let unmountTimeout: ReturnType<typeof setTimeout>;

    const hideTimeout = setTimeout(() => {
      setHidden(true);

      unmountTimeout = setTimeout(() => {
        setMounted(false);
      }, PRELOADER_FADE_DURATION);
    }, duration);

    return () => {
      clearTimeout(hideTimeout);

      if (unmountTimeout) {
        clearTimeout(unmountTimeout);
      }
    };
  }, [duration]);

  // scroll lock
  useEffect(() => {
    if (!hidden) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [hidden]);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`preloader ${
        hidden ? "preloader--hide" : ""
      }`}
    >
      {children}
    </div>
  );
}

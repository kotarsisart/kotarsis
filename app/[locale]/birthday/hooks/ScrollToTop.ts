"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const scroll = () => {
      const el = document.querySelector(".app-layout");

      if (el) {
        (el as HTMLElement).scrollTop = 0;
      }

      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      window.scrollTo(0, 0);
    };

    scroll();

    requestAnimationFrame(scroll);

    setTimeout(scroll, 50);
  }, [pathname]);

  return null;
}

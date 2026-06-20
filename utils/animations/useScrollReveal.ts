"use client"

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function useScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const selectors =
      ".fade-up, .fade-down, .fade-left, .fade-right, .zoom-in, .zoom-out, .typewriter-trigger";

    // Initial initialization
    document
      .querySelectorAll(selectors)
      .forEach((el) => observer.observe(el));

    // Watch for new elements
    const mutationObserver =
      new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (!(node instanceof HTMLElement))
              return;

            if (node.matches(selectors)) {
              observer.observe(node);
            }

            node
              .querySelectorAll(selectors)
              .forEach((el) => observer.observe(el));
          });
        });
      });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);
}

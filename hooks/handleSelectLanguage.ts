// hooks/useChangeLanguage.ts

"use client";

import { useRouter, usePathname } from "next/navigation";

export function useChangeLanguage() {
  const router = useRouter();
  const pathname = usePathname();

  return (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;

    router.replace(segments.join("/"), {
      scroll: false,
    });
  };
}

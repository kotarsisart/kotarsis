const PRELOADER_SKIP_KEY =
  "skip-next-preloader";

export const PRELOADER_DURATION = 2800;
export const PRELOADER_FADE_DURATION = 1000;

export function skipNextPreloader() {
  if (typeof window === "undefined") {
    return;
  }

  sessionStorage.setItem(
    PRELOADER_SKIP_KEY,
    "true"
  );
}

export function shouldShowPreloader() {
  if (typeof window === "undefined") {
    return true;
  }

  const skip =
    sessionStorage.getItem(
      PRELOADER_SKIP_KEY
    );

  if (skip) {
    sessionStorage.removeItem(
      PRELOADER_SKIP_KEY
    );

    return false;
  }

  return true;
}

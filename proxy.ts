import { NextRequest, NextResponse } from "next/server";

const locales = [
  "en",
  "pl",
  "uk",
  "ru",
  "be",
  "cs",
  "sk",
  "bg",
  "mk",
  "sr",
  "hr",
  "sl",
] as const;

const projects = [
  "oraculux",
  "minimalism",
  "redheart",
  "redacted",
  "concentrator",
  "birthday",
  "censored",
];

export function proxy(
  request: NextRequest
) {
  const { pathname } = request.nextUrl;

  // static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots") ||
    pathname.startsWith("/sitemap") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // already localized
  const hasLocale = locales.some(
    locale =>
      pathname === `/${locale}` ||
      pathname.startsWith(`/${locale}/`)
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  // legacy project URLs
  const project = pathname.replace("/", "");

  if (projects.includes(project)) {
    const browserLang =
      request.headers
        .get("accept-language")
        ?.split(",")[0]
        ?.split("-")[0]
        ?.toLowerCase();

    const locale =
      locales.includes(browserLang as any)
        ? browserLang
        : "en";

    return NextResponse.redirect(
      new URL(
        `/${locale}/${project}`,
        request.url
      )
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};

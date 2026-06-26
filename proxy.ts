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

type Locale = (typeof locales)[number];

const projects = [
  "oraculux",
  "minimalism",
  "redheart",
  "redacted",
  "concentrator",
  "birthday",
  "censored",
];

function getPreferredLocale(
  request: NextRequest
): Locale {

  const cookieLocale =
    request.cookies.get("lang")?.value;

  if (
    cookieLocale &&
    locales.includes(cookieLocale as Locale)
  ) {
    return cookieLocale as Locale;
  }

  const browserLang =
    request.headers
      .get("accept-language")
      ?.split(",")[0]
      ?.split("-")[0]
      ?.toLowerCase();

  if (
    browserLang &&
    locales.includes(browserLang as Locale)
  ) {
    return browserLang as Locale;
  }

  return "en";
}

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
    (locale) =>
      pathname === `/${locale}` ||
      pathname.startsWith(`/${locale}/`)
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  const locale = getPreferredLocale(request);

  // root
  if (pathname === "/") {
    return NextResponse.redirect(
      new URL(`/${locale}`, request.url)
    );
  }

  // legacy project URLs
  const project = pathname.slice(1);

  if (projects.includes(project as (typeof projects)[number])) {
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

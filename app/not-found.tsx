"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

import { messages, type Locale } from "../data/messages";

import "./globals.css"

export default function NotFound() {
  const pathname = usePathname();

  const supportedLocales = Object.keys(
    messages
  ) as Locale[];

  const localeFromUrl =
    pathname.split("/")[1] as Locale;

  const locale = supportedLocales.includes(
    localeFromUrl
  )
    ? localeFromUrl
    : "en";

  const t = messages[locale];

  const [showOrigin, setShowOrigin] =
    useState(false);

  const quotes =
    t.notFound.quotes;

  const [quote] = useState(() => {
    return quotes[
      Math.floor(Math.random() * quotes.length)
    ] || "";
  });

  const projects = [
    {
      title: "Oraculux",
      href: `/${locale}/oraculux`,
    },
    {
      title: "Minimalism",
      href: `/${locale}/minimalism`,
    },
    {
      title: "Redheart",
      href: `/${locale}/redheart`,
    },
    {
      title: "Redacted",
      href: `/${locale}/redacted`,
    },
    {
      title: "Birthday",
      href: `/${locale}/birthday`,
    },
    {
      title: "Concentrator",
      href: `/${locale}/concentrator`,
    },
  ];

  return (
    <main
      className="
        not-found-font
        min-h-screen
        bg-linear-to-br
        from-slate-50
        via-zinc-100
        to-cyan-50
      "
    >
      <div
        className="
          absolute
          left-10
          top-20
          h-40
          w-40
          rotate-12
          rounded-3xl
          bg-indigo-200/20
          blur-sm
        "
      />

      <div
        className="
          absolute
          right-20
          bottom-20
          h-56
          w-56
          -rotate-12
          rounded-3xl
          bg-cyan-200/20
          blur-sm
        "
      />

      <section
        className="
          relative
          min-h-screen
          mx-auto
          max-w-6xl
          flex
          flex-col
          items-center
          justify-center
          px-6
          py-16
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            overflow-hidden
          "
        >
          <span
            className="
              absolute
              left-1/2
              top-1/4
              md:top-1/2
              -translate-x-1/2
              -translate-y-1/2
              text-[150px]
              md:text-[280px]
              font-black
            text-zinc-300/30
              blur-[2px]
            "
          >
            404
          </span>
        </div>

        <h1 
          className="
            text-center text-xl md:text-4xl font-bold text-zinc-900
          "
        >
          {t.notFound.title}
        </h1>

        <p 
          className="
            mt-4 max-w-2xl
            text-center text-base
            text-zinc-600
          "
        >
          {t.notFound.description}
        </p>

        <Link
          href={`/${locale}`}
          className="
            relative
            z-10
            mt-8
            rounded-2xl
            bg-zinc-900/50
            px-6
            py-3
            text-white
            transition
            hover:scale-105
            hover:bg-zinc-900/70
          "
        >
          {t.notFound.home}
        </Link>

        <div className="mt-16 w-full">
          <h2 
            className="
              mb-6
              text-center text-xl md:text-2xl
              font-semibold
            "
          >
            {t.notFound.worlds}
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="
                  rounded-3xl
                  border
                  border-white/50
                  backdrop-blur-xl
                  shadow-xl
                  p-6
                  transition
                  duration-300
                  hover:-translate-y-1
                "
              >
                <h3 className="text-lg font-bold">
                  {project.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        <div
          onClick={() =>
            setShowOrigin(true)
          }
          className="
            mt-10
            cursor-pointer
            text-zinc-300
            text-2xl
            md:text-4xl
            select-none
          "
        >
          •
        </div>

        {showOrigin && (
          <Link
            href="https://origin.kotarsis.com"
            className="
              mt-6
              text-sm
              text-zinc-400
              transition
              hover:text-zinc-700
            "
          >
            {t.notFound.origin}
          </Link>
        )}

        {quote && (
          <p className="
              mt-16
              text-sm
              text-center text-zinc-500 italic
            "
          >
            {quote}
          </p>
        )}
      </section>
    </main>
  );
}
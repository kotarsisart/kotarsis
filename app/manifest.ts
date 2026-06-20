import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "kotarsis",

    short_name: "kotarsis",

    description:
      "kotarsis — where thoughts become transparent",

    start_url: "/",

    scope: "/",

    display: "standalone",

    background_color: "#F6F4FF",

    theme_color: "#F6F4FF",

    icons: [
      {
        src: "/favicon/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

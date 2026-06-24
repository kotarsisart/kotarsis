export function createFaviconSet(project?: string) {
  const basePath = project
    ? `/projects/${project}/favicon`
    : "/favicon";

  return {
    icon: [
      {
        url: `${basePath}/favicon.svg`,
        type: "image/svg+xml",
      },
      {
        url: `${basePath}/favicon.ico`,
      },
      {
        url: `${basePath}/icon-16.png`,
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: `${basePath}/icon-32.png`,
        sizes: "32x32",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: `${basePath}/apple-touch-icon.png`,
        sizes: "180x180",
      },
    ],
  };
}

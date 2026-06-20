export function createSchema({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",

    name: title,

    description,

    url,

    publisher: {
      "@type": "Organization",

      name: "kotarsis",

      url: "https://kotarsis.com",
    },
  };
}

interface SeoSchemaProps {
  title: string;
  description: string;
  url: string;
}

export default function SeoSchema({
  title,
  description,
  url,
}: SeoSchemaProps) {
  const schema = {
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

import { site } from "@/lib/site-data";
import { brandAssets } from "@/lib/brand-assets";

type Props =
  | { type: "organization" }
  | { type: "website" }
  | {
      type: "article";
      title: string;
      description: string;
      datePublished: string;
      author: string;
      url: string;
    }
  | {
      type: "breadcrumb";
      items: { name: string; url: string }[];
    };

export function SchemaMarkup(props: Props) {
  let data: unknown = null;

  if (props.type === "organization") {
    data = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: `${site.url}${brandAssets.logo.dark}`,
      image: `${site.url}${brandAssets.favicon}`,
      description: site.description,
      sameAs: [site.social.x, site.social.linkedin, site.social.github],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: site.email,
        availableLanguage: ["English"]
      }
    };
  } else if (props.type === "website") {
    data = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.name,
      url: site.url,
      description: site.description
    };
  } else if (props.type === "article") {
    data = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: props.title,
      description: props.description,
      datePublished: props.datePublished,
      author: { "@type": "Person", name: props.author },
      url: props.url,
      publisher: {
        "@type": "Organization",
        name: site.name,
        url: site.url,
        logo: {
          "@type": "ImageObject",
          url: `${site.url}${brandAssets.logo.dark}`
        }
      }
    };
  } else if (props.type === "breadcrumb") {
    data = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: props.items.map((item, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: item.name,
        item: item.url
      }))
    };
  }

  if (!data) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

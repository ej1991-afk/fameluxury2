import { categoryLabels } from "@/lib/blog";
import { cars, getAllBrands } from "@/lib/cars";
import { faqItems } from "@/lib/faq";
import { resolveImageSrc } from "@/lib/images";
import { siteConfig } from "@/lib/site";
import type { BlogPost } from "@/lib/types";

export const defaultKeywords = [
  "luxury car rental Dubai",
  "supercar rental Dubai",
  "rent Ferrari Dubai",
  "rent Lamborghini Dubai",
  "self drive luxury car Dubai",
  "no deposit car rental Dubai",
  "convertible car rental Dubai",
  "luxury SUV rental Dubai",
  "Rolls-Royce rental Dubai",
  "Porsche rental Dubai",
];

export function localBusinessJsonLd() {
  const sameAs = [
    siteConfig.googleBusinessUrl,
    siteConfig.url,
  ].filter(Boolean);

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["AutoRental", "LocalBusiness"],
    name: siteConfig.name,
    legalName: siteConfig.legalEntity,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    image: `${siteConfig.url}/hero.webp`,
    description: siteConfig.description,
    telephone: `+${siteConfig.phoneRaw}`,
    email: siteConfig.email,
    priceRange: "AED 999–AED 5999",
    currenciesAccepted: "AED",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addressStreet,
      addressLocality: siteConfig.addressLocality,
      addressRegion: siteConfig.addressRegion,
      addressCountry: siteConfig.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
    areaServed: [
      "Dubai",
      "Dubai Marina",
      "Downtown Dubai",
      "Palm Jumeirah",
      "DXB Airport",
    ].map((name) => ({ "@type": "City", name })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Luxury car rental fleet",
      itemListElement: getAllBrands().map((brand) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Car",
          brand,
          name: `${brand} rental Dubai`,
        },
      })),
    },
  };

  if (sameAs.length) {
    jsonLd.sameAs = sameAs;
  }

  if (siteConfig.googleRating > 0 && siteConfig.googleReviewCount > 0) {
    jsonLd.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: siteConfig.googleRating,
      reviewCount: siteConfig.googleReviewCount,
      bestRating: 5,
      worstRating: 1,
    };
  }

  return jsonLd;
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-AE",
  };
}

export function faqJsonLd(items = faqItems) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function vehicleJsonLd(car: (typeof cars)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Car",
    name: `${car.brand} ${car.name}`,
    brand: { "@type": "Brand", name: car.brand },
    model: car.name,
    description: `Rent the ${car.brand} ${car.name} in Dubai from AED ${car.pricePerDay}/day. Self-drive luxury car rental with hotel, residence, and airport delivery.`,
    vehicleSeatingCapacity: car.specs.seats,
    vehicleTransmission: car.specs.transmission,
    vehicleEngine: car.specs.engine,
    offers: {
      "@type": "Offer",
      priceCurrency: "AED",
      price: car.pricePerDay,
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/fleet/${car.slug}`,
      priceValidUntil: "2027-12-31",
    },
  };
}

export function absoluteImageUrl(src: string): string {
  const resolved = resolveImageSrc(src);
  if (resolved.startsWith("http")) return resolved;
  return `${siteConfig.url}${resolved.startsWith("/") ? resolved : `/${resolved}`}`;
}

function blogWordCount(post: BlogPost): number {
  return post.content.reduce((total, block) => {
    if (block.type === "h2" || block.type === "p") {
      return total + block.text.split(/\s+/).filter(Boolean).length;
    }
    if (block.type === "ul") {
      return total + block.items.join(" ").split(/\s+/).filter(Boolean).length;
    }
    if (block.type === "faq") {
      return (
        total +
        block.items.reduce(
          (sum, item) =>
            sum +
            `${item.question} ${item.answer}`.split(/\s+/).filter(Boolean).length,
          0,
        )
      );
    }
    return total;
  }, 0);
}

export function articleJsonLd(post: BlogPost) {
  const imageUrl = absoluteImageUrl(post.image);
  const pageUrl = `${siteConfig.url}/blog/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalEntity,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.svg`,
      },
    },
    image: {
      "@type": "ImageObject",
      url: imageUrl,
      width: 1600,
      height: 1000,
    },
    articleSection: categoryLabels[post.category],
    keywords: post.keywords.join(", "),
    wordCount: blogWordCount(post),
    inLanguage: "en-AE",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    isPartOf: {
      "@type": "Blog",
      name: `${siteConfig.name} Blog`,
      url: `${siteConfig.url}/blog`,
    },
  };
}

export function blogIndexJsonLd(posts: BlogPost[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${siteConfig.name} Blog — Luxury Car Rental Dubai`,
    description:
      "Guides and advice for luxury car rental, supercar hire, and self-drive experiences in Dubai.",
    url: `${siteConfig.url}/blog`,
    inLanguage: "en-AE",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt ?? post.publishedAt,
      image: absoluteImageUrl(post.image),
      articleSection: categoryLabels[post.category],
      url: `${siteConfig.url}/blog/${post.slug}`,
    })),
  };
}

export function blogPostFaqs(post: BlogPost) {
  return post.content.flatMap((block) =>
    block.type === "faq" ? block.items : [],
  );
}

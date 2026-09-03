import { cars, getAllBrands } from "@/lib/cars";
import { faqItems } from "@/lib/faq";
import { siteConfig } from "@/lib/site";

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

export function articleJsonLd(post: {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  image: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.svg` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    image: post.image.startsWith("http")
      ? post.image
      : `${siteConfig.url}${post.image}`,
    keywords: post.keywords?.join(", "),
    inLanguage: "en-AE",
    isPartOf: {
      "@type": "Blog",
      name: `${siteConfig.name} Blog`,
      url: `${siteConfig.url}/blog`,
    },
  };
}

export function blogIndexJsonLd(
  posts: { slug: string; title: string; excerpt: string; publishedAt: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${siteConfig.name} Blog — Luxury Car Rental Dubai`,
    description:
      "Guides and advice for luxury car rental, supercar hire, and self-drive experiences in Dubai.",
    url: `${siteConfig.url}/blog`,
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
      url: `${siteConfig.url}/blog/${post.slug}`,
    })),
  };
}

export function blogPostFaqs(post: {
  content: { type: string; items?: { question: string; answer: string }[] }[];
}) {
  return post.content
    .filter((block) => block.type === "faq")
    .flatMap((block) => block.items ?? []);
}

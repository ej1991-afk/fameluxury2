import Link from "next/link";
import { BlogCard } from "@/components/BlogCard";
import { BlogFilter } from "@/components/BlogFilter";
import { JsonLd } from "@/components/JsonLd";
import {
  categoryLabels,
  categorySeo,
  getAllPosts,
  getFeaturedPost,
} from "@/lib/blog";
import { blogIndexJsonLd, breadcrumbJsonLd, defaultKeywords } from "@/lib/seo";
import { whatsappUrl } from "@/lib/site";
import type { BlogCategory } from "@/lib/types";
import type { Metadata } from "next";

interface BlogPageProps {
  searchParams: Promise<{ category?: string }>;
}

export async function generateMetadata({
  searchParams,
}: BlogPageProps): Promise<Metadata> {
  const { category } = await searchParams;
  const isCategory =
    category && category !== "all" && category in categoryLabels;

  if (isCategory) {
    const seo = categorySeo[category as BlogCategory];
    return {
      title: seo.title,
      description: seo.description,
      keywords: [
        ...defaultKeywords,
        categoryLabels[category as BlogCategory].toLowerCase(),
        "luxury car rental Dubai blog",
      ],
      alternates: {
        canonical: `/blog?category=${category}`,
      },
      openGraph: {
        title: seo.title,
        description: seo.description,
        type: "website",
        url: `/blog?category=${category}`,
      },
    };
  }

  return {
    title: "Luxury Car Rental Dubai Blog | Guides & Supercar Tips",
    description:
      "Expert guides to luxury car rental in Dubai — supercar prices, documents, no-deposit hire, scenic drives, Ferrari & Lamborghini tips from Fame Luxury.",
    keywords: [
      ...defaultKeywords,
      "luxury car rental Dubai blog",
      "supercar rental Dubai guide",
      "Dubai car rental tips",
    ],
    alternates: { canonical: "/blog" },
    openGraph: {
      title: "Luxury Car Rental Dubai Blog | Fame Luxury",
      description:
        "Guides and advice for renting Ferrari, Lamborghini, Rolls-Royce, and luxury SUVs in Dubai.",
      type: "website",
      url: "/blog",
    },
  };
}

const topicLinks = [
  {
    href: "/fleet",
    label: "Browse the fleet",
    detail: "Ferrari, Lamborghini, Rolls-Royce & more",
  },
  {
    href: "/faq",
    label: "Rental FAQ",
    detail: "Documents, deposits, delivery & mileage",
  },
  {
    href: "/locations",
    label: "Delivery areas",
    detail: "Hotels, Palm, Marina & DXB",
  },
  {
    href: "/contact",
    label: "Contact concierge",
    detail: "WhatsApp booking support",
  },
];

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category } = await searchParams;
  const featured = getFeaturedPost();
  let posts = getAllPosts();
  const activeCategory =
    category && category !== "all" ? (category as BlogCategory) : null;

  if (activeCategory) {
    posts = posts.filter((post) => post.category === activeCategory);
  }

  const listPosts =
    activeCategory || !featured
      ? posts
      : posts.filter((post) => post.slug !== featured.slug);

  const heading = activeCategory
    ? categorySeo[activeCategory].title
    : "Luxury car rental Dubai guides & tips";

  const intro = activeCategory
    ? categorySeo[activeCategory].description
    : "Practical advice for renting a luxury car or supercar in Dubai — prices, documents, no-deposit options, scenic drives, and model comparisons from Fame Luxury.";

  return (
    <div className="py-10 sm:py-16">
      <JsonLd data={blogIndexJsonLd(getAllPosts())} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          ...(activeCategory
            ? [
                {
                  name: categoryLabels[activeCategory],
                  path: `/blog?category=${activeCategory}`,
                },
              ]
            : []),
        ])}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold">
            Fame Luxury Blog
          </p>
          <h1 className="font-display mt-2 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {heading}
          </h1>
          <p className="mt-4 text-muted">{intro}</p>
        </div>

        {!activeCategory && (
          <nav
            aria-label="Popular rental topics"
            className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          >
            {topicLinks.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className="rounded-2xl border border-border bg-surface/60 px-4 py-3 transition-colors hover:border-gold/40"
              >
                <span className="block text-sm font-semibold text-foreground">
                  {topic.label}
                </span>
                <span className="mt-1 block text-xs text-muted">{topic.detail}</span>
              </Link>
            ))}
          </nav>
        )}

        <div className="relative z-20 mt-8">
          <BlogFilter active={category ?? "all"} />
        </div>

        {!activeCategory && featured && (
          <div className="mt-8">
            <BlogCard post={featured} featured />
          </div>
        )}

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <p className="mt-12 text-center text-muted">
            No articles in{" "}
            {activeCategory ? categoryLabels[activeCategory] : "this category"}{" "}
            yet.
          </p>
        )}

        <section className="mt-14 rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-lg font-bold">
            Ready to rent a luxury car in Dubai?
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Browse Ferrari, Lamborghini, Rolls-Royce, and luxury SUV rentals — or
            message our concierge for a same-day WhatsApp quote with delivery
            options.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/fleet"
              className="inline-flex h-11 items-center justify-center rounded-full bg-gold px-6 text-sm font-semibold text-background"
            >
              View fleet & prices
            </Link>
            <a
              href={whatsappUrl(
                "Hi Fame Luxury! I read your blog and want a luxury car rental quote in Dubai.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full border border-border px-6 text-sm font-semibold text-foreground"
            >
              WhatsApp concierge
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

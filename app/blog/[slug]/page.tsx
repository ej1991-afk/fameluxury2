import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/BlogCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import {
  blogPosts,
  categoryLabels,
  formatBlogDate,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";
import { resolveImageSrc } from "@/lib/images";
import {
  articleJsonLd,
  blogPostFaqs,
  breadcrumbJsonLd,
  defaultKeywords,
  faqJsonLd,
} from "@/lib/seo";
import { siteConfig, whatsappUrl } from "@/lib/site";
import type { BlogContentBlock } from "@/lib/types";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const title = post.title;
  const description = post.excerpt;
  const image = resolveImageSrc(post.image);

  return {
    title,
    description,
    keywords: [...post.keywords, ...defaultKeywords.slice(0, 4)],
    authors: [{ name: post.author }],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author],
      images: [{ url: image, alt: post.imageAlt ?? post.title }],
      url: `/blog/${post.slug}`,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

function ContentBlock({ block }: { block: BlogContentBlock }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "p":
      return <p>{block.text}</p>;
    case "ul":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "faq":
      return (
        <section className="blog-faq" aria-label="Frequently asked questions">
          <h2>Frequently asked questions</h2>
          <div className="space-y-4">
            {block.items.map((item) => (
              <details key={item.question} className="blog-faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      );
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const related = getRelatedPosts(post.slug);
  const faqs = blogPostFaqs(post);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  return (
    <article className="py-10 sm:py-16">
      <JsonLd data={articleJsonLd(post)} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      {faqs.length > 0 && <JsonLd data={faqJsonLd(faqs)} />}

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={crumbs.slice(1)} />

        <Reveal as="header" className="mt-6">
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
            <Link
              href={`/blog?category=${post.category}`}
              className="rounded-full border border-border px-2.5 py-1 font-bold uppercase tracking-wider text-gold hover:border-gold/50"
            >
              {categoryLabels[post.category]}
            </Link>
            <time dateTime={post.publishedAt}>
              {formatBlogDate(post.publishedAt)}
            </time>
            {post.updatedAt && post.updatedAt !== post.publishedAt && (
              <>
                <span aria-hidden="true">&middot;</span>
                <span>
                  Updated{" "}
                  <time dateTime={post.updatedAt}>
                    {formatBlogDate(post.updatedAt)}
                  </time>
                </span>
              </>
            )}
            <span aria-hidden="true">&middot;</span>
            <span>{post.readTime} min read</span>
          </div>

          <h1 className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-muted">{post.excerpt}</p>

          <p className="mt-4 text-sm text-muted">By {post.author}</p>
        </Reveal>

        <Reveal className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-border">
          <Image
            src={resolveImageSrc(post.image)}
            alt={post.imageAlt ?? post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </Reveal>

        <Reveal className="blog-content mt-10">
          {post.content.map((block, i) => (
            <ContentBlock key={i} block={block} />
          ))}
        </Reveal>

        <Reveal
          as="nav"
          aria-label="Related resources"
          className="mt-10 flex flex-wrap gap-3 text-sm"
        >
          <Link href="/fleet" className="text-gold underline-offset-4 hover:underline">
            Luxury car fleet
          </Link>
          <span className="text-border" aria-hidden="true">
            /
          </span>
          <Link href="/faq" className="text-gold underline-offset-4 hover:underline">
            Rental FAQ
          </Link>
          <span className="text-border" aria-hidden="true">
            /
          </span>
          <Link
            href="/contact"
            className="text-gold underline-offset-4 hover:underline"
          >
            Contact
          </Link>
          <span className="text-border" aria-hidden="true">
            /
          </span>
          <Link href="/blog" className="text-gold underline-offset-4 hover:underline">
            All guides
          </Link>
        </Reveal>

        <Reveal className="mt-12 rounded-2xl border border-border bg-surface p-6 text-center sm:p-8">
          <h2 className="text-lg font-bold">
            Rent a luxury car in Dubai with Fame Luxury
          </h2>
          <p className="mt-2 text-sm text-muted">
            Self-drive Ferrari, Lamborghini, Rolls-Royce, and SUV hire with hotel
            and DXB delivery. Get a WhatsApp quote in minutes.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/fleet"
              className="inline-flex h-11 items-center rounded-full bg-gold px-6 text-sm font-semibold text-background"
            >
              Browse Fleet
            </Link>
            <a
              href={whatsappUrl(
                `Hi Fame Luxury! I read "${post.title}" and want a rental quote in Dubai.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center rounded-full border border-border px-6 text-sm font-semibold text-foreground"
            >
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>

        {related.length > 0 && (
          <section className="mt-14">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                Related guides
              </h2>
              <p className="mt-2 text-sm text-muted">
                Keep planning your Dubai luxury car rental with these articles.
              </p>
            </Reveal>
            <Reveal stagger className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <BlogCard key={item.slug} post={item} heading="h3" />
              ))}
            </Reveal>
          </section>
        )}
      </div>
    </article>
  );
}

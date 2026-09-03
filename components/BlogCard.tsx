import Image from "next/image";
import Link from "next/link";
import { categoryLabels, formatBlogDate } from "@/lib/blog";
import { resolveImageSrc } from "@/lib/images";
import type { BlogPost } from "@/lib/types";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  heading?: "h2" | "h3";
}

export function BlogCard({ post, featured, heading = "h2" }: BlogCardProps) {
  const Title = heading;
  return (
    <article
      className={`group overflow-hidden rounded-xl border border-border bg-surface-elevated transition-all duration-300 hover:border-gold/30 hover:gold-glow ${
        featured ? "sm:col-span-2 sm:grid sm:grid-cols-2" : ""
      }`}
    >
      <Link
        href={`/blog/${post.slug}`}
        className={`relative block overflow-hidden ${
          featured ? "aspect-[16/10] sm:aspect-auto sm:min-h-full" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={resolveImageSrc(post.image)}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={featured ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 100vw, 33vw"}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-background/80 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-gold backdrop-blur-sm">
          {categoryLabels[post.category]}
        </span>
      </Link>

      <div className={`flex flex-col p-5 ${featured ? "sm:justify-center sm:p-8" : ""}`}>
        <div className="flex items-center gap-3 text-xs text-muted">
          <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{post.readTime} min read</span>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <Title
            className={`mt-2 font-display font-semibold text-foreground transition-colors group-hover:text-gold ${
              featured ? "text-xl sm:text-2xl" : "text-lg"
            }`}
          >
            {post.title}
          </Title>
        </Link>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 text-sm font-semibold text-gold hover:text-gold-light"
        >
          Read article &rarr;
        </Link>
      </div>
    </article>
  );
}

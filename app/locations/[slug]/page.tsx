import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import {
  getLocationBySlug,
  getLocationPages,
} from "@/lib/locations";
import { breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig, whatsappUrl } from "@/lib/site";
import type { Metadata } from "next";

interface LocationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getLocationPages().map((location) => ({ slug: location.slug! }));
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};

  return {
    title: location.seoTitle ?? `${location.name} luxury car rental`,
    description: location.seoDescription ?? location.description,
    alternates: { canonical: `/locations/${location.slug}` },
    openGraph: {
      title: location.seoTitle,
      description: location.seoDescription,
      type: "website",
      url: `/locations/${location.slug}`,
    },
  };
}

export default async function LocationDetailPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location || !location.slug) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations" },
    { name: location.name, path: `/locations/${location.slug}` },
  ];

  const related = getLocationPages().filter((item) => item.slug !== location.slug);

  return (
    <div className="py-10 sm:py-16">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={crumbs.slice(1)} />

        <Reveal className="mt-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold">
            Delivery area
          </p>
          <h1 className="font-display mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Luxury car rental in {location.name}
          </h1>
          <p className="mt-4 text-lg text-muted">
            {location.longDescription ?? location.description}
          </p>
        </Reveal>

        {location.highlights && (
          <Reveal as="ul" stagger className="mt-8 space-y-3">
            {location.highlights.map((item) => (
              <li key={item} className="flex gap-2 text-muted">
                <span className="text-gold">✓</span>
                {item}
              </li>
            ))}
          </Reveal>
        )}

        <Reveal className="mt-10 rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-lg font-bold">
            Book {location.name} delivery with {siteConfig.name}
          </h2>
          <p className="mt-2 text-sm text-muted">
            Tell us your hotel or pin location, dates, and preferred car. We
            confirm availability and AED rates on WhatsApp before payment.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <WhatsAppLink
              href={whatsappUrl(
                `Hi Fame Luxury! I need luxury car delivery in ${location.name}.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              eventLabel={`location_${location.slug}`}
              className="inline-flex h-11 items-center justify-center rounded-full bg-gold px-6 text-sm font-semibold text-background"
            >
              WhatsApp for {location.name}
            </WhatsAppLink>
            <Link
              href="/fleet"
              className="inline-flex h-11 items-center justify-center rounded-full border border-border px-6 text-sm font-semibold"
            >
              Browse fleet
            </Link>
          </div>
        </Reveal>

        {related.length > 0 && (
          <Reveal as="section" className="mt-12">
            <h2 className="text-lg font-bold">Other Dubai delivery areas</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/locations/${item.slug}`}
                    className="rounded-full border border-border px-4 py-2 text-sm hover:border-gold/40"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </div>
  );
}

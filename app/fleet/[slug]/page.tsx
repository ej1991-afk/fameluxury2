import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CarImage } from "@/components/CarImage";
import { CompareButton } from "@/components/CompareButton";
import { FleetCard } from "@/components/FleetCard";
import { IconAwd, IconCheck, IconGauge, IconSeats, IconSpeed, IconWhatsApp } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { categoryLabels, cars, getCarBySlug, getCarsByBrand } from "@/lib/cars";
import { vehicleJsonLd } from "@/lib/seo";
import { siteConfig, whatsappCarUrl } from "@/lib/site";
import type { Metadata } from "next";

interface CarDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return cars.map((car) => ({ slug: car.slug }));
}

export async function generateMetadata({
  params,
}: CarDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) return { title: "Vehicle Not Found" };
  const fullName = `${car.brand} ${car.name}`;
  const title = `Rent ${fullName} in Dubai`;
  const description = `Rent the ${fullName} in Dubai from AED ${car.pricePerDay}/day. Self-drive ${categoryLabels[car.category].toLowerCase()} rental with hotel, residence, and airport delivery.`;
  return {
    title,
    description,
    alternates: { canonical: `/fleet/${car.slug}` },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      type: "website",
    },
  };
}

export default async function CarDetailPage({ params }: CarDetailPageProps) {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) notFound();

  const fullName = `${car.brand} ${car.name}`;
  const related = getCarsByBrand(car.brand)
    .filter((item) => item.id !== car.id)
    .slice(0, 3);

  return (
    <div className="py-10 sm:py-16">
      <JsonLd data={vehicleJsonLd(car)} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Fleet", path: "/fleet" },
            { name: fullName, path: `/fleet/${car.slug}` },
          ]}
        />

        <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-border">
            <CarImage car={car} priority sizes="(max-width: 1024px) 100vw, 50vw" />
            {car.noDeposit && (
              <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase text-background">
                No Deposit
              </span>
            )}
          </Reveal>

          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold">
              {car.brand} rental Dubai
            </p>
            <h1 className="font-display mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
              {fullName}
            </h1>
            <p className="mt-3 text-muted">{car.tagline}. Self-drive luxury car rental with concierge delivery across Dubai.</p>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
                {categoryLabels[car.category]}
              </span>
            </div>

            <div className="luxury-panel mt-6 p-5">
              <p className="text-sm text-muted">Starting from</p>
              <p className="text-3xl font-extrabold text-gold">
                AED {car.pricePerDay.toLocaleString()}
                <span className="text-base font-normal text-muted"> /day</span>
              </p>
              <p className="mt-1 text-xs text-muted">
                Weekly and monthly rates available — confirm on WhatsApp.
              </p>
            </div>

            <Reveal stagger className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                {
                  label: "Horsepower",
                  value: `${car.specs.horsepower} hp`,
                  icon: IconGauge,
                },
                {
                  label: "0-100",
                  value: car.specs.acceleration.replace("0-100 km/h ", ""),
                  icon: IconSpeed,
                },
                { label: "Drive", value: car.specs.drive, icon: IconAwd },
                {
                  label: "Seats",
                  value: `${car.specs.seats}`,
                  icon: IconSeats,
                },
                { label: "Transmission", value: car.specs.transmission },
                { label: "Engine", value: car.specs.engine },
              ].map((spec) => (
                <div key={spec.label} className="luxury-panel p-3">
                  <p className="inline-flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-wider text-gold">
                    {"icon" in spec && spec.icon ? (
                      <spec.icon className="h-3.5 w-3.5" />
                    ) : null}
                    {spec.label}
                  </p>
                  <p className="mt-1 text-sm font-medium">{spec.value}</p>
                </div>
              ))}
            </Reveal>

            <div className="relative z-10 mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappCarUrl(fullName, car.pricePerDay)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-gold text-sm font-semibold text-background hover:opacity-90"
              >
                <IconWhatsApp className="h-4 w-4" />
                Enquire on WhatsApp
              </a>
              <CompareButton carId={car.id} />
            </div>
          </Reveal>
        </div>

        <Reveal as="section" className="luxury-panel mt-16 p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold">
            Rent the {fullName} in Dubai
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
            The {fullName} is available for self-drive rental with hotel, villa,
            office, DXB, and DWC handover. {siteConfig.name} confirms mileage,
            insurance, and deposit status before payment so there are no surprises
            at collection.
          </p>
          <h3 className="mt-8 text-lg font-bold">Rental includes</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "Self-drive after document verification",
              "Basic insurance coverage",
              "Concierge delivery across Dubai",
              "24/7 WhatsApp support for active bookings",
              "Daily, weekly & monthly plans",
              "Terms confirmed before payment",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-muted">
                <IconCheck className="h-4 w-4 text-gold" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        {related.length > 0 ? (
          <section className="mt-16">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold">
                More {car.brand} cars for rent
              </h2>
            </Reveal>
            <Reveal stagger className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <FleetCard key={item.id} car={item} compact />
              ))}
            </Reveal>
          </section>
        ) : null}
      </div>
    </div>
  );
}

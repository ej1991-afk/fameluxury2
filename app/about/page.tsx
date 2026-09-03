import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { siteConfig, whatsappUrl } from "@/lib/site";

export const metadata = {
  title: "About Fame Luxury | Luxury Car Rental Dubai",
  description:
    "Fame Luxury Car Rental LLC is a Dubai self-drive luxury and supercar rental company with concierge delivery to hotels, residences, and airports.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Clear terms before booking",
    description:
      "Availability, guide rate, mileage, deposit status, and handover timing are confirmed before any payment.",
  },
  {
    title: "Concierge-led experience",
    description:
      "WhatsApp-first booking with phone and email support. Every enquiry gets a personal response.",
  },
  {
    title: "Curated luxury fleet",
    description:
      "Hand-selected vehicles from the world's most prestigious brands, meticulously maintained.",
  },
  {
    title: "Flexible delivery",
    description:
      "Hotel, residence, office, and airport handover across Dubai and approved inter-emirate routes.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold">
            About Us
          </p>
          <h1 className="font-display mt-2 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Luxury car rental with concierge service in Dubai
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Welcome to Fame Luxury — your gateway to luxury on wheels in Dubai.
            More than a car rental, we are partners in creating unforgettable
            journeys with a fleet of high-end supercars, exotic cars, luxury
            SUVs, convertibles, and executive sedans.
          </p>
        </Reveal>

        <Reveal
          stagger
          className="mt-12 grid gap-4 sm:grid-cols-3"
        >
          {[
            { value: siteConfig.stats.vehicles, label: "Listed Vehicles" },
            { value: `${siteConfig.stats.brands}+`, label: "Luxury Brands" },
            { value: siteConfig.stats.deliveryAreas, label: "Delivery Areas" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-surface p-6 text-center"
            >
              <p className="text-3xl font-extrabold text-gold">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </Reveal>

        <Reveal stagger className="mt-16 grid gap-6 sm:grid-cols-2">
          {values.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-surface-elevated p-6"
            >
              <h3 className="text-base font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-16 rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-xl font-bold">Company details</h2>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { label: "Trading name", value: "Fame Luxury" },
              { label: "Legal entity", value: siteConfig.legalEntity },
              { label: "Showroom", value: siteConfig.address },
              { label: "Phone / WhatsApp", value: siteConfig.phone },
              { label: "Landline", value: siteConfig.landline },
              { label: "Email", value: siteConfig.email },
              { label: "Hours", value: siteConfig.hours },
              { label: "After hours", value: siteConfig.afterHours },
            ].map((item) => (
              <div key={item.label}>
                <dt className="text-xs font-bold uppercase tracking-wider text-gold">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm text-muted">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal className="mt-12 text-center">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center rounded-full bg-gold px-8 text-sm font-semibold text-background"
          >
            Get in Touch on WhatsApp
          </a>
          <p className="mt-4">
            <Link href="/fleet" className="text-sm text-gold hover:text-gold-light">
              Or browse our fleet &rarr;
            </Link>
          </p>
        </Reveal>
      </div>
    </div>
  );
}

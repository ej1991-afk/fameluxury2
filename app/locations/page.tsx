import Link from "next/link";
import { getLocationPages, locations } from "@/lib/locations";
import { whatsappUrl } from "@/lib/site";

export const metadata = {
  title: "Luxury Car Delivery Across Dubai",
  description:
    "Fame Luxury delivers supercars and luxury rentals across Dubai — Marina, Downtown, Palm Jumeirah, DXB, DWC, and approved inter-emirate routes.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  const featured = getLocationPages();

  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold">
            Locations
          </p>
          <h1 className="font-display mt-2 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Luxury car delivery across Dubai & the UAE
          </h1>
          <p className="mt-4 text-muted">
            Hotel, residence, office, and airport handover across major Dubai
            districts. Inter-emirate delivery quoted individually.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-lg font-bold">Popular delivery areas</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="rounded-xl border border-border bg-surface-elevated p-5 transition-colors hover:border-gold/40"
              >
                <h3 className="font-bold text-gold">{location.name}</h3>
                <p className="mt-2 text-sm text-muted">{location.description}</p>
                <span className="mt-3 inline-block text-xs font-semibold uppercase tracking-wider text-foreground">
                  View area guide →
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <div
              key={location.name}
              className="rounded-xl border border-border bg-surface-elevated p-5"
            >
              <h2 className="font-bold">
                {location.slug ? (
                  <Link
                    href={`/locations/${location.slug}`}
                    className="hover:text-gold"
                  >
                    {location.name}
                  </Link>
                ) : (
                  location.name
                )}
              </h2>
              <p className="mt-2 text-sm text-muted">{location.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-surface p-6 text-center sm:p-8">
          <h2 className="text-lg font-bold">Need delivery to a specific address?</h2>
          <p className="mt-2 text-sm text-muted">
            Share your exact location and timing on WhatsApp for a delivery quote.
          </p>
          <a
            href={whatsappUrl(
              "Hi Fame Luxury! I'd like to arrange delivery for a luxury car rental.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex h-11 items-center rounded-full bg-gold px-6 text-sm font-semibold text-background"
          >
            Request Delivery
          </a>
        </div>
      </div>
    </div>
  );
}

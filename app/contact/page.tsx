import { EnquiryForm } from "@/components/EnquiryForm";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import {
  mapsDirectionsUrl,
  mapsEmbedUrl,
  siteConfig,
  whatsappUrl,
} from "@/lib/site";

export const metadata = {
  title: "Contact Luxury Car Rental Dubai",
  description:
    "Contact Fame Luxury for supercar and luxury car rental in Dubai. WhatsApp concierge, phone, Al Quoz office map, and tourist document requirements.",
  alternates: { canonical: "/contact" },
};

const documentSections = [
  {
    title: "Tourists & visitors",
    items: [
      "Valid passport and UAE entry visa or stamp where applicable",
      "Home-country driving licence, usually held for at least one year",
      "International Driving Permit when required for your nationality",
      "Minimum age 21 (higher for selected supercars)",
    ],
  },
  {
    title: "UAE residents",
    items: [
      "Valid Emirates ID",
      "UAE driving licence held for at least one year",
      "Minimum age 21 (higher for selected supercars)",
      "Deposit or no-deposit status confirmed per vehicle",
    ],
  },
];

export default function ContactPage() {
  const hasReviewLink = Boolean(siteConfig.googleReviewUrl);

  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold">
            Contact
          </p>
          <h1 className="font-display mt-2 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Contact our Dubai concierge
          </h1>
          <p className="mt-4 text-muted">
            WhatsApp is the fastest way to check availability, confirm rates,
            and arrange delivery across Dubai. We reply during business hours.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="grid gap-6">
            <WhatsAppLink
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              eventLabel="contact_page"
              className="luxury-panel p-6 transition-colors hover:border-gold/40"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-gold">
                WhatsApp
              </p>
              <p className="mt-2 text-lg font-bold">{siteConfig.phone}</p>
              <p className="mt-2 text-sm text-muted">Primary booking channel</p>
            </WhatsAppLink>
            <a
              href={`tel:${siteConfig.landlineRaw}`}
              className="luxury-panel p-6 transition-colors hover:border-gold/40"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-gold">
                Landline
              </p>
              <p className="mt-2 text-lg font-bold">{siteConfig.landline}</p>
              <p className="mt-2 text-sm text-muted">Office line</p>
            </a>
            <div className="luxury-panel p-6">
              <h2 className="text-xl font-bold">Office & hours</h2>
              <p className="mt-2 text-muted">{siteConfig.hours}</p>
              <p className="mt-1 text-sm text-gold">{siteConfig.afterHours}</p>
              <address className="mt-4 not-italic text-sm text-muted">
                <strong className="text-foreground">{siteConfig.legalEntity}</strong>
                <br />
                {siteConfig.addressStreet}
                <br />
                {siteConfig.addressLocality}, {siteConfig.addressCountry}
                <br />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-gold hover:underline"
                >
                  {siteConfig.email}
                </a>
              </address>
              {hasReviewLink && (
                <a
                  href={siteConfig.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex h-10 items-center rounded-full bg-gold px-5 text-sm font-semibold text-background"
                >
                  Leave a Google review
                </a>
              )}
            </div>
          </div>
          <EnquiryForm />
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-surface px-4 py-3 sm:px-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gold">
              Find us on the map
            </h2>
            <a
              href={mapsDirectionsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-foreground hover:text-gold"
            >
              Open in Google Maps
            </a>
          </div>
          <iframe
            title="Fame Luxury office map"
            src={mapsEmbedUrl()}
            className="h-72 w-full border-0 bg-surface sm:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Document requirements
          </h2>
          <p className="mt-2 text-muted">
            All documents are verified before handover. Requirements may vary by
            vehicle.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {documentSections.map((section) => (
              <div key={section.title} className="luxury-panel p-6">
                <h3 className="font-bold">{section.title}</h3>
                <ul className="mt-4 space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-muted">
                      <span className="shrink-0 text-gold">&#8226;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

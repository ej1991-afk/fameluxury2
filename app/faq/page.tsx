import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { faqItems } from "@/lib/faq";
import { faqJsonLd } from "@/lib/seo";
import { whatsappUrl } from "@/lib/site";

export const metadata = {
  title: "Luxury Car Rental Dubai FAQ",
  description:
    "FAQs about luxury car rental in Dubai — tourist documents, no-deposit options, delivery, mileage, insurance, and self-drive booking with Fame Luxury.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <div className="py-10 sm:py-16">
      <JsonLd data={faqJsonLd()} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold">
            FAQ
          </p>
          <h1 className="font-display mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h1>
          <p className="mt-4 text-muted">
            Direct answers about delivery, documents, deposits, rental plans,
            and self-drive booking in Dubai.
          </p>
        </div>

        <div className="mt-10">
          <FAQ items={faqItems} />
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-surface p-6 text-center sm:p-8">
          <h2 className="text-lg font-bold">Still have questions?</h2>
          <p className="mt-2 text-sm text-muted">
            Our concierge team is ready to help on WhatsApp.
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex h-11 items-center rounded-full bg-gold px-6 text-sm font-semibold text-background"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

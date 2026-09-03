import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Internal SEO checklist",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

const week1 = [
  "Claim / verify Google Business Profile for Fame Luxury (Fame Luxury Car Rental LLC)",
  "Match GBP name, phone, address exactly to the website NAP",
  "Add website URL, WhatsApp, hours, categories (Car rental / Auto rental)",
  "Upload 10+ real fleet & office photos",
  "Copy the GBP share link and Write-a-review link into .env.local",
  "Create Google Analytics 4 property and set NEXT_PUBLIC_GA_MEASUREMENT_ID",
  "Verify domain in Google Search Console",
  "Submit https://fameluxurycarrental.ae/sitemap.xml in Search Console",
];

const ongoing = [
  "Ask every satisfied client for a Google review (WhatsApp template below)",
  "Reply to every Google review within 48 hours",
  "Post 1 GBP update per week (new car, delivery area, offer)",
  "Publish 1 blog or local page update per month",
  "Check Search Console Coverage + queries monthly",
  "Track WhatsApp clicks in GA4 (event: whatsapp_click)",
];

const directories = [
  "Google Business Profile",
  "Apple Business Connect",
  "Bing Places",
  "Dubai tourism / expat directories (manual outreach)",
  "Hotel concierge partner pages (relationship-based)",
];

export default function SeoChecklistPage() {
  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold">
          Internal · noindex
        </p>
        <h1 className="font-display mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Fame Luxury ranking checklist
        </h1>
        <p className="mt-4 text-muted">
          Ops playbook for Google Business Profile, reviews, Search Console, and
          backlink outreach. This page is blocked from indexing.
        </p>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Week 1 — foundations</h2>
          <ul className="mt-4 space-y-2">
            {week1.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-muted">
                <span className="text-gold">□</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Ongoing — reviews & signals</h2>
          <ul className="mt-4 space-y-2">
            {ongoing.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-muted">
                <span className="text-gold">□</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">.env.local keys</h2>
          <pre className="mt-4 overflow-x-auto rounded-xl border border-border bg-surface p-4 text-xs text-muted">
{`NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXX
NEXT_PUBLIC_GOOGLE_BUSINESS_URL=https://maps.google.com/?cid=...
NEXT_PUBLIC_GOOGLE_REVIEW_URL=https://search.google.com/local/writereview?placeid=...
NEXT_PUBLIC_GOOGLE_RATING=4.9
NEXT_PUBLIC_GOOGLE_REVIEW_COUNT=42`}
          </pre>
          <p className="mt-3 text-sm text-muted">
            Only set rating + review count if they match your live Google
            Business Profile. Never invent stars.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">WhatsApp review request</h2>
          <pre className="mt-4 whitespace-pre-wrap rounded-xl border border-border bg-surface p-4 text-sm text-muted">
{`Hi {{name}}, thank you for renting with Fame Luxury.
If you enjoyed the experience, a short Google review helps other travellers find us:

{{GOOGLE_REVIEW_URL}}

Thank you — the Fame Luxury team`}
          </pre>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Backlink outreach (email)</h2>
          <pre className="mt-4 whitespace-pre-wrap rounded-xl border border-border bg-surface p-4 text-sm text-muted">
{`Subject: Dubai luxury car rental resource for your readers

Hi {{name}},

I’m with Fame Luxury (Al Quoz, Dubai). We published a practical guide your audience may find useful:

{{article_url}}

If it fits your Dubai travel / lifestyle roundup, we’d appreciate a mention. Happy to share a fleet photo or quote for your piece.

Best regards,
{{your_name}}
Fame Luxury
${siteConfig.phone}
${siteConfig.url}`}
          </pre>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Citation / directory targets</h2>
          <ul className="mt-4 space-y-2">
            {directories.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-muted">
                <span className="text-gold">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-bold">Reality check</h2>
          <p className="mt-2 text-sm text-muted">
            Bigger fleets win many head terms with stronger backlinks and review
            volume. Your fastest path is local pack (GBP + reviews) plus
            long-tail pages (Marina, Palm, DXB, no-deposit, documents). Expect
            meaningful movement in 3–6 months with consistent ops — not overnight.
          </p>
        </section>
      </div>
    </div>
  );
}

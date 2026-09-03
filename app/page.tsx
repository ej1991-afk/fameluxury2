import Image from "next/image";
import Link from "next/link";
import { BrandMarquee } from "@/components/BrandMarquee";
import { CategoryShowcase } from "@/components/CategoryShowcase";
import { EnquiryForm } from "@/components/EnquiryForm";
import { FAQ } from "@/components/FAQ";
import {
  IconCar,
  IconCheck,
  IconClock,
  IconDelivery,
  IconId,
  IconPin,
  IconShield,
  IconWhatsApp,
} from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { Reviews } from "@/components/Reviews";
import { SectionHeader } from "@/components/SectionHeader";
import { BlogCard } from "@/components/BlogCard";
import { homepageCategories } from "@/lib/categories";
import { faqItems } from "@/lib/faq";
import { getAllPosts } from "@/lib/blog";
import { getCarImage, heroImage } from "@/lib/images";
import { locations } from "@/lib/locations";
import { faqJsonLd } from "@/lib/seo";
import { siteConfig, whatsappUrl } from "@/lib/site";

const trustBadges = [
  { icon: IconShield, label: "No deposit on selected models" },
  { icon: IconDelivery, label: "Free Dubai hotel & airport delivery" },
  { icon: IconClock, label: "Daily, weekly & monthly plans" },
  { icon: IconWhatsApp, label: "WhatsApp concierge, 7 days" },
];

const steps = [
  {
    number: "01",
    title: "Choose your car",
    description:
      "Browse Ferrari, Lamborghini, Rolls-Royce, Porsche, and Mercedes models with live daily rates.",
  },
  {
    number: "02",
    title: "Share dates & documents",
    description:
      "Send rental dates, delivery address, and tourist or resident documents on WhatsApp.",
  },
  {
    number: "03",
    title: "Confirm terms first",
    description:
      "Availability, mileage, deposit status, and delivery fee are confirmed before payment.",
  },
  {
    number: "04",
    title: "Drive & return",
    description:
      "Documented handover at your hotel, villa, or airport. Urgent support stays on WhatsApp.",
  },
];

const reasons = [
  {
    icon: IconCar,
    title: "Curated exotic fleet",
    body: "Hand-selected supercars, convertibles, and luxury SUVs maintained to showroom standard — not a mixed economy catalogue.",
  },
  {
    icon: IconShield,
    title: "Transparent pricing",
    body: "Guide rates on every listing. Mileage, insurance, and deposit status are confirmed in writing before you pay.",
  },
  {
    icon: IconDelivery,
    title: "Concierge delivery",
    body: "Free delivery across major Dubai districts. DXB, DWC, Palm, Marina, Downtown, and villa handover on request.",
  },
  {
    icon: IconWhatsApp,
    title: "Human support",
    body: "A real concierge handles booking, not a ticket queue. After-hours WhatsApp for active rentals.",
  },
];

const documents = [
  {
    icon: IconId,
    title: "Age",
    body: "Drivers must be at least 21. Selected Ferrari, Lamborghini, McLaren, and Rolls-Royce models require 25+.",
  },
  {
    icon: IconId,
    title: "Licence",
    body: "UAE residents need Emirates ID and a UAE licence. Tourists need a valid licence and an IDP when required.",
  },
  {
    icon: IconDelivery,
    title: "Delivery",
    body: "Free delivery across Dubai. Other emirates are quoted individually before confirmation.",
  },
];

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <JsonLd data={faqJsonLd()} />

      <section className="relative z-0 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={heroImage}
            alt="Luxury supercar rental in Dubai with Fame Luxury concierge delivery"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100dvh-4.25rem)] w-full max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div className="max-w-2xl animate-fade-in-up">
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-gold">
              Dubai · Self-drive · Concierge delivery
            </p>
            <h1 className="font-display mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Luxury car rental
              <span className="gold-gradient"> Dubai</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Rent Ferrari, Lamborghini, Rolls-Royce, Porsche, and Mercedes
              models with hotel, residence, and airport handover. Terms
              confirmed before booking — selected cars with no deposit.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/fleet"
                className="flex min-h-12 items-center justify-center rounded-full bg-gold px-8 text-sm font-semibold text-background hover:opacity-90"
              >
                Browse the fleet
              </Link>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-gold/40 px-8 text-sm font-semibold text-gold hover:bg-gold/10"
              >
                <IconWhatsApp className="h-4 w-4" />
                WhatsApp enquiry
              </a>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {trustBadges.map((badge) => (
                <li key={badge.label} className="flex items-center gap-3 text-sm text-foreground/90">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                    <badge.icon className="h-4 w-4" />
                  </span>
                  {badge.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <EnquiryForm />
          </div>
        </div>
      </section>

      <BrandMarquee />

      <section className="border-b border-border bg-surface py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
          {[
            { value: `${siteConfig.stats.vehicles}+`, label: "Curated vehicles" },
            { value: `${siteConfig.stats.brands}+`, label: "Luxury brands" },
            { value: `${siteConfig.stats.deliveryAreas}+`, label: "Delivery areas" },
            { value: "7 days", label: "Concierge support" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-semibold text-gold">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {homepageCategories.map((section) => (
        <CategoryShowcase key={section.title} section={section} />
      ))}

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <SectionHeader
              eyebrow={`Why ${siteConfig.name}`}
              title="A calmer way to rent a supercar in Dubai"
              description="Most luxury rental sites in Dubai stack the same cars, the same badges, and the same forms. Fame Luxury is built around confirmed terms, a tighter fleet, and a concierge who actually answers."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {reasons.map((reason) => (
                <article key={reason.title} className="luxury-panel p-5">
                  <reason.icon className="h-6 w-6 text-gold" />
                  <h3 className="mt-3 text-base font-bold">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{reason.body}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src={getCarImage("mercedes-g63-amg")}
              alt="Mercedes-AMG G63 luxury SUV rental in Dubai"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent" />
            <p className="absolute bottom-6 left-6 right-6 font-display text-2xl text-foreground">
              Hotel, villa, and airport handover across Dubai.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Documents"
            title="What you need to rent a luxury car in Dubai"
            description="Requirements are verified before handover. Selected supercars have a higher minimum age."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {documents.map((item, index) => (
              <article key={item.title} className="luxury-panel p-6">
                <p className="font-display text-4xl text-gold/40">0{index + 1}</p>
                <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How it works"
            title="Concierge-led booking in four steps"
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article key={step.number} className="luxury-panel p-6">
                <span className="font-display text-4xl text-gold/35">{step.number}</span>
                <h3 className="mt-3 text-base font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Delivery"
            title="We deliver across Dubai and the UAE"
            description="Free delivery to hotels, residences, offices, and both Dubai airports. Other emirates are quoted before confirmation."
            href="/locations"
            cta="View all delivery areas"
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {locations.slice(0, 12).map((location) => (
              <Link
                key={location.name}
                href="/locations"
                className="luxury-panel flex items-center gap-3 p-4 transition-colors hover:border-gold/40"
              >
                <IconPin className="h-4 w-4 shrink-0 text-gold" />
                <span>
                  <span className="block text-sm font-semibold">{location.name}</span>
                  <span className="block text-xs text-muted">{location.description}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Reviews />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Journal"
            title="Stay informed for your next drive"
            href="/blog"
            cta="View all articles"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} heading="h3" />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Luxury car rental in Dubai, answered"
            align="center"
          />
          <div className="mt-10">
            <FAQ items={faqItems} limit={6} />
          </div>
          <div className="mt-8 text-center">
            <Link href="/faq" className="text-sm font-semibold text-gold hover:text-gold-light">
              View all FAQs
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-gold">
              Book the keys
            </p>
            <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Ready to drive in Dubai?
            </h2>
            <p className="mt-4 text-muted">
              Share your dates, preferred model, and delivery location. The
              concierge confirms availability and terms before booking.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "No deposit on selected models",
                "Free delivery across Dubai",
                "Daily, weekly, and monthly rates",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}

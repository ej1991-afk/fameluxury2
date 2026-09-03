import Link from "next/link";
import { Logo } from "@/components/Logo";
import {
  IconAmex,
  IconApplePay,
  IconMastercard,
  IconPhone,
  IconPin,
  IconVisa,
  IconWhatsApp,
} from "@/components/Icons";
import { getAllBrands } from "@/lib/cars";
import { brandToSlug } from "@/lib/brands";
import { siteConfig, whatsappUrl } from "@/lib/site";

const footerLinks = {
  fleet: [
    { href: "/fleet", label: "All Vehicles" },
    { href: "/fleet?category=supercar", label: "Supercar rental Dubai" },
    { href: "/fleet?category=suv", label: "Luxury SUV rental" },
    { href: "/fleet?category=convertible", label: "Convertible rental" },
    { href: "/fleet?category=sports", label: "Sports car rental" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/locations", label: "Delivery Areas" },
    { href: "/faq", label: "FAQs" },
    { href: "/contact", label: "Contact Us" },
    { href: "/compare", label: "Compare cars" },
  ],
};

export function Footer() {
  const brands = getAllBrands();

  return (
    <footer className="border-t border-border bg-surface safe-bottom pb-24 md:pb-0">
      <div className="gold-hairline" />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {siteConfig.name} is a licensed luxury car rental company in Dubai.
              Self-drive supercars, convertibles, and SUVs with concierge delivery
              to hotels, residences, and airports.
            </p>
            <div className="mt-5 grid gap-2 text-sm text-muted">
              <a href={`tel:${siteConfig.phoneRaw}`} className="inline-flex items-center gap-2 hover:text-gold">
                <IconPhone className="h-4 w-4 text-gold" />
                {siteConfig.phone}
              </a>
              <a href={whatsappUrl()} className="inline-flex items-center gap-2 hover:text-gold">
                <IconWhatsApp className="h-4 w-4 text-gold" />
                WhatsApp concierge
              </a>
              <p className="inline-flex items-start gap-2">
                <IconPin className="mt-0.5 h-4 w-4 text-gold" />
                {siteConfig.address}
              </p>
              {siteConfig.googleReviewUrl ? (
                <a
                  href={siteConfig.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-gold hover:underline"
                >
                  Leave a Google review
                </a>
              ) : null}
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-widest text-gold">
              Fleet
            </p>
            <ul className="mt-4 space-y-2">
              {footerLinks.fleet.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-widest text-gold">
              Rent by brand
            </p>
            <ul className="mt-4 columns-2 space-y-2">
              {brands.map((brand) => (
                <li key={brand} className="break-inside-avoid">
                  <Link
                    href={`/fleet?brand=${brandToSlug(brand)}`}
                    className="text-sm text-muted hover:text-foreground"
                  >
                    {brand}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-widest text-gold">
              Company
            </p>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs font-bold uppercase tracking-widest text-gold">
              Accepted payment
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-gold">
              <IconVisa className="h-8 w-12" title="Visa" />
              <IconMastercard className="h-8 w-12" title="Mastercard" />
              <IconAmex className="h-8 w-12" title="American Express" />
              <IconApplePay className="h-8 w-12" title="Apple Pay" />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} {siteConfig.legalEntity}. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Luxury car rental Dubai · Self-drive · Daily, weekly & monthly
          </p>
        </div>
      </div>
    </footer>
  );
}

import { IconClose, IconMenu } from "@/components/Icons";

const navLinks = [
  { href: "/fleet", label: "Fleet" },
  { href: "/brands", label: "Brands" },
  { href: "/locations", label: "Locations" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  return (
    <div className="mobile-nav lg:hidden">
      <input
        type="checkbox"
        id="mobile-nav-toggle"
        className="mobile-nav-toggle"
        aria-hidden="true"
      />

      <label htmlFor="mobile-nav-toggle" className="mobile-nav-btn mobile-nav-btn-open">
        <IconMenu className="h-6 w-6 text-gold" />
        <span className="sr-only">Open menu</span>
      </label>

      <label htmlFor="mobile-nav-toggle" className="mobile-nav-btn mobile-nav-btn-close">
        <IconClose className="h-6 w-6 text-gold" />
        <span className="sr-only">Close menu</span>
      </label>

      <label
        htmlFor="mobile-nav-toggle"
        className="mobile-nav-backdrop"
        aria-hidden="true"
      />

      <nav className="mobile-nav-panel" aria-label="Mobile navigation">
        <div className="flex flex-col gap-1 px-4 pb-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="mobile-nav-link">
              {link.label}
            </a>
          ))}
          <a href="/compare" className="mobile-nav-link">
            Compare
          </a>
          <a href="/fleet" className="mobile-nav-cta">
            Browse Fleet
          </a>
        </div>
      </nav>
    </div>
  );
}

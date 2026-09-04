"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CurrencySwitcher } from "@/components/CurrencySwitcher";
import { Logo } from "@/components/Logo";
import { useCompare } from "./CompareProvider";

const navLinks = [
  { href: "/fleet", label: "Fleet" },
  { href: "/brands", label: "Brands" },
  { href: "/locations", label: "Locations" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const { compareIds } = useCompare();

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-xl safe-top">
      <div className="gold-hairline" />
      <div className="mx-auto flex min-h-[5.75rem] max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-[0.8rem] font-semibold uppercase tracking-[0.12em] transition-colors ${
                pathname === link.href
                  ? "text-gold"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/compare"
            className={`relative ml-1 rounded-lg px-3 py-2 text-[0.8rem] font-semibold uppercase tracking-[0.12em] transition-colors ${
              pathname === "/compare"
                ? "text-gold"
                : "text-muted hover:text-foreground"
            }`}
          >
            Compare
            {compareIds.length > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[0.65rem] font-bold text-background">
                {compareIds.length}
              </span>
            )}
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <CurrencySwitcher />
          <Link
            href="/fleet"
            className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Browse Fleet
          </Link>
        </div>

        <div className="flex items-center md:hidden">
          <CurrencySwitcher className="mr-16" />
        </div>
      </div>
    </header>
  );
}

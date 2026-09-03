import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { brandToSlug, getBrandDescription } from "@/lib/brands";
import { cars, getAllBrands } from "@/lib/cars";

export const metadata = {
  title: "Luxury Car Brands for Rent in Dubai",
  description:
    "Rent Lamborghini, Ferrari, Rolls-Royce, Mercedes-Benz, Porsche, and more in Dubai. Browse brand collections with self-drive concierge delivery.",
  alternates: { canonical: "/brands" },
};

export default function BrandsPage() {
  const brands = getAllBrands();

  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold">
            Brands
          </p>
          <h1 className="font-display mt-2 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Luxury car brands for rent in Dubai
          </h1>
          <p className="mt-4 text-muted">
            From Italian supercars to British grand tourers and German
            performance — explore our curated selection.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand) => {
            const brandCars = cars.filter((c) => c.brand === brand);
            const slug = brandToSlug(brand);
            return (
              <Link
                key={brand}
                href={`/fleet?brand=${slug}`}
                className="group relative flex min-h-72 flex-col overflow-hidden rounded-xl border border-[#262626] bg-[#0d0d0d] transition-[border-color,box-shadow] duration-300 hover:border-gold/35 hover:shadow-[0_16px_48px_rgba(0,0,0,0.35)]"
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <BrandLogo brand={brand} />

                <span className="flex flex-1 flex-col p-5">
                  <h2 className="text-xl font-extrabold leading-tight">
                    Rent {brand} in Dubai
                  </h2>
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-muted">
                    {getBrandDescription(brand)}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-gold transition-colors group-hover:text-gold-light">
                    Explore brand
                    <svg
                      aria-hidden
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        d="M5 12h14"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="m12 5 7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p className="mt-3 text-xs text-muted/80">
                    {brandCars.length} vehicle
                    {brandCars.length !== 1 ? "s" : ""} in fleet
                  </p>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

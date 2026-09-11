import Image from "next/image";
import Link from "next/link";
import { brandLogos, brandToSlug } from "@/lib/brands";
import { getAllBrands } from "@/lib/cars";

export function BrandMarquee() {
  const brands = getAllBrands().filter((brand) => brandLogos[brand]);
  const loop = [...brands, ...brands];

  return (
    <section
      aria-label="Luxury car brands available for rent in Dubai"
      className="overflow-hidden border-y border-border bg-surface py-6"
    >
      <div className="marquee-track flex w-max items-center gap-12 px-8">
        {loop.map((brand, index) => (
          <Link
            key={`${brand}-${index}`}
            href={`/fleet?brand=${brandToSlug(brand)}`}
            className="inline-flex h-8 shrink-0 items-center opacity-80 transition-opacity hover:opacity-100"
          >
            <Image
              src={brandLogos[brand]}
              alt={`${brand} rental Dubai`}
              width={80}
              height={32}
              unoptimized
              className="brand-logo-gold brand-marquee-logo"
              style={{ width: "auto", height: "2rem" }}
            />
            <span className="sr-only">Rent {brand} in Dubai</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

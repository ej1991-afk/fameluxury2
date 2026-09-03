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
      <div className="marquee-track flex w-max items-center gap-10 px-6">
        {loop.map((brand, index) => (
          <Link
            key={`${brand}-${index}`}
            href={`/fleet?brand=${brandToSlug(brand)}`}
            className="flex shrink-0 items-center gap-3 opacity-80 transition-opacity hover:opacity-100"
          >
            <Image
              src={brandLogos[brand]}
              alt={`${brand} rental Dubai`}
              width={112}
              height={40}
              unoptimized
              className="h-8 w-auto object-contain brand-logo-gold"
            />
            <span className="sr-only">Rent {brand} in Dubai</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

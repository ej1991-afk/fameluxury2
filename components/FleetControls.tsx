import Link from "next/link";
import { getAllBrands } from "@/lib/cars";
import {
  fleetHref,
  sortLabels,
  type FleetQuery,
  type FleetSort,
} from "@/lib/fleet";

interface FleetControlsProps {
  query: FleetQuery;
}

function chipClass(isActive: boolean) {
  return `relative z-10 inline-flex shrink-0 min-h-[44px] items-center rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
    isActive
      ? "bg-gold text-background"
      : "border border-border text-muted hover:text-foreground"
  }`;
}

export function FleetControls({ query }: FleetControlsProps) {
  const brands = getAllBrands();
  const activeBrand = query.brand ?? "";
  const activeSort = query.sort ?? "price-asc";

  return (
    <div className="space-y-4">
      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
          Brand
        </p>
        <div className="flex gap-2 overflow-x-auto overscroll-x-contain pb-1 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <Link
            href={fleetHref({ ...query, brand: undefined, page: "1" })}
            className={chipClass(!activeBrand)}
          >
            All Brands
          </Link>
          {brands.map((brand) => {
            const slug = brand.toLowerCase().replace(/\s+/g, "-");
            return (
              <Link
                key={brand}
                href={fleetHref({
                  ...query,
                  brand: slug,
                  page: "1",
                })}
                className={chipClass(activeBrand === slug)}
              >
                {brand}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs font-bold uppercase tracking-widest text-gold">
          Sort by
        </p>
        <div className="flex flex-wrap gap-2">
          {(Object.entries(sortLabels) as [FleetSort, string][]).map(
            ([key, label]) => (
              <Link
                key={key}
                href={fleetHref({ ...query, sort: key, page: "1" })}
                className={chipClass(activeSort === key)}
              >
                {label}
              </Link>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

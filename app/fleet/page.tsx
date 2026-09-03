import { FleetCard } from "@/components/FleetCard";
import { FleetControls } from "@/components/FleetControls";
import { FleetFilter } from "@/components/FleetFilter";
import { FleetPagination } from "@/components/FleetPagination";
import { FLEET_PAGE_SIZE, getFleetResults, sortLabels, type FleetSort } from "@/lib/fleet";

interface FleetPageProps {
  searchParams: Promise<{
    category?: string;
    brand?: string;
    sort?: string;
    page?: string;
  }>;
}

export const metadata = {
  title: "Luxury Car Fleet for Rent in Dubai",
  description:
    "Browse Ferrari, Lamborghini, Rolls-Royce, Porsche, and Mercedes cars for rent in Dubai. Self-drive supercars, convertibles, and luxury SUVs with concierge delivery.",
  alternates: { canonical: "/fleet" },
};

export default async function FleetPage({ searchParams }: FleetPageProps) {
  const params = await searchParams;
  const query = {
    category: params.category ?? "all",
    brand: params.brand,
    sort: params.sort ?? "price-asc",
    page: params.page ?? "1",
  };

  const { items, total, totalPages, currentPage } = getFleetResults(query);
  const activeSort: FleetSort =
    query.sort && query.sort in sortLabels
      ? (query.sort as FleetSort)
      : "price-asc";

  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold">
            Our Fleet
          </p>
          <h1 className="font-display mt-2 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Luxury car fleet for rent in Dubai
          </h1>
          <p className="mt-4 text-muted">
            {total} vehicles available. Daily, weekly, and monthly self-drive
            rentals with concierge delivery across Dubai.
          </p>
        </div>

        <div className="relative z-20 mt-8 space-y-6">
          <FleetFilter
            active={query.category}
            brand={query.brand}
            sort={activeSort}
            page={query.page}
          />
          <FleetControls query={{ ...query, sort: activeSort }} />
        </div>

        <p className="mt-6 text-sm text-muted">
          Showing {(currentPage - 1) * FLEET_PAGE_SIZE + 1}–
          {Math.min(currentPage * FLEET_PAGE_SIZE, total)} of {total} vehicles
          {activeSort !== "price-asc" && ` · ${sortLabels[activeSort]}`}
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((car) => (
            <FleetCard key={car.id} car={car} />
          ))}
        </div>

        {total === 0 && (
          <p className="mt-12 text-center text-muted">
            No vehicles match your filters. Try a different category or brand.
          </p>
        )}

        <FleetPagination
          query={{ ...query, sort: activeSort }}
          currentPage={currentPage}
          totalPages={totalPages}
          total={total}
        />
      </div>
    </div>
  );
}

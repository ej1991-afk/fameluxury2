import { FleetCard } from "@/components/FleetCard";
import { FleetFilterPanel } from "@/components/FleetFilterPanel";
import { FleetPagination } from "@/components/FleetPagination";
import { Reveal } from "@/components/Reveal";
import {
  FLEET_PAGE_SIZE,
  getFleetResults,
  sortLabels,
  type FleetSort,
} from "@/lib/fleet";

interface FleetPageProps {
  searchParams: Promise<{
    category?: string;
    brand?: string;
    sort?: string;
    page?: string;
    q?: string;
    price?: string;
    seats?: string;
    deposit?: string;
  }>;
}

export const metadata = {
  title: "Luxury Car Fleet for Rent in Dubai",
  description:
    "Browse Ferrari, Lamborghini, Rolls-Royce, Porsche, and Mercedes cars for rent in Dubai. Filter by brand, body style, price, and no-deposit models with concierge delivery.",
  alternates: { canonical: "/fleet" },
};

export default async function FleetPage({ searchParams }: FleetPageProps) {
  const params = await searchParams;
  const query = {
    category: params.category ?? "all",
    brand: params.brand,
    sort: params.sort ?? "price-asc",
    page: params.page ?? "1",
    q: params.q,
    price: params.price,
    seats: params.seats,
    deposit: params.deposit,
  };

  const { items, total, totalPages, currentPage } = getFleetResults(query);
  const activeSort: FleetSort =
    query.sort && query.sort in sortLabels
      ? (query.sort as FleetSort)
      : "price-asc";

  const resultQuery = { ...query, sort: activeSort };
  const rangeStart = total === 0 ? 0 : (currentPage - 1) * FLEET_PAGE_SIZE + 1;
  const rangeEnd = Math.min(currentPage * FLEET_PAGE_SIZE, total);

  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold">
            Our Fleet
          </p>
          <h1 className="font-display mt-2 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Luxury car fleet for rent in Dubai
          </h1>
          <p className="mt-4 text-muted">
            Search and refine {total} curated vehicles by body style, brand,
            daily rate, seats, and deposit terms — then enquire on WhatsApp.
          </p>
        </Reveal>

        <div className="relative z-20 mt-8">
          <FleetFilterPanel query={resultQuery} total={total}>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <p className="text-sm text-muted">
                Showing{" "}
                <span className="font-semibold text-foreground">
                  {rangeStart}–{rangeEnd}
                </span>{" "}
                of {total} vehicles
              </p>
              <p className="text-xs uppercase tracking-[0.16em] text-muted">
                {sortLabels[activeSort]}
              </p>
            </div>

            <Reveal stagger className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {items.map((car) => (
                <FleetCard key={car.id} car={car} />
              ))}
            </Reveal>

            {total === 0 && (
              <Reveal className="mt-12 rounded-2xl border border-border bg-surface px-6 py-10 text-center">
                <p className="font-display text-2xl font-semibold">
                  No matches in this shortlist
                </p>
                <p className="mt-2 text-sm text-muted">
                  Clear a filter or broaden the price band to see more of the
                  Fame Luxury fleet.
                </p>
              </Reveal>
            )}

            <FleetPagination
              query={resultQuery}
              currentPage={currentPage}
              totalPages={totalPages}
              total={total}
            />
          </FleetFilterPanel>
        </div>
      </div>
    </div>
  );
}

import { cars, categoryLabels, getAllBrands } from "./cars";
import type { Car, CarCategory } from "./types";

export const FLEET_PAGE_SIZE = 9;

export type FleetSort =
  | "price-asc"
  | "price-desc"
  | "power-desc"
  | "power-asc"
  | "name-asc"
  | "brand-asc";

export const sortLabels: Record<FleetSort, string> = {
  "price-asc": "Price · Low to high",
  "price-desc": "Price · High to low",
  "power-desc": "Power · Highest first",
  "power-asc": "Power · Lowest first",
  "name-asc": "Model · A–Z",
  "brand-asc": "Brand · A–Z",
};

export type PriceBand = "under-1500" | "1500-2999" | "3000-4499" | "4500-plus";

export const priceBands: {
  id: PriceBand;
  label: string;
  hint: string;
  min?: number;
  max?: number;
}[] = [
  {
    id: "under-1500",
    label: "Under 1,500",
    hint: "Entry luxury",
    max: 1499,
  },
  {
    id: "1500-2999",
    label: "1,500 – 2,999",
    hint: "Most popular",
    min: 1500,
    max: 2999,
  },
  {
    id: "3000-4499",
    label: "3,000 – 4,499",
    hint: "Flagship",
    min: 3000,
    max: 4499,
  },
  {
    id: "4500-plus",
    label: "4,500+",
    hint: "Ultra exclusive",
    min: 4500,
  },
];

export interface FleetQuery {
  category?: string;
  brand?: string;
  sort?: string;
  page?: string;
  q?: string;
  price?: string;
  seats?: string;
  deposit?: string;
}

export function brandToSlug(brand: string): string {
  return brand.toLowerCase().replace(/\s+/g, "-");
}

export function slugToBrand(slug: string): string | undefined {
  return getAllBrands().find((brand) => brandToSlug(brand) === slug);
}

export function fleetHref(query: FleetQuery): string {
  const params = new URLSearchParams();

  if (query.category && query.category !== "all") {
    params.set("category", query.category);
  }
  if (query.brand) {
    params.set("brand", query.brand);
  }
  if (query.sort && query.sort !== "price-asc") {
    params.set("sort", query.sort);
  }
  if (query.page && query.page !== "1") {
    params.set("page", query.page);
  }
  if (query.q?.trim()) {
    params.set("q", query.q.trim());
  }
  if (query.price) {
    params.set("price", query.price);
  }
  if (query.seats) {
    params.set("seats", query.seats);
  }
  if (query.deposit === "no-deposit") {
    params.set("deposit", "no-deposit");
  }

  const qs = params.toString();
  return qs ? `/fleet?${qs}` : "/fleet";
}

export function getFleetFacetCounts(base: FleetQuery = {}) {
  const withoutCategory = filterFleetCars({ ...base, category: "all" });
  const withoutBrand = filterFleetCars({ ...base, brand: undefined });

  const categoryCounts: Record<string, number> = { all: withoutCategory.length };
  for (const key of Object.keys(categoryLabels) as CarCategory[]) {
    categoryCounts[key] = withoutCategory.filter((car) => car.category === key)
      .length;
  }

  const brandCounts: Record<string, number> = {};
  for (const brand of getAllBrands()) {
    brandCounts[brandToSlug(brand)] = withoutBrand.filter(
      (car) => car.brand === brand,
    ).length;
  }

  return { categoryCounts, brandCounts };
}

export function filterFleetCars(query: FleetQuery): Car[] {
  let result = cars;

  if (query.category && query.category !== "all") {
    result = result.filter(
      (car) => car.category === (query.category as CarCategory),
    );
  }

  if (query.brand) {
    const brandName = slugToBrand(query.brand);
    if (brandName) {
      result = result.filter((car) => car.brand === brandName);
    }
  }

  if (query.q?.trim()) {
    const needle = query.q.trim().toLowerCase();
    result = result.filter((car) => {
      const haystack =
        `${car.brand} ${car.name} ${car.tagline} ${categoryLabels[car.category]}`.toLowerCase();
      return haystack.includes(needle);
    });
  }

  if (query.price) {
    const band = priceBands.find((item) => item.id === query.price);
    if (band) {
      result = result.filter((car) => {
        if (band.min != null && car.pricePerDay < band.min) return false;
        if (band.max != null && car.pricePerDay > band.max) return false;
        return true;
      });
    }
  }

  if (query.seats) {
    const seats = Number.parseInt(query.seats, 10);
    if (!Number.isNaN(seats)) {
      result = result.filter((car) => car.specs.seats >= seats);
    }
  }

  if (query.deposit === "no-deposit") {
    result = result.filter((car) => Boolean(car.noDeposit));
  }

  return result;
}

export function sortFleetCars(list: Car[], sort: string): Car[] {
  const sorted = [...list];
  const mode = (sort in sortLabels ? sort : "price-asc") as FleetSort;

  switch (mode) {
    case "price-desc":
      return sorted.sort((a, b) => b.pricePerDay - a.pricePerDay);
    case "power-desc":
      return sorted.sort((a, b) => b.specs.horsepower - a.specs.horsepower);
    case "power-asc":
      return sorted.sort((a, b) => a.specs.horsepower - b.specs.horsepower);
    case "name-asc":
      return sorted.sort((a, b) =>
        `${a.brand} ${a.name}`.localeCompare(`${b.brand} ${b.name}`),
      );
    case "brand-asc":
      return sorted.sort(
        (a, b) =>
          a.brand.localeCompare(b.brand) || a.name.localeCompare(b.name),
      );
    default:
      return sorted.sort((a, b) => a.pricePerDay - b.pricePerDay);
  }
}

export function paginateFleetCars(
  list: Car[],
  page: number,
  pageSize = FLEET_PAGE_SIZE,
) {
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * pageSize;

  return {
    items: list.slice(start, start + pageSize),
    total,
    totalPages,
    currentPage,
    pageSize,
  };
}

export function getFleetResults(query: FleetQuery) {
  const filtered = filterFleetCars(query);
  const sorted = sortFleetCars(filtered, query.sort ?? "price-asc");
  const page = Math.max(1, Number.parseInt(query.page ?? "1", 10) || 1);

  return paginateFleetCars(sorted, page);
}

export function getActiveFleetFilters(query: FleetQuery) {
  const chips: { key: string; label: string; clear: FleetQuery }[] = [];

  if (query.q?.trim()) {
    chips.push({
      key: "q",
      label: `Search: ${query.q.trim()}`,
      clear: { ...query, q: undefined, page: "1" },
    });
  }

  if (query.category && query.category !== "all") {
    chips.push({
      key: "category",
      label:
        categoryLabels[query.category as CarCategory] ?? query.category,
      clear: { ...query, category: "all", page: "1" },
    });
  }

  if (query.brand) {
    chips.push({
      key: "brand",
      label: slugToBrand(query.brand) ?? query.brand,
      clear: { ...query, brand: undefined, page: "1" },
    });
  }

  if (query.price) {
    const band = priceBands.find((item) => item.id === query.price);
    chips.push({
      key: "price",
      label: band ? `AED ${band.label}` : query.price,
      clear: { ...query, price: undefined, page: "1" },
    });
  }

  if (query.seats) {
    chips.push({
      key: "seats",
      label: `${query.seats}+ seats`,
      clear: { ...query, seats: undefined, page: "1" },
    });
  }

  if (query.deposit === "no-deposit") {
    chips.push({
      key: "deposit",
      label: "No deposit",
      clear: { ...query, deposit: undefined, page: "1" },
    });
  }

  return chips;
}

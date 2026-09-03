import { cars, getAllBrands } from "./cars";
import type { Car, CarCategory } from "./types";

export const FLEET_PAGE_SIZE = 9;

export type FleetSort = "price-asc" | "price-desc" | "name-asc" | "brand-asc";

export const sortLabels: Record<FleetSort, string> = {
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
  "name-asc": "Name: A–Z",
  "brand-asc": "Brand: A–Z",
};

export interface FleetQuery {
  category?: string;
  brand?: string;
  sort?: string;
  page?: string;
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

  const qs = params.toString();
  return qs ? `/fleet?${qs}` : "/fleet";
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

  return result;
}

export function sortFleetCars(list: Car[], sort: string): Car[] {
  const sorted = [...list];
  const mode = (sort in sortLabels ? sort : "price-asc") as FleetSort;

  switch (mode) {
    case "price-desc":
      return sorted.sort((a, b) => b.pricePerDay - a.pricePerDay);
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

export function paginateFleetCars(list: Car[], page: number, pageSize = FLEET_PAGE_SIZE) {
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

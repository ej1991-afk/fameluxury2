"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
  type ReactNode,
} from "react";
import { IconChevron, IconClose, IconMenu } from "@/components/Icons";
import { categoryLabels, getAllBrands } from "@/lib/cars";
import {
  brandToSlug,
  fleetHref,
  getActiveFleetFilters,
  getFleetFacetCounts,
  priceBands,
  sortLabels,
  type FleetQuery,
  type FleetSort,
} from "@/lib/fleet";
import type { CarCategory } from "@/lib/types";

interface FleetFilterPanelProps {
  query: FleetQuery;
  total: number;
  children: ReactNode;
}

const seatOptions = [
  { value: "2", label: "2+" },
  { value: "4", label: "4+" },
  { value: "5", label: "5+" },
  { value: "7", label: "7+" },
];

function optionClass(active: boolean) {
  return `group flex w-full items-center justify-between rounded-xl border px-3 py-2.5 text-left text-sm transition-colors ${
    active
      ? "border-gold/60 bg-gold/10 text-foreground"
      : "border-border/80 bg-background/40 text-muted hover:border-gold/35 hover:text-foreground"
  }`;
}

function FilterAccordion({
  title,
  defaultOpen = false,
  summary,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  summary?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border/70 pb-3">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center gap-3 py-2 text-left"
      >
        <span className="min-w-0 flex-1">
          <span className="block text-[0.65rem] font-bold uppercase tracking-[0.22em] text-gold">
            {title}
          </span>
          {!open && summary ? (
            <span className="mt-1 block truncate text-xs text-muted">{summary}</span>
          ) : null}
        </span>
        <IconChevron
          className={`h-4 w-4 shrink-0 text-gold transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open ? <div className="mt-2">{children}</div> : null}
    </div>
  );
}

export function FleetFilterPanel({
  query,
  total,
  children,
}: FleetFilterPanelProps) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(query.q ?? "");
  const queryRef = useRef(query);
  queryRef.current = query;

  useEffect(() => {
    setSearch(query.q ?? "");
  }, [query.q]);

  useEffect(() => {
    const handle = window.setTimeout(() => {
      const next = search.trim();
      const current = (queryRef.current.q ?? "").trim();
      if (next === current) return;
      startTransition(() => {
        router.push(
          fleetHref({
            ...queryRef.current,
            q: next || undefined,
            page: "1",
          }),
        );
      });
    }, 320);
    return () => window.clearTimeout(handle);
  }, [search, router]);

  const facets = useMemo(() => getFleetFacetCounts(query), [query]);
  const chips = getActiveFleetFilters(query);
  const brands = getAllBrands();
  const categories = Object.entries(categoryLabels) as [CarCategory, string][];
  const activeSort: FleetSort =
    query.sort && query.sort in sortLabels
      ? (query.sort as FleetSort)
      : "price-asc";

  function go(next: FleetQuery) {
    startTransition(() => {
      router.push(fleetHref({ ...next, page: "1" }));
      setOpen(false);
    });
  }

  function resetFilters() {
    setSearch("");
    startTransition(() => {
      router.push(fleetHref({}));
      setOpen(false);
    });
  }

  const hasFilters = chips.length > 0;

  const activeCategoryLabel =
    query.category && query.category !== "all"
      ? categoryLabels[query.category as CarCategory]
      : "All vehicles";
  const activePriceBand = priceBands.find((band) => band.id === query.price);
  const activeBrandLabel = query.brand
    ? brands.find((brand) => brandToSlug(brand) === query.brand)
    : undefined;

  function filtersBody() {
    return (
      <div className="space-y-4">
        <FilterAccordion
          title="Body style"
          defaultOpen
          summary={activeCategoryLabel}
        >
          <div className="grid gap-2">
            <button
              type="button"
              onClick={() => go({ ...query, category: "all" })}
              className={optionClass(
                !query.category || query.category === "all",
              )}
            >
              <span>All vehicles</span>
              <span className="text-xs text-muted">
                {facets.categoryCounts.all}
              </span>
            </button>
            {categories.map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => go({ ...query, category: key })}
                className={optionClass(query.category === key)}
              >
                <span>{label}</span>
                <span className="text-xs text-muted">
                  {facets.categoryCounts[key] ?? 0}
                </span>
              </button>
            ))}
          </div>
        </FilterAccordion>

        <FilterAccordion
          title="Daily rate"
          defaultOpen={Boolean(query.price)}
          summary={
            activePriceBand ? `AED ${activePriceBand.label}` : "Any rate"
          }
        >
          <div className="grid gap-2">
            {priceBands.map((band) => (
              <button
                key={band.id}
                type="button"
                onClick={() =>
                  go({
                    ...query,
                    price: query.price === band.id ? undefined : band.id,
                  })
                }
                className={optionClass(query.price === band.id)}
              >
                <span>
                  <span className="block font-medium text-foreground">
                    AED {band.label}
                  </span>
                  <span className="mt-0.5 block text-xs text-muted">
                    {band.hint}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </FilterAccordion>

        <FilterAccordion
          title="Brand"
          defaultOpen={Boolean(query.brand)}
          summary={activeBrandLabel ?? "All brands"}
        >
          <div className="grid gap-2">
            {brands.map((brand) => {
              const slug = brandToSlug(brand);
              const count = facets.brandCounts[slug] ?? 0;
              return (
                <button
                  key={brand}
                  type="button"
                  disabled={count === 0 && query.brand !== slug}
                  onClick={() =>
                    go({
                      ...query,
                      brand: query.brand === slug ? undefined : slug,
                    })
                  }
                  className={`${optionClass(query.brand === slug)} disabled:cursor-not-allowed disabled:opacity-35`}
                >
                  <span>{brand}</span>
                  <span className="text-xs text-muted">{count}</span>
                </button>
              );
            })}
          </div>
        </FilterAccordion>

        <div>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-gold">
            Seats
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {seatOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() =>
                  go({
                    ...query,
                    seats:
                      query.seats === option.value ? undefined : option.value,
                  })
                }
                className={`min-h-10 rounded-full border px-3.5 text-sm font-medium transition-colors ${
                  query.seats === option.value
                    ? "border-gold bg-gold text-background"
                    : "border-border text-muted hover:border-gold/40 hover:text-foreground"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-gold">
            Booking terms
          </p>
          <button
            type="button"
            onClick={() =>
              go({
                ...query,
                deposit:
                  query.deposit === "no-deposit" ? undefined : "no-deposit",
              })
            }
            className={`mt-3 ${optionClass(query.deposit === "no-deposit")}`}
          >
            <span>No deposit models only</span>
            <span
              className={`h-4 w-4 rounded-full border ${
                query.deposit === "no-deposit"
                  ? "border-gold bg-gold"
                  : "border-border"
              }`}
              aria-hidden
            />
          </button>
        </div>

        {hasFilters && (
          <button
            type="button"
            onClick={resetFilters}
            className="inline-flex min-h-10 w-full items-center justify-center rounded-full border border-border px-4 text-sm font-semibold text-foreground transition-colors hover:border-gold/40 hover:text-gold"
          >
            Reset filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={pending ? "opacity-80 transition-opacity" : undefined}>
      <div className="luxury-panel overflow-hidden p-4 sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <label className="block min-w-0 flex-1">
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-gold">
              Search fleet
            </span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Ferrari, Urus, convertible…"
              className="mt-2 w-full border-b border-border bg-transparent pb-2 text-base text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-gold"
            />
          </label>

          <div className="flex flex-wrap items-center gap-3">
            <label className="flex min-w-[13rem] flex-1 flex-col sm:flex-none">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-gold">
                Sort
              </span>
              <select
                value={activeSort}
                onChange={(event) =>
                  go({ ...query, sort: event.target.value as FleetSort })
                }
                className="mt-2 rounded-xl border border-border bg-surface px-3 py-2.5 text-sm text-foreground outline-none focus:border-gold"
              >
                {(Object.entries(sortLabels) as [FleetSort, string][]).map(
                  ([key, label]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ),
                )}
              </select>
            </label>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex min-h-11 items-center gap-2 self-end rounded-full border border-border px-4 text-sm font-semibold text-foreground lg:hidden"
            >
              <IconMenu className="h-4 w-4 text-gold" />
              Filters
              {chips.length > 0 ? ` (${chips.length})` : ""}
            </button>
          </div>
        </div>

        {hasFilters && (
          <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border/70 pt-4">
            {chips.map((chip) => (
              <Link
                key={chip.key}
                href={fleetHref(chip.clear)}
                className="inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/10 px-3 py-1.5 text-xs font-semibold text-gold"
              >
                {chip.label}
                <IconClose className="h-3 w-3" />
              </Link>
            ))}
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-gold/40 hover:text-gold"
            >
              Reset all
            </button>
          </div>
        )}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[17.5rem_minmax(0,1fr)] lg:items-start">
        <aside className="hidden lg:block">
          <div className="sticky top-28 luxury-panel p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-display text-xl font-semibold">Refine</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">
                  {total} matches
                </p>
              </div>
              <button
                type="button"
                onClick={resetFilters}
                disabled={!hasFilters}
                className="shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-gold transition-opacity hover:text-gold-light disabled:cursor-not-allowed disabled:opacity-35"
              >
                Reset
              </button>
            </div>
            <div className="gold-hairline mt-4" />
            <div className="mt-5">{filtersBody()}</div>
          </div>
        </aside>

        <div className="min-w-0">{children}</div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/70"
            aria-label="Close filters"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-x-0 bottom-0 max-h-[88vh] overflow-y-auto rounded-t-3xl border border-border bg-background p-5 safe-bottom">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="font-display text-2xl font-semibold">Refine fleet</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">
                  {total} matches
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={resetFilters}
                  disabled={!hasFilters}
                  className="rounded-full border border-border px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold disabled:cursor-not-allowed disabled:opacity-35"
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
                  aria-label="Close"
                >
                  <IconClose className="h-4 w-4" />
                </button>
              </div>
            </div>
            {filtersBody()}
          </div>
        </div>
      ) : null}
    </div>
  );
}

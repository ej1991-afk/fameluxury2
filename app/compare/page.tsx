"use client";

import Link from "next/link";
import { CarImage } from "@/components/CarImage";
import { useCompare } from "@/components/CompareProvider";
import { Reveal } from "@/components/Reveal";
import { useCurrency } from "@/components/CurrencyProvider";
import { categoryLabels, getCarById } from "@/lib/cars";
import { whatsappUrl } from "@/lib/site";

export default function ComparePage() {
  const { compareIds, removeFromCompare, clearCompare } = useCompare();
  const { format } = useCurrency();
  const cars = compareIds
    .map((id) => getCarById(id))
    .filter((car): car is NonNullable<typeof car> => car !== undefined);

  if (cars.length === 0) {
    return (
      <Reveal className="flex flex-col items-center justify-center px-4 py-24 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight">Compare Vehicles</h1>
        <p className="mt-4 max-w-md text-muted">
          Add up to 3 vehicles from the fleet to compare specs and pricing side
          by side.
        </p>
        <Link
          href="/fleet"
          className="mt-8 inline-flex h-12 items-center rounded-full bg-gold px-8 text-sm font-semibold text-background"
        >
          Browse Fleet
        </Link>
      </Reveal>
    );
  }

  const specRows = [
    { label: "Brand", get: (c: (typeof cars)[0]) => c.brand },
    { label: "Category", get: (c: (typeof cars)[0]) => categoryLabels[c.category] },
    { label: "Price / day", get: (c: (typeof cars)[0]) => format(c.pricePerDay) },
    { label: "Horsepower", get: (c: (typeof cars)[0]) => `${c.specs.horsepower} hp` },
    { label: "0-100", get: (c: (typeof cars)[0]) => c.specs.acceleration },
    { label: "Drive", get: (c: (typeof cars)[0]) => c.specs.drive },
    { label: "Seats", get: (c: (typeof cars)[0]) => c.specs.seats },
    { label: "Transmission", get: (c: (typeof cars)[0]) => c.specs.transmission },
    { label: "Engine", get: (c: (typeof cars)[0]) => c.specs.engine },
    { label: "No Deposit", get: (c: (typeof cars)[0]) => (c.noDeposit ? "Yes" : "—") },
  ];

  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Compare Vehicles
            </h1>
            <p className="mt-2 text-muted">
              Comparing {cars.length} of 3 vehicles
            </p>
          </div>
          <button
            type="button"
            onClick={clearCompare}
            className="text-sm font-medium text-muted hover:text-gold"
          >
            Clear all
          </button>
        </Reveal>

        <Reveal className="mt-8 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="p-4 font-medium text-muted">Spec</th>
                {cars.map((car) => (
                  <th key={car.id} className="p-4">
                    <div className="relative mb-3 aspect-[16/10] w-full max-w-[200px] overflow-hidden rounded-lg">
                      <CarImage car={car} sizes="200px" />
                    </div>
                    <p className="text-xs text-gold">{car.brand}</p>
                    <p className="font-bold">{car.name}</p>
                    <button
                      type="button"
                      onClick={() => removeFromCompare(car.id)}
                      className="mt-2 text-xs text-muted hover:text-gold"
                    >
                      Remove
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specRows.map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <td className="p-4 font-medium text-muted">{row.label}</td>
                  {cars.map((car) => (
                    <td key={car.id} className="p-4">
                      {row.get(car)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal className="mt-8 text-center">
          <a
            href={whatsappUrl("Hi Fame Luxury! I'd like to compare these vehicles and check availability.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center rounded-full bg-gold px-8 text-sm font-semibold text-background"
          >
            Enquire on WhatsApp
          </a>
        </Reveal>
      </div>
    </div>
  );
}

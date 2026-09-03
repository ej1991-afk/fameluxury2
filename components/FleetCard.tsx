"use client";

import Link from "next/link";
import { CarImage } from "@/components/CarImage";
import { IconWhatsApp } from "@/components/Icons";
import { categoryLabels } from "@/lib/cars";
import { whatsappCarUrl } from "@/lib/site";
import type { Car } from "@/lib/types";
import { useCompare } from "./CompareProvider";

interface FleetCardProps {
  car: Car;
  compact?: boolean;
}

export function FleetCard({ car, compact = false }: FleetCardProps) {
  const { addToCompare, removeFromCompare, isInCompare } = useCompare();
  const inCompare = isInCompare(car.id);

  function handleCompare(e: React.MouseEvent) {
    e.preventDefault();
    if (inCompare) {
      removeFromCompare(car.id);
    } else {
      addToCompare(car.id);
    }
  }

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface-elevated transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:gold-glow">
      <Link href={`/fleet/${car.slug}`} className="relative block aspect-[16/10] overflow-hidden">
        <CarImage
          car={car}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/20" />
        <div className="pointer-events-none absolute left-3 top-3 flex flex-wrap gap-2">
          <span className="rounded-full border border-gold/30 bg-background/80 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-gold backdrop-blur-sm">
            {categoryLabels[car.category]}
          </span>
          {car.noDeposit && (
            <span className="rounded-full bg-gold px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-background">
              No Deposit
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <Link href={`/fleet/${car.slug}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            {car.brand}
          </p>
          <h3 className="font-display mt-1 text-xl font-semibold text-foreground">
            {car.name}
          </h3>
        </Link>

        <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-muted">
          <span>{car.specs.horsepower} hp</span>
          <span>{car.specs.acceleration.replace("0-100 km/h ", "0–100 ")}</span>
          {!compact ? (
            <>
              <span>{car.specs.drive}</span>
              <span>{car.specs.seats} seats</span>
            </>
          ) : null}
        </div>

        <div className="mt-auto flex items-end justify-between pt-4">
          <div>
            <p className="text-[0.65rem] uppercase tracking-widest text-muted">from</p>
            <p className="text-xl font-bold text-gold">
              AED {car.pricePerDay.toLocaleString()}
              <span className="text-xs font-normal text-muted"> /day</span>
            </p>
          </div>
        </div>

        <div className="relative z-10 mt-4 grid grid-cols-3 gap-2">
          <a
            href={whatsappCarUrl(`${car.brand} ${car.name}`, car.pricePerDay)}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-manipulation col-span-1 flex min-h-[44px] items-center justify-center gap-1 rounded-lg bg-gold text-xs font-semibold text-background transition-opacity hover:opacity-90"
          >
            <IconWhatsApp className="h-3.5 w-3.5" />
            Rent
          </a>
          <Link
            href={`/fleet/${car.slug}`}
            className="touch-manipulation flex min-h-[44px] items-center justify-center rounded-lg border border-border text-xs font-semibold text-foreground hover:border-gold/40"
          >
            Details
          </Link>
          <button
            type="button"
            onClick={handleCompare}
            className={`touch-manipulation flex min-h-[44px] items-center justify-center rounded-lg border text-xs font-semibold ${
              inCompare
                ? "border-gold bg-gold/10 text-gold"
                : "border-border text-foreground hover:border-gold/40"
            }`}
          >
            {inCompare ? "Added" : "Compare"}
          </button>
        </div>
      </div>
    </article>
  );
}

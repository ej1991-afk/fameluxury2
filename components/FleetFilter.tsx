import Link from "next/link";
import { categoryLabels } from "@/lib/cars";
import { fleetHref } from "@/lib/fleet";
import type { CarCategory } from "@/lib/types";

const categories = Object.entries(categoryLabels) as [CarCategory, string][];

interface FleetFilterProps {
  active: string;
  brand?: string;
  sort?: string;
  page?: string;
}

function tabClass(isActive: boolean) {
  return `relative z-10 inline-flex shrink-0 min-h-[44px] items-center rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
    isActive
      ? "bg-gold text-background"
      : "border border-border text-muted hover:text-foreground"
  }`;
}

export function FleetFilter({ active, brand, sort, page }: FleetFilterProps) {
  const query = { category: active, brand, sort, page };

  return (
    <div className="relative z-20 bg-background">
      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
        Category
      </p>
      <div className="flex gap-2 overflow-x-auto overscroll-x-contain pb-2 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <Link
          href={fleetHref({ ...query, category: "all", page: "1" })}
          className={tabClass(active === "all")}
        >
          All
        </Link>
        {categories.map(([key, label]) => (
          <Link
            key={key}
            href={fleetHref({ ...query, category: key, page: "1" })}
            className={tabClass(active === key)}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

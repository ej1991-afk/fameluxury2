import Link from "next/link";
import { categoryLabels } from "@/lib/blog";
import type { BlogCategory } from "@/lib/types";

const categories = Object.entries(categoryLabels) as [BlogCategory, string][];

interface BlogFilterProps {
  active: string;
}

function filterHref(category: string) {
  return category === "all" ? "/blog" : `/blog?category=${category}`;
}

function tabClass(isActive: boolean) {
  return `relative z-10 inline-flex shrink-0 min-h-[44px] items-center rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
    isActive
      ? "bg-gold text-background"
      : "border border-border text-muted hover:text-foreground"
  }`;
}

export function BlogFilter({ active }: BlogFilterProps) {
  return (
    <div className="relative z-20 bg-background">
      <div className="flex gap-2 overflow-x-auto overscroll-x-contain pb-2 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <Link href={filterHref("all")} className={tabClass(active === "all")}>
          All
        </Link>
        {categories.map(([key, label]) => (
          <Link key={key} href={filterHref(key)} className={tabClass(active === key)}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

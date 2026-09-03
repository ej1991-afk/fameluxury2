import Link from "next/link";
import { fleetHref, type FleetQuery } from "@/lib/fleet";

interface FleetPaginationProps {
  query: FleetQuery;
  currentPage: number;
  totalPages: number;
  total: number;
}

function pageButtonClass(isActive: boolean) {
  return `inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg px-3 text-sm font-medium transition-colors ${
    isActive
      ? "bg-gold text-background"
      : "border border-border text-muted hover:border-gold/40 hover:text-foreground"
  }`;
}

export function FleetPagination({
  query,
  currentPage,
  totalPages,
  total,
}: FleetPaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      className="mt-12 flex flex-col items-center gap-4"
      aria-label="Fleet pagination"
    >
      <p className="text-sm text-muted">
        Page {currentPage} of {totalPages} · {total} vehicles
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {currentPage > 1 ? (
          <Link
            href={fleetHref({ ...query, page: String(currentPage - 1) })}
            className={pageButtonClass(false)}
          >
            Previous
          </Link>
        ) : (
          <span className="inline-flex min-h-[44px] min-w-[44px] cursor-not-allowed items-center justify-center rounded-lg border border-border px-3 text-sm text-muted/50">
            Previous
          </span>
        )}

        {pages.map((page) => (
          <Link
            key={page}
            href={fleetHref({ ...query, page: String(page) })}
            className={pageButtonClass(page === currentPage)}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </Link>
        ))}

        {currentPage < totalPages ? (
          <Link
            href={fleetHref({ ...query, page: String(currentPage + 1) })}
            className={pageButtonClass(false)}
          >
            Next
          </Link>
        ) : (
          <span className="inline-flex min-h-[44px] min-w-[44px] cursor-not-allowed items-center justify-center rounded-lg border border-border px-3 text-sm text-muted/50">
            Next
          </span>
        )}
      </div>
    </nav>
  );
}

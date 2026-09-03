import type { FAQItem } from "@/lib/types";
import { IconChevron } from "@/components/Icons";

interface FAQProps {
  items: FAQItem[];
  limit?: number;
}

export function FAQ({ items, limit }: FAQProps) {
  const displayItems = limit ? items.slice(0, limit) : items;

  return (
    <div className="grid gap-3">
      {displayItems.map((item) => (
        <details
          key={item.question}
          className="group luxury-panel overflow-hidden"
        >
          <summary className="flex min-h-[4.5rem] cursor-pointer list-none items-start justify-between gap-4 px-5 py-4">
            <span className="grid gap-1.5">
              {item.category ? (
                <span className="text-[0.68rem] font-extrabold uppercase tracking-widest text-gold">
                  {item.category}
                </span>
              ) : null}
              <span className="text-sm font-semibold text-foreground sm:text-base">
                {item.question}
              </span>
            </span>
            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-gold transition-transform group-open:rotate-180">
              <IconChevron className="h-3.5 w-3.5" />
            </span>
          </summary>
          <div className="border-t border-border px-5 pb-5 pt-3">
            <p className="text-sm leading-relaxed text-muted">{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

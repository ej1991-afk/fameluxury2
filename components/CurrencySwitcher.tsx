"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useCurrency } from "@/components/CurrencyProvider";
import { IconChevron } from "@/components/Icons";
import { type CurrencyCode } from "@/lib/currency";

const options: {
  code: CurrencyCode;
  mark: string;
}[] = [
  { code: "AED", mark: "Dh" },
  { code: "USD", mark: "$" },
  { code: "EUR", mark: "€" },
];

function CurrencyMark({ mark, active = false }: { mark: string; active?: boolean }) {
  return (
    <span
      aria-hidden
      className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[0.7rem] font-bold leading-none ${
        active
          ? "border-gold/50 bg-gold/15 text-gold"
          : "border-border bg-surface text-muted"
      }`}
    >
      {mark}
    </span>
  );
}

interface CurrencySwitcherProps {
  className?: string;
}

export function CurrencySwitcher({ className = "" }: CurrencySwitcherProps) {
  const { currency, setCurrency } = useCurrency();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const active = options.find((item) => item.code === currency) ?? options[0];

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent | TouchEvent) {
      const target = event.target as Node | null;
      if (rootRef.current && target && !rootRef.current.contains(target)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={`relative inline-flex ${className}`}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
        className={`relative z-[71] inline-flex min-h-10 w-full items-center gap-2 py-1.5 pl-1.5 pr-2.5 text-sm font-semibold text-foreground transition-colors ${
          open
            ? "rounded-t-2xl border border-b-0 border-border bg-background"
            : "rounded-full border border-border bg-surface/80 hover:border-gold/40"
        }`}
      >
        <CurrencyMark mark={active.mark} active />
        <span className="tracking-[0.08em]">{active.code}</span>
        <IconChevron
          className={`ml-auto h-3.5 w-3.5 text-muted transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-label="Select currency"
          className="absolute left-0 right-0 top-full z-[70] overflow-hidden rounded-b-2xl border border-border bg-background py-1 shadow-[0_16px_40px_rgba(0,0,0,0.45)]"
        >
          {options.map((item) => {
            const selected = item.code === currency;
            return (
              <li key={item.code} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => {
                    setCurrency(item.code);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center gap-2 px-2 py-2 text-left transition-colors ${
                    selected
                      ? "bg-gold/10 text-foreground"
                      : "text-muted hover:bg-surface hover:text-foreground"
                  }`}
                >
                  <CurrencyMark mark={item.mark} active={selected} />
                  <span className="text-sm font-semibold tracking-[0.08em]">
                    {item.code}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

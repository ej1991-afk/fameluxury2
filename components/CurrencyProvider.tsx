"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  formatMoney,
  isCurrencyCode,
  type CurrencyCode,
} from "@/lib/currency";

const STORAGE_KEY = "fame-currency";

interface CurrencyContextValue {
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
  format: (amountAed: number, options?: { compact?: boolean }) => string;
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("AED");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && isCurrencyCode(stored)) setCurrencyState(stored);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  const setCurrency = useCallback((next: CurrencyCode) => {
    setCurrencyState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const format = useCallback(
    (amountAed: number, options?: { compact?: boolean }) =>
      formatMoney(amountAed, currency, options),
    [currency],
  );

  const value = useMemo(
    () => ({ currency, setCurrency, format }),
    [currency, setCurrency, format],
  );

  // Avoid SSR/client mismatch flashes by always rendering children;
  // format uses AED until hydrated if needed — we hydrate quickly.
  void hydrated;

  return (
    <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) {
    throw new Error("useCurrency must be used within CurrencyProvider");
  }
  return ctx;
}

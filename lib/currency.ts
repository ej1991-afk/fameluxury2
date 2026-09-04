export type CurrencyCode = "AED" | "USD" | "EUR";

export const currencies: {
  code: CurrencyCode;
  label: string;
  symbol: string;
}[] = [
  { code: "AED", label: "AED", symbol: "AED" },
  { code: "USD", label: "USD", symbol: "$" },
  { code: "EUR", label: "EUR", symbol: "€" },
];

/** Guide rates from AED. USD is UAE-pegged; EUR is an approximate display rate. */
export const aedToCurrency: Record<CurrencyCode, number> = {
  AED: 1,
  USD: 1 / 3.6725,
  EUR: 1 / 3.98,
};

export function convertFromAed(amountAed: number, currency: CurrencyCode): number {
  return amountAed * aedToCurrency[currency];
}

export function formatMoney(
  amountAed: number,
  currency: CurrencyCode,
  options?: { compact?: boolean },
): string {
  const converted = convertFromAed(amountAed, currency);
  const rounded = Math.round(converted);
  const formatted = rounded.toLocaleString("en-US");

  if (options?.compact && currency !== "AED") {
    const symbol = currencies.find((item) => item.code === currency)?.symbol ?? currency;
    return `${symbol}${formatted}`;
  }

  return `${currency} ${formatted}`;
}

export function isCurrencyCode(value: string): value is CurrencyCode {
  return value === "AED" || value === "USD" || value === "EUR";
}

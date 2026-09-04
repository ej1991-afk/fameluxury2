"use client";

import { useCurrency } from "@/components/CurrencyProvider";

interface PriceProps {
  amountAed: number;
  className?: string;
  suffix?: string;
  suffixClassName?: string;
  compact?: boolean;
}

export function Price({
  amountAed,
  className,
  suffix = " /day",
  suffixClassName = "text-xs font-normal text-muted",
  compact = false,
}: PriceProps) {
  const { format } = useCurrency();

  return (
    <span className={className}>
      {format(amountAed, { compact })}
      {suffix ? <span className={suffixClassName}>{suffix}</span> : null}
    </span>
  );
}

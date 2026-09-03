"use client";

import { useCompare } from "./CompareProvider";

interface CompareButtonProps {
  carId: string;
}

export function CompareButton({ carId }: CompareButtonProps) {
  const { addToCompare, removeFromCompare, isInCompare } = useCompare();
  const inCompare = isInCompare(carId);

  function handleClick() {
    if (inCompare) {
      removeFromCompare(carId);
    } else {
      addToCompare(carId);
    }
  }

  return (
      <button
        type="button"
        onClick={handleClick}
        className={`touch-manipulation flex min-h-[48px] flex-1 items-center justify-center rounded-full border text-sm font-semibold transition-colors active:opacity-80 ${
          inCompare
            ? "border-gold bg-gold/10 text-gold"
            : "border-border text-foreground hover:border-gold/40"
        }`}
      >
      {inCompare ? "Remove from Compare" : "Add to Compare"}
    </button>
  );
}

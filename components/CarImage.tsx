import Image from "next/image";
import { getCarImage } from "@/lib/images";
import type { Car } from "@/lib/types";

interface CarImageProps {
  car: Car;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

export function CarImage({
  car,
  priority = false,
  className = "object-cover",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: CarImageProps) {
  return (
    <Image
      src={getCarImage(car.slug)}
      alt={`${car.brand} ${car.name} for rent in Dubai`}
      fill
      priority={priority}
      className={`pointer-events-none ${className}`}
      sizes={sizes}
    />
  );
}

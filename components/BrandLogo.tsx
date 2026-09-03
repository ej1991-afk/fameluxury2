import Image from "next/image";
import { getBrandLogo } from "@/lib/brands";

interface BrandLogoProps {
  brand: string;
  className?: string;
}

export function BrandLogo({ brand, className = "" }: BrandLogoProps) {
  return (
    <div className={`brand-logo-card ${className}`}>
      <div className="brand-logo-card-image-slot">
        <Image
          src={getBrandLogo(brand)}
          alt={`${brand} logo`}
          width={152}
          height={80}
          unoptimized
          className="brand-logo-card-image"
        />
      </div>
      <p className="brand-logo-card-name">{brand}</p>
    </div>
  );
}

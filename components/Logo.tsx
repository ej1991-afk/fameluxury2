import Link from "next/link";
import { siteConfig } from "@/lib/site";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center ${className}`}
      aria-label={`${siteConfig.name} — luxury car rental Dubai`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/logo.svg?v=vector`}
        alt={`${siteConfig.name} Cars Rental Dubai`}
        width={62}
        height={68}
        className="h-[3.6rem] w-auto object-contain sm:h-16"
        decoding="async"
      />
    </Link>
  );
}

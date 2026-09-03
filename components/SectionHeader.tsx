import Link from "next/link";
import { IconArrowRight } from "@/components/Icons";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  href?: string;
  cta?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  href,
  cta,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === "center"
          ? "items-center text-center"
          : "items-start justify-between sm:flex-row sm:items-end"
      }`}
    >
      <div className={align === "center" ? "max-w-2xl" : "max-w-2xl"}>
        <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-gold">
          {eyebrow}
        </p>
        <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {href && cta ? (
        <Link
          href={href}
          className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-light"
        >
          {cta}
          <IconArrowRight className="h-4 w-4" />
        </Link>
      ) : null}
    </div>
  );
}

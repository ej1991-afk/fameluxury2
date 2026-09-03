import { FleetCard } from "@/components/FleetCard";
import { SectionHeader } from "@/components/SectionHeader";
import type { CategorySection } from "@/lib/categories";
import { cars } from "@/lib/cars";

export function CategoryShowcase({
  section,
  limit = 4,
}: {
  section: CategorySection;
  limit?: number;
}) {
  const list = cars
    .filter((car) => section.categories.includes(car.category))
    .slice(0, limit);
  if (list.length === 0) return null;

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          href={section.href}
          cta={section.cta}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((car) => (
            <FleetCard key={car.id} car={car} compact />
          ))}
        </div>
      </div>
    </section>
  );
}

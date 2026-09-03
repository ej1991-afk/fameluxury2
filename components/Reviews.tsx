import { IconStar } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { reviews } from "@/lib/reviews";
import { SectionHeader } from "@/components/SectionHeader";

export function Reviews() {
  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Client stories"
            title="What guests say after the drive"
            description="Verified handover experiences from visitors and residents who booked self-drive luxury cars through Fame Luxury."
            align="center"
          />
        </Reveal>
        <Reveal stagger className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <blockquote
              key={`${review.name}-${review.car}`}
              className="luxury-panel flex flex-col p-6"
            >
              <div className="flex gap-1 text-gold" aria-label="5 out of 5 stars">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <IconStar key={index} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                “{review.quote}”
              </p>
              <footer className="mt-5 border-t border-border pt-4">
                <cite className="not-italic text-sm font-semibold text-foreground">
                  {review.name}
                </cite>
                <p className="mt-1 text-xs text-muted">
                  {review.location} · {review.car}
                </p>
              </footer>
            </blockquote>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

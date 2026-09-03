import type { CarCategory } from "@/lib/types";

export interface CategorySection {
  categories: CarCategory[];
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export const homepageCategories: CategorySection[] = [
  {
    categories: ["supercar", "sports"],
    eyebrow: "Sports & supercars",
    title: "Sports car rental in Dubai",
    description:
      "Drive Ferrari, Lamborghini, McLaren, and Porsche models built for Sheikh Zayed Road, coastal cruising, and events. Self-drive supercar rental with concierge delivery across Dubai.",
    href: "/fleet?category=supercar",
    cta: "View all supercars",
  },
  {
    categories: ["convertible"],
    eyebrow: "Open-top driving",
    title: "Convertible car rental in Dubai",
    description:
      "Open-air luxury for Palm Jumeirah, JBR, and winter evenings. Convertible rentals combine skyline views with the presence of a true exotic.",
    href: "/fleet?category=convertible",
    cta: "View all convertibles",
  },
  {
    categories: ["suv"],
    eyebrow: "Space & presence",
    title: "Luxury SUV rental in Dubai",
    description:
      "Urus, G63, Cullinan, and Range Rover models for families, groups, and VIP arrivals. Premium SUVs with luggage space and hotel, villa, or airport handover.",
    href: "/fleet?category=suv",
    cta: "View all luxury SUVs",
  },
  {
    categories: ["sedan", "electric"],
    eyebrow: "Executive travel",
    title: "Luxury sedan rental in Dubai",
    description:
      "Business-ready performance sedans and electric luxury cars for meetings, airport runs, and city driving — refined cabins without sacrificing pace.",
    href: "/fleet?category=sedan",
    cta: "View all sedans",
  },
];

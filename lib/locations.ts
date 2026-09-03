import type { Location } from "./types";

export const locations: Location[] = [
  {
    name: "Downtown Dubai",
    slug: "downtown-dubai",
    description: "Burj Khalifa, Dubai Mall, and DIFC district handover.",
    seoTitle: "Luxury Car Rental Downtown Dubai | Fame Luxury",
    seoDescription:
      "Self-drive Ferrari, Lamborghini, and Rolls-Royce delivery in Downtown Dubai — hotels near Burj Khalifa, Dubai Mall, and DIFC.",
    longDescription:
      "Need a supercar or luxury SUV delivered to Downtown Dubai? Fame Luxury provides hotel and residence handover near the Burj Khalifa, Dubai Mall, Address hotels, and DIFC. Ideal for evening skyline drives on Sheikh Zayed Road and photoshoot days in the city centre.",
    highlights: [
      "Hotel & residence handover near Burj Khalifa",
      "Evening skyline routes on Sheikh Zayed Road",
      "WhatsApp booking with clear rates before payment",
    ],
  },
  {
    name: "Dubai Marina",
    slug: "dubai-marina",
    description: "Marina Walk, JBR, and waterfront residence delivery.",
    seoTitle: "Luxury Car Rental Dubai Marina | Fame Luxury",
    seoDescription:
      "Rent a luxury car or supercar in Dubai Marina with Fame Luxury — delivery to Marina Walk, JBR hotels, and waterfront residences.",
    longDescription:
      "Dubai Marina is one of our busiest delivery zones. Fame Luxury drops off Lamborghini, Ferrari, Porsche, and luxury SUVs at Marina hotels, JBR properties, and waterfront residences — perfect for coastal drives and evening promenade arrivals.",
    highlights: [
      "Marina Walk & JBR hotel delivery",
      "Convertible-friendly coastal routes",
      "Fast WhatsApp availability checks",
    ],
  },
  {
    name: "Palm Jumeirah",
    slug: "palm-jumeirah",
    description: "Atlantis, villas, and resort hotel handover.",
    seoTitle: "Luxury Car Rental Palm Jumeirah | Fame Luxury",
    seoDescription:
      "Luxury and supercar rental delivery on Palm Jumeirah — Atlantis, villas, and resort hotels with Fame Luxury.",
    longDescription:
      "Palm Jumeirah is a signature Dubai drive. Fame Luxury delivers Rolls-Royce, Lamborghini Urus, Ferrari, and convertibles to Atlantis, resort hotels, and private villas for crescent drives, The Pointe photos, and celebration arrivals.",
    highlights: [
      "Atlantis & resort hotel handover",
      "Villa delivery on the fronds",
      "Wedding & photoshoot friendly fleet",
    ],
  },
  {
    name: "JBR",
    description: "Beachfront hotels and The Walk delivery.",
  },
  {
    name: "Business Bay",
    description: "Office towers and canal-side residences.",
  },
  {
    name: "DIFC",
    description: "Financial district and Gate Avenue area.",
  },
  {
    name: "Jumeirah",
    description: "Beach Road villas and boutique hotels.",
  },
  {
    name: "Dubai Hills Estate",
    description: "Golf course community and mall area.",
  },
  {
    name: "Dubai Airport (DXB)",
    slug: "dxb-airport",
    description: "Terminal handover for arrivals and departures.",
    seoTitle: "Luxury Car Rental DXB Airport Delivery | Fame Luxury",
    seoDescription:
      "Arrive at DXB and drive away in a luxury or supercar rental. Fame Luxury offers Dubai Airport terminal handover on request.",
    longDescription:
      "Skip the ordinary airport transfer. Fame Luxury can arrange DXB terminal handover for approved arrivals and departures so you start your Dubai trip in a Ferrari, Lamborghini, Rolls-Royce, or luxury SUV. Share flight details on WhatsApp for timing.",
    highlights: [
      "DXB terminal handover on request",
      "Documents checked before arrival",
      "Continue to hotel with the same car",
    ],
  },
  {
    name: "Dubai Airport (DWC)",
    description: "Al Maktoum International Airport delivery.",
  },
  {
    name: "Bluewaters Island",
    description: "Ain Dubai and Caesars Palace area.",
  },
  {
    name: "City Walk",
    description: "Open-air lifestyle district delivery.",
  },
  {
    name: "Abu Dhabi",
    description: "Approved inter-emirate routes quoted individually.",
  },
  {
    name: "Sharjah",
    description: "Cross-emirate delivery when vehicle permits.",
  },
  {
    name: "Ras Al Khaimah",
    description: "Northern emirates handover on request.",
  },
];

export function getLocationPages(): Location[] {
  return locations.filter((location) => Boolean(location.slug));
}

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}

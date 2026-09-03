import { getSiteLogo } from "@/lib/images";

export const siteConfig = {
  name: "Fame Luxury",
  get logo() {
    return getSiteLogo();
  },
  logoPrimary: "Fame",
  logoSecondary: "Luxury",
  tagline: "Drive famous, live luxury",
  description:
    "Luxury car rental Dubai with self-drive supercars, convertibles, and SUVs. Free concierge delivery to hotels, residences, and DXB. Enquire on WhatsApp.",
  url: "https://fameluxurycarrental.ae",
  phone: "+971 56 555 5352",
  phoneRaw: "971565555352",
  landline: "(04) 388 3411",
  landlineRaw: "97143883411",
  legalEntity: "Fame Luxury Car Rental LLC",
  email: "info@fameluxury.com",
  address: "26th St, Al Quoz Industrial Area 2, Dubai, UAE",
  addressStreet: "26th St, Al Quoz Industrial Area 2",
  addressLocality: "Dubai",
  addressRegion: "Dubai",
  addressCountry: "AE",
  geo: {
    latitude: 25.123816,
    longitude: 55.24342,
  },
  /** Google Business Profile public page URL (set in env when you have it). */
  googleBusinessUrl:
    process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL?.trim() || "",
  /** Direct “Write a review” link from GBP. */
  googleReviewUrl: process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL?.trim() || "",
  /** Optional real GBP stats — only used for AggregateRating schema when both set. */
  googleRating: Number(process.env.NEXT_PUBLIC_GOOGLE_RATING || 0) || 0,
  googleReviewCount:
    Number(process.env.NEXT_PUBLIC_GOOGLE_REVIEW_COUNT || 0) || 0,
  hours: "Mon – Sun, 9 AM – 9 PM",
  afterHours: "Urgent issues via WhatsApp after 9 PM",
  whatsappMessage:
    "Hi Fame Luxury! I'd like to enquire about a luxury car rental in Dubai.",
  stats: {
    vehicles: 24,
    brands: 12,
    deliveryAreas: 15,
  },
};

export function mapsEmbedUrl() {
  const q = encodeURIComponent(siteConfig.address);
  return `https://www.google.com/maps?q=${q}&z=15&output=embed`;
}

export function mapsDirectionsUrl() {
  const q = encodeURIComponent(siteConfig.address);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

/** Digits only, country code included (e.g. 9715xxxxxxx). */
export function whatsappPhone(): string {
  return siteConfig.phoneRaw.replace(/\D/g, "");
}

export function whatsappUrl(message?: string) {
  const phone = whatsappPhone();
  const text = encodeURIComponent(message ?? siteConfig.whatsappMessage);
  // api.whatsapp.com is more reliable on iOS/Android than wa.me alone
  return `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;
}

export function whatsappCarUrl(carName: string, price: number) {
  const message = `Hi ${siteConfig.name}! I'm interested in renting the ${carName} (from AED ${price}/day). Please share availability and terms.`;
  return whatsappUrl(message);
}


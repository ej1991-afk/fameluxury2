export function brandToSlug(brand: string): string {
  return brand.toLowerCase().replace(/\s+/g, "-");
}

/** Local brand logos in public/brands/ — keep in sync with scripts/download-brand-logos.mjs */
export const brandLogos: Record<string, string> = {
  Audi: "/brands/audi.svg",
  Bentley: "/brands/bentley.svg",
  BMW: "/brands/bmw.svg",
  Cadillac: "/brands/cadillac.svg",
  Ferrari: "/brands/ferrari.svg",
  Lamborghini: "/brands/lamborghini.svg",
  "Land Rover": "/brands/land-rover.svg",
  McLaren: "/brands/mclaren.svg",
  "Mercedes-Benz": "/brands/mercedes-benz.svg",
  "Mercedes-Maybach": "/brands/mercedes-maybach.svg",
  Porsche: "/brands/porsche.svg",
  "Rolls-Royce": "/brands/rolls-royce.svg",
  Tesla: "/brands/tesla.svg",
};

export const brandDescriptions: Record<string, string> = {
  Audi:
    "Explore Audi rental Dubai for refined German comfort, luxury technology, and business-ready executive travel.",
  Bentley:
    "Choose Bentley rental Dubai for grand touring comfort, convertible elegance, and prestige for events and hotel arrivals.",
  BMW:
    "BMW rental Dubai suits clients who want modern performance, executive comfort, and a luxury car for business and lifestyle plans.",
  Cadillac:
    "Choose Cadillac rental Dubai for spacious SUV comfort, executive presence, family travel, and luxury airport handover.",
  Ferrari:
    "Explore Ferrari rental Dubai for Italian performance, open-top emotion, and unmistakable supercar presence.",
  Lamborghini:
    "Enquire about Lamborghini rental Dubai for dramatic design, high-performance engineering, and road presence built to impress.",
  "Land Rover":
    "Enquire about Land Rover rental Dubai for Range Rover comfort, luggage space, off-road character, and luxury road presence.",
  McLaren:
    "Explore McLaren rental Dubai for lightweight supercar performance, exotic appeal, and high-impact driving plans.",
  "Mercedes-Benz":
    "Explore Mercedes-Benz rental Dubai for AMG performance, G-Class SUVs, executive sedans, and luxury airport handover.",
  "Mercedes-Maybach":
    "Arrange Maybach rental Dubai for ultra-luxury rear-seat comfort, VIP arrivals, and executive self-drive plans.",
  Porsche:
    "Choose Porsche rental Dubai for sports car precision, daily usability, and luxury design on every drive.",
  "Rolls-Royce":
    "Arrange Rolls-Royce rental Dubai for VIP arrivals, executive itineraries, and ultra-luxury self-drive enquiries.",
  Tesla:
    "Explore Tesla rental Dubai for instant electric performance, futuristic cabins, and a technology-forward luxury rental.",
};

export function getBrandLogo(brand: string): string {
  return brandLogos[brand] ?? "/brands/default.svg";
}

export function getBrandDescription(brand: string): string {
  return (
    brandDescriptions[brand] ??
    `Explore ${brand} rental Dubai options from our curated luxury fleet.`
  );
}

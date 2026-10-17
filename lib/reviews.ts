export interface Review {
  name: string;
  location: string;
  rating: 5;
  car: string;
  quote: string;
}

export const reviews: Review[] = [
  {
    name: "Daniel K.",
    location: "London",
    rating: 5,
    car: "Lamborghini Urus",
    quote:
      "Handover at our Marina hotel was on time, the Urus was immaculate, and WhatsApp replies were instant. The whole trip felt effortless.",
  },
  {
    name: "Amira S.",
    location: "Riyadh",
    rating: 5,
    car: "Mercedes-Benz G63",
    quote:
      "We needed a G63 for family photos on the Palm. Terms were confirmed before payment and the car arrived exactly as described.",
  },
  {
    name: "James P.",
    location: "New York",
    rating: 5,
    car: "Ferrari F8 Tributo",
    quote:
      "Best supercar rental I have used in Dubai. Clear mileage, no last-minute surprises, and the F8 Tributo was a highlight of the week.",
  },
  {
    name: "Omar H.",
    location: "Dubai",
    rating: 5,
    car: "Mercedes-Benz G63 AMG",
    quote:
      "Booked a G63 for client meetings. Concierge delivery to DIFC and a clean return process. Will use Fame Luxury again.",
  },
  {
    name: "Elena V.",
    location: "Milan",
    rating: 5,
    car: "Porsche 911 GT3",
    quote:
      "Tourist documents were checked quickly, the GT3 was ready on time, and delivery to JBR was straightforward. Professional from start to finish.",
  },
  {
    name: "Ryan T.",
    location: "Sydney",
    rating: 5,
    car: "Lamborghini Huracán EVO",
    quote:
      "The Huracán turned heads everywhere. Support after 9 PM on WhatsApp was actually available when we needed a route suggestion.",
  },
];

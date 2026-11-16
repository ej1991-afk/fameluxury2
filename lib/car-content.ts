import type { FAQItem } from "./types";

export interface CarContent {
  seoTitle: string;
  seoDescription: string;
  overview: string[];
  faqs: FAQItem[];
}

const huracanDocuments: FAQItem = {
  question: "What do I need to rent a Lamborghini in Dubai?",
  answer:
    "Drivers must be 25 or older for the Huracán. Bring a passport, your driving licence, and an International Driving Permit if your licence is not in English. UAE residents use an Emirates ID and UAE licence.",
};

const g63NoDeposit: FAQItem = {
  question: "Is the G63 a no-deposit rental?",
  answer:
    "Yes. Every Mercedes-Benz G63 in the Fame Luxury fleet is listed as no-deposit. The WhatsApp quote confirms it in writing before payment.",
};

const urusNoDeposit: FAQItem = {
  question: "Is the Urus a no-deposit rental?",
  answer:
    "Yes. All three Urus cars in the fleet are listed as no-deposit. The concierge confirms the terms in writing before payment.",
};

export const carContent: Record<string, CarContent> = {
  "lamborghini-huracan-evo-spyder-blue": {
    seoTitle: "Lamborghini Huracán EVO Spyder Rental Dubai — Blue",
    seoDescription:
      "Rent the blue Lamborghini Huracán EVO Spyder in Dubai from AED 2,499/day. Open-top V10, self-drive, delivered to your hotel, villa, or DXB.",
    overview: [
      "The blue Huracán EVO Spyder is a 2023 open-top Lamborghini with a 5.2-litre V10, 610 hp, all-wheel drive, and a 7-speed dual-clutch gearbox. 0–100 km/h takes 3.5 seconds. Self-drive rental starts from AED 2,499 a day.",
      "It is the car for Jumeirah Beach Road, JBR, Dubai Marina, and the Palm Jumeirah crescent with the roof down. October to April is the comfortable open-top season; in summer, evenings are the realistic window.",
      "It seats two. For a family or more luggage, book the Lamborghini Urus or GMC Yukon Denali. For the same V10 with a fixed roof for less, the red Huracán EVO Coupe starts from AED 2,199 a day.",
    ],
    faqs: [
      {
        question: "How much is the Huracán EVO Spyder to rent in Dubai?",
        answer:
          "The blue Huracán EVO Spyder starts from AED 2,499 per day. Weekly and monthly plans, mileage, and delivery are confirmed in the WhatsApp quote.",
      },
      {
        question: "Can the Huracán Spyder be delivered to my hotel or DXB?",
        answer:
          "Yes. Fame Luxury delivers to hotels, villas, and residences across Dubai, and to DXB on request. Share the address or flight time when you book.",
      },
      {
        question: "Is the Huracán EVO Spyder a no-deposit rental?",
        answer:
          "No. The Huracán Spyder needs a security deposit. The Urus, G63, and Yukon Denali are the no-deposit cars in the fleet.",
      },
      huracanDocuments,
    ],
  },
  "lamborghini-huracan-evo-spyder-black": {
    seoTitle: "Black Lamborghini Huracán EVO Spyder Rental Dubai",
    seoDescription:
      "Rent the black (Nero) Lamborghini Huracán EVO Spyder in Dubai from AED 2,499/day. Convertible V10 with hotel, villa, and DXB delivery.",
    overview: [
      "The black Huracán EVO Spyder is the Nero version of the open-top Lamborghini in the fleet. It has the same 5.2-litre V10, 610 hp, all-wheel drive, and 3.5-second 0–100 km/h as the blue Spyder, and starts from the same AED 2,499 a day.",
      "Black suits evening drives through Downtown and Business Bay, and photos where a darker car stands out against the skyline. If the black car is booked for your dates, ask for the blue Spyder.",
    ],
    faqs: [
      {
        question: "Is the black Huracán Spyder the same as the blue one?",
        answer:
          "Yes, apart from the colour. Both are 2023 Huracán EVO Spyders with the same V10, daily rate, and rental terms.",
      },
      {
        question: "How much is the black Huracán EVO Spyder to rent in Dubai?",
        answer:
          "It starts from AED 2,499 per day. The WhatsApp quote confirms mileage, the security deposit, and delivery.",
      },
      huracanDocuments,
    ],
  },
  "lamborghini-huracan-evo-coupe-red": {
    seoTitle: "Lamborghini Huracán EVO Coupe Rental Dubai — Red",
    seoDescription:
      "Rent the red Lamborghini Huracán EVO Coupe in Dubai from AED 2,199/day. 610 hp V10, all-wheel drive, hotel and DXB delivery.",
    overview: [
      "The red Huracán EVO Coupe is a 2022 Rosso Lamborghini with a 5.2-litre V10, 610 hp, and all-wheel drive. It is the quickest Huracán in the fleet at 3.3 seconds to 100 km/h, and the lowest-priced at AED 2,199 a day.",
      "Choose the coupe for Sheikh Zayed Road, Downtown, and DIFC evenings when you want the V10 without an open cabin. If you want the roof down for Palm Jumeirah or JBR, the Huracán EVO Spyder starts from AED 2,499.",
    ],
    faqs: [
      {
        question: "How much is the Huracán EVO Coupe to rent in Dubai?",
        answer:
          "The red Huracán EVO Coupe starts from AED 2,199 per day, AED 300 less than the Spyder.",
      },
      {
        question: "Coupe or Spyder — which Huracán should I rent?",
        answer:
          "Pick the coupe for city driving and the lower rate. Pick the Spyder if open-top driving on the coast is the point of the trip.",
      },
      huracanDocuments,
    ],
  },
  "lamborghini-urus-gray-2021": {
    seoTitle: "Lamborghini Urus Rental Dubai — Gray, No Deposit",
    seoDescription:
      "Rent the gray Lamborghini Urus in Dubai from AED 1,999/day with no deposit. Five seats, 650 hp, hotel, villa, and DXB delivery.",
    overview: [
      "The gray Urus is a 2021 Grigio Lamborghini SUV with a 4.0-litre twin-turbo V8, 650 hp, all-wheel drive, and five seats. 0–100 km/h takes 3.6 seconds. Rental starts from AED 1,999 a day, with no deposit.",
      "Gray is the quieter of the three Urus colours, suited to a week of hotel and business driving. It has room for four passengers and luggage, which the two-seat Huracán and F8 do not.",
    ],
    faqs: [
      {
        question: "How much is the gray Lamborghini Urus to rent in Dubai?",
        answer:
          "It starts from AED 1,999 per day. The silver and black Urus are the same rate.",
      },
      urusNoDeposit,
      {
        question: "How many people fit in the Urus?",
        answer:
          "Five, including the driver. For seven, book the GMC Yukon Denali.",
      },
    ],
  },
  "lamborghini-urus-silver-2022": {
    seoTitle: "Lamborghini Urus Rental Dubai — Silver, No Deposit",
    seoDescription:
      "Rent the silver 2022 Lamborghini Urus in Dubai from AED 1,999/day with no deposit. Ideal for Palm Jumeirah, weddings, and photos.",
    overview: [
      "The silver Urus is the 2022 car in the fleet: a 650 hp twin-turbo V8 Lamborghini SUV with all-wheel drive and five seats. It starts from AED 1,999 a day with no deposit.",
      "Silver is the brightest Urus, which suits weddings, Palm Jumeirah photos, and daytime arrivals. Performance and terms are the same as the gray and black cars.",
    ],
    faqs: [
      {
        question: "Can I rent the silver Urus for a wedding in Dubai?",
        answer:
          "Yes. Share the venue, timing, and any decoration plans on WhatsApp so they are written into the rental terms.",
      },
      urusNoDeposit,
      {
        question: "How much is the silver Urus per day?",
        answer:
          "It starts from AED 1,999 per day. Dates, mileage, and delivery can change the final quote.",
      },
    ],
  },
  "lamborghini-urus-black-2021": {
    seoTitle: "Lamborghini Urus Rental Dubai — Black, No Deposit",
    seoDescription:
      "Rent the black Lamborghini Urus in Dubai from AED 1,999/day with no deposit. 650 hp, five seats, delivered across Dubai.",
    overview: [
      "The black Urus is a 2021 Nero Lamborghini SUV with 650 hp, all-wheel drive, an 8-speed automatic, and five seats. It starts from AED 1,999 a day and is a no-deposit car.",
      "Black suits evening Downtown, DIFC, and Business Bay arrivals, and business trips that start with DXB delivery.",
    ],
    faqs: [
      {
        question: "How much is the black Lamborghini Urus to rent?",
        answer:
          "It starts from AED 1,999 per day, the same as the gray and silver Urus.",
      },
      urusNoDeposit,
      {
        question: "Can the Urus be delivered to DXB?",
        answer:
          "Yes, on request. Share your flight number and arrival time so the handover is timed to your landing.",
      },
    ],
  },
  "mercedes-g63-black-matte": {
    seoTitle: "Mercedes G63 Rental Dubai — Satin Black, No Deposit",
    seoDescription:
      "Rent the satin black Mercedes-AMG G63 in Dubai from AED 1,199/day with no deposit. 577 hp G-Wagen with hotel and DXB delivery.",
    overview: [
      "This G63 is a 2023 satin black G-Wagen: a 577 hp 4.0-litre twin-turbo V8, all-wheel drive, a 9-speed automatic, and five seats. It starts from AED 1,199 a day with no deposit.",
      "The satin finish sits between the glossy black and full matte G63s. It photographs well in daylight without the reflections of a gloss car.",
    ],
    faqs: [
      {
        question: "What is the difference between the satin and matte black G63?",
        answer:
          "This car has a satin black finish. The G63 Matte Black has a full matte wrap. Engine, seats, and rate are the same.",
      },
      g63NoDeposit,
      {
        question: "How much is the G63 to rent in Dubai?",
        answer: "Every G63 in the fleet starts from AED 1,199 per day.",
      },
    ],
  },
  "mercedes-g63-black": {
    seoTitle: "Mercedes G63 AMG Rental Dubai — Black, No Deposit",
    seoDescription:
      "Rent the glossy black Mercedes-AMG G63 in Dubai from AED 1,199/day with no deposit. Five seats, 577 hp, delivered to your hotel or villa.",
    overview: [
      "The black G63 is a 2023 G-Wagen in glossy Obsidian Black with a 577 hp twin-turbo V8 and five seats. It starts from AED 1,199 a day and is a no-deposit car.",
      "Gloss black is the classic G-Class look for business meetings, DIFC arrivals, and airport pick-ups, and it works well for weekly or monthly plans.",
    ],
    faqs: [
      g63NoDeposit,
      {
        question: "Can I rent the black G63 for a week or a month?",
        answer:
          "Yes. Weekly and monthly plans usually lower the effective daily rate. Ask for the plan when you message on WhatsApp.",
      },
      {
        question: "How much is the black G63 per day?",
        answer: "It starts from AED 1,199 per day.",
      },
    ],
  },
  "mercedes-g63-matte-black": {
    seoTitle: "Matte Black Mercedes G63 Rental Dubai — No Deposit",
    seoDescription:
      "Rent the full matte black Mercedes-AMG G63 in Dubai from AED 1,199/day with no deposit. 577 hp, five seats, Dubai-wide delivery.",
    overview: [
      "This G63 has a full matte black wrap on a 2023 G-Wagen with a 577 hp V8, all-wheel drive, and five seats. It starts from AED 1,199 a day, with no deposit.",
      "The full matte finish is the darkest G63 in the fleet, which suits night drives and photoshoots.",
    ],
    faqs: [
      g63NoDeposit,
      {
        question: "Can I use the matte G63 for a photoshoot?",
        answer:
          "Yes. Share the location and timing on WhatsApp so delivery and return fit the shoot.",
      },
      {
        question: "How much is the matte black G63 per day?",
        answer: "It starts from AED 1,199 per day.",
      },
    ],
  },
  "mercedes-g63-gray": {
    seoTitle: "Mercedes G63 Rental Dubai — Selenite Grey, No Deposit",
    seoDescription:
      "Rent the Selenite Grey Mercedes-AMG G63 in Dubai from AED 1,199/day with no deposit. Five-seat G-Wagen with hotel and villa delivery.",
    overview: [
      "The gray G63 is a 2023 G-Wagen in Selenite Grey with a 577 hp twin-turbo V8, a 9-speed automatic, and five seats. It starts from AED 1,199 a day with no deposit.",
      "Selenite Grey is a lighter, understated colour that suits Business Bay and Dubai Hills villa stays as well as long highway drives.",
    ],
    faqs: [
      g63NoDeposit,
      {
        question: "How much is the gray G63 to rent in Dubai?",
        answer: "It starts from AED 1,199 per day.",
      },
      {
        question: "Can the G63 be delivered to a villa?",
        answer:
          "Yes. Share the community gate and villa number so the handover is not held up at security.",
      },
    ],
  },
  "mercedes-g63-gray-matte": {
    seoTitle: "Satin Gray Mercedes G63 Rental Dubai — No Deposit",
    seoDescription:
      "Rent the satin gray Mercedes-AMG G63 in Dubai from AED 1,199/day with no deposit. 577 hp G-Wagen delivered across Dubai.",
    overview: [
      "This G63 is a 2023 G-Wagen with a satin gray wrap, a 577 hp V8, all-wheel drive, and five seats. It starts from AED 1,199 a day with no deposit.",
      "The satin gray finish is a quieter alternative to black or white when you want the G-Class to look a little different.",
    ],
    faqs: [
      g63NoDeposit,
      {
        question: "Is the satin gray G63 different from the Selenite Grey one?",
        answer:
          "Yes. This car has a satin gray wrap; the Selenite Grey G63 is gloss paint. Both have the same engine, seats, and rate.",
      },
      {
        question: "How much is the satin gray G63 per day?",
        answer: "It starts from AED 1,199 per day.",
      },
    ],
  },
  "mercedes-g63-white": {
    seoTitle: "White Mercedes G63 Rental Dubai — No Deposit",
    seoDescription:
      "Rent the Polar White Mercedes-AMG G63 in Dubai from AED 1,199/day with no deposit. Popular for weddings, Palm Jumeirah, and DXB arrivals.",
    overview: [
      "The white G63 is a 2023 G-Wagen in Polar White with a 577 hp twin-turbo V8 and five seats. It starts from AED 1,199 a day and is a no-deposit car.",
      "White suits weddings, Palm Jumeirah and JBR photos, and bright daytime arrivals. It is also easy to spot at a DXB pick-up.",
    ],
    faqs: [
      {
        question: "Can I rent the white G63 as a wedding car?",
        answer:
          "Yes. Share the venue and timing on WhatsApp. Decoration rules are confirmed with the rental terms.",
      },
      g63NoDeposit,
      {
        question: "How much is the white G63 per day?",
        answer: "It starts from AED 1,199 per day.",
      },
    ],
  },
  "brabus-g-blue-carbon": {
    seoTitle: "Brabus G-Class Widestar Rental Dubai — Blue Carbon",
    seoDescription:
      "Rent the Brabus G-Class Widestar in blue and black carbon in Dubai from AED 1,799/day. 800 hp, five seats, hotel and villa delivery.",
    overview: [
      "This Brabus is a 2022 G-Class Widestar in blue with black carbon details. Brabus tuning takes the 4.0-litre twin-turbo V8 to 800 hp, with 0–100 km/h in 4.1 seconds, all-wheel drive, and five seats. It starts from AED 1,799 a day.",
      "Choose it when a standard G63 is not enough presence. It costs AED 600 a day more than a G63 and AED 200 less than the Brabus Rocket 900.",
    ],
    faqs: [
      {
        question: "How much is the Brabus G-Class to rent in Dubai?",
        answer: "The blue carbon Brabus G-Class starts from AED 1,799 per day.",
      },
      {
        question: "Is the Brabus a no-deposit rental?",
        answer:
          "No. The Brabus needs a security deposit. The standard G63s are the no-deposit G-Class option.",
      },
      {
        question: "Brabus G-Class or Rocket 900?",
        answer:
          "The Widestar has 800 hp from AED 1,799. The Rocket 900 has 900 hp and a 4.5-litre V8 from AED 1,999.",
      },
    ],
  },
  "brabus-rocket-900-gray": {
    seoTitle: "Brabus Rocket 900 Rental Dubai — 900 hp G-Wagen",
    seoDescription:
      "Rent the gray Brabus Rocket 900 in Dubai from AED 1,999/day. 900 hp, 4.5L twin-turbo V8, five seats, hotel and villa delivery.",
    overview: [
      "The Brabus Rocket 900 is a 2024 G-Wagen with a 4.5-litre twin-turbo V8, 900 hp, all-wheel drive, and five seats. 0–100 km/h takes 3.7 seconds. Rental starts from AED 1,999 a day.",
      "It is the most powerful SUV in the fleet and the widest-looking. Book it for arrivals, events, and wedding entrances where the car itself is the statement.",
    ],
    faqs: [
      {
        question: "How much is the Brabus Rocket 900 to rent in Dubai?",
        answer: "The gray Rocket 900 starts from AED 1,999 per day.",
      },
      {
        question: "Is the Rocket 900 a no-deposit rental?",
        answer:
          "No. It needs a security deposit, confirmed in the WhatsApp quote before payment.",
      },
      {
        question: "How many seats does the Rocket 900 have?",
        answer: "Five, including the driver.",
      },
    ],
  },
  "porsche-911-gt3-black-matte": {
    seoTitle: "Porsche 911 GT3 Rental Dubai — Matte Black",
    seoDescription:
      "Rent the matte black Porsche 911 GT3 in Dubai from AED 2,499/day. 510 hp naturally aspirated flat-six, hotel and DXB delivery.",
    overview: [
      "The 911 GT3 is a 2024 Porsche in satin black with a 4.0-litre naturally aspirated flat-six, 510 hp, rear-wheel drive, and a 7-speed PDK. 0–100 km/h takes 3.4 seconds. It starts from AED 2,499 a day.",
      "It is the driver’s car in the fleet: precise, high-revving, and usable in Marina and Downtown traffic. It seats two, so it is not a family booking.",
    ],
    faqs: [
      {
        question: "How much is the Porsche 911 GT3 to rent in Dubai?",
        answer: "The matte black GT3 starts from AED 2,499 per day.",
      },
      {
        question: "Is the GT3 a no-deposit rental?",
        answer:
          "No. It needs a security deposit. The G63, Urus, and Yukon are the no-deposit cars.",
      },
      {
        question: "What age do I need to be to rent the GT3?",
        answer:
          "Drivers must be 25 or older for the GT3. Bring a passport, licence, and an International Driving Permit if your licence is not in English.",
      },
    ],
  },
  "ferrari-f8-tributo-red": {
    seoTitle: "Ferrari F8 Tributo Rental Dubai — Red",
    seoDescription:
      "Rent the red Ferrari F8 Tributo in Dubai from AED 2,399/day. 720 hp twin-turbo V8, self-drive, hotel, villa, and DXB delivery.",
    overview: [
      "The F8 Tributo is a 2022 Ferrari in Rosso Corsa with a 3.9-litre twin-turbo V8, 720 hp, rear-wheel drive, and a 7-speed dual-clutch gearbox. 0–100 km/h takes 2.9 seconds, the quickest in the fleet. It starts from AED 2,399 a day.",
      "It is a two-seater for couples, photoshoots, and short high-impact stays. For more space, book the Urus. For an open-top car at a similar rate, the Huracán EVO Spyder starts from AED 2,499.",
    ],
    faqs: [
      {
        question: "How much is the Ferrari F8 Tributo to rent in Dubai?",
        answer: "The red F8 Tributo starts from AED 2,399 per day.",
      },
      {
        question: "Is the F8 a no-deposit rental?",
        answer:
          "No. The F8 needs a security deposit, confirmed in the WhatsApp quote.",
      },
      {
        question: "What age do I need to be to rent a Ferrari in Dubai?",
        answer:
          "Drivers must be 25 or older for the F8 Tributo.",
      },
    ],
  },
  "gmc-yukon-denali-black": {
    seoTitle: "GMC Yukon Denali Rental Dubai — 7 Seats, No Deposit",
    seoDescription:
      "Rent the 2026 GMC Yukon Denali in Dubai from AED 899/day with no deposit. Seven seats, 6.2L V8, ideal for families and DXB pick-ups.",
    overview: [
      "The Yukon Denali is a 2026 GMC in Onyx Black with a 6.2-litre V8, 420 hp, all-wheel drive, a 10-speed automatic, and seven seats. It starts from AED 899 a day, the lowest rate in the fleet, with no deposit.",
      "It is the booking for families, groups, and airport runs with luggage. If five seats are enough and you want more presence, the G63 starts from AED 1,199 and the Urus from AED 1,999.",
    ],
    faqs: [
      {
        question: "How much is the GMC Yukon Denali to rent in Dubai?",
        answer: "It starts from AED 899 per day.",
      },
      {
        question: "Is the Yukon a no-deposit rental?",
        answer:
          "Yes. The Yukon Denali is listed as no-deposit, confirmed in writing before payment.",
      },
      {
        question: "Can I get a child seat in the Yukon?",
        answer:
          "Yes. Ask for child seats when you book so they are fitted before handover.",
      },
    ],
  },
};

export function getCarContent(slug: string): CarContent | undefined {
  return carContent[slug];
}

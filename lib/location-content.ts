import type { FAQItem } from "./types";

export interface LocationContent {
  details: string[];
  faqs: FAQItem[];
}

const deliveryHow: FAQItem = {
  question: "How do I book delivery?",
  answer:
    "Message Fame Luxury on WhatsApp with the car, dates, and a pin or address. The concierge confirms availability, the daily rate, mileage, and deposit status before payment.",
};

export const locationContent: Record<string, LocationContent> = {
  "downtown-dubai": {
    details: [
      "Handover usually happens at the hotel or residence entrance, with the car parked in valet or visitor parking while documents are checked. Share the tower or hotel name so the driver can arrange access.",
      "Downtown works well for an evening on Sheikh Zayed Road, a drive past the Burj Khalifa and Dubai Opera, and photos on the Boulevard. The Ferrari F8 Tributo and black Urus are common choices for skyline evenings.",
    ],
    faqs: [
      {
        question: "Can you deliver to a Downtown Dubai hotel?",
        answer:
          "Yes. Share the hotel name and arrival time. Handover is at the entrance or valet area.",
      },
      deliveryHow,
    ],
  },
  "dubai-marina": {
    details: [
      "Marina towers often have strict visitor parking, so share the building name and any parking instructions when you book. Handover can also be arranged at a Marina hotel entrance.",
      "From the Marina, JBR, Palm Jumeirah, and Jumeirah Beach Road are all within a short drive, which is why the Huracán EVO Spyder and Porsche 911 GT3 suit stays here.",
    ],
    faqs: [
      {
        question: "Can the car be delivered to a Dubai Marina apartment?",
        answer:
          "Yes. Share the tower name and parking instructions so the driver can reach you without delay.",
      },
      deliveryHow,
    ],
  },
  "palm-jumeirah": {
    details: [
      "Palm Jumeirah delivery covers Atlantis, the resort hotels on the crescent, and private villas on the fronds. Villa deliveries need the frond and villa number, and sometimes a gate pass.",
      "The silver Urus, white G63, and Huracán Spyder suit Palm photos, The Pointe, and celebration arrivals. The Spyder is the open-top choice for the crescent road.",
    ],
    faqs: [
      {
        question: "Do you deliver to villas on the Palm fronds?",
        answer:
          "Yes. Share the frond and villa number, and arrange a gate pass if your community requires one.",
      },
      deliveryHow,
    ],
  },
  jbr: {
    details: [
      "JBR handover is usually at the hotel entrance or residence drop-off on The Walk side. Weekend evenings are busy, so allow extra time for the handover.",
      "From JBR, the coast road toward Dubai Marina and Palm Jumeirah suits the Huracán EVO Spyder. The white G63 is the five-seat alternative for beach days.",
    ],
    faqs: [
      {
        question: "Can you deliver to a JBR beach hotel?",
        answer:
          "Yes. Share the hotel name and arrival time, and the car will be handed over at the entrance.",
      },
      deliveryHow,
    ],
  },
  "business-bay": {
    details: [
      "Business Bay towers usually require visitor registration. Share the tower name, your unit, and the parking level so the driver is not held at security.",
      "Business Bay sits between Downtown and DIFC, so it works for weekday meetings in a black Urus or G63 and evening drives along the canal.",
    ],
    faqs: [
      {
        question: "Can you deliver to an office in Business Bay?",
        answer:
          "Yes. Share the tower and floor, and any visitor registration the building needs.",
      },
      deliveryHow,
    ],
  },
  difc: {
    details: [
      "DIFC handover is usually at Gate Avenue, a hotel entrance, or the building drop-off. Security often asks for the driver’s name in advance, so the concierge sends it once the booking is confirmed.",
      "The Ferrari F8 Tributo, black G63, and Porsche 911 GT3 suit client meetings and evenings in the financial district.",
    ],
    faqs: [
      {
        question: "Can I get a car delivered for a DIFC meeting?",
        answer:
          "Yes. Share the building and meeting time, and the driver’s name is sent ahead for security.",
      },
      deliveryHow,
    ],
  },
  jumeirah: {
    details: [
      "Jumeirah delivery covers villas and boutique hotels along Jumeirah Beach Road between JBR and Umm Suqeim. Villa deliveries need the street and villa number.",
      "Beach Road toward the Burj Al Arab is one of the best short open-top drives in Dubai, which is why the Huracán EVO Spyder is the main booking here.",
    ],
    faqs: [
      {
        question: "Do you deliver to villas in Jumeirah?",
        answer:
          "Yes. Share the street and villa number, and a pin if the villa is hard to find.",
      },
      deliveryHow,
    ],
  },
  "dubai-hills": {
    details: [
      "Dubai Hills Estate is a gated community, so share the gate and villa number, or the Dubai Hills Mall parking entrance, when you book.",
      "Families staying in Dubai Hills usually need seats and space, which is why the seven-seat Yukon Denali and five-seat Urus and G63 are listed here.",
    ],
    faqs: [
      {
        question: "Can you deliver to a Dubai Hills villa?",
        answer:
          "Yes. Share the community gate and villa number so the driver is let in without delay.",
      },
      deliveryHow,
    ],
  },
  "dxb-airport": {
    details: [
      "Share your flight number and terminal when you book. The handover is timed to your landing, and documents are checked before arrival so the handover is quick.",
      "The Yukon Denali suits families with luggage. The white G63 and black Urus suit business arrivals. You can keep the same car for the rest of your stay.",
    ],
    faqs: [
      {
        question: "What happens if my flight is delayed?",
        answer:
          "Share your flight number when you book. The concierge tracks the arrival and adjusts the handover time.",
      },
      deliveryHow,
    ],
  },
};

export function getLocationContent(slug: string): LocationContent | undefined {
  return locationContent[slug];
}

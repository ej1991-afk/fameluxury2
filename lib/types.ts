export type CarCategory =
  | "supercar"
  | "sports"
  | "suv"
  | "sedan"
  | "convertible"
  | "electric";

export interface CarSpecs {
  horsepower: number;
  acceleration: string;
  drive: string;
  seats: number;
  transmission: string;
  engine: string;
}

export interface Car {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: CarCategory;
  tagline: string;
  pricePerDay: number;
  image: string;
  specs: CarSpecs;
  featured?: boolean;
  noDeposit?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface Location {
  name: string;
  description: string;
  slug?: string;
  seoTitle?: string;
  seoDescription?: string;
  longDescription?: string;
  highlights?: string[];
}

export type BlogCategory =
  | "guides"
  | "dubai-tips"
  | "supercars"
  | "lifestyle"
  | "rental-advice";

export type BlogContentBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | {
      type: "faq";
      items: { question: string; answer: string }[];
    };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: number;
  image: string;
  imageAlt?: string;
  featured?: boolean;
  keywords: string[];
  content: BlogContentBlock[];
}

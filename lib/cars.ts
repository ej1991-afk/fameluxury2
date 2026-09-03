import type { Car, CarCategory } from "./types";

export const cars: Car[] = [
  {
    id: "1",
    slug: "lamborghini-urus",
    name: "Urus",
    brand: "Lamborghini",
    category: "suv",
    tagline: "The super SUV",
    pricePerDay: 3499,
    image:
      "/cars/lamborghini-urus.webp",
    specs: {
      horsepower: 650,
      acceleration: "0-100 km/h 3.6 s",
      drive: "AWD",
      seats: 5,
      transmission: "8-speed automatic",
      engine: "4.0L twin-turbo V8",
    },
    featured: true,
    noDeposit: true,
  },
  {
    id: "2",
    slug: "ferrari-296-gtb",
    name: "296 GTB",
    brand: "Ferrari",
    category: "supercar",
    tagline: "Hybrid supercar excellence",
    pricePerDay: 4999,
    image:
      "/cars/ferrari-296-gtb.webp",
    specs: {
      horsepower: 830,
      acceleration: "0-100 km/h 2.9 s",
      drive: "RWD",
      seats: 2,
      transmission: "8-speed DCT",
      engine: "3.0L V6 hybrid",
    },
    featured: true,
  },
  {
    id: "3",
    slug: "mercedes-g63-amg",
    name: "G63 AMG",
    brand: "Mercedes-Benz",
    category: "suv",
    tagline: "Iconic luxury off-roader",
    pricePerDay: 2499,
    image:
      "/cars/mercedes-g63-amg.webp",
    specs: {
      horsepower: 577,
      acceleration: "0-100 km/h 4.5 s",
      drive: "AWD",
      seats: 5,
      transmission: "9-speed automatic",
      engine: "4.0L twin-turbo V8",
    },
    featured: true,
    noDeposit: true,
  },
  {
    id: "4",
    slug: "rolls-royce-cullinan",
    name: "Cullinan",
    brand: "Rolls-Royce",
    category: "suv",
    tagline: "Effortless everywhere",
    pricePerDay: 5999,
    image:
      "/cars/rolls-royce-cullinan.webp",
    specs: {
      horsepower: 563,
      acceleration: "0-100 km/h 5.2 s",
      drive: "AWD",
      seats: 5,
      transmission: "8-speed automatic",
      engine: "6.75L twin-turbo V12",
    },
    featured: true,
  },
  {
    id: "5",
    slug: "porsche-911-turbo-s",
    name: "911 Turbo S",
    brand: "Porsche",
    category: "sports",
    tagline: "Everyday supercar",
    pricePerDay: 2999,
    image:
      "/cars/porsche-911-turbo-s.webp",
    specs: {
      horsepower: 640,
      acceleration: "0-100 km/h 2.7 s",
      drive: "AWD",
      seats: 4,
      transmission: "8-speed PDK",
      engine: "3.8L twin-turbo flat-6",
    },
    featured: true,
    noDeposit: true,
  },
  {
    id: "6",
    slug: "bmw-m5",
    name: "M5",
    brand: "BMW",
    category: "sedan",
    tagline: "Executive performance",
    pricePerDay: 1499,
    image:
      "/cars/bmw-m5.webp",
    specs: {
      horsepower: 617,
      acceleration: "0-100 km/h 3.4 s",
      drive: "AWD",
      seats: 5,
      transmission: "8-speed automatic",
      engine: "4.4L twin-turbo V8",
    },
    noDeposit: true,
  },
  {
    id: "7",
    slug: "audi-rs3",
    name: "RS3 Sedan",
    brand: "Audi",
    category: "sedan",
    tagline: "Compact performance",
    pricePerDay: 999,
    image:
      "/cars/audi-rs3.webp",
    specs: {
      horsepower: 394,
      acceleration: "0-100 km/h 3.8 s",
      drive: "AWD",
      seats: 5,
      transmission: "7-speed S tronic",
      engine: "2.5L turbo inline-5",
    },
    noDeposit: true,
  },
  {
    id: "8",
    slug: "mclaren-720s",
    name: "720S",
    brand: "McLaren",
    category: "supercar",
    tagline: "Pure supercar thrill",
    pricePerDay: 4499,
    image:
      "/cars/mclaren-720s.webp",
    specs: {
      horsepower: 710,
      acceleration: "0-100 km/h 2.9 s",
      drive: "RWD",
      seats: 2,
      transmission: "7-speed DCT",
      engine: "4.0L twin-turbo V8",
    },
  },
  {
    id: "9",
    slug: "bentley-continental-gt",
    name: "Continental GT",
    brand: "Bentley",
    category: "sports",
    tagline: "Grand touring refined",
    pricePerDay: 3499,
    image:
      "/cars/bentley-continental-gt.webp",
    specs: {
      horsepower: 542,
      acceleration: "0-100 km/h 3.9 s",
      drive: "AWD",
      seats: 4,
      transmission: "8-speed DCT",
      engine: "4.0L twin-turbo V8",
    },
  },
  {
    id: "10",
    slug: "range-rover-sport",
    name: "Range Rover Sport",
    brand: "Land Rover",
    category: "suv",
    tagline: "Luxury adventure",
    pricePerDay: 1799,
    image:
      "/cars/range-rover-sport.webp",
    specs: {
      horsepower: 395,
      acceleration: "0-100 km/h 5.9 s",
      drive: "AWD",
      seats: 5,
      transmission: "8-speed automatic",
      engine: "3.0L inline-6 mild hybrid",
    },
    noDeposit: true,
  },
  {
    id: "11",
    slug: "bmw-430i-convertible",
    name: "430i Convertible",
    brand: "BMW",
    category: "convertible",
    tagline: "Open-air elegance",
    pricePerDay: 1299,
    image:
      "/cars/bmw-430i-convertible.webp",
    specs: {
      horsepower: 255,
      acceleration: "0-100 km/h 6.2 s",
      drive: "RWD",
      seats: 4,
      transmission: "8-speed automatic",
      engine: "2.0L turbo inline-4",
    },
    noDeposit: true,
  },
  {
    id: "12",
    slug: "tesla-model-s-plaid",
    name: "Model S Plaid",
    brand: "Tesla",
    category: "electric",
    tagline: "Electric hyper-sedan",
    pricePerDay: 1999,
    image:
      "/cars/tesla-model-s-plaid.webp",
    specs: {
      horsepower: 1020,
      acceleration: "0-100 km/h 2.1 s",
      drive: "AWD",
      seats: 5,
      transmission: "Single-speed",
      engine: "Tri-motor electric",
    },
    noDeposit: true,
  },
  {
    id: "13",
    slug: "lamborghini-huracan",
    name: "Huracán EVO",
    brand: "Lamborghini",
    category: "supercar",
    tagline: "Naturally aspirated fury",
    pricePerDay: 3999,
    image:
      "/cars/lamborghini-huracan.webp",
    specs: {
      horsepower: 631,
      acceleration: "0-100 km/h 2.9 s",
      drive: "AWD",
      seats: 2,
      transmission: "7-speed DCT",
      engine: "5.2L V10",
    },
  },
  {
    id: "14",
    slug: "mercedes-maybach-s680",
    name: "Maybach S680",
    brand: "Mercedes-Maybach",
    category: "sedan",
    tagline: "Ultimate luxury sedan",
    pricePerDay: 4499,
    image:
      "/cars/mercedes-maybach-s680.webp",
    specs: {
      horsepower: 621,
      acceleration: "0-100 km/h 4.5 s",
      drive: "AWD",
      seats: 4,
      transmission: "9-speed automatic",
      engine: "6.0L twin-turbo V12",
    },
  },
  {
    id: "15",
    slug: "porsche-cayenne-turbo",
    name: "Cayenne Turbo GT",
    brand: "Porsche",
    category: "suv",
    tagline: "Track-bred SUV",
    pricePerDay: 2799,
    image:
      "/cars/porsche-cayenne-turbo.webp",
    specs: {
      horsepower: 631,
      acceleration: "0-100 km/h 3.3 s",
      drive: "AWD",
      seats: 5,
      transmission: "8-speed Tiptronic",
      engine: "4.0L twin-turbo V8",
    },
  },
  {
    id: "16",
    slug: "audi-r8",
    name: "R8 V10",
    brand: "Audi",
    category: "supercar",
    tagline: "Everyday supercar",
    pricePerDay: 3299,
    image:
      "/cars/audi-r8.webp",
    specs: {
      horsepower: 562,
      acceleration: "0-100 km/h 3.4 s",
      drive: "AWD",
      seats: 2,
      transmission: "7-speed S tronic",
      engine: "5.2L V10",
    },
  },
  {
    id: "17",
    slug: "ferrari-portofino",
    name: "Portofino M",
    brand: "Ferrari",
    category: "convertible",
    tagline: "La dolce vita on wheels",
    pricePerDay: 3799,
    image:
      "/cars/ferrari-portofino.webp",
    specs: {
      horsepower: 612,
      acceleration: "0-100 km/h 3.4 s",
      drive: "RWD",
      seats: 4,
      transmission: "8-speed DCT",
      engine: "3.9L twin-turbo V8",
    },
  },
  {
    id: "18",
    slug: "cadillac-escalade",
    name: "Escalade",
    brand: "Cadillac",
    category: "suv",
    tagline: "American luxury icon",
    pricePerDay: 1599,
    image:
      "/cars/cadillac-escalade.webp",
    specs: {
      horsepower: 420,
      acceleration: "0-100 km/h 6.1 s",
      drive: "AWD",
      seats: 7,
      transmission: "10-speed automatic",
      engine: "6.2L V8",
    },
    noDeposit: true,
  },
  {
    id: "19",
    slug: "bmw-xm",
    name: "XM",
    brand: "BMW",
    category: "suv",
    tagline: "M performance SUV",
    pricePerDay: 2199,
    image:
      "/cars/bmw-xm.webp",
    specs: {
      horsepower: 644,
      acceleration: "0-100 km/h 3.8 s",
      drive: "AWD",
      seats: 5,
      transmission: "8-speed automatic",
      engine: "4.4L V8 hybrid",
    },
  },
  {
    id: "20",
    slug: "rolls-royce-ghost",
    name: "Ghost",
    brand: "Rolls-Royce",
    category: "sedan",
    tagline: "Post-opulence refined",
    pricePerDay: 5499,
    image:
      "/cars/rolls-royce-ghost.webp",
    specs: {
      horsepower: 563,
      acceleration: "0-100 km/h 4.8 s",
      drive: "AWD",
      seats: 5,
      transmission: "8-speed automatic",
      engine: "6.75L twin-turbo V12",
    },
  },
  {
    id: "21",
    slug: "porsche-taycan-turbo",
    name: "Taycan Turbo S",
    brand: "Porsche",
    category: "electric",
    tagline: "Electric Porsche DNA",
    pricePerDay: 2299,
    image:
      "/cars/porsche-taycan-turbo.webp",
    specs: {
      horsepower: 750,
      acceleration: "0-100 km/h 2.8 s",
      drive: "AWD",
      seats: 4,
      transmission: "2-speed",
      engine: "Dual-motor electric",
    },
    noDeposit: true,
  },
  {
    id: "22",
    slug: "bentley-bentayga",
    name: "Bentayga",
    brand: "Bentley",
    category: "suv",
    tagline: "Bentley beyond boundaries",
    pricePerDay: 3299,
    image:
      "/cars/bentley-bentayga.webp",
    specs: {
      horsepower: 542,
      acceleration: "0-100 km/h 4.5 s",
      drive: "AWD",
      seats: 5,
      transmission: "8-speed automatic",
      engine: "4.0L twin-turbo V8",
    },
  },
  {
    id: "23",
    slug: "mercedes-amg-gt",
    name: "AMG GT 63 S",
    brand: "Mercedes-Benz",
    category: "sports",
    tagline: "Four-door coupe fury",
    pricePerDay: 2699,
    image:
      "/cars/mercedes-amg-gt.webp",
    specs: {
      horsepower: 630,
      acceleration: "0-100 km/h 3.2 s",
      drive: "AWD",
      seats: 4,
      transmission: "9-speed AMG Speedshift",
      engine: "4.0L twin-turbo V8",
    },
  },
  {
    id: "24",
    slug: "audi-rs-q8",
    name: "RS Q8",
    brand: "Audi",
    category: "suv",
    tagline: "Performance SUV king",
    pricePerDay: 2399,
    image:
      "/cars/audi-rs-q8.webp",
    specs: {
      horsepower: 591,
      acceleration: "0-100 km/h 3.8 s",
      drive: "AWD",
      seats: 5,
      transmission: "8-speed Tiptronic",
      engine: "4.0L twin-turbo V8",
    },
    noDeposit: true,
  },
];

export const categoryLabels: Record<CarCategory, string> = {
  supercar: "Supercar",
  sports: "Sports Car",
  suv: "Luxury SUV",
  sedan: "Sedan",
  convertible: "Convertible",
  electric: "Electric",
};

export function getCarBySlug(slug: string): Car | undefined {
  return cars.find((car) => car.slug === slug);
}

export function getFeaturedCars(): Car[] {
  return cars.filter((car) => car.featured);
}

export function getCarsByCategory(category: CarCategory): Car[] {
  return cars.filter((car) => car.category === category);
}

export function getCarsByBrand(brand: string): Car[] {
  return cars.filter(
    (car) => car.brand.toLowerCase() === brand.toLowerCase(),
  );
}

export function getAllBrands(): string[] {
  return [...new Set(cars.map((car) => car.brand))].sort();
}

export function getCarById(id: string): Car | undefined {
  return cars.find((car) => car.id === id);
}

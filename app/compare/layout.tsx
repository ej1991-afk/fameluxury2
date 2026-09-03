import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare Luxury Cars in Dubai",
  description:
    "Compare luxury and supercar rentals in Dubai side by side — price, horsepower, seats, and deposit options.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/compare" },
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

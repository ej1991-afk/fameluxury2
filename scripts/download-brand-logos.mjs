import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

/**
 * Simple Icons SVGs (black fill) — same source style as dreamridesdubai.ae/brand-logos.
 * Keep in sync with lib/brands.ts
 */
const brandLogoSources = {
  audi: "https://cdn.simpleicons.org/audi/000000",
  bentley: "https://cdn.simpleicons.org/bentley/000000",
  bmw: "https://cdn.simpleicons.org/bmw/000000",
  cadillac: "https://cdn.simpleicons.org/cadillac/000000",
  ferrari: "https://cdn.simpleicons.org/ferrari/000000",
  lamborghini: "https://cdn.simpleicons.org/lamborghini/000000",
  "land-rover": "https://www.dreamridesdubai.ae/brand-logos/land-rover.svg",
  mclaren: "https://cdn.simpleicons.org/mclaren/000000",
  "mercedes-benz": "https://www.dreamridesdubai.ae/brand-logos/mercedes-benz.svg",
  "mercedes-maybach": "https://www.dreamridesdubai.ae/brand-logos/maybach.svg",
  porsche: "https://cdn.simpleicons.org/porsche/000000",
  "rolls-royce": "https://cdn.simpleicons.org/rollsroyce/000000",
  tesla: "https://cdn.simpleicons.org/tesla/000000",
};

const outDir = join(process.cwd(), "public", "brands");
mkdirSync(outDir, { recursive: true });

for (const [slug, url] of Object.entries(brandLogoSources)) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to download ${slug}: ${res.status} ${url}`);
  }

  const body = await res.text();
  writeFileSync(join(outDir, `${slug}.svg`), body);
  console.log(`Saved ${slug}.svg`);
}

writeFileSync(
  join(outDir, "default.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img"><path fill="#000" d="M4 4h16v16H4z"/></svg>`,
);

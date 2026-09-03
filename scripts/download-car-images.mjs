import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import sharp from "sharp";

/** Keep in sync with lib/car-image-sources.ts */
const carImageSources = {
  "lamborghini-urus": { pexelsId: 20511363, label: "Lamborghini Urus" },
  "ferrari-296-gtb": { pexelsId: 16386025, label: "Ferrari 296 GTB" },
  "mercedes-g63-amg": { pexelsId: 20136034, label: "Mercedes-AMG G 63" },
  "rolls-royce-cullinan": {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Rolls-Royce_Cullinan_Midnight_Sapphire_%281%29.jpg/1280px-Rolls-Royce_Cullinan_Midnight_Sapphire_%281%29.jpg",
    label: "Rolls-Royce Cullinan",
  },
  "porsche-911-turbo-s": {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Porsche_992_Turbo_S_1X7A0413.jpg/1280px-Porsche_992_Turbo_S_1X7A0413.jpg",
    label: "Porsche 911 Turbo S",
  },
  "bmw-m5": {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/BMW_G90_M5_Brooklyn_Grey_Metallic_%281%29.jpg/1280px-BMW_G90_M5_Brooklyn_Grey_Metallic_%281%29.jpg",
    label: "BMW M5",
  },
  "audi-rs3": {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Audi_RS3_8Y_Sedan_IMG_6030.jpg/1280px-Audi_RS3_8Y_Sedan_IMG_6030.jpg",
    label: "Audi RS3",
  },
  "mclaren-720s": { pexelsId: 30842341, label: "McLaren 720S" },
  "bentley-continental-gt": { pexelsId: 1545743, label: "Bentley Continental GT" },
  "range-rover-sport": { pexelsId: 16510649, label: "Range Rover Sport" },
  "bmw-430i-convertible": { pexelsId: 31362313, label: "BMW 4 Series Convertible" },
  "tesla-model-s-plaid": { pexelsId: 16653735, label: "Tesla Model S" },
  "lamborghini-huracan": { pexelsId: 3802508, label: "Lamborghini Huracán" },
  "mercedes-maybach-s680": {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Mercedes-Maybach_S-Class_%28Z223%29_001.jpg/1280px-Mercedes-Maybach_S-Class_%28Z223%29_001.jpg",
    label: "Mercedes-Maybach S680",
  },
  "porsche-cayenne-turbo": {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Porsche_Cayenne_Turbo_GT_%289YB%29_Greater_Toronto_Area%2C_Canada.jpg/1280px-Porsche_Cayenne_Turbo_GT_%289YB%29_Greater_Toronto_Area%2C_Canada.jpg",
    label: "Porsche Cayenne Turbo GT",
  },
  "audi-r8": { pexelsId: 10566898, label: "Audi R8 V10" },
  "ferrari-portofino": { pexelsId: 4651251, label: "Ferrari Portofino M" },
  "cadillac-escalade": { pexelsId: 18441129, label: "Cadillac Escalade" },
  "bmw-xm": {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/BMW_XM_%28G09%29_IMG_7778.jpg/1280px-BMW_XM_%28G09%29_IMG_7778.jpg",
    label: "BMW XM",
  },
  "rolls-royce-ghost": {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/2025_Rolls-Royce_Ghost_Black_Badge.jpg/1280px-2025_Rolls-Royce_Ghost_Black_Badge.jpg",
    label: "Rolls-Royce Ghost",
  },
  "porsche-taycan-turbo": {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/2020_Porsche_Taycan_Turbo_S_%2821742%29.jpg/1280px-2020_Porsche_Taycan_Turbo_S_%2821742%29.jpg",
    label: "Porsche Taycan Turbo S",
  },
  "bentley-bentayga": { pexelsId: 15824825, label: "Bentley Bentayga" },
  "mercedes-amg-gt": { pexelsId: 18589713, label: "Mercedes-AMG GT 63 S" },
  "audi-rs-q8": { pexelsId: 27671077, label: "Audi RS Q8" },
  hero: { pexelsId: 3764984, label: "White Rolls-Royce Ghost Hero" },
};

function pexelsUrl(id, width = 1200) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=${width}`;
}

function getImageUrl(source, width = 1200) {
  if (source.url) return source.url;
  return pexelsUrl(source.pexelsId, width);
}

const outDir = join(process.cwd(), "public", "cars");
mkdirSync(outDir, { recursive: true });

const headers = {
  "User-Agent": "FameLuxuryCarRental/1.0 (car image downloader)",
};

async function download(slug, source, width = 1200) {
  const url = getImageUrl(source, width);
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`${slug}: HTTP ${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 10_000) throw new Error(`${slug}: file too small (${buf.length} bytes)`);

  const webp = await sharp(buf).webp({ quality: 85 }).toBuffer();
  const outputPath =
    slug === "hero"
      ? join(process.cwd(), "public", "hero.webp")
      : join(outDir, `${slug}.webp`);

  writeFileSync(outputPath, webp);
  console.log(`OK ${slug} (${webp.length} bytes) → ${source.label}`);
}

async function main() {
  const slugs = process.argv.slice(2);
  const entries = Object.entries(carImageSources).filter(
    ([slug]) => slugs.length === 0 || slugs.includes(slug),
  );

  for (const [slug, source] of entries) {
    const width = slug === "hero" ? 1920 : 1200;
    try {
      await download(slug, source, width);
    } catch (err) {
      console.error(`FAIL ${slug}:`, err.message);
      process.exitCode = 1;
    }
    await new Promise((r) => setTimeout(r, 800));
  }
}

main();

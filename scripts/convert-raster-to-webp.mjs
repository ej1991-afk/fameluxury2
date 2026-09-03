import { readFileSync, writeFileSync, unlinkSync, readdirSync, statSync, existsSync } from "fs";
import { join, extname, basename } from "path";
import sharp from "sharp";

/** Convert vehicle/hero photos only. Logos, icons, and UI assets should stay SVG. */
const rasterExt = new Set([".jpg", ".jpeg", ".png"]);
const photoDirs = ["public/cars"];

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath, files);
    } else if (rasterExt.has(extname(entry).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

const root = process.cwd();
const targets = photoDirs.flatMap((dir) => walk(join(root, dir)));

const heroJpg = join(root, "public", "hero.jpg");
if (existsSync(heroJpg)) {
  targets.push(heroJpg);
}

for (const inputPath of targets) {
  const outputPath = inputPath.replace(/\.(jpe?g|png)$/i, ".webp");
  try {
    const input = readFileSync(inputPath);
    const webp = await sharp(input).webp({ quality: 85 }).toBuffer();
    writeFileSync(outputPath, webp);
    unlinkSync(inputPath);
    console.log(`Converted ${basename(inputPath)} → ${basename(outputPath)}`);
  } catch (err) {
    console.warn(`Skipped ${inputPath}: ${err.message}`);
  }
}

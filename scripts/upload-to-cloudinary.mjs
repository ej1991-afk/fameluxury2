import { readFileSync, readdirSync, statSync } from "fs";
import { join, basename, extname } from "path";
import { v2 as cloudinary } from "cloudinary";

const root = process.cwd();
const folder = process.env.CLOUDINARY_FOLDER ?? "fame-luxury";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

function requireEnv(name) {
  if (!process.env[name]) {
    throw new Error(`Missing ${name}. Set it in .env.local before uploading.`);
  }
}

async function uploadFile(filePath, publicId) {
  const result = await cloudinary.uploader.upload(filePath, {
    public_id: publicId,
    overwrite: true,
    resource_type: "image",
  });
  console.log(`Uploaded ${basename(filePath)} → ${result.public_id}`);
}

async function main() {
  requireEnv("CLOUDINARY_CLOUD_NAME");
  requireEnv("CLOUDINARY_API_KEY");
  requireEnv("CLOUDINARY_API_SECRET");

  const carsDir = join(root, "public", "cars");
  const carFiles = readdirSync(carsDir).filter((file) => extname(file) === ".webp");

  for (const file of carFiles) {
    const slug = basename(file, ".webp");
    await uploadFile(join(carsDir, file), `${folder}/cars/${slug}`);
  }

  const heroPath = join(root, "public", "hero.webp");
  if (statSync(heroPath)) {
    await uploadFile(heroPath, `${folder}/hero`);
  }

  const logoPath = join(root, "public", "logo.webp");
  if (statSync(logoPath)) {
    await uploadFile(logoPath, `${folder}/logo`);
  }

  console.log(`Done. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=${process.env.CLOUDINARY_CLOUD_NAME}`);
  console.log(`Optional: NEXT_PUBLIC_CLOUDINARY_FOLDER=${folder}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

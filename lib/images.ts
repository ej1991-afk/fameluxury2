const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const folder = process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER ?? "fame-luxury";

export function isCloudinaryEnabled(): boolean {
  return Boolean(cloudName);
}

export function getCloudinaryFolder(): string {
  return folder;
}

export function cloudinaryPublicId(...segments: string[]): string {
  return [folder, ...segments].join("/");
}

export function cloudinaryUrl(
  publicId: string,
  options: { width?: number; quality?: number | "auto" } = {},
): string {
  if (!cloudName) return "";

  const transforms = ["f_auto", "c_limit"];
  if (options.width) transforms.push(`w_${options.width}`);
  transforms.push(`q_${options.quality ?? "auto"}`);

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transforms.join(",")}/${publicId}`;
}

export const heroImage = isCloudinaryEnabled()
  ? cloudinaryPublicId("hero")
  : "/hero.webp";

/** Gold-strip studio shots with plates removed. */
const carImageFileSlugs: Record<string, string> = {
  "lamborghini-huracan-evo-spyder-blue": "lamborghini-huracan-evo-spyder-blue-noplate",
  "lamborghini-huracan-evo-spyder-black": "lamborghini-huracan-evo-spyder-black-noplate",
  "lamborghini-huracan-evo-coupe-red": "lamborghini-huracan-evo-coupe-red-noplate",
  "lamborghini-urus-gray-2021": "lamborghini-urus-gray-2021-noplate",
  "lamborghini-urus-silver-2022": "lamborghini-urus-silver-2022-noplate",
  "lamborghini-urus-black-2021": "lamborghini-urus-black-2021-noplate",
  "mercedes-g63-black-matte": "mercedes-g63-black-matte-noplate",
  "mercedes-g63-black": "mercedes-g63-black-noplate",
  "mercedes-g63-matte-black": "mercedes-g63-matte-black-noplate",
  "mercedes-g63-gray": "mercedes-g63-gray-noplate",
  "mercedes-g63-gray-matte": "mercedes-g63-gray-matte-noplate",
  "mercedes-g63-white": "mercedes-g63-white-noplate",
  "brabus-g-blue-carbon": "brabus-g-blue-carbon-noplate",
  "brabus-rocket-900-gray": "brabus-rocket-900-gray-noplate",
  "porsche-911-gt3-black-matte": "porsche-911-gt3-black-matte-noplate",
  "ferrari-f8-tributo-red": "ferrari-f8-tributo-red-noplate",
  "gmc-yukon-denali-black": "gmc-yukon-denali-black-noplate",
};

export function getCarImage(slug: string): string {
  const fileSlug = carImageFileSlugs[slug] ?? slug;
  if (isCloudinaryEnabled()) {
    return cloudinaryPublicId("cars", fileSlug);
  }
  return `/cars/${fileSlug}.webp`;
}

export function getSiteLogo(): string {
  return "/logo.svg";
}

/** Resolve legacy blog/car paths to Cloudinary public IDs or local paths. */
export function resolveImageSrc(src: string): string {
  const carMatch = src.match(/^\/cars\/(.+)\.webp$/);
  if (carMatch) {
    return getCarImage(carMatch[1]);
  }

  if (src === "/hero.webp") {
    return heroImage;
  }

  if (src === "/logo.webp" || src === "/logo.svg") {
    return getSiteLogo();
  }

  return src;
}

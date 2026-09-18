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

/** Gold-strip studio shots with Fame-logo DUBAI plates. */
const carImageFileSlugs: Record<string, string> = {
  "lamborghini-huracan-evo-spyder-blue": "lamborghini-huracan-evo-spyder-blue-fameplate",
  "lamborghini-huracan-evo-spyder-black": "lamborghini-huracan-evo-spyder-black-fameplate",
  "lamborghini-huracan-evo-coupe-red": "lamborghini-huracan-evo-coupe-red-rocketplate",
  "lamborghini-urus-gray-2021": "lamborghini-urus-gray-2021-fameplate",
  "lamborghini-urus-silver-2022": "lamborghini-urus-silver-2022-fameplate",
  "lamborghini-urus-black-2021": "lamborghini-urus-black-2021-fameplate",
  "mercedes-g63-black-matte": "mercedes-g63-black-matte-fameplate",
  "mercedes-g63-black": "mercedes-g63-black-fameplate",
  "mercedes-g63-matte-black": "mercedes-g63-matte-black-fameplate",
  "mercedes-g63-gray": "mercedes-g63-gray-fameplate",
  "mercedes-g63-gray-matte": "mercedes-g63-gray-matte-fameplate",
  "mercedes-g63-white": "mercedes-g63-white-fameplate",
  "brabus-g-blue-carbon": "brabus-g-blue-carbon-fameplate",
  "brabus-rocket-900-gray": "brabus-rocket-900-gray-fameplate",
  "porsche-911-gt3-black-matte": "porsche-911-gt3-black-matte-fameplate",
  "ferrari-f8-tributo-red": "ferrari-f8-tributo-red-rocketstudio",
  "gmc-yukon-denali-black": "gmc-yukon-denali-black-rocketstudio",
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

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

/** Gold-strip luxury studio shots with DUBAI plates. */
const carImageFileSlugs: Record<string, string> = {
  "lamborghini-huracan-evo-spyder-blue": "lamborghini-huracan-evo-spyder-blue-goldstudio",
  "lamborghini-huracan-evo-spyder-black": "lamborghini-huracan-evo-spyder-black-goldstudio",
  "lamborghini-huracan-evo-coupe-red": "lamborghini-huracan-evo-coupe-red-goldstudio",
  "lamborghini-urus-gray-2021": "lamborghini-urus-gray-2021-goldstudio",
  "lamborghini-urus-silver-2022": "lamborghini-urus-silver-2022-goldstudio",
  "lamborghini-urus-black-2021": "lamborghini-urus-black-2021-goldstudio",
  "mercedes-g63-black-matte": "mercedes-g63-black-matte-goldstudio",
  "mercedes-g63-black": "mercedes-g63-black-goldstudio",
  "mercedes-g63-matte-black": "mercedes-g63-matte-black-goldstudio",
  "mercedes-g63-gray": "mercedes-g63-gray-goldstudio",
  "mercedes-g63-gray-matte": "mercedes-g63-gray-matte-goldstudio",
  "mercedes-g63-white": "mercedes-g63-white-goldstudio",
  "brabus-g-blue-carbon": "brabus-g-blue-carbon-goldstudio",
  "brabus-rocket-900-gray": "brabus-rocket-900-gray-goldstudio",
  "porsche-911-gt3-black-matte": "porsche-911-gt3-black-matte-goldstudio",
  "ferrari-f8-tributo-red": "ferrari-f8-tributo-red-goldstudio",
  "gmc-yukon-denali-black": "gmc-yukon-denali-black-goldstudio",
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

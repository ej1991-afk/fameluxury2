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

export function getCarImage(slug: string): string {
  if (isCloudinaryEnabled()) {
    return cloudinaryPublicId("cars", slug);
  }
  return `/cars/${slug}.webp`;
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

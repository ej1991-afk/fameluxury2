import type { NextConfig } from "next";

const useCloudinary = Boolean(process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.20"],
  images: {
    ...(useCloudinary
      ? {
          loader: "custom",
          loaderFile: "./lib/cloudinary-loader.ts",
        }
      : {}),
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;

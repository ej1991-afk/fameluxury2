import type { NextConfig } from "next";

const useCloudinary = Boolean(process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.20"],
  async redirects() {
    const canonicalHost = "fameluxurycarsdubai.com";
    const aliases = [
      "www.fameluxurycarsdubai.com",
      "fameluxurycarrental.ae",
      "www.fameluxurycarrental.ae",
    ];

    return aliases.map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: `https://${canonicalHost}/:path*`,
      permanent: true,
    }));
  },
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

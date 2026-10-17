import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 restricts quality to an allowlist; 100 keeps imagery crisp.
    qualities: [100],
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920, 2048, 3840],
  },
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

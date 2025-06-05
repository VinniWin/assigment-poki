import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  images: {
    remotePatterns: [
      {
        hostname: "img.pokemondb.net",
        protocol: "https",
      },
      {
        hostname: "placehold.co",
        protocol: "https",
      },
      {
        hostname: "raw.githubusercontent.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;

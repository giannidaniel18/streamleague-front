import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "www.pokemon.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;

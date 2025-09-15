import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable output for static export if needed
  output: "standalone",

  images: {
    domains: ['kouman.net', 'i.ibb.co'], // allow these external image sources
  },

  // Optional: strict mode helps catch React warnings
  reactStrictMode: true,
};

export default nextConfig;

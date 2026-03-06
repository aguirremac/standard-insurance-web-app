import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  async rewrites() {
    return [{ source: "/sitemap.xml", destination: "/sitemap" }];
  },

  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;

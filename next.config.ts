import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  devIndicators: false,
  allowedDevOrigins: ["192.168.1.4", "192.168.1.9"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

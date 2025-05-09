import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.dummyjson.com','images.unsplash.com','plus.unsplash.com'], // ✅ เพิ่ม domain นี้
  },
};

export default nextConfig;

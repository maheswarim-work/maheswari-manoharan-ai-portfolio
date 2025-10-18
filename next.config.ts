import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Trailing slashes for static export
  trailingSlash: true,
};

export default nextConfig;

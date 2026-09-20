import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Cafeonhaig-Project",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
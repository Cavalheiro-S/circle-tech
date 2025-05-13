import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: "build",
  output: "export",
  images:{
    unoptimized: true,
  },
  trailingSlash: true,    // coloca index.html em cada rota
};

export default nextConfig;

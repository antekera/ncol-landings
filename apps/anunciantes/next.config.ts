import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the development server's client assets and HMR from the phone's Tailscale URL.
  allowedDevOrigins: ["100.69.224.125"],
};

export default nextConfig;

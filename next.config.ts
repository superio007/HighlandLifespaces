import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["ik.imagekit.io"],
    // or remotePatterns as above
  },
};

export default withNextVideo(nextConfig);

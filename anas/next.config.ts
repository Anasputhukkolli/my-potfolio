import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true, // ← moved out of experimental

  images: {
    remotePatterns: [
      // Supabase storage images
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      // Add any other image domains you use here
    ],
  },
};

export default nextConfig;
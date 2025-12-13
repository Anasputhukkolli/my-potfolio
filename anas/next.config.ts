/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
  },
  // Optional: Enable experimental features if needed
  experimental: {
    typedRoutes: true,
  },
}

module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placehold.co', 'images.unsplash.com'],
    formats: ['image/webp'],
    unoptimized: true, // Allow SVG and unoptimized images
  },
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  // Disable webpack cache in production to prevent stale builds
  webpack: (config, { dev, isServer }) => {
    if (!dev) {
      config.cache = false;
    }
    return config;
  },
}

module.exports = nextConfig

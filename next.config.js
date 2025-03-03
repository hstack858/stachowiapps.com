/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['netflix-site.s3.amazonaws.com', "netflix-site.s3.us-east-1.amazonaws.com"],
    formats: ['image/avif', 'image/webp'],
    quality: 80
  },
  swcMinify: true,
  reactStrictMode: true
}

module.exports = nextConfig

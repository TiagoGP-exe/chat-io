/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com", "lh3.googleusercontent"],
  },
  experimental: {
    serverComponentsExternalPackages: ["@prisma/client"],
  },
}

module.exports = nextConfig

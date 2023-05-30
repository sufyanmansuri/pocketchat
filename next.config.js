/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: ['api.dicebear.com'],
  },
}

module.exports = nextConfig

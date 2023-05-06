const isProd = process.env.NODE_ENV === "production"

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? "/pocketchat/" : "",
  images: {
    unoptimized: true,
  },
  output: "export",
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig

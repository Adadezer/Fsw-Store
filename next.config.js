/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fsw-store.s3.sa-east-1.amazonaws.com", "i.imgur.com", "www.dropbox.com", "dl.dropboxusercontent.com"]
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig

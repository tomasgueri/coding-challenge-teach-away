/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.imgur.com',
      },
    ],
    //domains: ['i.imgur.com'],
  },
};

module.exports = nextConfig

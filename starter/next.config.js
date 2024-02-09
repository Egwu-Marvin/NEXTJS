/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'unsplash.com/photos',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'robohash.org',
          port: '',
          pathname: '/**',
        },
      ],
    },
  }
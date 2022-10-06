/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/health',
        destination: 'http://localhost:3001/health',
      },
    ];
  },
};

module.exports = nextConfig;

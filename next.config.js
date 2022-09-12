/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_ROUTE || 'http://localhost:3001/'}:path*`,
      },
    ];
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;

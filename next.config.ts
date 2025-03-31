/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/auth/:path*",
      destination: "/api/auth/:path*",
    },
  ],
};

module.exports = nextConfig;
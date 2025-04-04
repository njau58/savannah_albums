/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/auth/:path*",
      destination: "/api/auth/:path*",
    },
  ],
  images:{
    domains:["via.placeholder.com","picsum.photos"]
  }
};

module.exports = nextConfig;
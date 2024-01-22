/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/apps/near',
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: {
    esmExternals: "loose",
  },
  poweredByHeader: false,
  compiler: { styledComponents: true },
  reactStrictMode: true,
};

module.exports = nextConfig;


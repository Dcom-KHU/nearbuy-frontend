/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

//module.exports = nextConfig;

module.exports = {
  ...nextConfig,
  images: {
    domains: [process.env.SERVER_IP],
  },
};

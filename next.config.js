/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

//module.exports = nextConfig;

/*module.exports = {
  ...nextConfig,
  images: {
    domains: ["52.79.184.107"],
  },
};*/

module.exports = {
  ...nextConfig,
  images: {
    loader: "imgix",
    path: "",
    domains: [process.env.NEXT_PUBLIC_SERVER_URL],
  },
};

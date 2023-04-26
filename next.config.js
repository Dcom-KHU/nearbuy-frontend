/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

//module.exports = nextConfig;

const secrets = require("./secrets.json");
const serverIP = secrets.serverIP;

module.exports = {
  ...nextConfig,
  images: {
    domains: [serverIP],
  },
};

/*
module.exports = {
  ...nextConfig,
  images: {
    loader: "imgix",
    path: "",
    domains: [process.env.NEXT_PUBLIC_SERVER_URL],
  },
};
*/

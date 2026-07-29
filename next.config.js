/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shrug-person-78902957.figma.site",
      },
      {
        protocol: "https",
        hostname: "motionsites.ai",
      },
      {
        protocol: "https",
        hostname: "images.higgs.ai",
      },
    ],
  },
};

module.exports = nextConfig;
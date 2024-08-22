/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api1.blifinvestment.com",
      },
    ],
  },
};

export default nextConfig;

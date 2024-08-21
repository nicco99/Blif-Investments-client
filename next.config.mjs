/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "house-designs-node-backend.onrender.com",
      },
    ],
  },
};

export default nextConfig;

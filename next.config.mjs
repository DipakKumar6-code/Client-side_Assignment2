/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "freefrontend.dev",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "image.ibb.co",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true, // required for static export
  },
  trailingSlash: false,
  webpack: (config) => {
    config.resolve.symlinks = false;
    config.cache = false; // Disable webpack filesystem cache (EISDIR fix on Windows)
    return config;
  },
};

module.exports = nextConfig;

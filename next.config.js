/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ["loremflickr.com", "avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  reloadOnOnline: true,
});

const nextConfig = {};

module.exports =
  process.env.NODE_ENV === "production" ? withPWA(nextConfig) : nextConfig;

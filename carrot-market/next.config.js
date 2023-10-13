/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    domains: ["imagedelivery.net", "videodelivery.net"]
  }
}

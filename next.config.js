/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Ovo omogućava statički export bez Node.js
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

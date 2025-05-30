/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // For static export
  images: {
    unoptimized: true,  // Required for static export
  },
  // No basePath needed for GitHub Pages - it serves from the root domain
}

module.exports = nextConfig 
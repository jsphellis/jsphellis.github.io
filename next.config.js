/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // For static export
  images: {
    unoptimized: true,  // Required for static export
  },
  basePath: '/jsphellis.github.io',
}

module.exports = nextConfig 
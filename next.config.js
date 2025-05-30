/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // For static export
  images: {
    unoptimized: true,  // Required for static export
  },
  // Only set basePath for production (GitHub Pages)
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/jsphellis.github.io',
  }),
}

module.exports = nextConfig 
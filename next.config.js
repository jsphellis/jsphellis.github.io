/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // For static export
  trailingSlash: true,  // Emit blog/index.html, not blog.html — /blog/ 404s without this
  images: {
    unoptimized: true,  // Required for static export
  },
  // No basePath needed for GitHub Pages - it serves from the root domain
}

module.exports = nextConfig 
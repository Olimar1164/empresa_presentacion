const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '' : '';

module.exports = {
  output: 'standalone',
  basePath,
  assetPrefix: basePath,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  distDir: '.next',
  env: {
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
  },
};
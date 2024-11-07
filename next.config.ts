// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: isProd ? '/empresa_presentacion' : '',
  assetPrefix: isProd ? '/empresa_presentacion/' : '',
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Deshabilitar la optimización de imágenes
  },
};
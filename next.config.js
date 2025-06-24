const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/Foodies' : '',
  assetPrefix: isProd ? '/Foodies/' : '',
  trailingSlash: true,
};

module.exports = nextConfig;

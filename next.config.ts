import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['swiper'],
  images: {
    remotePatterns: [
      new URL('https://image.openmoviedb.com/**'),
      new URL('https://kinopoisk-ru.clstorage.net/**'),
    ],
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule: { test: { test: (arg0: string) => any } }) =>
        rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },

      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ['@svgr/webpack'],
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  env: {
    NEXT_KINOPOISK_KEY: process.env.NEXT_KINOPOISK_KEY,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["swiper"],

  images: {
    domains: [
      "image.openmoviedb.com",
      "kinopoisk-ru.clstorage.net",
      "st.kp.yandex.net",
      "avatars.mds.yandex.net",
      "image.tmdb.org"
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.openmoviedb.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "kinopoisk-ru.clstorage.net",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "**.yandex.net",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "**.tmdb.org",
        pathname: "/**"
      }
    ],
    formats: ["image/webp", "image/avif"]
  },

  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule: any) => rule.test?.test?.(".svg")
    );

    if (fileLoaderRule) {
      config.module.rules.push(
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/
        },
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: {
            not: [...(fileLoaderRule.resourceQuery?.not || []), /url/]
          },
          use: ["@svgr/webpack"]
        }
      );

      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },

  env: {
    NEXT_KINOPOISK_KEY: process.env.NEXT_KINOPOISK_KEY
  }
};

export default nextConfig;

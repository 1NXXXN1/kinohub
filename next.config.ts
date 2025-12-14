import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["swiper"],

  images: {
    domains: [
      "st.kp.yandex.net",
      "avatars.mds.yandex.net",
      "image.tmdb.org",
      "kinopoiskapiunofficial.tech",
      "kinopoisk-ru.clstorage.net",
      "image.openmoviedb.com"
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.yandex.net"
      },
      {
        protocol: "https",
        hostname: "**.kp.yandex.net"
      },
      {
        protocol: "https",
        hostname: "**.tmdb.org"
      },
      {
        protocol: "https",
        hostname: "**.kinopoiskapiunofficial.tech"
      },
      {
        protocol: "https",
        hostname: "**.clstorage.net"
      },
      {
        protocol: "https",
        hostname: "**.openmoviedb.com"
      }
    ],
    formats: ["image/webp", "image/avif"]
  },

  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule: { test?: { test?: (arg0: string) => boolean } }) =>
        rule.test?.test?.(".svg")
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
          resourceQuery: { not: [...(fileLoaderRule.resourceQuery?.not || []), /url/] },
          use: ["@svgr/webpack"]
        }
      );

      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },

  env: {
    NEXT_KINOPOISK_KEY: process.env.NEXT_KINOPOISK_KEY
  },

  reactStrictMode: true,
  swcMinify: true,
  output: "standalone"
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "www.if.ufrgs.br" // caso use imagens externas padrão
    ],
  },
}

module.exports = nextConfig;

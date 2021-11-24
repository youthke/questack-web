/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  env: {
    server: "http://localhost:8888/questack-api",
    domainName: isProd ? "" : "http://localhost:3000",
  },
  basePath: "/questack",
}

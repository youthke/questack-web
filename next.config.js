/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    server: "http://localhost:8888/questack-api",
  },
  basePath: "/questack",
}

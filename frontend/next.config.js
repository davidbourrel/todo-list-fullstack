/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    TODO_BASE_URL: 'https://dummyjson.com/todos',
  },
};

module.exports = nextConfig;

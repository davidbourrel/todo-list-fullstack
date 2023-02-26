/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    TODO_BASE_URL: 'http://localhost:5000/todos',
  },
};

module.exports = nextConfig;

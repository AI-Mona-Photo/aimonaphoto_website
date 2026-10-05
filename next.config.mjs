/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Optional: Add basePath if you don't use a custom domain
  // basePath: '/aimonaphoto_website',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;

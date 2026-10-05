/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Automatically use the repository name as basePath for GitHub Pages in production
  basePath: process.env.NODE_ENV === 'production' ? '/aimonaphoto_website' : '',
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

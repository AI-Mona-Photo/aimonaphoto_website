/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.VERCEL ? {} : { output: 'export' }),
  // Automatically use the repository name as basePath for GitHub Pages in production, but not on Vercel
  basePath: (process.env.NODE_ENV === 'production' && !process.env.VERCEL) ? '/aimonaphoto_website' : '',
  images: {
    unoptimized: !process.env.VERCEL,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;

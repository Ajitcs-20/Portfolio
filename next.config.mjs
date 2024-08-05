/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enable static export
    assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '',
    images: {
      unoptimized: true, // Disable image optimization for static export
    },
  };
  
  export default nextConfig;
  
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // enables static export
  images: {
    unoptimized: true // avoids image optimization issues on static hosting
  }
};

export default nextConfig;

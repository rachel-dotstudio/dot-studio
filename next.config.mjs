/** @type {import('next').NextConfig} */
const nextConfig = {
  // Existing redirects configuration
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
        permanent: true,
      },
    ];
  },
  
  // Disable source maps in production
  webpack: (config, { dev }) => {
    if (!dev) {
      config.devtool = false; // Disable source maps in production
    }
    return config;
  },
};

export default nextConfig;
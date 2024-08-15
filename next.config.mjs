/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/admin',
          destination: '/admin/index.html',
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;
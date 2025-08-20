import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Simple Icons CDN - most reliable for tech logos
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      // Skill Icons GitHub - reliable for specialized icons
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      // Official domains
      {
        protocol: 'https',
        hostname: 'wagmi.sh',
      },
      {
        protocol: 'https',
        hostname: 'viem.sh',
      },
    ],
  },
};

export default nextConfig;
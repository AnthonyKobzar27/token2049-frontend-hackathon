import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      // The landing page is the flat HaaS one-pager, served verbatim from
      // public/haas.html (2D mascot, scroll story, all animations).
      // beforeFiles so it wins over the app-router (site) home page.
      beforeFiles: [{ source: '/', destination: '/haas.html' }],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;

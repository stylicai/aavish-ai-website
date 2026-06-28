/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Framer Motion 12 splits into motion-dom; bundling it explicitly avoids
  // intermittent "Cannot find module './vendor-chunks/motion-dom.js'" in dev.
  transpilePackages: ["framer-motion", "motion-dom"],
  experimental: {
    optimizePackageImports: ["lucide-react"]
  }
};

export default nextConfig;

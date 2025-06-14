/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  
  // Image optimization for static export
  images: {
    unoptimized: true,
  },

  // Disable server-side features for static export
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Headers for performance (will be handled by Cloudflare)
  async headers() {
    return []
  }
}

export default nextConfig

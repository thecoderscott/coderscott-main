import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/((?!soon).*)',
        has: [
          {
            type: 'host',
            value: '(.*)',
          },
        ],
        destination: '/soon',
        permanent: false,
      },
    ]
  },
}

export default nextConfig

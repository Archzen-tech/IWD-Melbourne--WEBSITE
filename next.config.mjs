/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    /**
     * The v0 sandbox does not serve the /_next/image optimizer endpoint, so
     * optimization is disabled to keep images rendering in the preview.
     * On Vercel the optimizer IS available — remove this line after deploying
     * to get AVIF/WebP resizing from the `sizes` props already set on every
     * <Image>, at no code cost.
     */
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          // Report-only to start: tighten and switch to the enforcing header
          // once the console shows no unexpected violations.
          {
            key: 'Content-Security-Policy-Report-Only',
            value: [
              "default-src 'self'",
              "img-src 'self' data: blob:",
              "style-src 'self' 'unsafe-inline'",
              "script-src 'self' 'unsafe-inline'",
              "font-src 'self' data:",
              "connect-src 'self' https://va.vercel-scripts.com",
              "frame-ancestors 'self'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

export default nextConfig

module.exports = {
  output: 'standalone',
  env: {
    NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    WORDPRESS_API_URL: process.env.WORDPRESS_API_URL,
    NEXT_PUBLIC_A2IMCMS_API_URL: process.env.NEXT_PUBLIC_A2IMCMS_API_URL,
    NEXT_PUBLIC_A2IMCMS_API_GQL_URL: process.env.NEXT_PUBLIC_A2IMCMS_API_GQL_URL,
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    NEXT_AUTH_AWS_REGION: process.env.NEXT_AUTH_AWS_REGION,
    NEXT_AUTH_AWS_ACCESS_KEY: process.env.NEXT_AUTH_AWS_ACCESS_KEY,
    NEXT_AUTH_AWS_SECRET_KEY: process.env.NEXT_AUTH_AWS_SECRET_KEY,
    NEXT_CMS_BASE_URL: process.env.NEXT_CMS_BASE_URL,
  },
  images: {
    domains: [
      'a2im-strapi-cms-images.s3.amazonaws.com',
      'a2im.org',
      'images.a2im.org',
      'a2im.xyz',
      '*.googleusercontent.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a2im-strapi-cms-images.s3.amazonaws.com',
        port: '80',
        pathname: '/***',
      },
      {
        protocol: 'https',
        hostname: 'a2im.org',
        port: '80',
        pathname: '/***',
      },
      {
        protocol: 'https',
        hostname: 'a2im.org',
        port: '80',
        pathname: '/wp-content/uploads/***',
      },
      {
        protocol: 'https',
        hostname: 'images.a2im.org',
        port: '80',
        pathname: '/***',
      },
      {
        protocol: 'https',
        hostname: 'a2im.xyz',
        port: '80',
        pathname: '/***',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
},
experimental: {
  appDir: true,
},
typescript: {
  // !! WARN !!
  // Dangerously allow production builds to successfully complete even if
  // your project has type errors.
  // !! WARN !!
  ignoreBuildErrors: true,
},
}
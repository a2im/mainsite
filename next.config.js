module.exports = {
  output: 'standalone',
  env: {
    NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    WORDPRESS_API_URL: process.env.WORDPRESS_API_URL,
    NEXT_PUBLIC_A2IMCMS_API_URL: process.env.NEXT_PUBLIC_A2IMCMS_API_URL,
    NEXT_PUBLIC_A2IMCMS_API_GQL_URL: process.env.NEXT_PUBLIC_A2IMCMS_API_GQL_URL,
  },
  images: {
    domains: [
      process.env.WORDPRESS_API_URL.match(/(?!(w+)\.)\w*(?:\w+\.)+\w+/)[0], // Valid WP Image domain.
      '0.gravatar.com',
      '1.gravatar.com',
      '2.gravatar.com',
      'secure.gravatar.com',
      'images.liberaawards.com',
      'liberaawards.com',
      'liberaawards.a2im.xyz',
      'a2im-strapi-cms-images.s3.amazonaws.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'liberaawards.com',
        port: '80',
        pathname: '/wp-content/uploads/***',
      },
      {
        protocol: 'https',
        hostname: 'images.liberaawards.com',
        port: '80',
        pathname: '/wp-content/uploads/***',
      },
      {
        protocol: 'https',
        hostname: 'liberaawards.com',
        port: '80',
        pathname: '/wp-content/uploads/***',
      },
      {
        protocol: 'https',
        hostname: 'liberaawards.a2im.xyz',
        port: '80',
        pathname: '/wp-content/uploads/***',
      },
      {
        protocol: 'https',
        hostname: 'a2im-strapi-cms-images.s3.amazonaws.com',
        port: '80',
        pathname: '/***',
      }

    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; sandbox;",
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
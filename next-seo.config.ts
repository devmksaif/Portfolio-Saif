import { DefaultSeoProps } from 'next-seo'

const config: DefaultSeoProps = {
  titleTemplate: '%s | Saifeddine Makhlouf',
  defaultTitle: 'Saifeddine Makhlouf - Fullstack React Native Developer | Portfolio',
  description:
    'Full-Stack React Native Developer with 6 years of experience. Expert in designing, building, and deploying high-performance cross-platform mobile apps (iOS/Android). Proficient with Node.js/Python APIs, React Native, Redux, MongoDB, PostgreSQL, and modern web technologies.',
  canonical: 'https://saifeddine-portfolio.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saifeddine-portfolio.vercel.app',
    siteName: 'Saifeddine Makhlouf Portfolio',
    title: 'Saifeddine Makhlouf - Fullstack React Native Developer',
    description:
      'Full-Stack React Native Developer with 6 years of experience. Expert in cross-platform mobile app development, backend APIs, and modern web technologies.',
    images: [
      {
        url: 'https://saifeddine-portfolio.vercel.app/me.jpg',
        width: 1200,
        height: 630,
        alt: 'Saifeddine Makhlouf - Fullstack React Native Developer',
        type: 'image/jpeg',
      },
    ],
    profile: {
      firstName: 'Saifeddine',
      lastName: 'Makhlouf',
      username: 'devmksaif',
    },
  },
  twitter: {
    handle: '@devmksaif',
    site: '@devmksaif',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content:
        'React Native Developer, Fullstack Developer, Mobile App Developer, iOS Developer, Android Developer, Node.js Developer, TypeScript Developer, JavaScript Developer, Cross-platform Development, Mobile App Development, Web Development, Tunisia Developer, Freelance Developer, React Developer, Next.js Developer, MongoDB Developer, PostgreSQL Developer, GraphQL Developer, REST API Developer, WebRTC Developer, Firebase Developer, Supabase Developer, Stripe Integration, App Store Deployment, Google Play Deployment',
    },
    {
      name: 'author',
      content: 'Saifeddine Makhlouf',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#0ea5e9',
    },
    {
      name: 'geo.region',
      content: 'TN-11',
    },
    {
      name: 'geo.placename',
      content: 'Tunis, Tunisia',
    },
    {
      name: 'geo.position',
      content: '36.8065;10.1815',
    },
    {
      name: 'ICBM',
      content: '36.8065, 10.1815',
    },
    {
      name: 'application-name',
      content: 'Saifeddine Makhlouf Portfolio',
    },
    {
      name: 'apple-mobile-web-app-title',
      content: 'SM Portfolio',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent',
    },
    {
      name: 'format-detection',
      content: 'telephone=no',
    },
    {
      name: 'mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'msapplication-TileColor',
      content: '#0ea5e9',
    },
    {
      name: 'msapplication-config',
      content: '/browserconfig.xml',
    },
    {
      httpEquiv: 'x-ua-compatible',
      content: 'IE=edge',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
    {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: '#0ea5e9',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'dns-prefetch',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'dns-prefetch',
      href: 'https://fonts.gstatic.com',
    },
  ],
  languageAlternates: [
    {
      hrefLang: 'en',
      href: 'https://saifeddine-portfolio.vercel.app',
    },
    {
      hrefLang: 'fr',
      href: 'https://saifeddine-portfolio.vercel.app/fr',
    },
    {
      hrefLang: 'ar',
      href: 'https://saifeddine-portfolio.vercel.app/ar',
    },
    {
      hrefLang: 'x-default',
      href: 'https://saifeddine-portfolio.vercel.app',
    },
  ],
}

export default config


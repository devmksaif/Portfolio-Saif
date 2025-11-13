import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Poppins } from 'next/font/google'
import SEO from '@/components/SEO'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Saifeddine Makhlouf - Fullstack React Native Developer | Portfolio',
    template: '%s | Saifeddine Makhlouf'
  },
  description: 'Full-Stack React Native Developer with 6 years of experience. Expert in designing, building, and deploying high-performance cross-platform mobile apps (iOS/Android). Proficient with Node.js/Python APIs, React Native, Redux, MongoDB, PostgreSQL, and modern web technologies.',
  keywords: [
    'React Native Developer',
    'Fullstack Developer',
    'Mobile App Developer',
    'iOS Developer',
    'Android Developer',
    'Node.js Developer',
    'TypeScript Developer',
    'JavaScript Developer',
    'Cross-platform Development',
    'Mobile App Development',
    'Web Development',
    'Tunisia Developer',
    'Freelance Developer',
    'React Developer',
    'Next.js Developer',
    'MongoDB Developer',
    'PostgreSQL Developer',
    'GraphQL Developer',
    'REST API Developer',
    'WebRTC Developer',
    'Firebase Developer',
    'Supabase Developer',
    'Stripe Integration',
    'App Store Deployment',
    'Google Play Deployment'
  ],
  authors: [{ name: 'Saifeddine Makhlouf' }],
  creator: 'Saifeddine Makhlouf',
  publisher: 'Saifeddine Makhlouf',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://saifeddine-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saifeddine-portfolio.vercel.app',
    title: 'Saifeddine Makhlouf - Fullstack React Native Developer',
    description: 'Full-Stack React Native Developer with 6 years of experience. Expert in cross-platform mobile app development, backend APIs, and modern web technologies.',
    siteName: 'Saifeddine Makhlouf Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Saifeddine Makhlouf - Fullstack React Native Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saifeddine Makhlouf - Fullstack React Native Developer',
    description: 'Full-Stack React Native Developer with 6 years of experience. Expert in cross-platform mobile app development.',
    images: ['/og-image.jpg'],
    creator: '@Seifeddine22216',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://saifeddine-portfolio.vercel.app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${poppins.variable} font-sans`}>
        <SEO />
        {children}
      </body>
    </html>
  )
}


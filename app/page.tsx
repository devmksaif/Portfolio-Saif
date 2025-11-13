'use client'

import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'

// Lazy load below-fold components for better initial load performance
const About = dynamic(() => import('@/components/About'), {
  loading: () => <div className="min-h-[400px]" />,
})
const Skills = dynamic(() => import('@/components/Skills'), {
  loading: () => <div className="min-h-[400px]" />,
})
const Experience = dynamic(() => import('@/components/Experience'), {
  loading: () => <div className="min-h-[400px]" />,
})
const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => <div className="min-h-[400px]" />,
})
const Blog = dynamic(() => import('@/components/Blog'), {
  loading: () => <div className="min-h-[400px]" />,
})
const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div className="min-h-[400px]" />,
})
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})

export default function Home() {
  return (
    <>
      <NextSeo
        title="Home"
        description="Portfolio of Saifeddine Makhlouf - Fullstack React Native Developer with 6 years of experience in mobile and web development. Expert in React Native, Node.js, TypeScript, MongoDB, PostgreSQL, and modern web technologies."
        canonical="https://saifeddine-portfolio.vercel.app"
        openGraph={{
          url: 'https://saifeddine-portfolio.vercel.app',
          title: 'Saifeddine Makhlouf - Fullstack React Native Developer',
          description:
            'Portfolio of Saifeddine Makhlouf - Fullstack React Native Developer with 6 years of experience in mobile and web development.',
          images: [
            {
              url: 'https://saifeddine-portfolio.vercel.app/me.jpg',
              width: 1200,
              height: 630,
              alt: 'Saifeddine Makhlouf - Fullstack React Native Developer Portfolio',
            },
          ],
          siteName: 'Saifeddine Makhlouf Portfolio',
        }}
        twitter={{
          handle: '@Seifeddine22216',
          site: '@Seifeddine22216',
          cardType: 'summary_large_image',
        }}
      />
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </>
  )
}


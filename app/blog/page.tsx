'use client'

import { NextSeo } from 'next-seo'
import Blog from '@/components/Blog'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function BlogPage() {
  return (
    <>
      <NextSeo
        title="Blog"
        description="Read articles about React Native development, mobile app architecture, TypeScript, performance optimization, and modern web technologies."
        canonical="https://saifeddine-portfolio.vercel.app/blog"
        openGraph={{
          url: 'https://saifeddine-portfolio.vercel.app/blog',
          title: 'Blog - Saifeddine Makhlouf',
          description: 'Insights and tutorials on React Native development and modern web technologies.',
          siteName: 'Saifeddine Makhlouf Portfolio',
        }}
      />
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-16">
          <Blog />
        </div>
        <Footer />
      </main>
    </>
  )
}


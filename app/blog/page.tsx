'use client'

import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import Navigation from '@/components/Navigation'

const Blog = dynamic(() => import('@/components/Blog'), {
  loading: () => <div className="min-h-[400px]" />,
})
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})

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


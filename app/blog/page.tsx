'use client'

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
    <main className="min-h-screen">
        <Navigation />
        <div className="pt-16">
          <Blog />
        </div>
        <Footer />
      </main>
  )
}


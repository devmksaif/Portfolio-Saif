'use client'

import dynamic from 'next/dynamic'
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
  )
}


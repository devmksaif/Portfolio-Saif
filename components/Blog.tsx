import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion, useReducedMotion } from 'framer-motion'
import { useMemo, memo } from 'react'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  category: string
  image?: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable React Native Apps: Best Practices',
    excerpt:
      'Learn the essential patterns and practices for building scalable React Native applications that can grow with your business needs.',
    content: '',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'React Native',
    slug: 'building-scalable-react-native-apps',
  },
  {
    id: '2',
    title: 'Mastering TypeScript in React Native Development',
    excerpt:
      'Discover how TypeScript can improve your React Native development workflow and catch errors before they reach production.',
    content: '',
    date: '2025-01-10',
    readTime: '6 min read',
    category: 'TypeScript',
    slug: 'mastering-typescript-react-native',
  },
  {
    id: '3',
    title: 'Optimizing Mobile App Performance: A Complete Guide',
    excerpt:
      'Explore techniques for optimizing React Native app performance, from bundle size reduction to rendering optimizations.',
    content: '',
    date: '2025-01-05',
    readTime: '10 min read',
    category: 'Performance',
    slug: 'optimizing-mobile-app-performance',
  },
  {
    id: '4',
    title: 'State Management in React Native: Redux vs Zustand',
    excerpt:
      'Compare Redux and Zustand for state management in React Native applications and learn when to use each solution.',
    content: '',
    date: '2024-12-28',
    readTime: '7 min read',
    category: 'State Management',
    slug: 'redux-vs-zustand-react-native',
  },
  {
    id: '5',
    title: 'Building Real-Time Features with WebSockets and React Native',
    excerpt:
      'Learn how to implement real-time features like chat, notifications, and live updates in your React Native applications.',
    content: '',
    date: '2024-12-20',
    readTime: '9 min read',
    category: 'Real-Time',
    slug: 'websockets-react-native-realtime',
  },
  {
    id: '6',
    title: 'Deploying React Native Apps to App Store and Google Play',
    excerpt:
      'A comprehensive guide to deploying your React Native apps to both iOS App Store and Google Play Store successfully.',
    content: '',
    date: '2024-12-15',
    readTime: '12 min read',
    category: 'Deployment',
    slug: 'deploying-react-native-apps',
  },
]

function Blog() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  }), [shouldReduceMotion])

  const cardVariants = useMemo(() => ({
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 50, rotateY: shouldReduceMotion ? 0 : -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  }), [shouldReduceMotion])

  return (
    <section
      id="blog"
      className="py-20 bg-muted/50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Blog Posts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and best practices on React Native development,
            mobile app architecture, and modern web technologies.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {blogPosts.map((post, index) => (
            <motion.div key={post.id} variants={cardVariants}>
              <motion.div
                whileHover={shouldReduceMotion ? {} : {
                  y: -15,
                  rotateY: 5,
                  rotateX: 5,
                  boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.3)',
                }}
                transition={{ type: 'spring' as const, stiffness: 300, damping: 25 }}
                style={{ willChange: shouldReduceMotion ? 'auto' : 'transform' }}
              >
                <Card className="hover:shadow-lg transition-shadow overflow-hidden flex flex-col h-full">
              {post.image ? (
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                  <span className="text-primary-foreground text-4xl font-bold">
                    {post.category.charAt(0)}
                  </span>
                </div>
              )}
              <CardHeader>
                <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}</span>
                  </div>
                </div>
                <CardTitle className="text-foreground">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                  <Button asChild variant="ghost" size="sm" className="gap-2">
                    <Link href={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: 'spring' }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild size="lg" className="gap-2">
              <Link href="/blog">
                View All Posts
                <ArrowRight size={20} />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default memo(Blog)


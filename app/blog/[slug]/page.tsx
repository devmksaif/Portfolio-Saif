'use client'

import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Navigation from '@/components/Navigation'

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})

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

// Shared blog posts data - in production, this would come from a CMS or API
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable React Native Apps: Best Practices',
    excerpt:
      'Learn the essential patterns and practices for building scalable React Native applications that can grow with your business needs.',
    content: `
# Building Scalable React Native Apps: Best Practices

Building scalable React Native applications requires careful planning and adherence to best practices. In this article, we'll explore the key strategies for creating maintainable, performant, and scalable mobile applications.

## Architecture Patterns

### Component Structure
Organize your components in a clear, hierarchical structure. Use feature-based folders rather than type-based organization.

### State Management
Choose the right state management solution for your needs. Redux is excellent for complex applications, while Zustand works well for simpler use cases.

## Performance Optimization

### Code Splitting
Implement code splitting to reduce initial bundle size and improve load times.

### Image Optimization
Use optimized images and lazy loading to improve performance.

## Testing Strategy

Implement comprehensive testing strategies including unit tests, integration tests, and E2E tests.

## Conclusion

By following these best practices, you can build React Native applications that scale effectively with your business needs.
    `,
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
    content: `
# Mastering TypeScript in React Native Development

TypeScript brings type safety and improved developer experience to React Native development. This guide will help you master TypeScript in your mobile app projects.

## Getting Started with TypeScript

### Type Definitions
Learn how to create and use type definitions effectively in React Native.

### Interfaces and Types
Understand when to use interfaces versus types in your React Native components.

## Advanced Patterns

### Generic Components
Create reusable, type-safe components using TypeScript generics.

### Type Guards
Implement type guards to ensure type safety at runtime.

## Best Practices

Follow these best practices to maximize the benefits of TypeScript in your React Native projects.
    `,
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
    content: `
# Optimizing Mobile App Performance: A Complete Guide

Performance is crucial for mobile applications. This comprehensive guide covers all aspects of optimizing React Native app performance.

## Bundle Size Optimization

### Code Splitting
Implement code splitting strategies to reduce initial bundle size.

### Tree Shaking
Remove unused code to minimize bundle size.

## Rendering Optimization

### Memoization
Use React.memo and useMemo to prevent unnecessary re-renders.

### Virtual Lists
Implement virtual lists for large datasets.

## Network Optimization

### Request Batching
Batch API requests to reduce network overhead.

### Caching Strategies
Implement effective caching strategies for better performance.

## Conclusion

Follow these optimization techniques to create fast, responsive React Native applications.
    `,
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
    content: `
# State Management in React Native: Redux vs Zustand

Choosing the right state management solution is crucial for React Native applications. This article compares Redux and Zustand.

## Redux

### Pros
- Predictable state updates
- Excellent DevTools
- Large ecosystem

### Cons
- Steeper learning curve
- More boilerplate code

## Zustand

### Pros
- Simple API
- Less boilerplate
- Easy to learn

### Cons
- Smaller ecosystem
- Less tooling

## When to Use Each

Choose Redux for complex applications with extensive state management needs. Use Zustand for simpler applications or when you want less boilerplate.
    `,
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
    content: `
# Building Real-Time Features with WebSockets and React Native

Real-time features are essential for modern mobile applications. This guide shows you how to implement them using WebSockets in React Native.

## WebSocket Setup

### Connection Management
Learn how to manage WebSocket connections effectively in React Native.

### Reconnection Logic
Implement robust reconnection logic for reliable real-time features.

## Use Cases

### Chat Applications
Build real-time chat features with WebSockets.

### Live Updates
Implement live data updates for dashboards and feeds.

### Notifications
Create real-time notification systems.

## Best Practices

Follow these best practices for reliable, performant real-time features.
    `,
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
    content: `
# Deploying React Native Apps to App Store and Google Play

Deploying React Native applications to app stores requires careful preparation. This guide covers the entire deployment process.

## iOS App Store

### App Store Connect Setup
Configure your app in App Store Connect.

### Build Configuration
Set up proper build configurations for production.

### Submission Process
Navigate the App Store submission process.

## Google Play Store

### Play Console Setup
Configure your app in Google Play Console.

### Release Management
Manage different release tracks effectively.

### Testing
Implement proper testing before release.

## Best Practices

Follow these best practices for successful app store deployments.
    `,
    date: '2024-12-15',
    readTime: '12 min read',
    category: 'Deployment',
    slug: 'deploying-react-native-apps',
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-16 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Button asChild>
              <Link href="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <>
      <NextSeo
        title={post.title}
        description={post.excerpt}
        canonical={`https://saifeddine-portfolio.vercel.app/blog/${post.slug}`}
        openGraph={{
          url: `https://saifeddine-portfolio.vercel.app/blog/${post.slug}`,
          title: post.title,
          description: post.excerpt,
          type: 'article',
          siteName: 'Saifeddine Makhlouf Portfolio',
          article: {
            publishedTime: post.date,
            authors: ['Saifeddine Makhlouf'],
            tags: [post.category],
          },
        }}
        twitter={{
          handle: '@Seifeddine22216',
          site: '@Seifeddine22216',
          cardType: 'summary_large_image',
        }}
      />
      <main className="min-h-screen">
        <Navigation />
        <article className="pt-16 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Button asChild variant="ghost" className="mb-6">
                <Link href="/blog" className="flex items-center gap-2">
                  <ArrowLeft size={16} />
                  Back to Blog
                </Link>
              </Button>
              
              <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                <Badge variant="secondary">{post.category}</Badge>
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {post.title}
              </h1>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {post.content}
              </div>
            </div>
          </div>
        </article>
        <Footer />
      </main>
    </>
  )
}


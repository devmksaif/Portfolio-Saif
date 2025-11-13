import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion, useReducedMotion } from 'framer-motion'
import { useMemo, memo } from 'react'

function Projects() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  }), [shouldReduceMotion])

  const cardVariants = useMemo(() => ({
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 60, rotateX: shouldReduceMotion ? 0 : -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  }), [shouldReduceMotion])
  const projects = [
    {
      title: 'Calliverse - Social Media App',
      description:
        'Full-featured social networking mobile application with real-time messaging and video calling using WebSockets & WebRTC. Integrated Clerk authentication and Stripe for premium subscriptions.',
      tech: [
        'React Native',
        'TypeScript',
        'Supabase',
        'Clerk',
        'WebRTC',
        'WebSockets',
        'Firebase',
        'Stripe',
      ],
      link: '#',
      github: 'https://github.com/devmksaif',
    },
    {
      title: 'Blink Delivery - Grocery App',
      description:
        'Cross-platform grocery app with real-time order tracking and delivery updates via WebSockets. Integrated Supabase for structured storage and Firebase for push notifications.',
      tech: [
        'React Native',
        'TypeScript',
        'WebSockets',
        'Supabase',
        'Firebase',
        'Stripe',
      ],
      link: '#',
      github: 'https://github.com/devmksaif',
    },
    {
      title: 'SaaS Platform & Chatbot Builder',
      description:
        'Scalable SaaS platform for building custom chatbot agents. Integrated MongoDB & Supabase for multi-tenant data storage. Enabled real-time conversational flow handling with WebSockets.',
      tech: [
        'React JS',
        'Node.js',
        'Express',
        'WebSockets',
        'AI/NLP APIs',
        'MongoDB',
        'Supabase',
      ],
      link: '#',
      github: 'https://github.com/devmksaif',
    },
    {
      title: 'Shubz Visuals - Landing Page Platform',
      description:
        'High-performance landing page platform with dynamic content management. Integrated Sanity for structured content, Cloudinary for optimized media handling.',
      tech: ['Next.js', 'Sanity CMS', 'Cloudinary', 'Supabase'],
      link: '#',
      github: 'https://github.com/devmksaif',
    },
    {
      title: 'Africa Creative Talent Expo & FinTech App',
      description:
        'Fintech platform with secure cashback reward system and proprietary voting currency. Implemented real-time voting & transactions with WebSockets.',
      tech: [
        'React Native',
        'Node.js',
        'Express',
        'Supabase',
        'Clerk',
        'WebSockets',
      ],
      link: '#',
      github: 'https://github.com/devmksaif',
      status: 'In Progress',
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 bg-muted/50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-foreground"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: 'spring' }}
        >
          Featured Projects
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <motion.div
                whileHover={shouldReduceMotion ? {} : {
                  y: -12,
                  rotateY: 5,
                  rotateX: 5,
                  boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.3)',
                }}
                transition={{ type: 'spring' as const, stiffness: 300, damping: 25 }}
                style={{ willChange: shouldReduceMotion ? 'auto' : 'transform' }}
              >
                <Card className="hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-foreground">{project.title}</CardTitle>
                  {project.status && (
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                      {project.status}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.link && (
                    <Button asChild variant="outline" size="sm" className="gap-2">
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                        View Project
                      </Link>
                    </Button>
                  )}
                  {project.github && (
                    <Button asChild variant="ghost" size="sm" className="gap-2">
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                        GitHub
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
            </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default memo(Projects)


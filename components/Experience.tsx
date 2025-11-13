import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { motion, useReducedMotion } from 'framer-motion'
import { useMemo, memo } from 'react'

function Experience() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  }), [shouldReduceMotion])

  const cardVariants = useMemo(() => ({
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  }), [shouldReduceMotion])

  const projectVariants = useMemo(() => ({
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 12,
      },
    },
  }), [shouldReduceMotion])
  const experiences = [
    {
      title: 'Freelance Contracts - Full-Stack React Native Developer',
      company: 'Upwork & Fiverr',
      period: '2022 Apr - Present',
      projects: [
        {
          name: 'Calliverse - Social Media App',
          period: 'April 2025 - June 2025',
          tech: 'React Native, TypeScript, Supabase (Postgres), Clerk Authentication, WebRTC, WebSockets, Firebase, Stripe',
          description: 'Developed a full-featured social networking mobile application with real-time messaging and video calling using WebSockets & WebRTC. Integrated Clerk authentication and Stripe for premium subscriptions.',
          link: 'View on PlayStore',
        },
        {
          name: 'Blink Delivery - Grocery App',
          period: 'April 2025 - May 2025',
          tech: 'React Native, TypeScript, WebSockets, Supabase, Firebase, Stripe, REST APIs',
          description: 'Built a cross-platform grocery app with real-time order tracking and delivery updates via WebSockets. Integrated Supabase for structured storage and Firebase for push notifications.',
          link: 'View on PlayStore',
        },
        {
          name: 'SaaS Platform & Chatbot Builder Agent - CraftGen',
          period: 'Apr 2024 - June 2025',
          tech: 'React JS, Node.js/Express, WebSockets, AI/NLP APIs, MongoDB, Supabase',
          description: 'Engineered a scalable SaaS platform for building custom chatbot agents. Integrated MongoDB & Supabase to support multi-tenant data storage. Enabled real-time conversational flow handling with WebSockets.',
        },
        {
          name: 'Shubz Visuals - Enterprise Landing Page Platform',
          tech: 'Next.js, Sanity CMS, Cloudinary, Supabase',
          description: 'Developed a high-performance landing page platform with dynamic content management. Integrated Sanity for structured content, Cloudinary for optimized media handling, and Supabase for database/API operations.',
        },
        {
          name: 'Africa Creative Talent Expo & FinTech App',
          period: '2025 Sept - Present (In Progress)',
          tech: 'React Native, Node.js/Express, Supabase (Postgres), Clerk Authentication, WebSockets',
          description: 'Created a fintech platform with a secure cashback reward system and proprietary voting currency. Implemented real-time voting & transactions with WebSockets.',
        },
      ],
    },
    {
      title: 'Internship',
      company: 'TOPNET',
      period: '2025 Jan - 2025 Feb',
      description: 'Developed a chatbot agent to streamline customer interactions. Boosted sales by 25% through improved engagement. Addressed and solved complex operational challenges.',
    },
    {
      title: 'Internship',
      company: 'Infopro Digital Automotive',
      period: '2024 Jan - 2024 Feb',
      description: 'Developed inventory software to track products and minimize waste. Integrated machine learning to predict top-selling products and boost sales.',
    },
  ]

  return (
    <section
      id="experience"
      className="py-20 bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-foreground"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={cardVariants}>
              <motion.div
                whileHover={shouldReduceMotion ? {} : {
                  x: 10,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                }}
                transition={{ type: 'spring' as const, stiffness: 300, damping: 20 }}
                style={{ willChange: shouldReduceMotion ? 'auto' : 'transform' }}
              >
                <Card>
              <CardHeader>
                <CardTitle className="text-foreground">{exp.title}</CardTitle>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg text-primary">{exp.company}</p>
                  <Separator orientation="vertical" className="h-4" />
                  <p className="text-muted-foreground">{exp.period}</p>
                </div>
              </CardHeader>
              <CardContent>
                {exp.description && (
                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>
                )}
                {exp.projects && (
                  <motion.div
                    className="space-y-6 mt-6"
                    variants={containerVariants}
                  >
                    {exp.projects.map((project, pIndex) => (
                      <motion.div
                        key={pIndex}
                        className="border-l-4 border-primary pl-4 space-y-2"
                        variants={projectVariants}
                        whileHover={shouldReduceMotion ? {} : { x: 5 }}
                        transition={{ type: 'spring' as const, stiffness: 400, damping: 17 }}
                      >
                        <h4 className="text-xl font-semibold text-foreground">
                          {project.name}
                        </h4>
                        {project.period && (
                          <Badge variant="outline">{project.period}</Badge>
                        )}
                        <p className="text-sm text-muted-foreground">
                          <strong>Tech Stack:</strong> {project.tech}
                        </p>
                        <p className="text-foreground">
                          {project.description}
                        </p>
                        {project.link && (
                          <a
                            href="#"
                            className="text-primary hover:underline"
                          >
                            {project.link}
                          </a>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
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

export default memo(Experience)


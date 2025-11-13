import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion, useReducedMotion } from 'framer-motion'
import { useMemo, memo } from 'react'

function Skills() {
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
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 50, scale: shouldReduceMotion ? 1 : 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  }), [shouldReduceMotion])
  const skillCategories = [
    {
      title: 'Mobile Development',
      skills: [
        'React Native',
        'JavaScript',
        'TypeScript',
        'Redux',
        'Recoil',
        'Expo/EAS',
        'App Store Deployment',
        'Google Play Deployment',
      ],
    },
    {
      title: 'Backend & APIs',
      skills: [
        'Node.js/Express',
        'REST APIs',
        'GraphQL',
        'MongoDB',
        'PostgreSQL',
        'Supabase',
        'Firebase',
      ],
    },
    {
      title: 'Real-Time Features',
      skills: [
        'Push Notifications',
        'Live Feeds',
        'GPS Tracking',
        'Route Calculation',
        'WebSockets',
        'WebRTC',
      ],
    },
    {
      title: 'UI/UX',
      skills: [
        'Tailwind CSS',
        'Material-UI',
        'Lottie Animations',
        'SVG Animations',
        'Responsive Layouts',
      ],
    },
    {
      title: 'Tools & DevOps',
      skills: [
        'Git/GitHub',
        'CI/CD Pipelines',
        'Docker',
        'Kubernetes',
        'Google Cloud Platform',
      ],
    },
    {
      title: 'AI/ML Integration',
      skills: [
        'Chatbots',
        'Predictive Analytics',
        'Conversational AI',
        'NLP APIs',
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="py-20 bg-muted/50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-foreground"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={cardVariants} className="h-full">
              <motion.div
                whileHover={shouldReduceMotion ? {} : {
                  y: -10,
                  rotateY: 5,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                }}
                transition={{ type: 'spring' as const, stiffness: 300, damping: 20 }}
                style={{ willChange: shouldReduceMotion ? 'auto' : 'transform' }}
                className="h-full"
              >
                <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
                  <CardHeader className="flex-shrink-0">
                    <CardTitle className="text-primary">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-2 flex-1">
                      {category.skills.map((skill, skillIndex) => (
                        <li
                          key={skillIndex}
                          className="text-foreground flex items-center"
                        >
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                          <span className="flex-1">{skill}</span>
                        </li>
                      ))}
                    </ul>
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

export default memo(Skills)


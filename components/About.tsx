import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { motion, useReducedMotion } from 'framer-motion'
import { useMemo, memo } from 'react'

function About() {
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

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  }), [shouldReduceMotion])

  const cardVariants = useMemo(() => ({
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.8, rotateX: shouldReduceMotion ? 0 : -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  }), [shouldReduceMotion])

  return (
    <section
      id="about"
      className="py-20 bg-background relative overflow-hidden"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-foreground"
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        <motion.div className="max-w-4xl mx-auto" variants={itemVariants}>
          <motion.div
            className="flex justify-center mb-8"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: 'spring' as const, stiffness: 300, damping: 20 }}
            >
              <Avatar className="w-64 h-64 rounded-2xl shadow-2xl ring-4 ring-primary/20">
                <AvatarImage src="/me.jpg" alt="Saifeddine Makhlouf - Fullstack React Native Developer" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
            </motion.div>
          </motion.div>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed mb-6"
            variants={itemVariants}
          >
            Full-Stack React Native Developer with{' '}
            <strong className="text-primary">
              6 years of experience
            </strong>
            . Expert in designing, building, and deploying high-performance
            cross-platform mobile apps (iOS/Android). Proficient with the entire
            stack, from scalable Node.js/Python APIs (REST/GraphQL) to responsive
            React Native front-ends (Redux/Zustand).
          </motion.p>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed mb-6"
            variants={itemVariants}
          >
            Proven track record of performance optimization and app store
            submission. Specialized in real-time features including push
            notifications, live feeds, GPS tracking, and route calculation.
            Experienced in integrating third-party services like Stripe, Firebase,
            Supabase, and Clerk for authentication and backend services.
          </motion.p>
          <motion.div
            className="grid md:grid-cols-2 gap-8 mt-12"
            variants={containerVariants}
          >
            <motion.div variants={cardVariants}>
              <motion.div
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                }}
                transition={{ type: 'spring' as const, stiffness: 300, damping: 20 }}
              >
                <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Education
                </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary">
                    Bachelor's Degree
                  </h4>
                  <p className="text-muted-foreground">
                    Jan 2023 - June 2026
                  </p>
                  <p className="text-foreground">
                    Superior Institute of Technological Studies at Djerba
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">
                    Baccalaureate
                  </h4>
                  <p className="text-muted-foreground">2019 - 2023</p>
                  <p className="text-foreground">
                    Borj Cedria High School
                  </p>
                </div>
                </div>
              </CardContent>
            </Card>
            </motion.div>
            </motion.div>
            <motion.div variants={cardVariants}>
              <motion.div
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                }}
                transition={{ type: 'spring' as const, stiffness: 300, damping: 20 }}
              >
                <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    Languages
                  </h3>
                  <div className="space-y-2">
                    <motion.div
                      className="flex justify-between"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <span className="text-foreground">French</span>
                      <span className="text-primary font-semibold">
                        C2
                      </span>
                    </motion.div>
                    <motion.div
                      className="flex justify-between"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="text-foreground">English</span>
                      <span className="text-primary font-semibold">
                        C1 (TOEIC in prep)
                      </span>
                    </motion.div>
                    <motion.div
                      className="flex justify-between"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className="text-foreground">Arabic</span>
                      <span className="text-primary font-semibold">
                        Native
                      </span>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default memo(About)


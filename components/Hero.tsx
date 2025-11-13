'use client'

import { useEffect, useState, useMemo, memo } from 'react'
import Image from 'next/image'
import { Github, Mail, MapPin, Phone, Download, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { motion, useReducedMotion } from 'framer-motion'
 function Hero() {
  const [mounted, setMounted] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
        delayChildren: shouldReduceMotion ? 0 : 0.3,
      },
    },
  }), [shouldReduceMotion])

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 12,
      },
    },
  }), [shouldReduceMotion])

  const avatarVariants = useMemo(() => ({
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.5, rotate: shouldReduceMotion ? 0 : -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 200,
        damping: 15,
        delay: shouldReduceMotion ? 0 : 0.2,
      },
    },
  }), [shouldReduceMotion])

  const floatingAnimation = useMemo(() => ({
    y: shouldReduceMotion ? 0 : [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  }), [shouldReduceMotion])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-primary/5 pt-16 relative overflow-hidden"
    >
      {/* Animated background elements */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ willChange: 'transform' }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ willChange: 'transform' }}
          />
        </div>
      )}

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={mounted ? 'visible' : 'hidden'}
      >
        <div className="text-center">
          {/* Profile Photo */}
          <motion.div
            variants={avatarVariants}
            className="mb-8"
          >
            <motion.div animate={floatingAnimation}>
              <Avatar className="w-48 h-48 mx-auto ring-4 ring-primary/20 shadow-2xl">
                <AvatarImage src="/me.jpg" alt="Saifeddine Makhlouf" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-foreground mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Saifeddine{' '}
              <motion.span
                className="text-primary inline-block"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundImage: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary-foreground)), hsl(var(--primary)))',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Makhlouf
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <motion.h2
              className="text-2xl md:text-4xl font-semibold text-foreground mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Fullstack React Native Developer
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              6 Years of Experience | Cross-Platform Mobile Apps | Backend APIs
              | Modern Web Technologies
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring' as const, stiffness: 400, damping: 17 }}
            >
              <Button asChild size="lg" className="gap-2">
                <Link href="mailto:saifeddine.ben.makhlouf@gmail.com" aria-label="Email Saifeddine Makhlouf">
                  <Mail size={20} />
                  Get In Touch
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring' as const, stiffness: 400, damping: 17 }}
            >
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link
                  href="https://github.com/devmksaif"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                  GitHub
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring' as const, stiffness: 400, damping: 17 }}
            >
              <Button asChild variant="outline" size="lg" className="gap-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950">
                <Link
                  href="https://www.linkedin.com/in/seifeddine-makhlouf-48a057299/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring' as const, stiffness: 400, damping: 17 }}
            >
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="/cv.pdf" download aria-label="Download CV">
                  <Download size={20} />
                  Download CV
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+216 20099922</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>saifeddine.ben.makhlouf@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Tunis, Tunisia</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default memo(Hero)


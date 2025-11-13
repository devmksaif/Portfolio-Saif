'use client'

import { useState, useMemo, useCallback, memo } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { motion, useReducedMotion } from 'framer-motion'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this to an API
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }, [formData])

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  }), [shouldReduceMotion])

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -30 },
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

  const formVariants = useMemo(() => ({
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 30 },
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

  return (
    <section
      id="contact"
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
          Get In Touch
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              className="text-lg text-muted-foreground mb-8"
              variants={itemVariants}
            >
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Feel free to reach out!
            </motion.p>
            <div className="space-y-4">
              <motion.div variants={itemVariants}>
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { x: 5, scale: 1.02 }}
                  transition={{ type: 'spring' as const, stiffness: 300, damping: 20 }}
                  style={{ willChange: shouldReduceMotion ? 'auto' : 'transform' }}
                >
                  <Card>
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Mail className="text-primary" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a
                          href="mailto:saifeddine.ben.makhlouf@gmail.com"
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          saifeddine.ben.makhlouf@gmail.com
                        </a>
                      </div>
                    </CardContent>
                  </Card>
              </motion.div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { x: 5, scale: 1.02 }}
                  transition={{ type: 'spring' as const, stiffness: 300, damping: 20 }}
                  style={{ willChange: shouldReduceMotion ? 'auto' : 'transform' }}
                >
                  <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <motion.div
                      className="p-3 bg-primary/10 rounded-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Phone className="text-primary" size={24} />
                    </motion.div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a
                        href="tel:+21620099922"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        +216 20099922
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { x: 5, scale: 1.02 }}
                  transition={{ type: 'spring' as const, stiffness: 300, damping: 20 }}
                  style={{ willChange: shouldReduceMotion ? 'auto' : 'transform' }}
                >
                  <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <motion.div
                      className="p-3 bg-primary/10 rounded-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <MapPin className="text-primary" size={24} />
                    </motion.div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground">Tunis, Tunisia</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { x: 5, scale: 1.02 }}
                  transition={{ type: 'spring' as const, stiffness: 300, damping: 20 }}
                  style={{ willChange: shouldReduceMotion ? 'auto' : 'transform' }}
                >
                  <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <motion.div
                      className="p-3 bg-primary/10 rounded-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Github className="text-primary" size={24} />
                    </motion.div>
                    <div>
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <Link
                        href="https://github.com/devmksaif"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        github.com/devmksaif
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { x: 5, scale: 1.02 }}
                  transition={{ type: 'spring' as const, stiffness: 300, damping: 20 }}
                  style={{ willChange: shouldReduceMotion ? 'auto' : 'transform' }}
                >
                  <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <motion.div
                      className="p-3 bg-blue-500/10 rounded-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Linkedin className="text-blue-600 dark:text-blue-400" size={24} />
                    </motion.div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <Link
                        href="https://www.linkedin.com/in/seifeddine-makhlouf-48a057299/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        linkedin.com/in/seifeddine-makhlouf
                      </Link>
                  </div>
                </CardContent>
              </Card>
              </motion.div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              transition={{ type: 'spring' as const, stiffness: 300, damping: 20 }}
              style={{ willChange: shouldReduceMotion ? 'auto' : 'transform' }}
            >
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        rows={6}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                      />
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button type="submit" className="w-full gap-2" size="lg">
                        <motion.span
                          animate={submitted ? { rotate: 360 } : { rotate: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Send size={20} />
                        </motion.span>
                        {submitted ? 'Message Sent!' : 'Send Message'}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default memo(Contact)


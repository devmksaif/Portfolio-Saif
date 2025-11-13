import { Github, Mail, Phone, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { memo, useMemo } from 'react'

function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), [])

  return (
    <footer className="bg-muted border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Saifeddine Makhlouf</h3>
            <p className="text-muted-foreground">
              Fullstack React Native Developer with 6 years of experience in
              building cross-platform mobile applications and scalable backend
              systems.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#blog"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:saifeddine.ben.makhlouf@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={18} />
                <span>saifeddine.ben.makhlouf@gmail.com</span>
              </a>
              <a
                href="tel:+21620099922"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={18} />
                <span>+216 20099922</span>
              </a>
              <Link
                href="https://github.com/devmksaif"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={18} />
                <span>GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/seifeddine-makhlouf-48a057299/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>
            © {currentYear} Saifeddine Makhlouf. All rights reserved. | Built
            with Next.js, Tailwind CSS & shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)


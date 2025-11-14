import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16 pb-20 flex items-center justify-center min-h-[80vh]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
          <h2 className="text-3xl font-semibold mb-4 text-foreground">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild size="lg">
            <Link href="/">Go Back Home</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </main>
  )
}


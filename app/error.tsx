'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error:', error)
  }, [error])

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16 pb-20 flex items-center justify-center min-h-[80vh]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold mb-4 text-destructive">500</h1>
          <h2 className="text-3xl font-semibold mb-4 text-foreground">Something went wrong!</h2>
          <p className="text-lg text-muted-foreground mb-8">
            An unexpected error occurred. Please try again.
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={reset} size="lg">
              Try Again
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/">Go Back Home</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}


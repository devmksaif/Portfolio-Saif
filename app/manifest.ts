import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Saifeddine Makhlouf - Fullstack React Native Developer',
    short_name: 'SM Portfolio',
    description: 'Portfolio of Saifeddine Makhlouf - Fullstack React Native Developer',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0ea5e9',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}


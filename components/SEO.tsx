'use client'

import { DefaultSeo } from 'next-seo'
import { OrganizationJsonLd, WebPageJsonLd } from 'next-seo'
import SEOConfig from '@/next-seo.config'

export default function SEO() {
  return (
    <>
      <DefaultSeo {...SEOConfig} />
      
      {/* Person Schema - Using JSON-LD directly */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Saifeddine Makhlouf',
            jobTitle: 'Fullstack React Native Developer',
            description: 'Full-Stack React Native Developer with 6 years of experience in cross-platform mobile app development',
            url: 'https://saifeddine-portfolio.vercel.app',
            image: 'https://saifeddine-portfolio.vercel.app/me.jpg',
            email: 'saifeddine.ben.makhlouf@gmail.com',
            telephone: '+21620099922',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Tunis',
              addressLocality: 'Tunis',
              addressRegion: 'Tunis',
              postalCode: '1000',
              addressCountry: 'Tunisia',
            },
            sameAs: [
              'https://github.com/devmksaif',
              'https://www.linkedin.com/in/seifeddine-makhlouf-48a057299/',
              'https://saifeddine-portfolio.vercel.app',
            ],
            knowsAbout: [
              'React Native',
              'JavaScript',
              'TypeScript',
              'Node.js',
              'MongoDB',
              'PostgreSQL',
              'GraphQL',
              'REST API',
              'WebRTC',
              'Firebase',
              'Supabase',
              'Mobile App Development',
              'Web Development',
            ],
            alumniOf: {
              '@type': 'EducationalOrganization',
              name: 'Superior Institute of Technological Studies at Djerba',
              url: 'https://saifeddine-portfolio.vercel.app',
            },
          }),
        }}
      />

      {/* Organization Schema */}
      <OrganizationJsonLd
        useAppDir={true}
        type="Person"
        name="Saifeddine Makhlouf"
        url="https://saifeddine-portfolio.vercel.app"
        logo="https://saifeddine-portfolio.vercel.app/me.jpg"
        contactPoint={[
          {
            telephone: '+21620099922',
            contactType: 'Professional Services',
            email: 'saifeddine.ben.makhlouf@gmail.com',
            areaServed: 'Worldwide',
            availableLanguage: ['English', 'French', 'Arabic'],
          },
        ]}
        sameAs={[
          'https://github.com/devmksaif',
          'https://www.linkedin.com/in/seifeddine-makhlouf-48a057299/',
          'https://saifeddine-portfolio.vercel.app',
        ]}
      />

      {/* WebPage Schema */}
      <WebPageJsonLd
        useAppDir={true}
        description="Portfolio of Saifeddine Makhlouf - Fullstack React Native Developer with 6 years of experience in mobile and web development"
        id="https://saifeddine-portfolio.vercel.app/#webpage"
        lastReviewed="2025-01-15T10:00:00+01:00"
      />
    </>
  )
}


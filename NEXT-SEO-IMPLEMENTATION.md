# Next-SEO Implementation Guide

This portfolio now uses `next-seo` library for comprehensive SEO management. Here's how it's implemented:

## Installation

The `next-seo` package has been added to `package.json`. Run:

```bash
npm install
```

## File Structure

### 1. `next-seo.config.ts`
Central configuration file containing all default SEO settings:
- Title template
- Default title and description
- Open Graph configuration
- Twitter Card settings
- Additional meta tags
- Additional link tags

### 2. `components/SEO.tsx`
Client component that implements:
- **DefaultSeo**: Applies global SEO defaults across all pages
- **PersonJsonLd**: Structured data for Person schema (placed at the top)

This component is imported in `app/layout.tsx` and rendered at the top of the body.

### 3. `app/layout.tsx`
- Imports and renders the SEO component at the top
- Maintains Next.js Metadata API for additional SEO
- Combines both approaches for maximum SEO coverage

### 4. `app/page.tsx`
- Uses `NextSeo` component at the very top of the page
- Page-specific SEO configuration
- Overrides default settings where needed

## Key Features

### ✅ Default SEO (Global)
- Applied via `DefaultSeo` component in `components/SEO.tsx`
- Uses configuration from `next-seo.config.ts`
- Applies to all pages unless overridden

### ✅ Page-Specific SEO
- Each page can use `NextSeo` component
- Overrides default settings
- Allows custom Open Graph images per page

### ✅ Structured Data (JSON-LD)
- `PersonJsonLd` component for Person schema
- Properly configured with `useAppDir={true}` for App Router
- Includes all relevant information (skills, education, contact, etc.)

### ✅ Open Graph Tags
- Comprehensive OG tags for social sharing
- Multiple image support
- Profile-specific configuration

### ✅ Twitter Cards
- Summary large image cards
- Handle and site configuration
- Optimized for Twitter sharing

## How It Works

1. **Global SEO**: The `SEO` component in `layout.tsx` applies default SEO settings to all pages
2. **Page SEO**: Individual pages can use `NextSeo` to override or extend defaults
3. **Structured Data**: `PersonJsonLd` provides rich snippets for search engines
4. **Combined Approach**: Works alongside Next.js Metadata API for maximum coverage

## Usage Example

For any new page, add SEO like this:

```tsx
'use client'

import { NextSeo } from 'next-seo'

export default function MyPage() {
  return (
    <>
      <NextSeo
        title="My Page Title"
        description="Page description"
        canonical="https://saifeddine-portfolio.vercel.app/my-page"
        openGraph={{
          url: 'https://saifeddine-portfolio.vercel.app/my-page',
          title: 'My Page Title',
          description: 'Page description',
          images: [
            {
              url: 'https://saifeddine-portfolio.vercel.app/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'My Page',
            },
          ],
        }}
      />
      {/* Your page content */}
    </>
  )
}
```

## Benefits

1. **Centralized Configuration**: All default SEO in one file
2. **Type Safety**: TypeScript support with proper types
3. **Easy Overrides**: Simple to customize per page
4. **Structured Data**: Automatic JSON-LD generation
5. **Social Media Ready**: Complete Open Graph and Twitter Card support
6. **App Router Compatible**: Works with Next.js 13+ App Router

## Next Steps

1. Run `npm install` to install next-seo
2. Add your Open Graph image at `/public/og-image.jpg` (1200x630px)
3. Customize `next-seo.config.ts` with your specific details
4. Test SEO with:
   - Google Search Console
   - Facebook Sharing Debugger
   - Twitter Card Validator
   - Schema.org Validator

## Notes

- The SEO component is placed at the top of the body in `layout.tsx` as requested
- `NextSeo` is placed at the top of each page component
- Both Next.js Metadata API and next-seo work together for comprehensive SEO
- All components use `'use client'` directive for client-side rendering (required for next-seo in App Router)


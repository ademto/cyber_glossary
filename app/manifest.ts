import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Cyber Glossary - Cybersecurity Terms & Definitions',
    short_name: 'Cyber Glossary',
    description: 'Comprehensive cybersecurity terms, definitions, and concepts for security professionals and students.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f0f23',
    theme_color: '#3b82f6',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['education', 'productivity', 'utilities'],
    lang: 'en',
    scope: '/',
  }
} 
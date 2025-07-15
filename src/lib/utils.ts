import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function generateMetadata(
  title: string,
  description: string,
  canonical?: string
) {
  return {
    title,
    description,
    keywords: 'construction, real estate, starken group, building, infrastructure, development',
    authors: [{ name: 'Starken Group' }],
    creator: 'Starken Group',
    publisher: 'Starken Group',
    robots: 'index, follow',
    canonical: canonical || '',
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_US',
      siteName: 'Starken Group',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
} 
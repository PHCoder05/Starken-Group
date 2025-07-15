import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { WhatsAppFloat } from "@/components/ui/whatsapp-float"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://starkenventure.com"),
  title: {
    default: "Starken Group - Leading Construction & Real Estate Company in India | ISO 9001:2015 Certified",
    template: "%s | Starken Group - Premium Construction Services"
  },
  description: "Starken Group is a premier construction & real estate company in India with 15+ years of excellence. We deliver residential, commercial, and infrastructure projects with ISO 9001:2015 certified quality. 500+ successful projects completed.",
  keywords: [
    "construction company India",
    "real estate development",
    "residential construction",
    "commercial construction", 
    "infrastructure development",
    "ISO 9001 certified builders",
    "construction services Mumbai",
    "property development India",
    "building contractors",
    "construction consultancy",
    "Starken Group",
    "premium construction company",
    "Navi Mumbai builders",
    "Maharashtra construction",
    "quality construction services"
  ],
  authors: [{ name: "Starken Group", url: "https://starkenventure.com" }],
  creator: "Starken Group",
  publisher: "Starken Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://starkenventure.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://starkenventure.com",
    siteName: "Starken Group - Premium Construction & Real Estate",
    title: "Starken Group - Leading Construction & Real Estate Company in India",
    description: "Premium construction & real estate services with 15+ years of excellence. ISO 9001:2015 certified company delivering 500+ successful projects across India. Expert in residential, commercial & infrastructure development.",
    images: [
      {
        url: "/images/og-starken-group.jpg",
        width: 1200,
        height: 630,
        alt: "Starken Group - Premier Construction & Real Estate Company",
        type: "image/jpeg",
      },
      {
        url: "/images/og-starken-projects.jpg", 
        width: 1200,
        height: 630,
        alt: "Starken Group Construction Projects Portfolio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@StarkenGroup",
    creator: "@StarkenGroup",
    title: "Starken Group - Leading Construction & Real Estate Company",
    description: "Premium construction & real estate services with 15+ years of excellence. ISO 9001:2015 certified. 500+ successful projects across India.",
    images: [
      {
        url: "/images/twitter-starken-group.jpg",
        alt: "Starken Group Construction Excellence",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-180x180.png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "Construction and Real Estate",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Starken Group",
  "alternateName": "Starken Construction & Real Estate",
  "url": "https://starkenventure.com",
  "logo": "https://starkenventure.com/images/starken-logo.png",
  "image": "https://starkenventure.com/images/starken-building.jpg",
  "description": "Leading construction and real estate company in India with 15+ years of excellence. ISO 9001:2015 certified company delivering premium residential, commercial, and infrastructure projects.",
  "foundingDate": "2008",
  "founder": {
    "@type": "Person",
    "name": "Rajesh Sharma"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office No. 5, 2nd Floor, Sai Plaza, Plot No. 123, Sector 15",
    "addressLocality": "CBD Belapur, Navi Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400614",
    "addressCountry": "IN"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-98765-43210",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi", "Marathi"],
      "areaServed": "IN"
    },
    {
      "@type": "ContactPoint", 
      "email": "info@starkengroup.com",
      "contactType": "customer service"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/starken-group",
    "https://www.facebook.com/starkengroup", 
    "https://twitter.com/starkengroup",
    "https://www.instagram.com/starkengroup"
  ],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "ISO 9001:2015",
    "recognizedBy": {
      "@type": "Organization",
      "name": "International Organization for Standardization"
    }
  },
  "award": [
    "Industry Leadership Award 2023",
    "Quality Excellence Award",
    "Best Construction Company Award"
  ],
  "numberOfEmployees": "200+",
  "naics": "236220",
  "knowsAbout": [
    "Residential Construction",
    "Commercial Construction", 
    "Infrastructure Development",
    "Real Estate Development",
    "Project Management",
    "Construction Consulting"
  ],
  "serviceArea": {
    "@type": "Country",
    "name": "India"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Construction Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Construction",
          "description": "Premium residential construction services including luxury apartments, villas, and affordable housing projects."
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Construction",
          "description": "Modern commercial buildings, office complexes, retail spaces, and industrial facilities."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Infrastructure Development",
          "description": "Large-scale infrastructure projects including roads, bridges, and public facilities."
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "200",
    "bestRating": "5",
    "worstRating": "1"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Starken Group" />
        <meta name="application-name" content="Starken Group" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        
        {/* Additional SEO meta tags */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Navi Mumbai" />
        <meta name="geo.position" content="19.0330;73.0297" />
        <meta name="ICBM" content="19.0330, 73.0297" />
        
        {/* Business specific meta tags */}
        <meta name="business:contact_data:street_address" content="Office No. 5, 2nd Floor, Sai Plaza, Plot No. 123, Sector 15" />
        <meta name="business:contact_data:locality" content="CBD Belapur" />
        <meta name="business:contact_data:region" content="Maharashtra" />
        <meta name="business:contact_data:postal_code" content="400614" />
        <meta name="business:contact_data:country_name" content="India" />
        <meta name="business:contact_data:phone_number" content="+919876543210" />
        <meta name="business:contact_data:email" content="info@starkengroup.com" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <WhatsAppFloat 
          phoneNumber="+919876543210"
          message="Hello! I'm interested in your construction services. Can you help me with my project?"
        />
        
        {/* Google Analytics - Replace with your actual GA4 measurement ID */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />
      </body>
    </html>
  )
}

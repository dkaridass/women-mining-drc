import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "Women in Mining DRC - Autonomiser les femmes dans le secteur minier congolais",
    template: "%s | Women in Mining DRC"
  },
  description: "Women in Mining DRC (WIM.DRC) œuvre pour l'autonomisation des femmes dans le secteur minier de la République Démocratique du Congo. Formation, leadership, entrepreneuriat et plaidoyer pour l'égalité des genres dans l'industrie minière.",
  keywords: [
    "Women in Mining DRC",
    "WIM DRC",
    "femmes secteur minier",
    "autonomisation femmes RDC",
    "égalité genres",
    "formation minière",
    "leadership féminin",
    "entrepreneuriat minier",
    "plaidoyer genre",
    "République Démocratique Congo",
    "femmes minier RDC"
  ],
  authors: [{ name: "Women in Mining DRC" }],
  creator: "Women in Mining DRC",
  publisher: "Women in Mining DRC",
  metadataBase: new URL('https://wim-drc.com'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/fr',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://wim-drc.com',
    siteName: 'Women in Mining DRC',
    title: "Women in Mining DRC - Autonomiser les femmes dans le secteur minier congolais",
    description: "WIM.DRC œuvre pour l'autonomisation des femmes dans le secteur minier de la RDC. Formation, leadership, entrepreneuriat et plaidoyer pour l'égalité des genres.",
    images: [
      {
        url: '/attached_assets/wimdrc-logo.png',
        width: 1200,
        height: 630,
        alt: 'Logo Women in Mining DRC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Women in Mining DRC - Autonomiser les femmes dans le secteur minier congolais",
    description: "WIM.DRC œuvre pour l'autonomisation des femmes dans le secteur minier de la RDC.",
    images: ['/attached_assets/wimdrc-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8B4513" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Women in Mining DRC",
              "alternateName": "WIM DRC",
              "url": "https://wim-drc.com",
              "logo": "https://wim-drc.com/attached_assets/wimdrc-logo.png",
              "description": "Organisation œuvrant pour l'autonomisation des femmes dans le secteur minier de la République Démocratique du Congo",
              "foundingDate": "2019",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CD",
                "addressRegion": "Haut-Katanga",
                "addressLocality": "Lubumbashi"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+243-991-900-624",
                "contactType": "customer service",
                "email": "contact@wim-drc.com"
              },
              "sameAs": [
                "https://www.facebook.com/wimdrc",
                "https://www.linkedin.com/company/wim-drc"
              ]
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <a href="#main-content" className="skip-to-main">
            Aller au contenu principal
          </a>
          <Navigation />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

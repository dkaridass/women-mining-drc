'use client'

/**
 * Women in Mining DRC - Production-Ready Redesign
 * Modern, mobile-first, WCAG AA compliant, <3s load time
 * Next.js 15 + Tailwind CSS 4 + React 19 + Framer Motion
 */

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, X, Send, Heart, CreditCard, Calendar, MapPin, Phone, Mail, ChevronLeft, ChevronRight, Quote, Download, FileText, BookOpen, Video, Globe } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

// Import components
import { ImpactStats } from '@/components/impact-stats'
import { AboutTestimonials } from '@/components/about-testimonials'
import { ProgramsGallery } from '@/components/programs-gallery'
import { NewsSection } from '@/components/news-section'
import { EventsSection } from '@/components/events-section'
import { ResourcesSection } from '@/components/resources-section'
import { AdvocacySection } from '@/components/advocacy-section'
import { ContactDonations } from '@/components/contact-donations'
import { galleries, getGalleriesByCategory, type Gallery } from '@/app/data/galleries'
import { GalleryCard } from '@/components/gallery-card'
import { GalleryFilters } from '@/components/gallery-filters'
import { GalleryLightbox } from '@/components/gallery-lightbox'
import { translations, type Language } from '@/app/data/translations'

// Form schema
const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  subject: z.string().min(5, 'Le sujet doit contenir au moins 5 caractères'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function HomePage() {
  // Language state
  const [language, setLanguage] = useState<Language>('fr')
  const t = translations[language]

  // Gallery state
  const [selectedCategory, setSelectedCategory] = useState<Gallery['category'] | 'all'>('all')
  const [selectedGallery, setSelectedGallery] = useState<Gallery | null>(null)
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0)

  // Form state
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  // Load language preference
  useEffect(() => {
    const saved = localStorage.getItem('wim-drc-language') as Language | null
    if (saved && (saved === 'fr' || saved === 'en')) {
      setLanguage(saved)
    }
  }, [])

  // Enhanced parallax effect for cinematic hero
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const handleScroll = () => {
      const video = document.getElementById('hero-bg-video')
      const image = document.getElementById('hero-bg-image')
      const heroContent = document.getElementById('hero-content')
      
      const scrolled = window.scrollY
      const heroHeight = window.innerHeight
      
      if (scrolled < heroHeight) {
        const parallaxSpeed = 0.25
        const contentSpeed = 0.15
        
        if (video) {
          video.style.transform = `translateY(${scrolled * parallaxSpeed}px) scale(1.1)`
        }
        if (image) {
          image.style.transform = `translateY(${scrolled * parallaxSpeed}px) scale(1.05)`
        }
        
        if (heroContent) {
          heroContent.style.transform = `translateY(${scrolled * contentSpeed}px)`
          heroContent.style.opacity = `${1 - scrolled / heroHeight * 0.3}`
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Ensure hero content is visible on mount
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const heroContent = document.getElementById('hero-content')
    if (heroContent) {
      setTimeout(() => {
        heroContent.style.opacity = '1'
        const children = heroContent.querySelectorAll('*')
        children.forEach((child) => {
          const el = child as HTMLElement
          if (el && typeof window !== 'undefined') {
            const computedStyle = window.getComputedStyle(el)
            if (el.style.opacity === '0' || computedStyle.opacity === '0') {
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
            }
          }
        })
      }, 100)
    }
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.8,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const ctaVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.4,
      },
    },
  }

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    console.log('Form submitted:', data)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitSuccess(true)
    reset()
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <>
      {/* HERO SECTION - CINEMATIC, ART-DIRECTED */}
      <section
        id="accueil"
        className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
        aria-label={t.hero.mission}
      >
        {/* Video Background with Fallback */}
        <div className="absolute inset-0 z-0">
          <video
            id="hero-bg-video"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ transform: 'scale(1.1)' }}
            onError={(e) => {
              const video = e.target as HTMLVideoElement
              video.style.display = 'none'
            }}
            aria-hidden="true"
          >
            <source src="/attached_assets/women-mining-bg-1.mp4" type="video/mp4" />
          </video>
          <div 
            id="hero-bg-image"
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/attached_assets/women-mining-leadership.jpg')",
              willChange: 'transform',
              transform: 'scale(1.05)',
            }}
            aria-hidden="true"
          />
          
          {/* Multi-layer Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513]/92 via-[#8B4513]/88 to-black/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse 80% 100% at 50% 50%, transparent 0%, rgba(0,0,0,0.4) 100%)'
          }} />
          <div className="absolute inset-0 opacity-30" style={{
            background: 'radial-gradient(ellipse 60% 80% at 50% 20%, rgba(218,165,32,0.2) 0%, transparent 70%)'
          }} />
        </div>

        {/* W-Inspired Ribbon Shapes */}
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden" aria-hidden="true">
          <div 
            className="absolute -left-32 top-1/4 w-96 h-[200%] opacity-10"
            style={{
              background: 'linear-gradient(135deg, transparent 0%, rgba(218,165,32,0.3) 50%, transparent 100%)',
              transform: 'rotate(-15deg)',
              clipPath: 'polygon(0% 0%, 30% 0%, 35% 100%, 5% 100%)',
            }}
          />
          <div 
            className="absolute -right-32 bottom-1/4 w-96 h-[200%] opacity-10"
            style={{
              background: 'linear-gradient(45deg, transparent 0%, rgba(218,165,32,0.3) 50%, transparent 100%)',
              transform: 'rotate(15deg)',
              clipPath: 'polygon(70% 0%, 100% 0%, 95% 100%, 65% 100%)',
            }}
          />
        </div>

        {/* Texture Overlay */}
        <div 
          className="absolute inset-0 z-[1] opacity-[0.04] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
          aria-hidden="true"
        />

        {/* Logo Watermark */}
        <div className="absolute top-20 right-8 md:top-24 md:right-16 z-[2] opacity-[0.08] pointer-events-none hidden lg:block" aria-hidden="true">
          <Image
            src="/images/logo/wimdrc-logo.png"
            alt=""
            width={200}
            height={62}
            className="w-auto h-32 object-contain"
            unoptimized
          />
        </div>

        {/* Language Toggle */}
        <div className="absolute top-20 left-8 md:top-24 md:left-16 z-20">
          <button
            onClick={() => {
              const newLang = language === 'fr' ? 'en' : 'fr'
              setLanguage(newLang)
              localStorage.setItem('wim-drc-language', newLang)
            }}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-lg hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label={language === 'fr' ? 'Switch to English' : 'Passer au français'}
          >
            <Globe className="w-5 h-5" />
            <span className="font-medium">{language === 'fr' ? 'EN' : 'FR'}</span>
          </button>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            id="hero-content"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-5 sm:space-y-7 md:space-y-9"
            style={{ willChange: 'opacity, transform' }}
          >
            <motion.h1 
              variants={titleVariants}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black leading-[0.85] tracking-[-0.03em]"
              style={{ 
                fontFeatureSettings: '"liga" 1, "kern" 1',
                textRendering: 'optimizeLegibility',
              }}
            >
              <span className="bg-gradient-to-r from-[#DAA520] via-[#F4D03F] via-[#FFD700] to-[#DAA520] bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(218,165,32,0.5)]">
                {t.hero.title}
              </span>
            </motion.h1>

            <motion.h2 
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] px-4 max-w-5xl mx-auto"
              style={{ 
                letterSpacing: '-0.015em',
                fontFeatureSettings: '"liga" 1',
              }}
            >
              {language === 'fr' ? (
                <>
                  <span className="relative inline-block">
                    <span className="relative z-10">Autonomiser</span>
                    <span className="absolute bottom-0 left-0 right-0 h-2 bg-[#DAA520]/40 -z-0 transform -skew-x-12" style={{ bottom: '0.15em' }} />
                  </span>
                  {' '}
                  <span className="text-white/95">les</span>{' '}
                  <span className="text-[#DAA520] font-extrabold relative">
                    femmes
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#DAA520] opacity-60" />
                  </span>
                  <br className="hidden sm:block" />
                  <span className="text-white/90 text-[0.85em] font-semibold">
                    dans le secteur minier congolais
                  </span>
                </>
              ) : (
                <>
                  <span className="text-[#DAA520] font-extrabold">Empowering</span>{' '}
                  <span className="text-white/95">women</span>
                  <br className="hidden sm:block" />
                  <span className="text-white/90 text-[0.85em] font-semibold">
                    in the Congolese mining sector
                  </span>
                </>
              )}
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-white/90 max-w-3xl mx-auto px-4 leading-[1.7] font-light tracking-wide"
              style={{ 
                letterSpacing: '0.02em',
                textShadow: '0 2px 25px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.4)',
                fontFeatureSettings: '"liga" 1',
              }}
            >
              {t.hero.description}
            </motion.p>

            <motion.div 
              variants={ctaVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 pt-6 sm:pt-10"
            >
              <Link
                href="#programmes"
                className="group relative inline-flex items-center justify-center px-10 py-5 sm:px-12 sm:py-6 bg-[#DAA520] text-[#8B4513] font-black text-lg sm:text-xl rounded-2xl overflow-hidden transition-all duration-700 shadow-[0_15px_50px_rgba(218,165,32,0.4)] hover:shadow-[0_20px_60px_rgba(218,165,32,0.6)] hover:-translate-y-1.5 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-[#DAA520]/50"
                aria-label={t.hero.ctaProgrammes}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#F4D03F] via-[#FFD700] to-[#DAA520] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <span className="relative flex items-center gap-3 z-10">
                  {t.hero.ctaProgrammes}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" aria-hidden="true" />
                </span>
              </Link>
              <Link
                href="#contact"
                className="group relative inline-flex items-center justify-center px-10 py-5 sm:px-12 sm:py-6 bg-white/10 backdrop-blur-lg text-white border-2 border-white/40 font-black text-lg sm:text-xl rounded-2xl overflow-hidden transition-all duration-700 hover:bg-white/20 hover:border-white/60 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(255,255,255,0.25)] focus:outline-none focus:ring-4 focus:ring-white/50"
                aria-label={t.hero.ctaMembre}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <span className="relative flex items-center gap-3 z-10">
                  {t.hero.ctaMembre}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" aria-hidden="true" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-white/5"
          >
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
              className="w-1.5 h-1.5 bg-[#DAA520] rounded-full shadow-[0_0_8px_rgba(218,165,32,0.6)]"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* IMPACT STATS */}
      <ImpactStats />

      {/* ABOUT & TESTIMONIALS */}
      <AboutTestimonials />

      {/* PROGRAMS & GALLERY */}
      <ProgramsGallery />

      {/* ORGANIZED GALLERY */}
      <section id="galerie" className="py-20 bg-gradient-to-br from-[#F5F5F5] to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
              {t.gallery.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t.gallery.subtitle}
            </p>
          </motion.div>

          <GalleryFilters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {getGalleriesByCategory(selectedCategory).map((gallery, index) => (
              <GalleryCard
                key={gallery.id}
                gallery={gallery}
                onClick={() => {
                  setSelectedGallery(gallery)
                  setLightboxImageIndex(0)
                }}
                index={index}
              />
            ))}
          </div>

          {getGalleriesByCategory(selectedCategory).length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                {language === 'fr' ? 'Aucune galerie trouvée pour cette catégorie.' : 'No gallery found for this category.'}
              </p>
            </div>
          )}
        </div>
      </section>

      <GalleryLightbox
        gallery={selectedGallery}
        initialIndex={lightboxImageIndex}
        onClose={() => setSelectedGallery(null)}
      />

      {/* NEWS */}
      <NewsSection />

      {/* EVENTS */}
      <EventsSection />

      {/* RESOURCES */}
      <ResourcesSection />

      {/* ADVOCACY */}
      <AdvocacySection />

      {/* CONTACT & DONATIONS */}
      <ContactDonations />
    </>
  )
}


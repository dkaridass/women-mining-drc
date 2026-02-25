'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Send, Heart, CreditCard, Calendar, MapPin, Phone, Mail, Quote } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { galleries, getGalleriesByCategory, type Gallery } from '@/app/data/galleries'
import { news } from '@/app/data/news'
import { programs } from '@/app/data/programs'
import { impactStats } from '@/app/data/impact'
import { testimonials } from '@/app/data/testimonials'
import { partners } from '@/app/data/partners'
import { GalleryCard } from '@/components/gallery-card'
import { GalleryFilters } from '@/components/gallery-filters'
import { GalleryLightbox } from '@/components/gallery-lightbox'

// Form schema
const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  subject: z.string().min(5, 'Le sujet doit contenir au moins 5 caractères'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
})

type ContactFormData = z.infer<typeof contactSchema>



export default function HomePage() {

  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  // New gallery state
  const [selectedCategory, setSelectedCategory] = useState<Gallery['category'] | 'all'>('all')
  const [selectedGallery, setSelectedGallery] = useState<Gallery | null>(null)
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0)

  // Enhanced parallax effect for cinematic hero
  useEffect(() => {
    // Only run in browser (client-side)
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      const video = document.getElementById('hero-bg-video')
      const image = document.getElementById('hero-bg-image')
      const heroContent = document.getElementById('hero-content')

      const scrolled = window.scrollY
      const heroHeight = window.innerHeight

      if (scrolled < heroHeight) {
        const parallaxSpeed = 0.25 // Slower, more subtle
        const contentSpeed = 0.15

        // Parallax background
        if (video) {
          video.style.transform = `translateY(${scrolled * parallaxSpeed}px) scale(1.1)`
        }
        if (image) {
          image.style.transform = `translateY(${scrolled * parallaxSpeed}px) scale(1.05)`
        }

        // Subtle content parallax
        if (heroContent) {
          heroContent.style.transform = `translateY(${scrolled * contentSpeed}px)`
          heroContent.style.opacity = `${1 - scrolled / heroHeight * 0.3}`
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Log gallery count on mount
  useEffect(() => {
    const totalImages = galleries.reduce((sum, g) => sum + g.images.length, 0)
    console.log(`Found ${galleries.length} galleries with ${totalImages} total images`)
  }, [])

  // Ensure hero content is visible on mount (fallback for animation issues)
  useEffect(() => {
    // Only run in browser (client-side)
    if (typeof window === 'undefined') return

    const heroContent = document.getElementById('hero-content')
    if (heroContent) {
      // Force visibility after a short delay to ensure animations have started
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

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    // EmailJS integration - replace with your service ID
    console.log('Form submitted:', data)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitSuccess(true)
    reset()
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  // Art-directed animation variants for cinematic hero
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
        ease: [0.16, 1, 0.3, 1], // Premium easing
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

  return (
    <>
      {/* HERO SECTION - PREMIUM EDITORIAL REDESIGN */}
      <section
        id="accueil"
        className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden"
      >
        {/* Background Layer with Parallax */}
        <div className="absolute inset-0 z-0">
          <video
            id="hero-bg-video"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-90"
            style={{ transform: 'scale(1.05)' }}
            onError={(e) => {
              const video = e.target as HTMLVideoElement
              video.style.display = 'none'
            }}
          >
            <source src="/attached_assets/women-mining-bg-1.mp4" type="video/mp4" />
          </video>

          <div
            id="hero-bg-image"
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/attached_assets/women-mining-leadership.jpg')",
              zIndex: -1,
            }}
          />

          {/* Premium Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B253A]/95 via-[#0B253A]/70 to-[#0B253A]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B253A] via-transparent to-transparent opacity-80" />

          {/* Narrative Grain Texture - Editorial Feel */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
          />
        </div>

        {/* Content Container - Editorial Layout */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            id="hero-content"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            <div className="lg:col-span-8 space-y-8">
              {/* Badge */}
              <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 border border-accent/30 bg-accent/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent text-sm font-medium tracking-wide">LEADER DU SECTEUR MINIER EN RDC</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                variants={titleVariants}
                className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] text-white tracking-tight"
              >
                Façonner <span className="text-transparent bg-clip-text bg-gold-gradient relative">
                  l'avenir
                  {/* Subtle underline accent */}
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </span> <br />
                du secteur minier.
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-gray-200 max-w-2xl leading-relaxed font-light border-l-2 border-accent/50 pl-6"
              >
                Le premier réseau dédié à l'autonomisation, au leadership et à l'excellence des femmes dans l'industrie extractive en République Démocratique du Congo.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                variants={ctaVariants}
                className="flex flex-col sm:flex-row gap-5 pt-4"
              >
                <Link
                  href="#programmes"
                  className="px-8 py-4 bg-accent hover:bg-white text-primary hover:text-primary font-bold rounded-lg transition-all duration-300 shadow-glow hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 group"
                >
                  Nos Programmes
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#contact"
                  className="px-8 py-4 bg-transparent border border-white/30 text-white hover:bg-white/10 hover:border-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  Devenir Membre
                </Link>
              </motion.div>
            </div>

            {/* Right Column - Stats/Visual Interest (Hidden on mobile) */}
            <div className="hidden lg:flex lg:col-span-4 flex-col justify-end items-end space-y-6">
              <motion.div
                variants={itemVariants}
                className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 w-full max-w-xs"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="text-4xl">👷‍♀️</div>
                  <div>
                    <div className="text-3xl font-display font-bold text-white">5,000+</div>
                    <div className="text-sm text-gray-300">Femmes formées</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 w-full max-w-xs"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="text-4xl">🤝</div>
                  <div>
                    <div className="text-3xl font-display font-bold text-white">50+</div>
                    <div className="text-sm text-gray-300">Entreprises partenaires</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest text-white/50 uppercase">Découvrir</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
        </motion.div>
      </section>

      {/* IMPACT STATS - PREMIUM DESIGN */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Notre Impact en <span className="text-accent">Chiffres</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all duration-500 text-center backdrop-blur-sm"
              >
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-primary transition-colors duration-500">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-accent mb-2">{stat.label}</div>
                <p className="text-sm text-gray-300 leading-relaxed max-w-[200px] mx-auto">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="a-propos" className="py-24 lg:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 md:p-12 text-center"
          >
            <motion.div variants={itemVariants} className="mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#002B49] dark:text-[#D4AF37] mb-6">
                À propos de WIM DRC
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Women in Mining DRC est une plateforme officiellement lancée en juin 2019 lors de la DRC Mining Week
                en présence de Madame Gety Mpanu Mpanu, DIRCABA du Président de la République et Marraine de la plateforme.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-8 max-w-3xl mx-auto">
              <div>
                <h3 className="text-2xl font-bold text-[#002B49] dark:text-[#D4AF37] mb-4">Notre Mission</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Nous œuvrons pour mettre fin à toutes formes de discriminations dont sont victimes les femmes
                  du secteur minier de la RDC.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#002B49] dark:text-[#D4AF37] mb-4">Notre Vision</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Notre vision est de contribuer à une RDC développée intégrant l'approche genre.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#002B49] dark:text-[#D4AF37] mb-4">Nos Valeurs</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Nos actions sont guidées par trois valeurs fondamentales : La bonne gouvernance, l'équité,
                  et la transparence.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section >

      {/* VOICES OF WOMEN (TESTIMONIALS) */}
      <section className="py-24 bg-background-light dark:bg-gray-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary dark:text-white mb-4">
              Voix de <span className="text-accent">Femmes</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Découvrez les parcours inspirants de celles qui redéfinissent le secteur minier.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-soft hover:shadow-premium transition-all duration-300 relative border border-gray-100 dark:border-gray-800"
              >
                <Quote className="absolute top-8 right-8 w-10 h-10 text-accent/20" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-accent">
                    {/* In a real app, use the actual image. For now, using a fallback or the placeholder */}
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                      {testimonial.fallbackInitials}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-lg text-primary dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-accent font-medium">{testimonial.role}</div>
                    <div className="text-xs text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS PILLARS */}
      <section id="programmes" className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary dark:text-white mb-6">
              Nos Piliers <span className="text-accent">d'Intervention</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-soft hover:shadow-premium transition-all duration-300 overflow-hidden border-t-4 border-accent"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold text-primary dark:text-white mb-3 group-hover:text-accent transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-primary dark:text-white font-bold tracking-wide group-hover:translate-x-2 transition-transform duration-300"
                  >
                    <span className="border-b-2 border-accent/50 group-hover:border-accent pb-0.5 transition-colors">
                      {program.cta}
                    </span>
                    <ArrowRight className="w-5 h-5 ml-2 text-accent" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY - ORGANIZED BY EVENT */}
      <section id="galerie" className="py-24 bg-background-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
              Galerie Photos
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Découvrez nos événements, formations et moments forts organisés par catégorie
            </p>
          </motion.div>

          {/* Filters */}
          <GalleryFilters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Gallery Cards Grid */}
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

          {/* Empty State */}
          {getGalleriesByCategory(selectedCategory).length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Aucune galerie trouvée pour cette catégorie.
              </p>
            </div>
          )}
        </div>
      </section >

      {/* Gallery Lightbox */}
      < GalleryLightbox
        gallery={selectedGallery}
        initialIndex={lightboxImageIndex}
        onClose={() => setSelectedGallery(null)}
      />

      {/* NEWS */}
      <section id="actualites" className="py-24 lg:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
              Actualités et Rendez-vous
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                <Link href={`/news/${article.slug}`} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {article.date}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#DAA520] transition-colors">{article.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>
                    <span className="text-[#DAA520] font-medium inline-flex items-center group-hover:gap-2 gap-1 transition-all">
                      Lire la suite
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="py-20 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-primary dark:text-accent mb-4">
              Ils Nous Font Confiance
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Nous collaborons avec les leaders de l'industrie pour un impact durable et mesurable.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="group relative h-20 w-40 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
              >
                {/* Fallback to text if image not found, but intent is to use images */}
                <div className="text-center">
                  <span className="block text-sm font-bold text-gray-400 group-hover:text-primary dark:group-hover:text-white transition-colors">
                    {partner.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-gray-300 group-hover:text-accent">
                    {partner.type}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="inline-flex items-center justify-center px-8 py-3 border border-primary/20 text-primary dark:border-accent/50 dark:text-accent rounded-full font-semibold hover:bg-primary hover:text-white dark:hover:bg-accent dark:hover:text-primary transition-all duration-300">
              Devenir partenaire
            </button>
          </div>
        </div>
      </section>

      {/* GLOBAL CTA / NEWSLETTER */}
      <section className="py-24 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/attached_assets/grain.png')] opacity-10 mix-blend-multiply" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Rejoignez le Mouvement
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto font-medium text-primary/80">
            Restez informée des opportunités, rapports et invitations exclusives directement dans votre boîte mail.
          </p>

          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-4 rounded-full border-2 border-primary/10 bg-white/50 focus:bg-white focus:border-primary focus:outline-none text-primary placeholder-primary/50 transition-all"
            />
            <button className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              S'inscrire
            </button>
          </form>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-gradient-to-br from-[#1A1A1A] to-[#000000] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-8 md:p-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 text-center">Contactez-nous</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-[#DAA520] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Adresse</p>
                    <p className="text-white/80">Biayi, coin de l'église, Lubumbashi, RDC</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-[#DAA520] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:contact@wim-drc.com" className="text-white/80 hover:text-[#DAA520]">
                      contact@wim-drc.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-[#DAA520] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Téléphone</p>
                    <a href="tel:+243991900624" className="text-white/80 hover:text-[#DAA520]">
                      +243 991 900 624
                    </a>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mt-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Heart className="w-6 h-6 text-[#DAA520]" />
                    <h3 className="text-2xl font-bold">Faire un don</h3>
                  </div>
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-center space-x-2 bg-[#DAA520] text-[#8B4513] px-6 py-3 rounded-lg font-semibold hover:bg-[#DAA520]/90 transition-colors">
                      <CreditCard className="w-5 h-5" />
                      <span>Donner via Stripe</span>
                    </button>
                    <button className="w-full flex items-center justify-center space-x-2 bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors">
                      <CreditCard className="w-5 h-5" />
                      <span>Donner via PayPal</span>
                    </button>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <input
                    {...register('name')}
                    type="text"
                    placeholder="Nom complet"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#DAA520]"
                  />
                  {errors.name && <p className="mt-1 text-sm text-[#DAA520]">{errors.name.message}</p>}
                </div>
                <div>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#DAA520]"
                  />
                  {errors.email && <p className="mt-1 text-sm text-[#DAA520]">{errors.email.message}</p>}
                </div>
                <div>
                  <input
                    {...register('subject')}
                    type="text"
                    placeholder="Sujet"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#DAA520]"
                  />
                  {errors.subject && <p className="mt-1 text-sm text-[#DAA520]">{errors.subject.message}</p>}
                </div>
                <div>
                  <textarea
                    {...register('message')}
                    rows={5}
                    placeholder="Message"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#DAA520] resize-none"
                  />
                  {errors.message && <p className="mt-1 text-sm text-[#DAA520]">{errors.message.message}</p>}
                </div>
                {submitSuccess && (
                  <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-green-200">
                    Message envoyé avec succès !
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 bg-[#DAA520] text-[#8B4513] px-6 py-3 rounded-lg font-semibold hover:bg-[#DAA520]/90 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#8B4513] border-t-transparent rounded-full animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section >



    </>
  )
}

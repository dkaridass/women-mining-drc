'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Section principale"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/attached_assets/women-mining-leadership.jpg"
            alt="Femmes leaders dans le secteur minier congolais"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
            unoptimized
          />
          {/* Multi-layer gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>

      {/* Content - Perfectly Centered */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center space-y-8 max-w-5xl mx-auto"
        >
          {/* Gradient Logo Text - Perfectly Centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center justify-center"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-accent via-accent/90 to-accent bg-clip-text text-transparent">
                WIM DRC
              </span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            Autonomiser les femmes
            <br />
            <span className="text-accent">dans le secteur minier congolais</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Women in Mining DRC œuvre pour mettre fin à toutes formes de discriminations
            dont sont victimes les femmes du secteur minier de la RDC.
          </motion.p>

          {/* CTAs - Bottom Center with Hover Scales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Link
              href="#programmes"
              className="group inline-flex items-center justify-center px-8 py-4 bg-accent text-primary font-black text-lg rounded-xl hover:bg-accent/90 transition-all duration-300 transform hover:scale-110 shadow-2xl focus:outline-none focus:ring-4 focus:ring-accent/50"
              aria-label="Découvrir nos programmes"
            >
              Nos Programmes
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-3 border-white font-black text-lg rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-white/50"
              aria-label="Devenir membre"
            >
              Devenir Membre
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
            aria-hidden="true"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Dorothée Masele',
    role: 'Présidente Nationale',
    image: '/attached_assets/dorothee-masele.jpg',
    quote: 'Women in Mining DRC a transformé ma vie et celle de nombreuses femmes. Nous construisons ensemble un secteur minier plus inclusif et équitable pour toutes.',
  },
  {
    id: 2,
    name: 'Florence Kamfwa Mwema',
    role: 'Vice-Présidente, Administration et Finances',
    image: '/attached_assets/florence-kamfwa-mwema.jpg',
    quote: 'Grâce aux programmes de WIM DRC, j\'ai pu développer mes compétences en gestion et contribuer à l\'autonomisation économique des femmes du secteur minier.',
  },
  {
    id: 3,
    name: 'Alphonsine Tshilefe',
    role: 'Vice-Présidente, Exploitation Artisanale',
    image: '/attached_assets/alphonsine.jpg',
    quote: 'Les formations techniques que nous offrons permettent aux femmes d\'améliorer leurs conditions de travail et d\'augmenter leurs revenus de manière significative.',
  },
  {
    id: 4,
    name: 'Elise Kalasa',
    role: 'Coordinatrice Provinciale, Haut-Katanga',
    image: '/attached_assets/femmes-mineures-casques.png',
    quote: 'En tant que coordinatrice provinciale, je vois chaque jour l\'impact positif de nos programmes sur les femmes de ma région. C\'est une source d\'inspiration constante.',
  },
]

export function AboutTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      id="a-propos"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            >
              À propos de WIM DRC
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Women in Mining DRC est une plateforme officiellement lancée en juin 2019 lors de la DRC Mining Week
              en présence de Madame Gety Mpanu Mpanu, DIRCABA du Président de la République et Marraine de la plateforme.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Notre Mission</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Nous œuvrons pour mettre fin à toutes formes de discriminations dont sont victimes les femmes
                  du secteur minier de la RDC.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Notre Vision</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Notre vision est de contribuer à une RDC développée intégrant l'approche genre.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Nos Valeurs</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Nos actions sont guidées par trois valeurs fondamentales : La bonne gouvernance, l'équité,
                  et la transparence.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/attached_assets/galerie/wim-2024/jourI9 2.jpg"
                  alt="Leadership féminin dans le secteur minier"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Témoignages de nos Leaders
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Découvrez ce que nos coordinatrices et membres disent de WIM DRC
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-background-light dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <Quote className="w-12 h-12 text-primary dark:text-accent mx-auto mb-6" />
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed italic">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-gray-900 dark:text-white">
                        {testimonials[currentTestimonial].name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-primary hover:text-white dark:hover:bg-accent dark:hover:text-primary transition-all focus:outline-none focus:ring-4 focus:ring-primary/50"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-primary hover:text-white dark:hover:bg-accent dark:hover:text-primary transition-all focus:outline-none focus:ring-4 focus:ring-primary/50"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial
                      ? 'bg-primary dark:bg-accent w-8'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


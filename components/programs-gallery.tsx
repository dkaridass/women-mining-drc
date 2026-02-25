'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { X, ExternalLink, Download } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const programs = [
  {
    id: 1,
    title: 'Formation Technique',
    description: 'Programmes de formation spécialisés en techniques minières, sécurité, et utilisation d\'équipements modernes.',
    image: '/attached_assets/atelier1.jpeg',
    link: '/programmes/formation-technique',
    color: 'blue',
  },
  {
    id: 2,
    title: 'Leadership',
    description: 'Développement des compétences en leadership pour permettre aux femmes d\'occuper des postes de responsabilité.',
    image: '/attached_assets/women-mining-leadership.jpg',
    link: '/programmes/leadership',
    color: 'green',
  },
  {
    id: 3,
    title: 'Entrepreneuriat',
    description: 'Accompagnement dans la création et la gestion de coopératives et d\'entreprises minières dirigées par des femmes.',
    image: '/attached_assets/festival1.jpeg',
    link: '/programmes/entrepreneuriat',
    color: 'purple',
  },
  {
    id: 4,
    title: 'Plaidoyer',
    description: 'Influence sur les politiques publiques pour créer un environnement plus favorable aux femmes dans le secteur minier.',
    image: '/attached_assets/galerie/wim-2024/jourI2.jpg',
    link: '#plaidoyer',
    color: 'orange',
  },
  {
    id: 5,
    title: 'Réseautage',
    description: 'Création de réseaux professionnels solides pour faciliter les échanges et les opportunités de collaboration.',
    image: '/attached_assets/galerie/wim-2024/jourDeux1.jpg',
    link: '#contact',
    color: 'pink',
  },
  {
    id: 6,
    title: 'Éducation Financière',
    description: 'Formation sur la gestion budgétaire, l\'épargne, l\'investissement et l\'accès au crédit pour les femmes.',
    image: '/attached_assets/atelier3.jpeg',
    link: '#ressources',
    color: 'teal',
  },
]

const galleryImages = [
  { src: '/attached_assets/galerie/wim-2024/jourI1 2.jpg', alt: 'Cérémonie d\'ouverture' },
  { src: '/attached_assets/galerie/wim-2024/jourI9 2.jpg', alt: 'Sessions de travail' },
  { src: '/attached_assets/galerie/wim-2024/jourDeux4.jpg', alt: 'Formation technique' },
  { src: '/attached_assets/galerie/wim-2024/jourDeux5.jpg', alt: 'Travaux de groupe' },
  { src: '/attached_assets/galerie/wim-2024/jourDeux7.jpg', alt: 'Présentations' },
  { src: '/attached_assets/galerie/wim-2024/jourDeux16.jpg', alt: 'Photo de groupe' },
]

export function ProgramsGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <>
      <section
        id="programmes"
        ref={ref}
        className="py-20 bg-background-light dark:bg-gray-800"
        aria-labelledby="programs-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              id="programs-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Nos Programmes & Initiatives
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Des programmes complets conçus pour autonomiser les femmes à chaque étape
              de leur parcours dans le secteur minier.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {program.description}
                  </p>
                  <Link
                    href={program.link}
                    className="inline-flex items-center text-primary dark:text-accent font-medium hover:underline group/link"
                  >
                    En savoir plus
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="galerie"
        className="py-20 bg-white dark:bg-gray-900"
        aria-labelledby="gallery-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              id="gallery-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Galerie Photos
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez les moments forts de nos événements et programmes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative h-64">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-accent transition-colors focus:outline-none focus:ring-4 focus:ring-white/50 rounded-lg p-2"
                aria-label="Fermer"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="relative w-full h-[80vh]">
                <Image
                  src={selectedImage}
                  alt="Image agrandie"
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}


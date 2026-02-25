'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { FileText, BookOpen, Video, Download } from 'lucide-react'

const resources = [
  {
    id: 1,
    title: 'Guides Techniques',
    description: 'Manuels et guides pratiques sur les techniques d\'extraction, la sécurité minière et l\'utilisation d\'équipements.',
    icon: FileText,
    color: 'red',
    items: [
      { name: 'Guide de sécurité minière (PDF)', href: '#' },
      { name: 'Manuel d\'extraction artisanale (PDF)', href: '#' },
      { name: 'Équipements de protection (PDF)', href: '#' },
    ],
  },
  {
    id: 2,
    title: 'Études et Rapports',
    description: 'Recherches approfondies sur la situation des femmes dans le secteur minier et l\'impact de nos interventions.',
    icon: BookOpen,
    color: 'blue',
    items: [
      { name: 'Rapport d\'Activités 2020 (Haut-Katanga & Lualaba)', href: '#' },
      { name: 'Synthèse des Recommandations Post-COVID', href: '#' },
      { name: 'Rapport sur les Réglementations Minières et les Droits des Femmes', href: '#' },
    ],
  },
  {
    id: 3,
    title: 'Formations en Ligne',
    description: 'Modules de formation accessibles à distance pour développer vos compétences à votre rythme.',
    icon: Video,
    color: 'green',
    items: [
      { name: 'Module Leadership (Vidéo)', href: '#' },
      { name: 'Gestion de coopérative (Vidéo)', href: '#' },
      { name: 'Entrepreneuriat féminin (Vidéo)', href: '#' },
    ],
  },
]

export function ResourcesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="ressources"
      ref={ref}
      className="py-20 bg-background-light dark:bg-gray-800"
      aria-labelledby="resources-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="resources-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Ressources et Documentation
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Accédez à notre bibliothèque de ressources pour approfondir vos connaissances
            du secteur minier et des opportunités pour les femmes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => {
            const Icon = resource.icon
            return (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 bg-${resource.color}-100 dark:bg-${resource.color}-900/30 rounded-full flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 text-${resource.color}-600 dark:text-${resource.color}-400`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {resource.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {resource.description}
                </p>
                <div className="space-y-2">
                  {resource.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href={item.href}
                      className="flex items-center text-primary dark:text-accent hover:underline text-sm group"
                    >
                      <Download className="w-4 h-4 mr-2 group-hover:translate-y-1 transition-transform" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


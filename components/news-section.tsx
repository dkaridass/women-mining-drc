'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowRight } from 'lucide-react'

// Import news data - in production, fetch from API or CMS
const news = [
  {
    id: 7,
    title: 'Rapport 2020 : Impact de la COVID-19 sur les Femmes du Secteur Minier',
    excerpt: 'En septembre 2020, la WIM-DRC a organisé deux ateliers majeurs dans le Haut-Katanga et le Lualaba.',
    date: 'octobre 2020',
    image: '/attached_assets/atelier1.jpeg',
    slug: 'rapport-2020-impact-covid19-femmes-secteur-minier',
  },
  {
    id: 8,
    title: 'WIM-DRC : Renforcement des Partenariats Stratégiques et Leadership Africain',
    excerpt: 'Bilan des développements institutionnels majeurs de WIM-DRC entre 2021 et 2023.',
    date: 'février 2023',
    image: '/attached_assets/women-mining-leadership.jpg',
    slug: 'wim-drc-partenariats-strategiques-leadership-africain-2021-2023',
  },
  {
    id: 4,
    title: '8 Mars 2024 : Les femmes de la RDC manifestent pour la paix',
    excerpt: 'Le 8 mars 2024, Journée Internationale des Femmes, les femmes de la RDC ont organisé une manifestation pacifique.',
    date: '8 mars 2024',
    image: '/attached_assets/march8-1.jpeg',
    slug: '8-mars-2024-manifestation-paix-violences-femmes-rdc',
  },
]

export function NewsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="actualites"
      ref={ref}
      className="py-20 bg-background-light dark:bg-gray-800"
      aria-labelledby="news-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="news-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Actualités
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Restez informé de nos dernières activités, événements et réalisations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <Link href={`/news/${article.slug}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {article.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-primary dark:text-accent font-medium group-hover:underline">
                    Lire la suite
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="#actualites"
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors focus:outline-none focus:ring-4 focus:ring-primary/50"
          >
            Voir toutes les actualités
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


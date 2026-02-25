'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Calendar, Clock, MapPin, CheckCircle } from 'lucide-react'
import Image from 'next/image'

const events = [
  {
    id: 1,
    title: 'Festival Thamani, Femme de valeur (Première Édition WIM-DRC)',
    date: '2 et 3 mars 2023',
    time: '09:00',
    location: 'Kalubwe Lodge, Lubumbashi',
    description: 'Premier festival de la WIM.DRC en partenariat avec la GIZ. L\'objectif est de primer 8 organisations qui se sont distinguées dans la promotion du leadership féminin.',
    image: '/attached_assets/festival1.jpeg',
    type: 'festival',
    isPast: true,
  },
]

export function EventsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="evenements"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900"
      aria-labelledby="events-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="events-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Événements Récents
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez nos événements passés et les succès de nos programmes
            d'autonomisation des femmes dans le secteur minier.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="md:flex">
                <div className="relative md:w-1/3 h-64 md:h-auto">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.type === 'festival' ? 'Festival' : 'Événement'}
                    </div>
                    {event.isPast && (
                      <div className="flex items-center text-green-600 dark:text-green-400 text-sm">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Terminé
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  <button className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-4 focus:ring-primary/50">
                    Voir les photos
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


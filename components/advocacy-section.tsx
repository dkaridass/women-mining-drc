'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Users, Heart, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const priorities = [
  {
    number: '1',
    title: 'Égalité des Chances',
    description: 'Promouvoir l\'égalité d\'accès aux opportunités d\'emploi et de formation dans tous les niveaux de l\'industrie minière.',
  },
  {
    number: '2',
    title: 'Sécurité au Travail',
    description: 'Renforcer les normes de sécurité spécifiques aux femmes travaillant dans les sites miniers.',
  },
  {
    number: '3',
    title: 'Participation Décisionnelle',
    description: 'Augmenter la représentation des femmes dans les organes de décision des entreprises et coopératives minières.',
  },
]

const achievements = [
  {
    title: 'Plaidoyer Légal et Formation aux Droits',
    description: 'Organisation d\'un atelier ciblé sur les réglementations minières et leurs impacts sur les droits des femmes.',
  },
  {
    title: 'Partenariat Stratégique et Appui Financier',
    description: 'Obtention d\'un partenariat et d\'un appui financier de deux ans auprès du BGR, une organisation de la Coopération Allemande.',
  },
  {
    title: 'Renforcement des Capacités Économiques',
    description: 'Réalisation d\'une formation en faveur de 40 femmes sur l\'éducation financière.',
  },
  {
    title: 'Visibilité Internationale et Représentation',
    description: 'La Présidente Nationale, Me Dorothée Masele, représente désormais l\'Afrique Centrale au Conseil d\'Administration de l\'AWIMA.',
  },
]

export function AdvocacySection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="plaidoyer"
      ref={ref}
      className="py-20 bg-gradient-to-br from-primary to-accent text-white"
      aria-labelledby="advocacy-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="advocacy-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Plaidoyer et Politique
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Nous œuvrons pour influencer les politiques publiques et créer
            un environnement plus favorable aux femmes dans le secteur minier.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Priorities */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Nos Priorités de Plaidoyer</h3>
            <div className="space-y-6">
              {priorities.map((priority, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 font-bold">
                    {priority.number}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{priority.title}</h4>
                    <p className="text-white/90 leading-relaxed">{priority.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6">Réalisations Récentes</h3>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="border-l-4 border-accent pl-4"
                >
                  <h4 className="font-semibold mb-1">{achievement.title}</h4>
                  <p className="text-sm text-white/90 leading-relaxed">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Rejoignez Notre Mouvement</h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Ensemble, nous pouvons transformer le secteur minier pour qu'il soit
            plus inclusif et bénéfique pour toutes les femmes de la RDC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-colors focus:outline-none focus:ring-4 focus:ring-accent/50"
            >
              <Users className="w-5 h-5 mr-2" />
              Devenir Membre
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 font-semibold rounded-lg hover:bg-white/20 transition-colors focus:outline-none focus:ring-4 focus:ring-white/50"
            >
              <Heart className="w-5 h-5 mr-2" />
              Soutenir Nos Actions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


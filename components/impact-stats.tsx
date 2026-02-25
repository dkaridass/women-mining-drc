'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface Stat {
  emoji: string
  value: string
  label: string
  suffix?: string
}

const stats: Stat[] = [
  { emoji: '👷‍♀️', value: '440', label: 'Femmes autonomisées', suffix: '+' },
  { emoji: '📈', value: '9', label: 'Programmes actifs' },
  { emoji: '🏆', value: '2024', label: 'Conférence' },
  { emoji: '🌟', value: '50', label: 'Leaders', suffix: '+' },
]

function AnimatedCounter({ value, suffix, duration = 2000 }: { value: string; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0
  const isYear = /^\d{4}$/.test(value)

  useEffect(() => {
    if (isYear) {
      setCount(numericValue)
      return
    }

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * numericValue))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [numericValue, duration, isYear])

  return (
    <span>
      {isYear ? value : count.toLocaleString()}
      {suffix && !isYear && suffix}
    </span>
  )
}

export function ImpactStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section 
      id="impact" 
      className="py-20 bg-gradient-to-br from-[#F5F5F5] to-white dark:from-gray-800 dark:to-gray-900"
      aria-labelledby="impact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 
            id="impact-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4"
          >
            Notre Impact
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Des résultats mesurables qui transforment la vie des femmes du secteur minier
          </p>
        </motion.div>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-[#DAA520]/30"
              role="article"
              aria-label={`${stat.label}: ${stat.value}${stat.suffix || ''}`}
            >
              <div className="text-6xl mb-4" role="img" aria-hidden="true">
                {stat.emoji}
              </div>
              <div className="text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-[#DAA520] via-[#DAA520]/90 to-[#DAA520] bg-clip-text text-transparent mb-2">
                {isInView ? (
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                ) : (
                  <span>0{stat.suffix || ''}</span>
                )}
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-bold text-lg">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

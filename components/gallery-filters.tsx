'use client'

import { motion } from 'framer-motion'
import type { Gallery } from '@/app/data/galleries'
import { categoryLabels } from '@/app/data/galleries'

interface GalleryFiltersProps {
  selectedCategory: Gallery['category'] | 'all'
  onCategoryChange: (category: Gallery['category'] | 'all') => void
}

export function GalleryFilters({ selectedCategory, onCategoryChange }: GalleryFiltersProps) {
  const categories: Array<{ value: Gallery['category'] | 'all'; label: string }> = [
    { value: 'all', label: 'Tous' },
    { value: 'conference', label: categoryLabels.conference },
    { value: 'atelier', label: categoryLabels.atelier },
    { value: 'festival', label: categoryLabels.festival },
    { value: 'march8', label: categoryLabels.march8 },
    { value: 'recent', label: categoryLabels.recent },
    { value: 'evenement', label: categoryLabels.evenement },
    { value: 'whatsapp', label: categoryLabels.whatsapp },
  ]

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
      {categories.map((category) => (
        <motion.button
          key={category.value}
          onClick={() => onCategoryChange(category.value)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
            selectedCategory === category.value
              ? 'bg-[#DAA520] text-[#8B4513] shadow-lg'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
          }`}
        >
          {category.label}
        </motion.button>
      ))}
    </div>
  )
}


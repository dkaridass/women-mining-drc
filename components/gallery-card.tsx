'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Calendar, MapPin, Images } from 'lucide-react'
import type { Gallery } from '@/app/data/galleries'

interface GalleryCardProps {
  gallery: Gallery
  onClick: () => void
  index: number
}

export function GalleryCard({ gallery, onClick, index }: GalleryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="bg-white dark:bg-gray-800 rounded-[2rem] overflow-hidden shadow-soft hover:shadow-premium transition-all duration-500 ease-out border border-transparent dark:border-gray-700 relative">
        {/* Cover Image - Portrait/Cinematic Ratio */}
        <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 dark:bg-gray-900">
          <Image
            src={gallery.coverImage.src}
            alt={gallery.coverImage.alt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading={index < 3 ? 'eager' : 'lazy'} // Eager load top items
            unoptimized // Assuming external or local mixed assets for now
            onError={(e) => {
              const target = e.target as HTMLImageElement
              if (gallery.coverImage.fallback && !target.src.includes(gallery.coverImage.fallback)) {
                target.src = gallery.coverImage.fallback
              }
            }}
          />

          {/* Gentle Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

          {/* Image Count - Minimalist Badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-primary px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-sm flex items-center gap-1.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <Images className="w-3 h-3" />
            <span>{gallery.images.length}</span>
          </div>
        </div>

        {/* Content - Clean & Editorial */}
        <div className="p-8 relative">
          <div className="mb-4">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-wider text-accent uppercase mb-2">
              <span>{gallery.date}</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-primary dark:text-white leading-tight group-hover:text-accent transition-colors duration-300">
              {gallery.title}
            </h3>
          </div>

          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-2 mb-6">
            {gallery.description}
          </p>

          {/* Footer Meta */}
          <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-4 mt-auto">
            {gallery.location ? (
              <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                <MapPin className="w-3.5 h-3.5" />
                <span>{gallery.location}</span>
              </div>
            ) : <div />}

            <span className="text-xs font-bold text-primary dark:text-white group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1">
              Voir l'album <span className="text-accent">→</span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}


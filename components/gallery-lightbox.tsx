'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect, useCallback } from 'react'
import type { Gallery, GalleryImage } from '@/app/data/galleries'

interface GalleryLightboxProps {
  gallery: Gallery | null
  initialIndex?: number
  onClose: () => void
}

export function GalleryLightbox({ gallery, initialIndex = 0, onClose }: GalleryLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [imageError, setImageError] = useState<Record<number, boolean>>({})

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  const goToPrevious = useCallback(() => {
    if (!gallery) return
    setCurrentIndex((prev) => (prev === 0 ? gallery.images.length - 1 : prev - 1))
    setImageError({})
  }, [gallery])

  const goToNext = useCallback(() => {
    if (!gallery) return
    setCurrentIndex((prev) => (prev === gallery.images.length - 1 ? 0 : prev + 1))
    setImageError({})
  }, [gallery])

  useEffect(() => {
    if (!gallery) return
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [gallery, onClose, goToPrevious, goToNext])

  if (!gallery) return null

  const currentImage = gallery.images[currentIndex]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-[#DAA520] transition-colors p-2 rounded-full hover:bg-white/10"
          aria-label="Fermer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Navigation Buttons */}
        {gallery.images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-[#DAA520] transition-colors p-3 rounded-full hover:bg-white/10"
              aria-label="Image précédente"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-[#DAA520] transition-colors p-3 rounded-full hover:bg-white/10"
              aria-label="Image suivante"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </>
        )}

        {/* Image Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative max-w-6xl max-h-[90vh] w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full h-[85vh] bg-black/50 rounded-lg overflow-hidden">
            {!imageError[currentIndex] ? (
              <Image
                key={currentIndex}
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                className="object-contain"
                sizes="90vw"
                unoptimized
                onError={() => {
                  setImageError((prev) => ({ ...prev, [currentIndex]: true }))
                  if (currentImage.fallback) {
                    const img = new window.Image()
                    img.src = currentImage.fallback
                  }
                }}
                priority
              />
            ) : currentImage.fallback ? (
              <Image
                key={`fallback-${currentIndex}`}
                src={currentImage.fallback}
                alt={currentImage.alt}
                fill
                className="object-contain"
                sizes="90vw"
                unoptimized
                priority
              />
            ) : (
              <div className="flex items-center justify-center h-full text-white">
                <p>Image non disponible</p>
              </div>
            )}
          </div>

          {/* Image Info */}
          <div className="mt-4 text-center text-white">
            <p className="text-lg font-semibold">{currentImage.label}</p>
            <p className="text-sm text-gray-400 mt-1">
              {currentIndex + 1} / {gallery.images.length} • {gallery.title}
            </p>
          </div>
        </motion.div>

        {/* Thumbnail Strip (Desktop) */}
        {gallery.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 max-w-4xl w-full px-4 hidden md:block">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {gallery.images.slice(0, 20).map((img, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentIndex(idx)
                    setImageError({})
                  }}
                  className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    currentIndex === idx
                      ? 'border-[#DAA520] scale-110'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="80px"
                    unoptimized
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}


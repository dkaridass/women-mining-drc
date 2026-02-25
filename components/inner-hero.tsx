'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface InnerHeroProps {
    title: string
    subtitle?: string
    backgroundImage: string
    breadcrumbs?: {
        label: string
        href: string
    }[]
}

export function InnerHero({ title, subtitle, backgroundImage, breadcrumbs }: InnerHeroProps) {
    return (
        <section className="relative h-[65vh] min-h-[550px] flex items-center justify-center overflow-hidden">
            {/* Background with fixed attachment for premium parallax feel */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transform scale-105"
                style={{ backgroundImage: `url('${backgroundImage}')` }}
            >
                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B253A]/90 via-[#0B253A]/70 to-[#0B253A]/60 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Breadcrumbs */}
                    {breadcrumbs && (
                        <div className="flex items-center justify-center space-x-3 text-xs font-bold tracking-[0.2em] uppercase text-gray-300 mb-8">
                            <Link href="/" className="hover:text-accent transition-colors duration-300">Accueil</Link>
                            {breadcrumbs.map((crumb, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <ChevronRight className="w-3 h-3 text-accent" />
                                    <Link
                                        href={crumb.href}
                                        className={`${index === breadcrumbs.length - 1 ? 'text-accent' : 'hover:text-accent transition-colors duration-300'}`}
                                    >
                                        {crumb.label}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}

                    <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-8 tracking-tight drop-shadow-2xl">
                        {title}
                    </h1>

                    {subtitle && (
                        <div className="relative">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-accent/50 rounded-full" />
                            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
                                {subtitle}
                            </p>
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Architectural Detail: Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent z-20" />
        </section>
    )
}

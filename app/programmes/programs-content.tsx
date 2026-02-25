'use client'

import { InnerHero } from '@/components/inner-hero'
import { programs } from '@/app/data/programs'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function ProgramsContent() {
    return (
        <main className="bg-white dark:bg-gray-900">
            <InnerHero
                title="Nos Programmes"
                subtitle="Des initiatives concrètes pour renforcer les capacités et le leadership des femmes."
                backgroundImage="/attached_assets/hero-bg-2.jpg"
                breadcrumbs={[{ label: 'Programmes', href: '/programmes' }]}
            />

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
                    {programs.map((program, index) => (
                        <motion.div
                            key={program.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="absolute inset-0 bg-accent/20 translate-x-4 translate-y-4 rounded-3xl" />
                                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-premium">
                                    <Image
                                        src={program.image}
                                        alt={program.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <div className="inline-flex items-center space-x-2 border border-accent/30 bg-accent/5 px-4 py-1.5 rounded-full">
                                    <span className="text-accent text-sm font-bold tracking-wide uppercase">Programme 0{index + 1}</span>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-display font-bold text-primary dark:text-white">
                                    {program.title}
                                </h2>

                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {program.description}
                                </p>

                                <div className="space-y-4 pt-4">
                                    {['Formation certifiante', 'Mentorat personnalisé', 'Accès au réseau'].map((feat, i) => (
                                        <div key={i} className="flex items-center text-gray-700 dark:text-gray-200">
                                            <CheckCircle className="w-5 h-5 text-accent mr-3" />
                                            {feat}
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-8">
                                    <Link
                                        href={`/programmes/${program.id}`}
                                        className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                                    >
                                        {program.cta}
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="py-24 bg-primary text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Soutenir nos Programmes</h2>
                    <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                        Devenez partenaire et contribuez directement à l'autonomisation des femmes dans le secteur minier.
                    </p>
                    <Link href="/contact" className="px-10 py-5 bg-accent text-primary font-bold rounded-lg hover:bg-white transition-colors">
                        Devenir Partenaire
                    </Link>
                </div>
            </section>
        </main>
    )
}

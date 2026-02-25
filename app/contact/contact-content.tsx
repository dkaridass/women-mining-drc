'use client'

import { InnerHero } from '@/components/inner-hero'
import { MapEmbed } from '@/components/map-embed'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

export default function ContactContent() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async (data: any) => {
        setIsSubmitting(true)
        console.log(data)
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsSubmitting(false)
        setSubmitSuccess(true)
        reset()
    }

    return (
        <main className="bg-white dark:bg-gray-900">
            <InnerHero
                title="Contactez-nous"
                subtitle="Une question ? Un projet de partenariat ? Notre équipe est à votre écoute."
                backgroundImage="/attached_assets/hero-bg-2.jpg"
                breadcrumbs={[{ label: 'Contact', href: '/contact' }]}
            />

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div>
                                <h2 className="text-3xl font-display font-bold text-primary dark:text-white mb-6">Nos Coordonnées</h2>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                    N'hésitez pas à nous contacter pour toute demande d'information, d'adhésion ou de partenariat.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start space-x-6">
                                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent flex-shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-primary dark:text-white mb-1">Siège Social</h3>
                                        <p className="text-gray-600 dark:text-gray-400">avenue Biayi, coin de l'église<br />Lubumbashi, Haut-Katanga, RDC</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent flex-shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-primary dark:text-white mb-1">Téléphone</h3>
                                        <p className="text-gray-600 dark:text-gray-400">+243 991 900 624</p>
                                        <p className="text-sm text-gray-500 mt-1">Lundi - Vendredi, 8h - 17h</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent flex-shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-primary dark:text-white mb-1">Email</h3>
                                        <a href="mailto:contact@wim-drc.com" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
                                            contact@wim-drc.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Map Component */}
                            <div className="h-80 bg-gray-100 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-soft">
                                <MapEmbed />
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-background-light dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-soft border border-gray-100 dark:border-gray-700"
                        >
                            <h3 className="text-2xl font-bold text-primary dark:text-white mb-8">Envoyez un message</h3>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nom complet</label>
                                        <input {...register('name')} type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="Votre nom" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                        <input {...register('email')} type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="votre@email.com" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sujet</label>
                                    <select {...register('subject')} className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all">
                                        <option value="info">Demande d'information</option>
                                        <option value="partnership">Proposition de partenariat</option>
                                        <option value="press">Presse & Média</option>
                                        <option value="other">Autre</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                                    <textarea {...register('message')} rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none" placeholder="Comment pouvons-nous vous aider ?" />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <span>Envoi en cours...</span>
                                    ) : (
                                        <>
                                            <span>Envoyer le message</span>
                                            <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </button>

                                {submitSuccess && (
                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-green-50 text-green-700 rounded-lg text-center font-medium">
                                        Merci ! Votre message a bien été envoyé.
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    )
}

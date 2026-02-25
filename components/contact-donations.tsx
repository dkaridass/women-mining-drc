'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Send, Heart, CreditCard } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  subject: z.string().min(5, 'Le sujet doit contenir au moins 5 caractères'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactDonations() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    // Simulate API call - replace with actual backend integration
    console.log('Form submitted:', data)
    
    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setSubmitSuccess(true)
    reset()
    
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-primary text-white"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Contactez-nous
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Prêt à rejoindre notre mission ? Contactez-nous dès aujourd'hui.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Adresse</p>
                    <p className="text-white/80">Biayi, coin de l'église, Lubumbashi, RDC</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:contact@wim-drc.com"
                      className="text-white/80 hover:text-accent transition-colors"
                    >
                      contact@wim-drc.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Téléphone</p>
                    <a
                      href="tel:+243991900624"
                      className="text-white/80 hover:text-accent transition-colors"
                    >
                      +243 991 900 624
                    </a>
                    <br />
                    <a
                      href="tel:+243991900625"
                      className="text-white/80 hover:text-accent transition-colors"
                    >
                      +243 991 900 625
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Donation Section */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-bold">Faire un don</h3>
              </div>
              <p className="text-white/80 mb-6">
                Votre soutien nous permet de continuer à autonomiser les femmes dans le secteur minier.
              </p>
              <div className="space-y-3">
                <button
                  className="w-full flex items-center justify-center space-x-2 bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors focus:outline-none focus:ring-4 focus:ring-accent/50"
                  aria-label="Faire un don via Stripe"
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Donner via Stripe</span>
                </button>
                <button
                  className="w-full flex items-center justify-center space-x-2 bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors focus:outline-none focus:ring-4 focus:ring-white/50"
                  aria-label="Faire un don via PayPal"
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Donner via PayPal</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom complet
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Votre nom"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-accent" role="alert">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="votre@email.com"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-accent" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Sujet
                </label>
                <input
                  {...register('subject')}
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Sujet de votre message"
                  aria-invalid={errors.subject ? 'true' : 'false'}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1 text-sm text-accent" role="alert">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Votre message"
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-accent" role="alert">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {submitSuccess && (
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-green-200" role="alert">
                  Message envoyé avec succès ! Nous vous répondrons bientôt.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-accent/50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Envoyer le message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    quick: [
      { href: '#accueil', label: 'Accueil' },
      { href: '#a-propos', label: 'À propos' },
      { href: '#programmes', label: 'Programmes' },
      { href: '#actualites', label: 'Actualités' },
      { href: '#contact', label: 'Contact' },
    ],
    programs: [
      { href: '#formation-technique', label: 'Formation Technique' },
      { href: '#leadership', label: 'Leadership' },
      { href: '#entrepreneuriat', label: 'Entrepreneuriat' },
      { href: '#plaidoyer', label: 'Plaidoyer' },
    ],
    resources: [
      { href: '#guides', label: 'Guides Techniques' },
      { href: '#rapports', label: 'Études et Rapports' },
      { href: '#formations', label: 'Formations en Ligne' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description - Official WIM DRC Branding */}
          <div className="space-y-4">
            <Link
              href="#accueil"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('accueil')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="flex flex-col items-center md:items-start focus:outline-none focus:ring-2 focus:ring-accent rounded-lg p-2 group"
              aria-label="Retour à l'accueil - Women in Mining DRC"
            >
              <Image
                src="/images/logo/wimdrc-logo.png"
                alt="Women in Mining DRC Logo"
                width={200}
                height={62}
                className="h-12 md:h-16 w-auto object-contain mb-3 group-hover:opacity-90 transition-opacity duration-300"
                unoptimized
              />
              <p className="text-sm text-gray-400 text-center md:text-left font-medium">
                Women in Mining DRC
              </p>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed text-center md:text-left">
              Autonomiser les femmes dans le secteur minier pour un développement
              durable et inclusif en République Démocratique du Congo.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://www.facebook.com/wimdrc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded-lg p-2"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/wim-drc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded-lg p-2"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@wim-drc.com"
                className="text-gray-400 hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded-lg p-2"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              {footerLinks.quick.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-accent rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programmes</h4>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-accent rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Restez informé de nos dernières actualités et événements.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                console.log('Newsletter subscription')
              }}
              className="space-y-3"
            >
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
                required
                aria-label="Email pour la newsletter"
              />
              <button
                type="submit"
                className="w-full bg-accent text-primary px-4 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors focus:outline-none focus:ring-4 focus:ring-accent/50"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Women in Mining DRC. Tous droits réservés.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 flex items-center space-x-2 text-gray-400 hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded-lg p-2"
            aria-label="Retour en haut"
          >
            <span className="text-sm">Retour en haut</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}

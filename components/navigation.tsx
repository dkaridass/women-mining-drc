'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon, ChevronDown, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/a-propos', label: 'À propos' },
    {
      href: '/programmes',
      label: 'Programmes',
      submenu: [
        { href: '/programmes#technique', label: 'Formation Technique' },
        { href: '/programmes#leadership', label: 'Leadership' },
        { href: '/programmes#entrepreneuriat', label: 'Entrepreneuriat' },
      ],
    },
    { href: '/#actualites', label: 'Actualités' },
    { href: '/#evenements', label: 'Événements' },
    {
      href: '/#ressources',
      label: 'Ressources',
      submenu: [
        { href: '/ressources#guides', label: 'Guides Techniques' },
        { href: '/ressources#rapports', label: 'Études et Rapports' },
        { href: '/ressources#formations', label: 'Formations en Ligne' },
      ],
    },
    { href: '/#plaidoyer', label: 'Plaidoyer' },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
    setActiveDropdown(null)
  }

  if (!mounted) {
    return null
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
        ? 'bg-white/90 dark:bg-[#0B253A]/90 backdrop-blur-xl shadow-lg py-2 border-b border-gray-100 dark:border-white/5'
        : 'bg-transparent py-6'
        }`}
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center focus:outline-none group relative z-50"
            aria-label="Retour à l'accueil"
          >
            <div className="relative">
              {/* Glow effect on logo hover */}
              <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src="/images/logo/wimdrc-logo-transparent.png"
                alt="Women in Mining DRC Logo"
                width={240}
                height={75}
                className="h-14 md:h-20 w-auto object-contain relative z-10 transition-transform duration-500 group-hover:scale-105"
                priority
                unoptimized
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group px-1">
                {link.submenu ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.href)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`
                        px-4 py-2 text-sm font-display font-bold tracking-widest uppercase transition-all duration-300 flex items-center space-x-1 rounded-full
                        ${isScrolled
                          ? 'text-primary dark:text-gray-100 hover:text-accent dark:hover:text-accent'
                          : 'text-primary dark:text-white hover:text-accent dark:hover:text-accent'
                        }
                      `}
                      aria-expanded={activeDropdown === link.href}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === link.href ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === link.href && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white/95 dark:bg-[#0B253A]/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-100 dark:border-white/10 py-3 overflow-hidden"
                        >
                          {link.submenu.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-accent/10 hover:text-primary dark:hover:text-white hover:pl-8 transition-all duration-300"
                              onClick={handleLinkClick}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`
                        px-4 py-2 text-sm font-display font-bold tracking-widest uppercase transition-all duration-300 rounded-full relative overflow-hidden group/link
                        ${isScrolled
                        ? 'text-primary dark:text-gray-100 hover:text-accent'
                        : 'text-primary dark:text-white hover:text-accent'
                      }
                    `}
                    onClick={handleLinkClick}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {/* Hover Link Underline/Indicator */}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent group-hover/link:w-1/2 group-hover/link:left-1/4 transition-all duration-300" />
                  </Link>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <div className="pl-4 ml-4 border-l border-gray-200 dark:border-white/10">
              <Link
                href="/contact"
                className="flex items-center space-x-2 bg-accent hover:bg-white text-primary font-display font-bold text-sm tracking-wider uppercase px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
              >
                <span>Faire un Don</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Theme & Mobile Menu */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-full bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-accent/20 hover:text-accent transition-all"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-full bg-primary text-white hover:bg-primary/90 transition-all"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Theme Toggle Desktop */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hidden lg:flex ml-4 p-2.5 rounded-full bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-accent/20 hover:text-accent transition-all"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed inset-0 top-0 bg-white dark:bg-primary z-40 overflow-y-auto pt-24 px-6"
          >
            {/* Mobile links would go here with large typography */}
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.href} className="border-b border-gray-100 dark:border-white/5 pb-4">
                  {/* ... simplified mobile logic for brevity in this specific replacement, keeping core functionality ... */}
                  <Link href={link.href} onClick={handleLinkClick} className="text-2xl font-display font-bold text-primary dark:text-white">
                    {link.label}
                  </Link>
                  {link.submenu && (
                    <div className="mt-2 pl-4 space-y-2 border-l-2 border-accent/20">
                      {link.submenu.map(sub => (
                        <Link key={sub.href} href={sub.href} onClick={handleLinkClick} className="block text-gray-500 dark:text-gray-400 font-medium">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/contact" onClick={handleLinkClick} className="w-full bg-accent text-primary font-bold text-center py-4 rounded-xl mt-8">
                Faire un Don / Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}


import { Helmet } from 'react-helmet-async';
import Navigation from '../components/navigation';
import HeroSection from '../components/hero-section';
import NewsSection from '../components/news-section';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Women in Mining DRC - Autonomiser les femmes dans le secteur minier</title>
        <meta name="description" content="Women in Mining DRC (WIM.DRC) œuvre pour l'autonomisation des femmes dans le secteur minier de la République Démocratique du Congo." />
        <meta property="og:title" content="Women in Mining DRC" />
        <meta property="og:description" content="Autonomiser les femmes dans le secteur minier de la RDC" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/attached_assets/wimdrc-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Women in Mining DRC" />
        <meta name="twitter:description" content="Autonomiser les femmes dans le secteur minier de la RDC" />
        <meta name="twitter:image" content="/attached_assets/wimdrc-logo.png" />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        <HeroSection />
        
        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                À propos de WIM DRC
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Women in Mining DRC est une organisation dédiée à l'autonomisation des femmes 
                dans le secteur minier de la République Démocratique du Congo.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Notre Mission</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Nous œuvrons pour créer un environnement inclusif où les femmes peuvent 
                  pleinement participer et prospérer dans tous les aspects de l'industrie minière, 
                  depuis l'extraction jusqu'à la gouvernance.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Notre approche holistique combine formation technique, développement du leadership, 
                  plaidoyer politique et création de réseaux professionnels pour maximiser l'impact 
                  de nos interventions.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">2018</div>
                    <div className="text-sm text-gray-600">Année de création</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">1000+</div>
                    <div className="text-sm text-gray-600">Bénéficiaires directes</div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="/attached_assets/women-mining-leadership.jpg"
                  alt="Leadership féminin dans le secteur minier"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Leadership Team */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Notre Équipe de Direction
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300">
                <img
                  src="/attached_assets/dorothee-masele.jpg"
                  alt="Dorothée Masele"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Dorothée Masele</h4>
                <p className="text-blue-600 font-medium mb-3">Présidente</p>
                <p className="text-gray-600 text-sm">
                  Leader visionnaire avec plus de 15 ans d'expérience dans le secteur minier 
                  et le développement communautaire.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300">
                <img
                  src="/attached_assets/florence-kamfwa-mwema.jpg"
                  alt="Florence Kamfwa Mwema"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Florence Kamfwa Mwema</h4>
                <p className="text-blue-600 font-medium mb-3">Vice-présidente - Administration et Finance</p>
                <p className="text-gray-600 text-sm">
                  Experte en gestion financière et administrative avec une solide expérience 
                  dans le développement organisationnel.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300">
                <img
                  src="/attached_assets/alphonsine.jpg"
                  alt="Alphonsine"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Alphonsine</h4>
                <p className="text-blue-600 font-medium mb-3">Coordinatrice des Programmes</p>
                <p className="text-gray-600 text-sm">
                  Spécialiste en développement de programmes avec une expertise en formation 
                  technique et accompagnement des communautés.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section Preview */}
        <section id="programs" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Nos Programmes & Initiatives
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des programmes complets conçus pour autonomiser les femmes à chaque étape 
                de leur parcours dans le secteur minier.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Formation Technique</h3>
                <p className="text-gray-600 mb-6">
                  Programmes de formation spécialisés en techniques minières, sécurité, 
                  et utilisation d'équipements modernes.
                </p>
                <button className="text-blue-600 font-medium hover:text-blue-800">
                  En savoir plus →
                </button>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Leadership</h3>
                <p className="text-gray-600 mb-6">
                  Développement des compétences en leadership pour permettre aux femmes 
                  d'occuper des postes de responsabilité.
                </p>
                <button className="text-green-600 font-medium hover:text-green-800">
                  En savoir plus →
                </button>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Entrepreneuriat</h3>
                <p className="text-gray-600 mb-6">
                  Accompagnement dans la création et la gestion de coopératives 
                  et d'entreprises minières dirigées par des femmes.
                </p>
                <button className="text-purple-600 font-medium hover:text-purple-800">
                  En savoir plus →
                </button>
              </div>
            </div>
          </div>
        </section>

        <NewsSection />

        {/* Contact Preview */}
        <section id="contact" className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Contactez-nous</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Prêt à rejoindre notre mission ? Contactez-nous dès aujourd'hui.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-blue-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Biayi, coin de l'église, Lubumbashi, RDC</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-blue-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>contact@wim-drc.com</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-blue-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+243 XXX XXX XXX</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Votre email"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Votre message"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <img
                    src="/attached_assets/wimdrc-logo.png"
                    alt="WIM DRC Logo"
                    className="h-8 w-auto mr-3"
                  />
                  <span className="text-xl font-bold">WIM DRC</span>
                </div>
                <p className="text-gray-400">
                  Autonomiser les femmes dans le secteur minier pour un développement 
                  durable et inclusif en République Démocratique du Congo.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#about" className="hover:text-white transition-colors">À propos</a></li>
                  <li><a href="#programs" className="hover:text-white transition-colors">Programmes</a></li>
                  <li><a href="#news" className="hover:text-white transition-colors">Actualités</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Women in Mining DRC. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

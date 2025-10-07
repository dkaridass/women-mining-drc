import { Group, BookOpen, MapPin, Network } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image Background */}
      <div className="absolute inset-0 z-0">
        {/* Background image of women miners in safety equipment */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/attached_assets/femmes-mineures-casques.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>

        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in">
          <div className="flex justify-center items-center mb-6">
            <Group className="w-8 h-8 mr-3 text-yellow-400" />
            <h1 className="text-4xl md:text-6xl font-bold">
              Women in Mining DRC
            </h1>
            <Network className="w-8 h-8 ml-3 text-yellow-400" />
          </div>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Autonomiser les femmes dans le secteur minier de la République Démocratique du Congo
            pour un développement durable et inclusif
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="btn-mining text-lg px-10 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 animate-bounce shadow-2xl">
              <Group className="w-5 h-5 inline mr-2" />
              S'engager avec nous
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <BookOpen className="w-5 h-5 inline mr-2" />
              Découvrir nos programmes
            </button>
          </div>

          {/* Enhanced Statistics Cards with Icons - Responsive */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
            <div className="bg-white/15 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-8 text-center card-hover shadow-2xl border border-white/20">
              <Group className="w-8 md:w-12 h-8 md:h-12 mx-auto mb-2 md:mb-4 text-yellow-400 animate-float" />
              <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 text-yellow-400 animate-counter">1000+</div>
              <div className="text-sm md:text-lg font-medium">Femmes autonomisées</div>
              <div className="text-xs md:text-sm text-white/80 mt-1 md:mt-2">Depuis 2018</div>
            </div>
            <div className="bg-white/15 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-8 text-center card-hover shadow-2xl border border-white/20">
              <BookOpen className="w-8 md:w-12 h-8 md:h-12 mx-auto mb-2 md:mb-4 text-blue-400 animate-float" style={{animationDelay: '0.5s'}} />
              <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 text-blue-400 animate-counter" style={{animationDelay: '0.2s'}}>25</div>
              <div className="text-sm md:text-lg font-medium">Programmes actifs</div>
              <div className="text-xs md:text-sm text-white/80 mt-1 md:mt-2">Formation & Leadership</div>
            </div>
            <div className="bg-white/15 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-8 text-center card-hover shadow-2xl border border-white/20">
              <MapPin className="w-8 md:w-12 h-8 md:h-12 mx-auto mb-2 md:mb-4 text-green-400 animate-float" style={{animationDelay: '1s'}} />
              <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 text-green-400 animate-counter" style={{animationDelay: '0.4s'}}>12</div>
              <div className="text-sm md:text-lg font-medium">Provinces couvertes</div>
              <div className="text-xs md:text-sm text-white/80 mt-1 md:mt-2">Présence nationale</div>
            </div>
            <div className="bg-white/15 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-8 text-center card-hover shadow-2xl border border-white/20">
              <Network className="w-8 md:w-12 h-8 md:h-12 mx-auto mb-2 md:mb-4 text-purple-400 animate-float" style={{animationDelay: '1.5s'}} />
              <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 text-purple-400 animate-counter" style={{animationDelay: '0.6s'}}>5</div>
              <div className="text-sm md:text-lg font-medium">Partenariats internationaux</div>
              <div className="text-xs md:text-sm text-white/80 mt-1 md:mt-2">Réseau WIM Global</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

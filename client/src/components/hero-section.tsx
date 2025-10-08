import { Group, BookOpen, MapPin, Network } from 'lucide-react';
import { useState, useEffect } from 'react';
import AnimatedStats from './animated-stats';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/attached_assets/ femmes-mineures-casques.png"
          alt="WIM DRC Conference"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ 
            minHeight: '100vh',
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '0.5s'}}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in">
          {/* Enhanced Title with Typewriter Effect */}
          <div className="flex justify-center items-center mb-6">
            <Group className="w-8 h-8 mr-3 text-yellow-400 animate-float" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent animate-typewriter">
              Women in Mining DRC
            </h1>
            <Network className="w-8 h-8 ml-3 text-yellow-400 animate-float" style={{animationDelay: '0.5s'}} />
          </div>
          
          {/* Enhanced Mission Text */}
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.5s'}}>
            Autonomiser les femmes dans le secteur minier de la République Démocratique du Congo
            pour un développement durable et inclusif
          </p>

          {/* Enhanced CTA Buttons with Glassmorphism */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up" style={{animationDelay: '1s'}}>
            <button className="group relative px-10 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center text-white">
                <Group className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                S'engager avec nous
              </div>
            </button>
            <button className="group relative px-10 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-2xl backdrop-blur-md bg-white/20 border-2 border-white/30 hover:bg-white/30">
              <div className="relative flex items-center justify-center text-white">
                <BookOpen className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Découvrir nos programmes
              </div>
            </button>
          </div>

          {/* Enhanced Statistics Cards with Animated Counters */}
          <AnimatedStats />
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

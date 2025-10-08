import { Group, BookOpen, MapPin, Network } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface AnimatedStatProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  subtitle: string;
  color: string;
  delay?: number;
}

function AnimatedStat({ icon, value, suffix = '', label, subtitle, color, delay = 0 }: AnimatedStatProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const increment = value / 50;
        const timer2 = setInterval(() => {
          setCount(prev => {
            if (prev >= value) {
              clearInterval(timer2);
              return value;
            }
            return Math.min(prev + increment, value);
          });
        }, 30);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, value, delay]);

  return (
    <div 
      ref={ref}
      className="group bg-white/15 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-8 text-center card-hover shadow-2xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-3xl"
    >
      <div className={`w-8 md:w-12 h-8 md:h-12 mx-auto mb-2 md:mb-4 ${color} animate-float group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <div className={`text-2xl md:text-4xl font-bold mb-1 md:mb-2 ${color} animate-counter group-hover:scale-110 transition-transform duration-300`}>
        {Math.floor(count)}{suffix}
      </div>
      <div className="text-sm md:text-lg font-medium group-hover:text-white transition-colors duration-300">
        {label}
      </div>
      <div className="text-xs md:text-sm text-white/80 mt-1 md:mt-2 group-hover:text-white/90 transition-colors duration-300">
        {subtitle}
      </div>
    </div>
  );
}

export default function AnimatedStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
      <AnimatedStat
        icon={<Group className="w-full h-full" />}
        value={1000}
        suffix="+"
        label="Femmes autonomisées"
        subtitle="Depuis 2019"
        color="text-yellow-400"
        delay={0}
      />
      <AnimatedStat
        icon={<BookOpen className="w-full h-full" />}
        value={25}
        label="Programmes actifs"
        subtitle="Formation & Leadership"
        color="text-blue-400"
        delay={200}
      />
      <AnimatedStat
        icon={<MapPin className="w-full h-full" />}
        value={12}
        label="Provinces couvertes"
        subtitle="Présence nationale"
        color="text-green-400"
        delay={400}
      />
      <AnimatedStat
        icon={<Network className="w-full h-full" />}
        value={5}
        label="Partenariats internationaux"
        subtitle="Réseau WIM Global"
        color="text-purple-400"
        delay={600}
      />
    </div>
  );
}

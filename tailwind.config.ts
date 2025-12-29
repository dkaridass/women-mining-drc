import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B4513',
          50: '#F5E6D3',
          100: '#E8D0B3',
          200: '#D4A373',
          300: '#C08553',
          400: '#A66B3A',
          500: '#8B4513',
          600: '#6B3410',
          700: '#4D250C',
          800: '#2E1607',
          900: '#1A0D04',
        },
        accent: {
          DEFAULT: '#DAA520',
          50: '#F9F5E8',
          100: '#F2E8C4',
          200: '#E6D28A',
          300: '#DAA520',
          400: '#B88A1A',
          500: '#966F15',
          600: '#745410',
          700: '#52390B',
          800: '#301E07',
          900: '#1A1004',
        },
        background: {
          DEFAULT: '#FFFFFF',
          light: '#F5F5F5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['4rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['3rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['2rem', { lineHeight: '1.4', fontWeight: '600' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config

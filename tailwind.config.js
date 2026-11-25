/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gov: {
          green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
            dark: '#0e3a20', // deep forest green
          },
          saffron: {
            50: '#fff7ed',
            100: '#ffedd5',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            light: '#ff9933', // national saffron
            dark: '#cc5500',
          },
          blue: {
            50: '#f0f7ff',
            100: '#e0efff',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
            dark: '#0b192c', // navy blue
          },
          cream: {
            50: '#fafaf9',
            100: '#f5f5f4',
            200: '#e7e5e4',
            bg: '#fcfdfa', // warm light bg
          },
          gold: {
            500: '#d4af37',
            600: '#c5a028',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', '"Noto Sans Devanagari"', 'sans-serif'],
        heading: ['Inter', '"Noto Sans Devanagari"', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 2s infinite ease-in-out',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

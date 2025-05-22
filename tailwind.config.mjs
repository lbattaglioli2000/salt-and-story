/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    extend: {
      colors: {
        'cream': '#F9F5EB',
        'tan': '#E6DFCC',
        'burgundy': {
          DEFAULT: '#722F37',
          light: '#8D3F48',
          dark: '#5A2129'
        },
        'olive': {
          DEFAULT: '#5B6236',
          light: '#6E7648',
          dark: '#484E29'
        },
        'chestnut': '#954535',
        'sage': '#B8C4A9'
      },
      fontFamily: {
        'heading': ['"Playfair Display"', 'serif'],
        'body': ['Lato', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale': 'scale 0.3s ease-in-out',
        'bounce': 'bounce 2s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scale: {
          '0%': { transform: 'scale(0.95)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      }
    },
  },
  plugins: [],
}
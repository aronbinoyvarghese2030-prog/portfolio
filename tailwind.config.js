/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: 'var(--brand-50)',
          100: 'var(--brand-100)',
          200: 'var(--brand-200)',
          300: 'var(--brand-300)',
          400: 'var(--brand-400)',
          500: 'var(--brand-500)',
          600: 'var(--brand-600)',
          700: 'var(--brand-700)',
          800: 'var(--brand-800)',
          900: 'var(--brand-900)',
        },
        surface: {
          DEFAULT: '#ffffff',
          muted: '#f8fafc',
          subtle: '#f1f5f9',
          border: 'rgba(226, 232, 240, 0.8)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Geist', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        'bento': '24px',
        'bento-sm': '18px',
        'bento-lg': '32px',
      },
      boxShadow: {
        'bento': '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 10px 25px -5px rgba(15, 23, 42, 0.04), 0 0 0 1px rgba(226, 232, 240, 0.8)',
        'bento-hover': '0 20px 35px -10px var(--brand-glow), 0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 0 0 1px var(--brand-300)',
        'bento-active': '0 10px 20px -5px var(--brand-glow-strong), 0 0 0 1.5px var(--brand-600)',
        'pill': '0 2px 10px -2px rgba(15, 23, 42, 0.06), 0 0 0 1px rgba(226, 232, 240, 0.8)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-subtle': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}

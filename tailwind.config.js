/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'orange': {
          500: '#ff8c3c',
          600: '#ff6b1a',
          400: '#ffad66',
          300: '#ffbe80',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-left': 'float-left 8s ease-in-out infinite',
        'float-right': 'float-right 7s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 1.5s ease-in-out infinite',
        'rainbow-glow': 'rainbow-glow 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'text-shimmer': 'text-shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-left': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-15px) translateX(-10px) rotate(-2deg)' },
          '66%': { transform: 'translateY(-10px) translateX(10px) rotate(2deg)' },
        },
        'float-right': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-15px) translateX(10px) rotate(2deg)' },
          '66%': { transform: 'translateY(-10px) translateX(-10px) rotate(-2deg)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(255, 140, 60, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 140, 60, 0.6)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(255, 140, 60, 0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 140, 60, 0.8)' },
        },
        'rainbow-glow': {
          '0%': { boxShadow: '0 0 20px rgba(255, 60, 140, 0.5)' },
          '25%': { boxShadow: '0 0 20px rgba(60, 140, 255, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(140, 255, 60, 0.5)' },
          '75%': { boxShadow: '0 0 20px rgba(255, 140, 60, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 60, 140, 0.5)' },
        },
        'text-shimmer': {
          '0%': { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: 'calc(200px + 100%) 0' },
        },
      },
      backdropBlur: {
        'sm': '4px',
        'lg': '16px',
        'xl': '24px',
      }
    },
  },
  plugins: [],
}
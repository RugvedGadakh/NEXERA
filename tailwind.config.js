/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {colors: {
      'royal-blue': {
        500: '#4169E1', // Add your preferred royal blue shade here.
      },
    },
    keyframes: {
      'slide-out-left': {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      'slide-out-right': {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(100%)' },
      },
      'slide-in-left': {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      'slide-in-right': {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0)' },
      }
    },
    animation: {
      'slide-out-left': 'slide-out-left 0.7s ease-in-out',
      'slide-out-right': 'slide-out-right 0.7s ease-in-out',
      'slide-in-left': 'slide-in-left 0.7s ease-in-out',
      'slide-in-right': 'slide-in-right 0.7s ease-in-out'
    }
  },
    
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layouts/**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-title': 'linear-gradient(to bottom, transparent 60%, rgba(189,202,219,0.3) 0%)',
      },
      
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

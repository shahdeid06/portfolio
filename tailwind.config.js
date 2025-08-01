/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src//*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f43f5e",
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }
    },
  },
  plugins: [],
}
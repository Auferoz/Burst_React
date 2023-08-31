/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          'quantico': ['Quantico', 'sans-serif'],
          'nunito': ["'Nunito Sans', sans-serif"],
        },
    },
  },
  plugins: [],
}
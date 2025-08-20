/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tells Tailwind to scan all your component files
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#005A9C', // Your professional, trustworthy blue
      },
    },
  },
  plugins: [],
}
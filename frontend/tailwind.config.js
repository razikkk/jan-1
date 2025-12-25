/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ginza: ["Ginza Narrow Medium", "sans-serif"],
      }
      
    },
  },
  plugins: [],
};

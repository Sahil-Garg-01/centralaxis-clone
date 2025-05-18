
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#0a0a0a',
        contentBg: '#000000',
        cardBg: '#000000',
        accent: '#a855f7',
        accentEnd: '#f472b6',
        textLight: '#d1d5db',
        checkmark: '#60a5fa',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

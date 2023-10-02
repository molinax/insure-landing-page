/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         //Primary
        "dark-violet": "hsl(256, 26%, 20%)",
        "grayish-blue": "hsl(216, 30%, 68%)",
         //Neutral
        "very-dark-violet": "hsl(270, 9%, 17%)",
        "dark-grayish-violet": "hsl(273, 4%, 51%)",
        "very-light-gray": "hsl(0, 0%, 98%)"
      },
      fontFamily: {
        "dm-serif": ["'DM Serif Display'", "serif"]
      },
      container: {
        padding: '1rem',
        center: true
      },
      gridTemplateColumns: {
        'fluid': 'repeat(auto-fit, minmax(12rem, 1fr))',
      },
    },
  },
  plugins: [],
}


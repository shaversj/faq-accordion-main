/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',
      'lg': '1440px'
    },
    extend: {
      colors: {
        'light-pink': "hsl(275, 100%, 97%)",
        'grayish-purple': "hsl(292, 16%, 49%)",
        'dark-purple': "hsl(292, 42%, 14%)",
      }
    },
  },
  plugins: [],
}
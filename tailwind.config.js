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
      backgroundImage: {
        'icon-p': "url('/src/assets/images/icon-plus.svg')",
        'icon-m': "url('/src/assets/images/icon-minus.svg')"
      },
      colors: {
        'light-pink': "hsl(275, 100%, 97%)",
        'grayish-purple': "hsl(292, 16%, 49%)",
        'dark-purple': "hsl(292, 42%, 14%)",
      },
      fontFamily: {
        'Work-Sans': ['Work Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
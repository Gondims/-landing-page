/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.tsx"
    ],
    theme: {
      extend: {
        screens: {
          'xl': '1366px',
          // => @media (min-width: 1366px) { ... }
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography')
    ],
  }
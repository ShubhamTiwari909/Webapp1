/** @type {import('tailwindcss').Config} */
tailwind.config = {
  theme: {
    extend: {
      flex: {
        '3': '2.5 3 0%',
        '5': '5 5 0%',
        '8': '8 8 0%'
      },
      height: {
        '144': '36rem',
      },
      width: {
        '144': '37rem',
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}

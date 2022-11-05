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
        'mid-screen': '68vh',
        '144': '36rem',
        '120': '30rem',
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

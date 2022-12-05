/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./dist/*.html'],
  content: ["./dist/*.{html,js}","./js/*.js"],
  theme: {
    extend: {
      flex: {
        '3': '2.5 3 0%',
        '5': '5 5 0%',
        '8': '8 8 0%'
      },
      height: {
        'mid-screen-1': '68vh',
        'mid-screen-2': '78vh',
        '144': '36rem',
        '120': '30rem',
      },
      width: {
        '144': '37rem',
      }
    },
  },
  plugins: [],
}

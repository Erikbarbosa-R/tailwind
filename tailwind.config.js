/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'Blue-Facebook': '#1877F2',
        'Green-Facebook':'#36A420'
      },
      spacing: {
        '580': '580px',
      }
    },
  },
  plugins: [],
}


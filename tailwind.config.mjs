/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        lightGray: 'rgba(0, 0, 0, 0.05)',
        extremeLightGray: '#f2f2f7',
        dark: '#1b1b1f'
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}


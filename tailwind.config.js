/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      spacing:
      {
        'mobile': '375px',
        '360': '1440px'
      },
      colors:
      {
        'primary-green': 'hsl(75, 94%, 57%)',
        'secondary-white': 'hsl(0, 0%, 100%)',
        'secondary-grey': 'hsl(0, 0%, 20%)',
        'secondary-darkgrey': 'hsl(0, 0%, 12%)',
        'secondary-offblack': 'hsl(0, 0%, 8%)',

      },
      fontFamily:
      {
        Inter : ['Inter'],
      }
    },
  },
  plugins: [],
}

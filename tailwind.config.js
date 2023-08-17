/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#fb7185',
        secondary: '#0f172a',
        dark: '#0f172a',
        navbar: '#fb7185',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin.cjs')],
  darkMode: 'class',
};

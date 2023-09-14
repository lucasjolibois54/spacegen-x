/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontSize: {
        xsm: '0.725rem',
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      colors: {
        // colors
        'main-color': '#EBFC68',
        'dark-bg': '#0C0E10',
        'dashboard-title': '#CECFC2',
        'dashboard-gray': '#A0A4AC',
        'dashboard-nav': '#121416',

        // btn
        'dark-btn': '#202427',
        'dark-btn-border': '#2B2F35',
        'dark-btn-text': '#C4C4C5',

        // data
        'dark-data-text': '#D0CECC',
        'dark-data-title': '#908F8E',

        'main-text': '#F6F6F6',
        'sec-light-text': '#D2D6D7',
        'cat-btn': '#232323',
        'cat-text': '#7B7B7B',
        'project-text': '#75757E',

      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid','./sections/*.liquid','./snippets/*.liquid','./templates/*.liquid','./locales/*.json'
  ],
  theme: {
    extend: {translate: { '-10':'-10%'},maxWidth: { custom: '15rem' },},
  },
  plugins: [],
}


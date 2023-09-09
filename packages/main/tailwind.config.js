const config = require('@tetap/components/config')
const merge = require('lodash/merge')

/** @type {import('tailwindcss').Config} */
module.exports = merge(config, {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@tetap/components/dist/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill-300': 'repeat(auto-fill, minmax(300px, 1fr))'
      }
    }
  },
  plugins: []
})

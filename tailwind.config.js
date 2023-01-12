/** @type {import('tailwindcss').Config} */

const tailwindConfig = require('@aveonline/ui-react/tailwind.config.js')
const { content, ...all } = tailwindConfig

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './node_modules/@aveonline/ui-react/dist/*.{mjs,js}'
  ],
  ...all
}

module.exports = config
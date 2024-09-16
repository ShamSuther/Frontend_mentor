/** @type {import('tailwindcss').Config} */
import fluid, { extract } from 'fluid-tailwind'

module.exports = {
  content: {
    files: ["./*.html", "./scripts/*.js"],
    extract
  },
  theme: {
    extend: {},
  },
  plugins: [fluid],
}


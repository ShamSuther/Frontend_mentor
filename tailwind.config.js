/** @type {import('tailwindcss').Config} */
import fluid, { extract } from 'fluid-tailwind'

export default {
  content: {
    files: ["./*.html", "./scripts/*.js"],
    extract
  },
  theme: {
    extend: {
      colors: {
        lime: {
          DEFAULT: "hsl(61, 70%, 52%)",
          100: "hsl(60, 72%, 93%)"
        },
        red: "hsl(4, 69%, 50%)",

        white: {
          DEFAULT: "hsl(0, 0%, 100%)",
          100: "hsl(202, 86%, 94%)",
          300: "hsl(203, 41%, 72%)",
          500: "hsl(200, 26%, 54%)",
          700: "hsl(200, 24%, 40%)",
          900: "hsl(202, 55%, 16%)",
          1000: "hsl(202, 55%, 16%)",
        }
      },
    },
  },
  plugins: [fluid],
}


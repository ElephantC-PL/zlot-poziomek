/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'
import daisyui from 'daisyui'

export default {
  content: ["./src/**/*.{astro,html,js,ts,md,mdx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {    
            img: { margin: 0},
            h2: { marginTop: "1em"},               
          },
        },
      },
    },
  },
  plugins: [
    daisyui,
    typography,
  ],
}
/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'
import daisyui from "daisyui"

export default {
  content: ["./src/**/*.{astro,html,js,ts,md,mdx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {    
            img: { margin: 0},
            h2: { marginTop: "0"},               
          },
        },
      },
    },
  },
  plugins: [   
    typography,
    daisyui,
  ],
  daisyui: {
   // themes: ['light', 'dark', 'night', 'winter'],
    themes: [
      {
        night: {
          ...require("daisyui/src/theming/themes")["night"],          
          accent: "#f17106",  
          "base-100": "#031a2c"       
        },
      },
      {
        winter: {
          ...require("daisyui/src/theming/themes")["winter"],
          primary: "#39688b",
          accent: "#f17106",
        },
      },
    ],
  },
}
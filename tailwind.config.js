const {nextui} = require("@nextui-org/react");


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        kurdish: ["KurdishFont", "sans-serif"],
        freesans: ["FreeSans", "sans-serif"],
        freesansbold: ["FreeSansBold", "sans-serif"],
      },
      colors: {
        ten: '#002a97', 
        thirty: '#ee503a', 
        sixty: '#ffffff',
        dark:'black',
        overDark:'ffffff'
      },
    },
  },
  plugins: [nextui()],
};
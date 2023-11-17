/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    extend: {
      screens: {
        'xsm': '416px',
        // => @media (min-width: 640px) { ... }

     

      
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

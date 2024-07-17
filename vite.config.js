import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})




// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     fontFamily: {
//       'sans': ['Poppins', 'sans-serif'],
//     },
//   },
//   plugins: [require('daisyui'), require('@tailwindcss/aspect-ratio')] 
// }
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 Este import es nuevo:
import { ghPages } from 'vite-plugin-gh-pages'

export default defineConfig({
  plugins: [
    react(),
    ghPages(), 
  ],
  base: '/portafolio-psor/', 
})

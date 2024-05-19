import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': '/src/components',
      '@assets': '/src/assets',
      // Add other aliases as needed
    },
  },
  plugins: [react()],
  base: '/portfoliosiz/',
})
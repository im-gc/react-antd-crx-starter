import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist'
  },
  plugins: [
    react(),
    crx({ manifest }),
  ],
})

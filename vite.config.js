import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Local preview only. Every image path is resolved through src/utils/asset.js
// against import.meta.env.BASE_URL, so a future subpath deploy is a one-line change.
export default defineConfig({
  base: '/',
  plugins: [react()],
})

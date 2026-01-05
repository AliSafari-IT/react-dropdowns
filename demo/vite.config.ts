import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
    base: '/',
    plugins: [react()],
  resolve: {
    alias: {
      '@asafarim/react-dropdowns': resolve(__dirname, '../src/index.ts')
    }
  },
  server: {
    port: 3011,
    host: true
  }
})

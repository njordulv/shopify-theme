import { defineConfig } from 'vite'
import shopify from 'vite-plugin-shopify'

export default defineConfig(({ mode }) => ({
  plugins: [shopify()],
  build: {
    emptyOutDir: mode === 'production', // Clean only for production build
  },
}))

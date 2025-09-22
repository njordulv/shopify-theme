import shopify from 'vite-plugin-shopify'
import cleanup from '@by-association-only/vite-plugin-shopify-clean'

export default {
  build: {
    emptyOutDir: false,
  },
  plugins: [cleanup(), shopify()],
}

import { defineConfig } from 'vite'
import shopify from 'vite-plugin-shopify'

export default defineConfig({
  plugins: [
    shopify({
      themeRoot: '.',
      sourceCodeDir: 'src',
      entrypointsDir: 'src/entrypoints',
      additionalEntrypoints: ['assets/*.{png,jpg,jpeg,gif,svg,webp,ico}'],
    }),
  ],
  build: {
    emptyOutDir: false,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (
            assetInfo.name &&
            /\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name)
          ) {
            return 'assets/[name].[ext]'
          }
          return 'assets/[name]-[hash].[ext]'
        },
      },
    },
  },
})

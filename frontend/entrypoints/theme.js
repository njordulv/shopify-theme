import 'vite/modulepreload-polyfill'
import { initProductVariants } from '@/scripts/product-variants'
import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'

// Initialize Alpine
window.Alpine = Alpine
Alpine.plugin(collapse)
Alpine.start()

// Get the product data from Liquid
const productDataElement = document.getElementById('product-data-json')

if (productDataElement) {
  try {
    const productData = JSON.parse(productDataElement.textContent)
    initProductVariants(productData)
  } catch (error) {
    console.error('Error parsing product data:', error)
  }
}

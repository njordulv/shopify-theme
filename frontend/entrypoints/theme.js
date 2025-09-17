import 'vite/modulepreload-polyfill'
import { initProductVariants } from '@/scripts/product-variants'

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

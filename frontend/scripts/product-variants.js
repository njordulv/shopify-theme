export function initProductVariants(productData) {
  const variantInput = document.getElementById(`variant-id-${productData.id}`)
  const variantRadios = document.querySelectorAll(
    '.variant-radio[data-option-index]'
  )

  if (!variantInput || variantRadios.length === 0) return

  // Create an object to store the current selected options
  const currentOptions = {}

  // Initialise the current options from the default selected options
  productData.options_with_values.forEach((option, index) => {
    currentOptions[index] = option.selected_value
  })

  // Function for finding a variant by selected options
  function findVariant(options) {
    for (let i = 0; i < productData.variants.length; i++) {
      const variant = productData.variants[i]
      let match = true

      for (let j = 0; j < productData.options.length; j++) {
        if (variant.options[j] !== options[j]) {
          match = false
          break
        }
      }

      if (match) {
        return variant
      }
    }
    return null
  }

  // Function for updating the button state
  function updateButtonState(available) {
    const button = document.querySelector(
      `#product-form-${productData.id} button[type="submit"]`
    )
    if (button) {
      if (available) {
        button.disabled = false
        button.textContent = 'Add To Bag'
        button.classList.remove('btn--disabled')
      } else {
        button.disabled = true
        button.textContent = 'Out of Stock'
        button.classList.add('btn--disabled')
      }
    }
  }

  // Handler for changing variants
  variantRadios.forEach((radio) => {
    radio.addEventListener('change', function () {
      const optionIndex = parseInt(this.getAttribute('data-option-index'))
      currentOptions[optionIndex] = this.value

      // Find the corresponding variant
      const selectedVariant = findVariant(currentOptions)

      if (selectedVariant && selectedVariant.available) {
        variantInput.value = selectedVariant.id
        updateButtonState(true)

        // Optional: update the price, if needed
        if (window.updateProductPrice) {
          window.updateProductPrice(selectedVariant.price)
        }
      } else {
        updateButtonState(false)
      }
    })
  })

  // Initialisation of the button state
  const initialVariant = findVariant(currentOptions)
  updateButtonState(initialVariant && initialVariant.available)
}

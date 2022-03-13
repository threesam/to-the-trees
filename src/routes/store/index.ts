import dotenv from 'dotenv'
import Stripe from 'stripe'
dotenv.config()

const stripe = Stripe(process.env.VITE_STRIPE_API_KEY)

export async function get() {
  const endpoint = 'https://api.printful.com/store/products'
  const options = {
    headers: {
      'Authorization': `Bearer ${process.env.VITE_PRINTFUL_TOKEN}`
    }
  }

  // get All PRoducts
  const res = await fetch(endpoint, options)
  const allProducts = await res.json()
  console.log('products', allProducts);

  const { data: products } = await stripe.products.list()

  const { data: prices } = await stripe.prices.list()

  const enhancedProducts = products.map(product => {
    const price = prices.filter(price => product.id === price.product).shift()

    // enhance product info
    product.priceId = price.id
    product.price = price.unit_amount
    product.currency = price.currency

    return product
  })

  return {
    body: { products: allProducts.result }
  }
}
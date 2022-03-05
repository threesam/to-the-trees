import Stripe from 'stripe'

const stripe = Stripe('sk_test_51HAKI8ENbNtMYgqEvd2jDXQpqmkvscYYHSAM4zhTpGDAhwX5AOhKU5I9IWnMmhweRVkjuRZRpEZPrlkA2igtCbqV00RNuFZXGb')

export async function get() {
  const { data: products } = await stripe.products.list()

  const { data: prices } = await stripe.prices.list()

  const enhancedProducts = products.map(product => {
    const price = prices.filter(price => product.id === price.product).shift()
    console.log('price', price)

    product.price = price.unit_amount
    product.currency = price.currency
    console.log('product', product)

    return product
  })

  return {
    body: { products: enhancedProducts }
  }
}
import Stripe from 'stripe'

const stripe = Stripe('sk_test_51HAKI8ENbNtMYgqEvd2jDXQpqmkvscYYHSAM4zhTpGDAhwX5AOhKU5I9IWnMmhweRVkjuRZRpEZPrlkA2igtCbqV00RNuFZXGb')

export async function get() {
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
    body: { products: enhancedProducts }
  }
}
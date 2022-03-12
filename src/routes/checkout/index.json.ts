import Stripe from 'stripe'
const stripe = Stripe('sk_test_51HAKI8ENbNtMYgqEvd2jDXQpqmkvscYYHSAM4zhTpGDAhwX5AOhKU5I9IWnMmhweRVkjuRZRpEZPrlkA2igtCbqV00RNuFZXGb')

export async function post({ request }) {
  const { items } = await request.json()
  const lineItems = items.map(item => {
    return {
      price: item.priceId,
      quantity: item.quantity,
    }
  })
  
  console.log('line', lineItems)
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_address_collection: {
      allowed_countries: ['US'],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 0,
            currency: 'usd',
          },
          display_name: 'Free shipping',
          // Delivers between 5-7 business days
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 5,
            },
            maximum: {
              unit: 'business_day',
              value: 7,
            },
          }
        }
      },
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 1500,
            currency: 'usd',
          },
          display_name: 'Next day air',
          // Delivers in exactly 1 business day
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 1,
            },
            maximum: {
              unit: 'business_day',
              value: 1,
            },
          }
        }
      },
    ],
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:3000/checkout/success',
    cancel_url: 'http://localhost:3000/checkout/cancel',
  })

    return {
      status: 200,
      header: {
        'accept': 'application/json'
      },
      body: {url: session.url}
    }
}
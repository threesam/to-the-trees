// import dotenv from 'dotenv'
// import Stripe from 'stripe'
// dotenv.config()

// const stripe = Stripe(process.env.VITE_STRIPE_API_KEY)

// export async function get({params}) {
//   console.log('params', params);
//   const endpoint = `https://api.printful.com/store/products/${params.id}`
//   const options = {
//     headers: {
//       'Authorization': `Bearer ${process.env.VITE_PRINTFUL_TOKEN}`
//     }
//   }

//   const response = await fetch(endpoint, options)
//   const product = await response.json()

//   return {
//     body: { product: product.result }
//   }
// }
import {showMiniCart} from '$lib/stores/cart'

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {

  showMiniCart.set(false)

  const response = await resolve(event)
  return response
}
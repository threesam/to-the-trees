/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	console.log('event: ', event)
	if (event.url.pathname !== '/') {
		return new Response('Redirect', { status: 303, headers: { Location: '/' } })
	}

	const response = await resolve(event)
	return response
}

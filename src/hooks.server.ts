/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	if (event.url.pathname !== '/') {
		return new Response('Redirect', { status: 303, headers: { Location: '/' } })
	}

	const response = await resolve(event)
	return response
}

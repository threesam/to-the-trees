import { env } from '$env/dynamic/private'
import { error } from '@sveltejs/kit'

export async function POST({ request }) {
	const { email } = await request.json()

	const tags = [] as string[]

	if (env.NODE_ENV === 'development') {
		tags.push('development')
	}

	try {
		const response = await fetch(
			`https://api.convertkit.com/v3/forms/${env.CONVERTKIT_FORM_ID}/subscribe`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				},
				body: JSON.stringify({
					api_key: env.CONVERTKIT_API_KEY,
					email,
					tags
				})
			}
		)

		const data = await response.json()
		console.log('data: ', data)

		if (data.error) {
			throw error(401)
		}

		return new Response(JSON.stringify(response, null, 2))
	} catch (_) {
		throw error(500)
	}
}

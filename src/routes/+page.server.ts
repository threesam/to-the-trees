import { getFilm } from '$lib/utils/sanity'
import { error } from '@sveltejs/kit'

export async function load() {
	const film = await getFilm()

	if (film) {
		return {
			body: {
				film
			}
		}
	}

	throw error(404)
}

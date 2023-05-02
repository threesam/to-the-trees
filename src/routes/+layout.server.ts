import { client } from '$lib/utils/sanity'

export async function load() {
	const settings = await client.fetch(`*[_type == 'siteSettings' && hostname == 'lailawolf'][0]{
		...,
		image{
			...,
			asset->
		},
		icons[]{
			asset->
		},
		founders[]->{
			...,
			image{
				...,
				asset->
			}
		}
	}`)

	return {
		settings
	}
}

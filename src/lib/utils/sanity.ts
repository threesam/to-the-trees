import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { env } from '$env/dynamic/public'

const client = createClient({
	projectId: env.PUBLIC_SANITY_PROJECT_ID,
	dataset: env.PUBLIC_SANITY_DATASET,
	apiVersion: '2021-10-21',
	useCdn: false
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: string) => {
	return builder.image(source)
}

export async function getFilm() {
	return await client.fetch(`*[_type == 'film' && slug.current == 'to-the-trees'][0]{
    ...,
    image{
      asset->
    },
    laurels[]{
      ...,
      image{
        asset->
      }
    },
    seo{
      ...,
      image{
        asset->
      }
    }
  }`)
}

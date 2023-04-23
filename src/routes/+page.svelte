<script context="module">
	import client from '$lib/sanityClient';
	export async function load() {
		const siteSettingsQuery = /* groq */ `*[_type == "siteSettings"][0]{
          ...,
          title,
          "image": image.asset->url,
          "alt": image.alt,
          "caption": image.caption,
      }`;

		const postsQuery = /* groq */ `*[_type == "post"]{
          ...,
					"image": mainImage.asset->url,
          "alt": mainImage.alt,
					"slug": slug.current
      }`;

		const query = `{
			"siteSettings": ${siteSettingsQuery},
			"posts": ${postsQuery}
		}`;

		const data = await client.fetch(query).catch((err) => this.error(500, err));

		return {
			props: {
				siteInfo: data.siteSettings,
				posts: data.posts
			}
		};
	}
</script>

<script>
	import SEO from '$lib/components/SEO.svelte';
	import Banner from '$lib/components/Banner.svelte';

	export let siteInfo;
	export let posts;
</script>

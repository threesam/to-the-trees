<script context="module">
	import client from '$lib/sanityClient';
	export async function load() {
		const filter = /* groq */ `*[_type == "author"][0]`;
		const projection = /* groq */ `{
          ...,
          name,
          "image": mainImage.asset->url,
          "alt": mainImage.alt,
          "caption": mainImage.caption,
      }`;

		const query = filter + projection;

		const author = await client.fetch(query).catch((err) => this.error(500, err));

		return {
			props: {
				author
			}
		};
	}
</script>

<script>
	import PortableText from '@portabletext/svelte';
	import SEO from '$lib/components/SEO.svelte';
	import Link from '$lib/components/Link.svelte';

	export let author;
	const { name, image, alt, caption, bio } = author;
	console.log('bio', bio);
</script>

<SEO
	title="About Laila"
	description="Information about and links to the life and work of Laila Wolf"
	{image}
	{alt}
/>

<section>
	<h1>About Laila</h1>

	<img src={image} {alt} />

	<PortableText
		blocks={bio}
		serializers={{
			marks: {
				link: Link
			}
		}}
	/>
</section>

<style>
	section {
		max-width: 40rem;
		margin: 0 auto;
		padding: 4rem 1rem;
	}
	img {
		filter: grayscale(100%);
	}
</style>

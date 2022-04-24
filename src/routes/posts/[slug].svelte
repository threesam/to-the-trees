<script context="module">
	import client from '$lib/sanityClient';
	export async function load({ params: { slug } }) {
		const query = /* groq */ `*[_type == "post" && slug.current == "${slug}"][0]{
          title,
          description,
          body,
          publishedAt,
          _updatedAt,
          "author": author->name,
          "slug": author->slug.current,
					"image": mainImage.asset->url,
          "alt": mainImage.alt
      }`;

		const data = await client.fetch(query).catch((err) => this.error(500, err));

		return {
			props: {
				post: data
			}
		};
	}
</script>

<script>
	export let post;

	import Banner from '$lib/components/Banner.svelte';
	import TextBlock from '$lib/components/TextBlock.svelte';

	import { format, parseISO } from 'date-fns';
</script>

<Banner data={post} />
<TextBlock text={post.body}>
	<div slot="before">
		<span>Updated - {format(parseISO(post._updatedAt), 'dd/MM/yyyy')}</span>
		<span>by <a href="/about">{post.author}</a></span>
	</div>
</TextBlock>
<br />

<style>
	div {
		padding: 2rem 0;
	}
	span {
		display: block;
	}
	br {
		padding: 3rem;
	}
</style>

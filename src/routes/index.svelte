<script context="module">
	import client from '$lib/sanityClient';
	export async function load() {
		const filter = /* groq */ `*[_type == "siteSettings"][0]`;
		const projection = /* groq */ `{
          ...,
          title,
          "image": image.asset->url,
          "alt": image.alt,
          "caption": image.caption,
      }`;

		const query = filter + projection;

		const siteInfo = await client.fetch(query).catch((err) => this.error(500, err));

		return {
			props: {
				siteInfo
			}
		};
	}
</script>

<script>
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import SEO from '$lib/components/SEO.svelte';

	export let siteInfo;

	let show = false;
	onMount(() => (show = true));
</script>

<SEO {...siteInfo} description="A repository of work for Laila Wolf" />

<section>
	{#if show}
		<h1 id={siteInfo.title}>{siteInfo.title}</h1>
		<p class="card">Little something <a href="/about">about me</a></p>
		<!-- <SocialLinks /> -->
		<img
			in:scale={{ duration: 2000, start: 1.2, opacity: 0.2 }}
			src={siteInfo.image}
			alt={siteInfo.alt}
		/>
	{/if}
</section>
<section>
	<h1>Merch</h1>
</section>

<style>
	section {
		position: relative;
		height: 100vh;
		width: 100%;
		display: grid;
		place-content: center;
		text-align: center;
		background-color: rgba(0, 0, 0, 0.69);
		overflow: hidden;
	}

	img {
		position: absolute;
		top: 0;
		left: 0;
		object-fit: cover;
		width: 100%;
		height: 100%;
		z-index: -10;
	}

	h1 {
		font-size: 4rem;
		line-height: 1.1;
		color: #fff;
	}
</style>

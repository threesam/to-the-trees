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

<SEO {...siteInfo} description="A repository of work for Laila Wolf" />

<!-- CONTENT SECTION -->
<Banner data={siteInfo} />
<!-- ABOUT SECTION -->
<section class="blockquote-container">
	<div class="blockquote">
		<h1>About Laila</h1>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit accusantium quibusdam minima
			deleniti provident, incidunt, perferendis, expedita recusandae vero assumenda error natus.
			Quod, excepturi. Suscipit culpa praesentium quae debitis cumque! Lorem ipsum dolor sit amet
			consectetur adipisicing elit. Maiores in molestias facere voluptatem ipsum. Consectetur neque
			aliquid, doloribus modi ipsum ullam tempore mollitia exercitationem.
		</p>
		<p>
			Dolorem aliquid optio iure dolore laborum. Lorem ipsum dolor, sit amet consectetur adipisicing
			elit. Corporis doloribus maxime nihil odio animi delectus facere ab nam repellendus debitis
			iusto a rerum velit doloremque vero commodi libero, eaque magnam! Lorem ipsum dolor, sit amet
			consectetur adipisicing elit. Eveniet sint a voluptate reiciendis adipisci eum inventore
			debitis non, id est sit provident cum quae pariatur ipsam perferendis aperiam dolor at.
		</p>
		<p>
			<a href="/about">Additional Information</a>
		</p>
	</div>
</section>
<!-- CONTENT GRID -->
<section class="content-grid">
	{#each posts.filter((_, i) => i < 4) as post}
		<div
			class="content-grid__item"
			style={`background-image: url(${post.image}); background-size: cover`}
		>
			<div class="content-grid__item-text">
				<h1>{post.title}</h1>
				<p>{post.description}</p>
				<p>
					<a href={'/posts/' + post.slug} class="button">view content</a>
				</p>
			</div>
		</div>
	{/each}
</section>

<style>
	section {
		position: relative;
		height: 80vh;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.69);
		overflow: hidden;
	}

	.content {
		background: rgba(0, 0, 0, 0.69);
		height: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	.content a {
		width: 100%;
		height: 100%;
		display: grid;
		font-family: var(--headingFont);
		color: var(--textColor);
		place-content: center;
		text-decoration: none;
		background: linear-gradient(45deg, var(--lightGrey), var(--darkGrey));
	}
	.content a:hover {
		transition: 0.3s all ease-in-out;
		color: var(--primary);
	}
	.title {
		display: grid;
		place-content: center;
	}

	.content-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0.25rem;
		padding: 0.25rem;
	}
	.content-grid__item {
		height: 100%;
		position: relative;
		color: transparent;
	}
	.img {
		background: linear-gradient(45deg, var(--primary), var(--darkGrey));
		height: 100%;
	}
	.content-grid__item-text {
		padding: 1rem;
		height: 100%;
		display: grid;
		place-content: center;
	}

	.content-grid__item-text .button {
		border-bottom: none;
		text-decoration: underline;
		color: inherit;
		font-size: 110%;
	}
	.content-grid__item * {
		color: inherit;
	}
	.content-grid__item:hover {
		color: var(--textColor);
	}
	.content-grid__item-text:hover {
		background: rgba(0, 0, 0, 0.69);
	}

	.blockquote-container {
		display: grid;
		place-content: center;
	}
	.blockquote {
		max-width: 40rem;
	}

	h1 {
		font-size: 4rem;
		line-height: 1.1;
		color: #fff;
	}
</style>

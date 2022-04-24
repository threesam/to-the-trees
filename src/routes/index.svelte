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
	import Button from '$lib/components/Button.svelte';
	import SEO from '$lib/components/SEO.svelte';

	export let siteInfo;

	let show = false;
	onMount(() => (show = true));
</script>

<SEO {...siteInfo} description="A repository of work for Laila Wolf" />

<!-- CONTENT SECTION -->
<section>
	{#if show}
		<div class="banner">
			<div class="banner-content">
				<div class="block">
					<span class="">coming soon..</span>
					<h1>Title of Upcoming Content</h1>
				</div>
				<div class="block">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus reprehenderit delectus
						repellat vel aperiam incidunt eligendi ex fuga quos! Consequatur accusamus dolores
						laborum velit possimus esse veritatis illum dignissimos in.
					</p>
					<Button>Subscribe To Updates</Button>
				</div>
			</div>
			<img
				in:scale={{ duration: 2000, start: 1.2, opacity: 0.2 }}
				src={siteInfo.image}
				alt={siteInfo.alt}
			/>
		</div>
	{/if}
</section>
<!-- CONTENT GRID -->
<section class="content-grid">
	<div class="content-grid__item" style={`background-image: url(${siteInfo.image})`}>
		<div class="content-grid__item-text">
			<h1>Title</h1>
			<p>
				description::: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet minima
				inventore aperiam, rerum impedit quas exercitationem omnis laborum maiores dolorem saepe
				cumque at suscipit beatae deserunt officiis nesciunt quibusdam odio!
			</p>
			<p>
				<a href="#" class="button">view content</a>
			</p>
		</div>
	</div>
	<div class="content-grid__item" style={`background-image: url(${siteInfo.image})`}>
		<div class="content-grid__item-text">
			<h1>Title</h1>
			<p>
				description::: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet minima
				inventore aperiam, rerum impedit quas exercitationem omnis laborum maiores dolorem saepe
				cumque at suscipit beatae deserunt officiis nesciunt quibusdam odio!
			</p>
			<p>
				<a href="#" class="button">view content</a>
			</p>
		</div>
	</div>
	<div class="content-grid__item" style={`background-image: url(${siteInfo.image})`}>
		<div class="content-grid__item-text">
			<h1>Title</h1>
			<p>
				description::: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet minima
				inventore aperiam, rerum impedit quas exercitationem omnis laborum maiores dolorem saepe
				cumque at suscipit beatae deserunt officiis nesciunt quibusdam odio!
			</p>
			<p>
				<a href="#" class="button">view content</a>
			</p>
		</div>
	</div>
	<div class="content-grid__item" style={`background-image: url(${siteInfo.image})`}>
		<div class="content-grid__item-text">
			<h1>Title</h1>
			<p>
				description::: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet minima
				inventore aperiam, rerum impedit quas exercitationem omnis laborum maiores dolorem saepe
				cumque at suscipit beatae deserunt officiis nesciunt quibusdam odio!
			</p>
			<p>
				<a href="#" class="button">view content</a>
			</p>
		</div>
	</div>
</section>
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
<!-- PRODUCT GRID -->
<section>
	{#if show}
		<div class="merch">
			<div class="content">
				<a class="product-card" href="/about">
					<div class="img" />
					<h3>Product Name</h3>
					<div class="gumroad-product-embed">
						<a sveltekit:prefetch href="https://threesam.gumroad.com/l/ikhigi">Buy</a>
					</div>
				</a>
				<a class="product-card" href="/music">
					<div class="img" />
					<h3>Product Name</h3>
				</a>
				<a class="product-card" href="/film">
					<div class="img" />
					<h3>Product Name</h3>
				</a>
				<a class="product-card" href="/store">
					<div class="img" />
					<h3>Product Name</h3>
				</a>
				<!-- <Button url="/store">Store Link</Button> -->
				<!-- <p>Little something <a href="/about">about me</a></p> -->
			</div>
			<div class="title">
				<h1 id={siteInfo.title}>Merch</h1>
			</div>
			<!-- <SocialLinks /> -->
			<img
				in:scale={{ duration: 2000, start: 1.2, opacity: 0.2 }}
				src={siteInfo.image}
				alt={siteInfo.alt}
			/>
		</div>
	{/if}
</section>

<style>
	section {
		position: relative;
		height: 80vh;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.69);
		overflow: hidden;
	}
	.merch {
		height: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	.banner {
		height: 100%;
		position: relative;
	}
	.banner-content {
		position: absolute;
		bottom: 0;
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: space-between;
		padding: 3rem;
	}
	.block {
		width: 50%;
	}

	.block:last-of-type {
		text-align: right;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
	.block p {
		max-width: 30rem;
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

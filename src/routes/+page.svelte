<script lang="ts">
	import PortableText from '$lib/components/PortableText.svelte'
	import SEO from 'svelte-seo'
	import Sketch from '$lib/components/Sketch.svelte'
	import SocialLinks from '$lib/components/SocialLinks.svelte'
	import SubscribeForm from '$lib/components/SubscribeForm.svelte'
	// import { urlFor } from '$lib/utils/sanity'
	import type { PageData } from './$types'
	import Carousel from '$lib/components/Carousel.svelte'

	export let data: PageData

	const { film } = data.body
</script>

<SEO
	title="To the Trees"
	description={'A film by Eleanor Goldfield'}
	openGraph={{
		title: 'To the Trees',
		description: 'A film by Eleanor Goldfield',
		type: 'website',
		images: [{ url: film.image.asset.url }]
	}}
/>

<!-- HERO -->
<section
	id="hero"
	class="relative mb-20 grid h-screen w-full grid-cols-2 items-center justify-center lg:mb-0"
>
	<figure class="absolute inset-0 h-full w-full bg-dark sm:p-10 lg:p-20">
		<img
			class="h-full w-full object-cover sm:border"
			src={'https://media.discordapp.net/attachments/1039738613606395925/1129240397693063258/threesam_fine_line_ink_tiny_trees_in_a_dimly_lit_forest_overfl_d1e33f59-ce47-45ef-9cc9-e7c53c734ace.png?width=1932&height=1456'}
			alt="homepage hero"
		/>
	</figure>
	<div class="relative z-0 h-full w-full sm:py-10 sm:pl-10 lg:py-20 lg:pl-20">
		<div
			class="flex h-full w-full items-center justify-center bg-black p-5 opacity-90 sm:border sm:border-r-0 sm:p-10"
		>
			<h1 class="pt-3 text-right">To The Trees</h1>
		</div>
	</div>
	<div class="relative z-0 h-full w-full sm:py-10 sm:pr-10 lg:py-20 lg:pr-20">
		<div class="relative z-0 flex h-full w-full items-center justify-center p-5 sm:p-10">
			<a href="#" class="bg-black/90 px-8 py-5 text-light">WATCH NOW</a>
		</div>
	</div>
</section>

<section>
	<div class="mx-auto max-w-2xl px-5 pb-10">
		<h2 class="mb-2 text-center font-display text-4xl font-normal">synopsis</h2>

		<PortableText blocks={film.synopsis} />

		<h3 class="mb-2 mt-10 text-center font-display text-4xl">cast</h3>
		<ul class="mb-10">
			{#each film.cast as castMember}
				<li class="grid grid-cols-2 gap-2 text-left">
					<span class="text-right">{castMember.role}</span>

					{#if castMember.name && castMember.link}
						<a
							class="h-max w-max border-b border-primary transition-all duration-300 hover:border-transparent hover:tracking-wider hover:text-primary"
							href={castMember.link}>{castMember.name}</a
						>
					{:else}
						<span>{castMember.name}</span>
					{/if}
				</li>
			{/each}
		</ul>

		<h3 class="mb-2 text-center font-display text-4xl">crew</h3>
		<ul>
			{#each film.crew as crewMember}
				<li class="grid grid-cols-2 gap-2 text-left">
					<span class="text-right">{crewMember.role}</span>

					{#if crewMember.name && crewMember.link}
						<a
							class="h-max w-max border-b border-primary transition-all duration-300 hover:border-transparent hover:tracking-wider hover:text-primary"
							href={crewMember.link}>{crewMember.name}</a
						>
					{:else}
						<span>{crewMember.name}</span>
					{/if}
				</li>
			{/each}
		</ul>
	</div>

	<!-- <figure class="flex aspect-[3/4] w-full justify-center px-5 pb-10 lg:max-h-[50vh]">
				<img
					class="aspect-[3/4] lg:max-h-[50vh]"
					src={project.posters[0].src}
					alt={'poster for ' + project.title}
				/>
			</figure> -->
</section>

<!-- <div class="flex w-full items-center justify-center py-10">
	<SocialLinks size={40} links={project.links} />
</div> -->

<!-- <Carousel
	items={[
		...film.laurels,
		...film.laurels,
		...film.laurels,
		...film.laurels,
		...film.laurels,
		...film.laurels
	]}
/> -->

<!-- ABOUT SITE -->
<!-- <section class="grid w-full lg:grid-cols-2">
	<figure class="order-last bg-pink-200 lg:order-first">
		<img
			class="h-full w-full border-dark grayscale"
			src={urlFor(data.settings.founders[0].image.asset.url).size(900, 900).auto('format').url()}
			alt={data.settings.founders[0].image}
		/>
	</figure>
	<div class="grid place-content-center bg-gradient-3 p-5 py-20 text-dark sm:p-10 lg:p-20">
		<PortableText blocks={data.settings.body} />
	</div>
</section> -->

<!-- ABOUT AUTHOR - HEADER -->
<!-- <section class="w-full">
	<div class="relative grid place-content-center py-20">
		<h2
			class="z-10 grid place-content-center bg-dark p-5 text-4xl font-bold tracking-widest text-gray-300 shadow-md shadow-pink-200 lg:p-10
			lg:text-7xl"
		>
			About
		</h2>
		<div class="absolute inset-0 rotate-180 overflow-hidden">
			<Sketch />
		</div>
	</div>
</section> -->

<!-- SUBSCRIBE + LINKS -->
<footer>
	<section class="max-w-screen relative flex h-[500px] w-full flex-col-reverse">
		<Sketch />
	</section>
	<p class="w-full bg-black/70 p-5 text-center text-light lg:p-10">
		© to the trees 2023-{new Date().getFullYear()}
	</p>
</footer>

<script lang="ts">
	import PortableText from '$lib/components/PortableText.svelte'
	import SEO from 'svelte-seo'
	// import Sketch from '$lib/components/Sketch.svelte'
	// import SocialLinks from '$lib/components/SocialLinks.svelte'
	// import SubscribeForm from '$lib/components/SubscribeForm.svelte'
	// import { urlFor } from '$lib/utils/sanity'
	import type { PageData } from './$types'
	import Carousel from '$lib/components/Carousel.svelte'
	import { onMount } from 'svelte'
	import { urlFor } from '$lib/utils/sanity'

	export let data: PageData

	const { film } = data.body

	const backgroundImageSrc = urlFor(film.image.asset.url).auto('format').url()

	let SketchAsync
	onMount(async () => {
		SketchAsync = (await import('$lib/components/Sketch.svelte')).default
	})
</script>

<SEO
	title="To the Trees"
	description={'A film by Eleanor Goldfield'}
	openGraph={{
		title: 'To the Trees',
		description: 'A film by Eleanor Goldfield',
		type: 'website',
		images: [{ url: backgroundImageSrc }]
	}}
/>

<!-- HERO -->
<section
	id="hero"
	class="relative mb-10 grid h-screen w-full grid-cols-2 items-center justify-center lg:mb-0"
>
	<img
		class="absolute inset-0 h-full w-full object-cover"
		src={backgroundImageSrc}
		alt="homepage hero"
	/>

	<div class="absolute inset-0 h-full w-full bg-dark/50 sm:p-10 lg:p-20">
		<div class="h-full w-full object-cover sm:border sm:border-primary" />
	</div>

	<div class="relative z-0 h-full w-full sm:py-10 sm:pl-10 lg:py-20 lg:pl-20">
		<div
			class="flex h-full w-full flex-col items-center justify-center bg-black/80 p-5 sm:border sm:border-r-0 sm:border-primary sm:p-10"
		>
			<h1 class="pt-3 text-center text-primary">To The Trees</h1>
			<div class="block text-center text-5xl text-primary sm:hidden">|</div>
		</div>
	</div>
	<div class="relative z-0 h-full w-full sm:py-10 sm:pr-10 lg:py-20 lg:pr-20">
		<a
			href={film.gumroadLink ?? '#'}
			class="relative z-0 flex h-full w-full items-center justify-center bg-transparent p-5 transition-colors duration-300 hover:bg-primary sm:p-10"
		>
			<span class="bg-primary/90 p-3 font-bold text-dark sm:p-8"> WATCH NOW </span>
		</a>
	</div>
</section>

{#if film.showLaurels}
	<Carousel
		items={[
			...film.laurels,
			...film.laurels,
			...film.laurels,
			...film.laurels,
			...film.laurels,
			...film.laurels
		]}
	/>
{/if}

<div class="relative lg:mt-10">
	<div class="relative z-10 mx-auto max-w-3xl px-5 pb-10 pt-5 sm:px-10 lg:pt-10">
		<h2 class="mb-2 text-center font-display text-4xl font-normal">synopsis</h2>
		<PortableText blocks={film.synopsis} />

		<h3 class="mb-2 pt-10 text-center font-display text-4xl">cast</h3>
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

	<!-- <Sketch /> -->
	<svelte:component this={SketchAsync} />

	<div class="absolute inset-0 -left-1 -right-1 rotate-180 bg-black/70" />
</div>

<footer
	class="relative z-0 grid h-full w-full place-content-center bg-primary p-2 text-center text-dark"
>
	© to the trees 2023
</footer>

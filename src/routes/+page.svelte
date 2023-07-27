<script lang="ts">
	import PortableText from '$lib/components/PortableText.svelte'
	import SEO from 'svelte-seo'
	// import Sketch from '$lib/components/Sketch.svelte'
	// import SocialLinks from '$lib/components/SocialLinks.svelte'
	import SubscribeForm from '$lib/components/SubscribeForm.svelte'
	// import { urlFor } from '$lib/utils/sanity'
	import type { PageData } from './$types'
	// import Carousel from '$lib/components/Carousel.svelte'
	import { onMount } from 'svelte'
	import { urlFor } from '$lib/utils/sanity'

	let clientHeight: number | undefined
	let clientWidth: number | undefined

	export let data: PageData

	const { film } = data.body

	$: backgroundImageSrc = urlFor(film.image.asset.url)
		.width(clientWidth ?? 1920)
		.height(clientHeight ?? 1080)
		.fit('crop')
		.auto('format')
		.url()

	let SketchAsync
	onMount(async () => {
		SketchAsync = (await import('$lib/components/Sketch.svelte')).default
	})
</script>

<SEO
	title={film.seo.title}
	description={film.seo.description}
	openGraph={{
		title: film.seo.title,
		description: film.seo.description,
		type: 'website',
		images: [
			{ url: urlFor(film.seo.image.asset.url).width(1920).height(1080).auto('format').url() }
		]
	}}
/>

<!-- HERO -->
<section
	bind:clientWidth
	bind:clientHeight
	id="hero"
	class="relative mb-10 grid h-screen w-full grid-cols-2 items-center justify-center lg:mb-0"
>
	{#if clientWidth}
		<img
			class="absolute inset-0 h-full w-full object-cover"
			src={backgroundImageSrc}
			alt="homepage hero"
		/>
	{/if}

	<div class="absolute inset-0 h-full w-full bg-dark/10 sm:p-10 lg:p-20">
		<div class="h-full w-full object-cover sm:border sm:border-primary" />
	</div>

	<div class="relative z-0 h-full w-full sm:py-10 sm:pl-10 lg:py-20 lg:pl-20">
		<div
			class="flex h-full w-full flex-col items-center justify-center bg-black/70 p-5 sm:border sm:border-r-0 sm:border-primary sm:p-10"
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
			<span class="bg-primary p-3 text-dark sm:p-8 sm:font-bold"> WATCH NOW </span>
		</a>
	</div>
</section>

<!-- {#if film.showLaurels}
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
{/if} -->

<div class="relative lg:mt-10">
	<div class="absolute inset-0 h-full w-full overflow-hidden">
		<svelte:component this={SketchAsync} />
	</div>

	<div class="relative z-10 mx-auto max-w-3xl px-5 pb-10 pt-5 sm:px-10 lg:pt-10">
		{#if film.synopsis}
			<h2 class="mb-2 text-center font-display text-4xl font-normal">synopsis</h2>
			<PortableText blocks={film.synopsis} />
		{/if}

		{#if film.cast?.length}
			<h3 class="mb-8 pt-10 text-center font-display text-2xl sm:text-3xl">
				in order of appearance
			</h3>
			<ul class="mb-32">
				{#each film.cast as castMember}
					<li class="mb-8 flex flex-col text-center">
						<span class="text-center text-sm text-gray-300">{castMember.role}</span>

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
		{/if}

		{#if film.crew?.length}
			<h3 class="mb-2 text-center font-display text-2xl sm:text-3xl">crew</h3>
			<ul class="mb-32">
				{#each film.crew as crewMember}
					<li class="mb-4 grid grid-cols-2 items-center gap-x-5 text-left">
						<span class="text-right text-sm text-gray-300">{crewMember.role}</span>

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
		{/if}

		<div class="mb-32 border border-gray-300 bg-dark p-5 sm:p-10">
			{#if film.patrons?.length}
				<!-- <h3 class="text-center font-display text-3xl">patrons</h3> -->
				Our work is made possible via patrons. We have no backing from any media outlet, any organizations
				or any corporations. We don't do this for the money, and it takes money to get it done. Anything
				you can give to
				<a
					class="border-b-2 border-primary hover:border-transparent hover:text-primary"
					href="https://www.patreon.com/ActOut">support our work</a
				>
				is hugely appreciated and goes straight in to creating more content like this.
				<!-- <ul>
					{#each film.patrons as patron}
						<li class="text-center">{patron}</li>
					{/each}
				</ul> -->
			{/if}
		</div>

		{#if film.callouts?.length}
			<h3 class="text-center font-display text-2xl">special thanks</h3>
			<ul class="mb-24">
				{#each film.callouts as callout}
					<li class="mb-2 text-center last:mb-0">{callout}</li>
				{/each}
			</ul>
		{/if}

		<!-- <div class="relative z-0 mx-auto w-96 max-w-full py-10">
			<img
				src="https://cdn.sanity.io/images/ppo5s5uj/production/d80784503ede3aa2ec966b597dd272a5b619820b-709x1280.jpg"
				alt="to the trees poster"
				class="h-full w-full"
			/>
		</div> -->
	</div>
</div>

<footer
	class="relative z-0 grid h-full w-full place-content-center bg-primary p-2 text-center text-dark"
>
	©2023 to the trees
</footer>

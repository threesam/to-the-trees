<script lang="ts">
	// import Marquee from 'svelte-fast-marquee'
	import { onMount } from 'svelte'
	import PortableText from '$lib/components/PortableText.svelte'
	import SEO from 'svelte-seo'
	import { urlFor } from '$lib/utils/sanity'

	export let data: PageData
	const { film } = data.body

	let clientHeight: number | undefined
	let clientWidth: number | undefined

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
			<span class="bg-primary p-3 text-dark text-center sm:p-8 sm:font-bold">
				{#if film.gumroadLink}
					WATCH NOW
				{:else}
					COMING SOON
				{/if}
			</span>
		</a>
	</div>
</section>

<!-- <Marquee speed={10}>
	<div class="flex gap-5 pt-32 px-5">
		<img
			alt="OFFICIAL SELECTION - New York Lift-Off Film Festival - 2020"
			class="award svelte-1ns24pq"
			loading="lazy"
			src="https://cdn.sanity.io/images/8baclurv/production/5a9893fb63ce6b5481f78e350e6323450a75a889-1735x1152.png?w=160"
		/>
	</div>
</Marquee> -->

<div class="relative lg:mt-10">
	{#if SketchAsync}
		<div class="absolute inset-0 h-full w-full overflow-hidden">
			<svelte:component this={SketchAsync} />
		</div>
	{/if}

	<div class="relative z-10 mx-auto max-w-3xl px-5 pb-10 pt-5 sm:px-10 lg:pt-10">
		{#if film.synopsis}
			<h2 class="mb-2 text-center font-display text-4xl font-normal">synopsis</h2>
			<PortableText blocks={film.synopsis} />
		{/if}

		{#if film.press.length}
			<section class="-mx-[calc(100vw-100%)/2] mb-32 pb-5 px-5">
				<ul
					class={`w-full gap-5 ${
						film.press.length === 4
							? 'grid grid-cols-4 items-center'
							: 'snap-x snap-mandatory flex overflow-x-scroll'
					}`}
				>
					{#each film.press as press}
						<li
							class="snap-start text-xl col-span-full lg:col-span-1 mb-5 lg:mb-0 text-dark items-center flex gap-3 flex-col grow shrink-0 max-w-md"
						>
							<blockquote class="bg-primary p-5">"{press.description}"</blockquote>
							{#if press.url}
								<a
									class="text-right text-sm w-full block text-gray-300 border-b-2 border-primary transition-all duration-100 hover:border-transparent hover:pb-1 hover:text-primary"
									href={press.url}
								>
									— {press.title}
								</a>
							{/if}
							<span class="text-right text-sm w-full block text-gray-300">— {press.title}</span>
						</li>
					{/each}
				</ul>
			</section>
		{/if}

		<div class="w-full flex justify-center items-center flex-col mb-32 aspect-video">
			<iframe
				src="https://player.vimeo.com/video/852357990?h=256ab7e92e"
				width="1024"
				height="576"
				class="aspect-video lg:border lg:border-primary max-w-full lg:max-w-none h-full lg:h-auto"
				frameborder="0"
				title="To The Trees Trailer 1"
				allow="autoplay; fullscreen; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>

		{#if film.cast?.length}
			<h3 class="mb-8 text-center font-display text-2xl sm:text-3xl">in order of appearance</h3>
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

		<div class="mb-32 border border-gray-600 bg-dark p-5 sm:p-10">
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
			<ul class="mb-32">
				{#each film.callouts as callout}
					<li class="mb-2 text-center last:mb-0">{callout}</li>
				{/each}
			</ul>
		{/if}

		<div class="relative z-0 -m-5 mx-auto h-max w-full pb-24">
			<img
				src={urlFor(
					'https://cdn.sanity.io/images/ppo5s5uj/production/b105aa4858cf1e871270126c0ad801a75615e20e-2048x2731.jpg'
				)
					.width(768)
					.auto('format')
					.url()}
				alt="to the trees poster"
				class="h-full w-full"
			/>
		</div>
	</div>
</div>

<footer
	class="relative z-0 grid h-full w-full place-content-center bg-primary p-2 text-center text-dark"
>
	©2023 to the trees
</footer>

<style>
	.award {
		filter: invert();
		height: 100px;
	}
</style>

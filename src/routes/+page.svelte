<script lang="ts">
	import PortableText from '$lib/components/PortableText.svelte'
	import SEO from 'svelte-seo'
	import Sketch from '$lib/components/Sketch.svelte'
	import SocialLinks from '$lib/components/SocialLinks.svelte'
	import SubscribeForm from '$lib/components/SubscribeForm.svelte'
	import { urlFor } from '$lib/utils/sanity'
	import type { PageData } from './$types'

	export let data: PageData

	// filter out circular reference to this page
	const links = data.settings.founders[0].links.filter(
		({ href }: { href: string }) => !new URL(href).hostname.startsWith(data.settings.hostname)
	)
</script>

<SEO
	title="Laila Wolf"
	description={data.settings.description ?? 'The skinny on Laila Wolf'}
	openGraph={{
		title: 'Laila Wolf',
		description: data.settings.description ?? 'The skinny on Laila Wolf',
		type: 'website',
		images: [{ url: data.settings.image.asset.url }]
	}}
/>

<!-- HERO -->
<section id="hero" class="relative flex h-screen w-full items-center justify-center">
	<img
		class="absolute inset-0 h-full w-full object-cover"
		src={urlFor(data.settings.image.asset.url).auto('format').url()}
		alt="homepage hero"
	/>
	<div class=" absolute inset-0 bg-gradient-fade opacity-60" />
	<a class="z-0 w-full" href="#subscribe">
		<h1
			class="flex w-full justify-center gap-10 font-display font-bold transition-all duration-500
			lg:grid lg:grid-cols-2 lg:text-8xl lg:hover:gap-5"
		>
			<span class="text-light lg:text-right">Laila</span>
			<span class="text-light lg:text-left">Wolf</span>
		</h1>
	</a>
</section>

<!-- ABOUT SITE -->
<div class="bg-light bg-gradient-3 py-10 lg:py-20">
	<PortableText blocks={data.settings.body} />
</div>

<!-- ABOUT AUTHOR - HEADER -->
<section class="grid w-full grid-cols-2">
	<img
		class="lg:bprder h-full w-full border-2 border-dark"
		src={urlFor(data.settings.founders[0].image.asset.url).size(900, 900).auto('format').url()}
		alt={data.settings.founders[0].image}
	/>
	<div class="relative grid place-content-center">
		<h2
			class="z-10 grid place-content-center border-2 border-light bg-dark p-5 text-4xl lg:p-10
			lg:text-7xl"
		>
			About
		</h2>
		<div class="absolute inset-0 rotate-180 overflow-hidden">
			<Sketch />
		</div>
	</div>
</section>

<!-- ABOUT AUTHOR - TEXT -->
<div class="bg-light bg-gradient-3 py-10 lg:py-5">
	<PortableText blocks={data.settings.founders[0].bio} />
</div>

<!-- SUBSCRIBE + LINKS -->
<footer>
	<section class="max-w-screen relative flex w-full flex-col-reverse lg:grid lg:grid-cols-2">
		<div id="subscribe" class="relative grid aspect-square place-content-center">
			<Sketch />
			<div class="z-0">
				<SubscribeForm />
			</div>
		</div>
		<div class="grid aspect-square place-content-center bg-light">
			<SocialLinks {links} size={60} color="#000" />
		</div>
	</section>
	<p class="w-full border-t-2 border-light bg-black/70 p-5 text-center text-light">
		© laila wolf 2013-{new Date().getFullYear()}
	</p>
</footer>

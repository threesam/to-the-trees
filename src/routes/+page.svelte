<script lang="ts">
	import PortableText from '$lib/components/PortableText.svelte';
	import SEO from 'svelte-seo'
	import Sketch from '$lib/components/Sketch.svelte';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import SubscribeForm from '$lib/components/SubscribeForm.svelte';
	import { urlFor } from '$lib/utils/sanity';
	import type { PageData } from './$types';

	export let data: PageData;

	// filter out circular reference to this page
	const links = data.settings.founders[0].links.filter(
		({ href }: { href: string }) => !new URL(href).hostname.startsWith(data.settings.hostname)
	);
</script>

<SEO
	title="Laila Wolf"
	description={data.settings.description ?? "The skinny on Laila Wolf"}
	openGraph={{
		title:"Laila Wolf",
		description:data.settings.description ?? "The skinny on Laila Wolf",
		type: 'website',
		images: [{url: data.settings.image.asset.url}]
	}}
/>

<!-- HERO -->
<section id="hero" class="relative w-full flex items-center justify-center h-screen">
	<img
		class="w-full h-full object-cover absolute inset-0"
		src={urlFor(data.settings.image.asset.url).auto('format').url()}
		alt="homepage hero" />
	<div class=" absolute inset-0 bg-gradient-fade opacity-60" />
	<a class="z-0 w-full" href="#subscribe">
		<h1
			class="w-full flex font-display font-bold justify-center lg:grid lg:grid-cols-2 gap-10
			lg:text-8xl lg:hover:gap-5 transition-all duration-500">
			<span class="text-light lg:text-right">Laila</span>
			<span class="text-light lg:text-left">Wolf</span>
		</h1>
	</a>
</section>

<!-- ABOUT SITE -->
<div class="bg-gradient-3 bg-light py-10 lg:py-20">
	<PortableText blocks={data.settings.body} />
</div>

<!-- ABOUT AUTHOR - HEADER -->
<section class="grid grid-cols-2 w-full">
	<img
		class="w-full h-full border-2 border-dark lg:bprder"
		src={urlFor(data.settings.founders[0].image.asset.url).size(900, 900).auto('format').url()}
		alt={data.settings.founders[0].image} />
	<div class="relative grid place-content-center">
		<h2
			class="z-10 grid place-content-center text-4xl lg:text-7xl p-5 lg:p-10 bg-dark border-2
			border-light">
			About
		</h2>
		<div class="absolute inset-0 overflow-hidden rotate-180">
			<Sketch />
		</div>
	</div>

</section>

<!-- ABOUT AUTHOR - TEXT -->
<div class="bg-gradient-3 bg-light py-10 lg:py-5">
	<PortableText blocks={data.settings.founders[0].bio} />
</div>

<!-- SUBSCRIBE + LINKS -->
<footer>
	<section class="flex flex-col-reverse lg:grid lg:grid-cols-2 w-full max-w-screen relative">
		<div id="subscribe" class="aspect-square grid place-content-center relative">
			<Sketch />
			<div class="z-0">
				<SubscribeForm />
			</div>
		</div>
		<div class="aspect-square grid place-content-center bg-light">
			<SocialLinks {links} size={60} color="#000" />
		</div>
	</section>
	<p class="w-full text-center bg-black/70 p-5 text-light border-t-2 border-light">
		© laila wolf 2013-{new Date().getFullYear()}
	</p>
</footer>

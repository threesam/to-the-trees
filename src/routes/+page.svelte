<script>
	import PortableText from '$lib/components/PortableText.svelte';
	import { urlFor } from '$lib/utils/sanity';

	export let data;
	const links = data.settings.founders[0].links.filter(
		({ href }) => !new URL(href).hostname.startsWith(data.settings.hostname)
	);

	import { onMount } from 'svelte';
	import SubscribeForm from '$lib/components/SubscribeForm.svelte';
	import SocialLinks from '$lib/components/SocialLinks.svelte';

	let show = false;

	onMount(() => (show = true));
</script>

<!-- HERO -->
<section id="hero" class="relative w-full flex items-center justify-center h-screen">
	<img
		class="w-full h-full object-cover absolute inset-0"
		src={urlFor(data.settings.image.asset.url).auto('format').url()}
		alt="homepage hero" />
	<div class=" absolute inset-0 bg-gradient-fade opacity-60" />
	<a class="z-0 w-full" href="#subscribe">
		<h1
			class="w-full flex font-display justify-center lg:grid lg:grid-cols-2 gap-10 lg:text-8xl
			lg:hover:gap-5 transition-all duration-500">
			<span class="text-light lg:text-right">Laila</span>
			<span class="text-light lg:text-left">Wolf</span>
		</h1>
	</a>
</section>

<!-- SUBSCRIBE + LINKS -->
<section class="flex flex-col lg:grid lg:grid-cols-2 w-full max-w-screen">
	<div id="subscribe" class="lg:aspect-square grid place-content-center bg-dark p-5">
		<SubscribeForm />
	</div>
	<div class="lg:aspect-square grid place-content-center p-5 bg-light">
		<SocialLinks {links} size={60} color="#000" />
	</div>
</section>

<!-- ABOUT SITE -->
<div class="bg-gradient-3 bg-light lg:py-24">
	<PortableText blocks={data.settings.body} />
</div>

<!-- ABOUT AUTHOR - HEADER -->
<section class="grid grid-cols-2 w-full">
	<img
		class="w-full h-full"
		src={urlFor(data.settings.founders[0].image.asset.url).size(900, 900).auto('format').url()}
		alt={data.settings.founders[0].image} />
	<h1 class="grid place-content-center text-4xl lg:text-7xl">About</h1>

</section>

<!-- ABOUT AUTHOR - TEXT -->
<div class="bg-gradient-3 bg-light">
	<PortableText blocks={data.settings.founders[0].bio} />
</div>

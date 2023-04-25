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
	<h1 class="z-0 w-full flex justify-center lg:grid lg:grid-cols-2 gap-10 lg:text-6xl">
		<span class="text-light lg:text-right">Laila</span>
		<span class="text-light lg:text-left">Wolf</span>
	</h1>
</section>

<!-- SUBSCRIBE + LINKS -->
<section class="flex flex-col-reverse lg:grid lg:grid-cols-2">
	<div class="aspect-square grid place-content-center bg-white p-5">
		<SubscribeForm />
	</div>
	<div class="aspect-square grid place-content-center p-5">
		<SocialLinks {links} size={60} color="#fff" />
	</div>
</section>

<!-- ABOUT SITE -->
<div class="bg-gradient-3 bg-light lg:py-24">
	<PortableText blocks={data.settings.body} />
</div>

<!-- ABOUT AUTHOR - HEADER -->
<section class="grid grid-cols-2">
	<h1 class="grid place-content-center text-2xl lg:text-5xl">About</h1>
	<img
		src={urlFor(data.settings.founders[0].image.asset.url).size(800, 800).auto('format').url()}
		alt={data.settings.founders[0].image} />
</section>

<!-- ABOUT AUTHOR - TEXT -->
<div class="bg-gradient-3 bg-light">
	<PortableText blocks={data.settings.founders[0].bio} />
</div>

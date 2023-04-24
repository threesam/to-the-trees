<script>
	import PortableText from '$lib/components/PortableText.svelte';

	export let data;
	console.log('🚀 ~ file: +page.svelte:5 ~ data:', data);

	import { onMount } from 'svelte';
	import SubscribeForm from '$lib/components/SubscribeForm.svelte';
	import SocialLinks from '$lib/components/SocialLinks.svelte';

	let show = false;

	onMount(() => (show = true));
</script>

<section id="hero" class="relative w-full flex items-center justify-center h-screen">
	<img
		class="w-full h-full object-cover absolute inset-0"
		src={data.settings.image.asset.url}
		alt="homepage hero" />
	<div class=" absolute inset-0 bg-gradient-fade" />
	<h1 class="z-0 w-full flex justify-center lg:grid lg:grid-cols-2 gap-10 lg:text-6xl">
		<span class="text-light lg:text-right">Laila</span>
		<span class="text-light lg:text-left">Wolf</span>
	</h1>
</section>

<section class="flex flex-col-reverse lg:grid lg:grid-cols-2">
	<div class="aspect-square grid place-content-center bg-white p-5">
		<SubscribeForm />
	</div>
	<div class="aspect-square grid place-content-center p-5">
		<SocialLinks links={data.settings.founders[0].links} size={60} color="#fff" />
	</div>
</section>

<section class="grid grid-cols-2">
	<h1 class="grid place-content-center text-2xl lg:text-5xl">About</h1>
	<img src={data.settings.founders[0].image.asset.url} alt={data.settings.founders[0].image} />
</section>

<div class="bg-gradient-3 bg-light">
	<PortableText blocks={data.settings.body} />
</div>

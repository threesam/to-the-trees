<script>
	import PortableText from '$lib/components/PortableText.svelte';

	export let data;

	import { onMount } from 'svelte';
	import SubscribeForm from '$lib/components/SubscribeForm.svelte';
	import SocialLinks from '$lib/components/SocialLinks.svelte';

	let show = false;

	onMount(() => (show = true));
</script>

<section id="hero" class="relative bg-gradient-3 w-full flex items-center justify-center h-screen">
	<h1 class="w-full flex justify-center lg:grid lg:grid-cols-2 gap-10 lg:text-6xl">
		<span class="text-black lg:text-right">Laila</span>
		<span class="text-black lg:text-left">Wolf</span>
	</h1>
</section>

<section class="flex flex-col lg:grid lg:grid-cols-2">
	<div class="aspect-square grid place-content-center bg-white p-5">
		<SubscribeForm />
	</div>
	<div class="aspect-square grid place-content-center p-5">
		<SocialLinks links={data.settings.links} size={60} color="#fff" />
	</div>
</section>

<section class="grid grid-cols-2">
	<h1 class="grid place-content-center text-2xl lg:text-5xl">About</h1>
	<img src={data.settings.image.asset.url} alt={data.settings.image} />
</section>

<div class="bg-gradient-3">
	<PortableText blocks={data.settings.body} />
</div>
